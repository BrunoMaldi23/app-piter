import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import type { Producto, Seccion } from '../../data/productos';
import { INFO_CATEGORIAS } from '../../data/productos';
import { useProductos } from '../../context/ProductosContext';
import { useSesion } from '../../context/SesionContext';
import type { DatosProducto, DatosSeccion } from '../../services/tipos';
import { formatoPrecio } from '../../utils/formato';
import ProductoForm from '../../components/ProductoForm';
import SeccionForm from '../../components/SeccionForm';
import ProductImage from '../../components/ProductImage';

type Pestana = 'productos' | 'secciones';

interface Stat {
  label: string;
  valor: string;
  emoji: string;
}

interface TarjetaGestionProps {
  emoji: string;
  titulo: string;
  subtitulo: string;
  onPress: () => void;
  onAgregar: () => void;
  etiquetaAgregar: string;
}

function TarjetaGestion({
  emoji,
  titulo,
  subtitulo,
  onPress,
  onAgregar,
  etiquetaAgregar,
}: TarjetaGestionProps) {
  return (
    <View className="mb-3 w-[48.5%] overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <TouchableOpacity
        className="p-4"
        activeOpacity={0.75}
        onPress={onPress}
      >
        <View className="mb-3 h-11 w-11 items-center justify-center rounded-xl bg-neutral-100">
          <Text className="text-2xl">{emoji}</Text>
        </View>
        <Text className="text-[16px] font-bold text-neutral-900">
          {titulo}
        </Text>
        <Text className="mt-0.5 text-xs leading-4 text-neutral-400">
          {subtitulo}
        </Text>
      </TouchableOpacity>
      <View className="border-t border-neutral-100 p-2">
        <TouchableOpacity
          className="h-9 flex-row items-center justify-center gap-1.5 rounded-lg bg-neutral-900"
          style={{ gap: 6 }}
          activeOpacity={0.8}
          onPress={onAgregar}
          accessibilityLabel={`Agregar ${titulo.toLowerCase()}`}
        >
          <Ionicons name="add" size={16} color="#fff" />
          <Text className="text-[13px] font-semibold text-white">
            {etiquetaAgregar}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TarjetaStat({ emoji, label, valor }: Stat) {
  return (
    <View className="mb-3 w-[48.5%] rounded-2xl border border-neutral-200 bg-white p-3.5">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg">{emoji}</Text>
      </View>
      <Text className="mt-2 text-xl font-bold tracking-tight text-neutral-900">
        {valor}
      </Text>
      <Text className="mt-0.5 text-xs text-neutral-400">{label}</Text>
    </View>
  );
}

export default function Admin() {
  const { rol } = useSesion();
  const esAdmin = rol === 'admin';

  useEffect(() => {
    if (!esAdmin) {
      router.replace('/(drawer)/home');
    }
  }, [esAdmin]);

  const {
    productos,
    secciones,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
    agregarSeccion,
    actualizarSeccion,
    eliminarSeccion,
    buscarSeccion,
    productosDeSeccion,
  } = useProductos();
  const [pestana, setPestana] = useState<Pestana>('productos');
  const [modalProducto, setModalProducto] = useState(false);
  const [editandoProducto, setEditandoProducto] = useState<
    Producto | undefined
  >();
  const [modalSeccion, setModalSeccion] = useState(false);
  const [editandoSeccion, setEditandoSeccion] = useState<
    Seccion | undefined
  >();

  const stockTotal = productos.reduce((acc, p) => acc + p.stock, 0);
  const valorInventario = productos.reduce(
    (acc, p) => acc + p.precio * p.stock,
    0
  );

  const stats: Stat[] = [
    { label: 'Productos', valor: String(productos.length), emoji: '📦' },
    { label: 'Categorías', valor: String(secciones.length), emoji: '🗂️' },
    { label: 'Unidades en stock', valor: String(stockTotal), emoji: '📊' },
    { label: 'Valor del inventario', valor: formatoPrecio(valorInventario), emoji: '💰' },
  ];

  const abrirAgregarProducto = () => {
    setEditandoProducto(undefined);
    setModalProducto(true);
  };

  const abrirEditarProducto = (producto: Producto) => {
    setEditandoProducto(producto);
    setModalProducto(true);
  };

  const guardarProducto = (datos: DatosProducto) => {
    if (editandoProducto) {
      actualizarProducto(editandoProducto.id, datos);
    } else {
      agregarProducto(datos);
    }
    setModalProducto(false);
  };

  const confirmarEliminarProducto = (producto: Producto) => {
    Alert.alert(
      'Eliminar producto',
      `¿Seguro que quieres eliminar "${producto.nombre}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => eliminarProducto(producto.id),
        },
      ]
    );
  };

  const abrirAgregarSeccion = () => {
    setEditandoSeccion(undefined);
    setModalSeccion(true);
  };

  const abrirEditarSeccion = (seccion: Seccion) => {
    setEditandoSeccion(seccion);
    setModalSeccion(true);
  };

  const guardarSeccion = (datos: DatosSeccion) => {
    if (editandoSeccion) {
      actualizarSeccion(editandoSeccion.id, datos);
    } else {
      agregarSeccion(datos);
    }
    setModalSeccion(false);
  };

  const confirmarEliminarSeccion = (seccion: Seccion) => {
    const cantidad = productosDeSeccion(seccion.id).length;
    if (cantidad > 0) {
      Alert.alert(
        'No se puede eliminar',
        `La sección "${seccion.nombre}" tiene ${cantidad} ${
          cantidad === 1 ? 'producto' : 'productos'
        }. Elimina o mueve esos productos primero.`
      );
      return;
    }

    Alert.alert(
      'Eliminar sección',
      `¿Seguro que quieres eliminar la sección "${seccion.nombre}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => eliminarSeccion(seccion.id),
        },
      ]
    );
  };

  return (
    <View className="flex-1 bg-neutral-50 p-5">
      <Text className="text-2xl font-bold tracking-tight text-neutral-900">
        Panel de control
      </Text>
      <Text className="mt-1 mb-4 text-sm text-neutral-500">
        Gestiona tu tienda desde aquí
      </Text>

      <View className="mb-5 flex-row flex-wrap justify-between">
        {stats.map((stat) => (
          <TarjetaStat key={stat.label} {...stat} />
        ))}
      </View>

      <Text className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        Gestión
      </Text>
      <View className="mb-5 flex-row flex-wrap justify-between">
        <TarjetaGestion
          emoji="📦"
          titulo="Productos"
          subtitulo={`${productos.length} productos en el catálogo`}
          etiquetaAgregar="Agregar producto"
          onPress={() => setPestana('productos')}
          onAgregar={abrirAgregarProducto}
        />
        <TarjetaGestion
          emoji="🗂️"
          titulo="Categorías"
          subtitulo={`${secciones.length} secciones para clasificar`}
          etiquetaAgregar="Agregar categoría"
          onPress={() => setPestana('secciones')}
          onAgregar={abrirAgregarSeccion}
        />
      </View>

      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-lg font-bold tracking-tight text-neutral-900">
          {pestana === 'productos' ? 'Productos' : 'Categorías'}
        </Text>
        <TouchableOpacity
          onPress={() => setPestana(pestana === 'productos' ? 'secciones' : 'productos')}
          activeOpacity={0.7}
        >
          <Text className="text-[13px] font-semibold text-neutral-900 underline">
            Ver {pestana === 'productos' ? 'categorías' : 'productos'}
          </Text>
        </TouchableOpacity>
      </View>

      {pestana === 'productos' ? (
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const seccion = buscarSeccion(item.seccionId);
            return (
              <View className="mb-3 flex-row items-center rounded-2xl border border-neutral-200 bg-white p-3.5">
                <View className="mr-3.5 h-14 w-14 overflow-hidden rounded-xl bg-neutral-100">
                  <ProductImage
                    uri={item.imagen}
                    emoji={item.emoji}
                    className="h-full w-full"
                    fallbackClassName="text-3xl"
                    label={item.nombre}
                  />
                </View>

                <View className="flex-1">
                  <Text
                    className="text-[15px] font-semibold text-neutral-900"
                    numberOfLines={1}
                  >
                    {item.nombre}
                  </Text>
                  <Text className="mt-0.5 text-xs text-neutral-400">
                    {seccion
                      ? `${INFO_CATEGORIAS[seccion.categoria].nombre} · ${seccion.nombre} · `
                      : 'Sección eliminada · '}
                    {formatoPrecio(item.precio)} · stock {item.stock}
                  </Text>
                </View>

                <View className="ml-3 flex-row items-center gap-4">
                  <TouchableOpacity
                    onPress={() => abrirEditarProducto(item)}
                    activeOpacity={0.7}
                    accessibilityLabel={`Editar ${item.nombre}`}
                  >
                    <Ionicons
                      name="create-outline"
                      size={20}
                      color="#404040"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => confirmarEliminarProducto(item)}
                    activeOpacity={0.7}
                    accessibilityLabel={`Eliminar ${item.nombre}`}
                  >
                    <Ionicons
                      name="trash-outline"
                      size={20}
                      color="#c0392b"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={
            <View className="items-center py-16">
              <Text className="mb-3 text-4xl">📦</Text>
              <Text className="text-base font-semibold text-neutral-900">
                Sin productos
              </Text>
              <Text className="mt-1 text-sm text-neutral-500">
                Usa "Agregar producto" para crear el primero.
              </Text>
            </View>
          }
        />
      ) : (
        <FlatList
          data={secciones}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="mb-3 flex-row items-center rounded-2xl border border-neutral-200 bg-white p-3.5">
              <View className="mr-3.5 h-14 w-14 overflow-hidden rounded-xl bg-neutral-100">
                <ProductImage
                  uri={item.imagen}
                  emoji={item.emoji}
                  className="h-full w-full"
                  fallbackClassName="text-3xl"
                  label={item.nombre}
                />
              </View>

              <View className="flex-1">
                <Text
                  className="text-[15px] font-semibold text-neutral-900"
                  numberOfLines={1}
                >
                  {item.nombre}
                </Text>
                <Text className="mt-0.5 text-xs text-neutral-400">
                  {INFO_CATEGORIAS[item.categoria].nombre} ·{' '}
                  {productosDeSeccion(item.id).length}{' '}
                  {productosDeSeccion(item.id).length === 1
                    ? 'producto'
                    : 'productos'}
                </Text>
              </View>

              <View className="ml-3 flex-row items-center gap-4">
                <TouchableOpacity
                  onPress={() => abrirEditarSeccion(item)}
                  activeOpacity={0.7}
                  accessibilityLabel={`Editar ${item.nombre}`}
                >
                  <Ionicons
                    name="create-outline"
                    size={20}
                    color="#404040"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => confirmarEliminarSeccion(item)}
                  activeOpacity={0.7}
                  accessibilityLabel={`Eliminar ${item.nombre}`}
                >
                  <Ionicons
                    name="trash-outline"
                    size={20}
                    color="#c0392b"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <View className="items-center py-16">
              <Text className="mb-3 text-4xl">🗂️</Text>
              <Text className="text-base font-semibold text-neutral-900">
                Sin categorías
              </Text>
              <Text className="mt-1 text-sm text-neutral-500">
                Usa "Agregar categoría" para crear la primera.
              </Text>
            </View>
          }
        />
      )}

      <Modal
        visible={modalProducto}
        animationType="slide"
        transparent
        onRequestClose={() => setModalProducto(false)}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View className="rounded-t-3xl bg-white p-5 pb-8">
            <ProductoForm
              inicial={editandoProducto}
              onGuardar={guardarProducto}
              onCancelar={() => setModalProducto(false)}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={modalSeccion}
        animationType="slide"
        transparent
        onRequestClose={() => setModalSeccion(false)}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View className="rounded-t-3xl bg-white p-5 pb-8">
            <SeccionForm
              inicial={editandoSeccion}
              onGuardar={guardarSeccion}
              onCancelar={() => setModalSeccion(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}