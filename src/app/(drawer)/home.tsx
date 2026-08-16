import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { useProductos } from '../../context/ProductosContext';
import { useSesion } from '../../context/SesionContext';
import ProductCard from '../../components/ProductCard';
import ProductImage from '../../components/ProductImage';
import FloatingCarrito from '../../components/FloatingCarrito';
import Paginador from '../../components/Paginador';

const DESTACADOS_COUNT = 8;
const POR_PAGINA = 8;

export default function Home() {
  const { productos, secciones, productosDeSeccion } = useProductos();
  const { rol } = useSesion();
  const esAdmin = rol === 'admin';
  const [busqueda, setBusqueda] = useState('');

  const seccionesConCount = useMemo(
    () =>
      [...secciones]
        .sort((a, b) => a.nombre.localeCompare(b.nombre))
        .map((seccion) => ({
          seccion,
          count: productosDeSeccion(seccion.id).length,
        })),
    [secciones, productosDeSeccion]
  );

  const filtrados = useMemo(() => {
    const normalizada = busqueda.trim().toLowerCase();
    if (!normalizada) {
      return productos.slice(0, DESTACADOS_COUNT);
    }
    return productos.filter((p) =>
      p.nombre.toLowerCase().includes(normalizada)
    );
  }, [busqueda, productos]);

  const buscando = busqueda.trim().length > 0;

  const totalPaginas = buscando
    ? Math.ceil(filtrados.length / POR_PAGINA)
    : Math.ceil(Math.min(filtrados.length, DESTACADOS_COUNT) / POR_PAGINA);

  const [pagina, setPagina] = useState(1);
  const paginaSegura = Math.min(pagina, Math.max(totalPaginas, 1));

  const visibles = useMemo(() => {
    const inicio = (paginaSegura - 1) * POR_PAGINA;
    return filtrados.slice(inicio, inicio + POR_PAGINA);
  }, [filtrados, paginaSegura]);

  const cambiarBusqueda = (texto: string) => {
    setBusqueda(texto);
    setPagina(1);
  };

  return (
    <View className="flex-1 bg-neutral-50">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
      <View className="p-5">
        <View className="mt-1 mb-4 flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-2xl font-bold tracking-tight text-neutral-900">
              Hola, {esAdmin ? 'Administrador' : 'usuario'} 👋
            </Text>
            <Text className="mt-0.5 text-[15px] text-neutral-500">
              ¿Qué buscamos hoy?
            </Text>
          </View>
        </View>

        <View className="mb-5 flex-row items-center rounded-2xl border border-neutral-200 bg-white px-4">
          <Ionicons name="search" size={19} color="#a3a3a3" style={{ marginRight: 8 }} />
          <TextInput
            className="h-12 flex-1 text-[15px] text-neutral-900"
            placeholder="Busca productos, categorías..."
            placeholderTextColor="#a3a3a3"
            value={busqueda}
            onChangeText={cambiarBusqueda}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
          />
          {buscando && (
            <TouchableOpacity
              onPress={() => setBusqueda('')}
              accessibilityLabel="Limpiar búsqueda"
            >
              <Ionicons name="close-circle" size={18} color="#a3a3a3" />
            </TouchableOpacity>
          )}
        </View>

        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-lg font-bold tracking-tight text-neutral-900">
            Categorías
          </Text>
          <Text className="text-xs font-medium text-neutral-400">
            {secciones.length} disponibles
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 4, paddingRight: 4 }}
          className="mb-6"
        >
          {seccionesConCount.map(({ seccion, count }) => (
            <TouchableOpacity
              key={seccion.id}
              className="mr-2.5 w-[150px] overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              activeOpacity={0.75}
              onPress={() => router.push(`/seccion/${seccion.id}`)}
            >
              <View className="h-[86px] w-full bg-neutral-100">
                <ProductImage
                  uri={seccion.imagen}
                  emoji={seccion.emoji}
                  className="h-full w-full"
                  fallbackClassName="text-4xl"
                  label={seccion.nombre}
                />
              </View>
              <View className="p-3">
                <Text
                  className="text-[13px] font-semibold text-neutral-900"
                  numberOfLines={1}
                >
                  {seccion.nombre}
                </Text>
                <Text className="mt-0.5 text-[11px] text-neutral-400">
                  {count} {count === 1 ? 'producto' : 'productos'}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className="p-5 pt-0">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-lg font-bold tracking-tight text-neutral-900">
            {buscando
              ? `Resultados (${filtrados.length})`
              : 'Destacados'}
          </Text>
          {!buscando && productos.length > DESTACADOS_COUNT && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push('/(drawer)/productos')}
            >
              <Text className="text-[13px] font-semibold text-neutral-900 underline">
                Ver todos
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {visibles.length > 0 ? (
          <>
            <View className="flex-row flex-wrap justify-between">
              {visibles.map((producto) => (
                <View key={producto.id} className="w-[48.5%]">
                  <ProductCard producto={producto} />
                </View>
              ))}
            </View>
            {totalPaginas > 1 && (
              <Paginador
                pagina={paginaSegura}
                totalPaginas={totalPaginas}
                onChange={setPagina}
              />
            )}
          </>
        ) : (
          <View className="items-center py-16">
            <Text className="mb-3 text-4xl">🔍</Text>
            <Text className="text-base font-semibold text-neutral-900">
              Sin resultados
            </Text>
            <Text className="mt-1 text-sm text-neutral-500">
              No encontramos "{busqueda}". Prueba con otra palabra.
            </Text>
          </View>
        )}
      </View>

      {!buscando && (
        <View className="px-5">
          <Text className="mt-6 text-center text-xs text-neutral-400">
            {productos.length} productos disponibles · Envío a todo Chile
          </Text>
        </View>
      )}
      </ScrollView>

      <FloatingCarrito />
    </View>
  );
}