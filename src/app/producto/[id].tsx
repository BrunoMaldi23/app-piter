import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { formatoPrecio } from '../../utils/formato';
import { useProductos } from '../../context/ProductosContext';
import { useCarrito } from '../../context/CarritoContext';
import { useFavoritos } from '../../context/FavoritosContext';
import ProductImage from '../../components/ProductImage';

export default function DetalleProducto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { buscarProducto, buscarSeccion } = useProductos();
  const { agregar, cantidadTotal } = useCarrito();
  const { esFavorito, alternar } = useFavoritos();

  const producto = id ? buscarProducto(id) : undefined;

  if (!producto) {
    return (
      <View className="flex-1 items-center bg-neutral-50 pt-24">
        <Stack.Screen options={{ title: 'Producto' }} />
        <Text className="mb-2 text-4xl">😕</Text>
        <Text className="text-sm text-neutral-500">
          Producto no encontrado
        </Text>
      </View>
    );
  }

  const sinStock = producto.stock <= 0;
  const favorito = esFavorito(producto.id);
  const seccion = buscarSeccion(producto.seccionId);

  const agregarAlCarrito = () => {
    agregar(producto);
    Alert.alert(
      'Producto agregado',
      `${producto.nombre} se agregó a tu carrito.`,
      [
        { text: 'Seguir comprando', style: 'cancel' },
        {
          text: 'Ver carrito',
          onPress: () => router.push('/(drawer)/carrito'),
        },
      ]
    );
  };

  return (
    <ScrollView
      className="flex-1 bg-neutral-50"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Stack.Screen options={{ title: producto.nombre }} />

      <View className="h-72 w-full bg-neutral-100">
        <ProductImage
          uri={producto.imagen}
          emoji={producto.emoji}
          className="h-full w-full"
          fallbackClassName="text-8xl"
          label={producto.nombre}
        />
      </View>

      <View className="px-6 pt-5">
        <View className="mb-3 flex-row items-center">
          <View className="rounded-full bg-neutral-200/70 px-3 py-1">
            <Text className="text-xs font-medium text-neutral-600">
              {seccion ? `${seccion.emoji} ${seccion.nombre}` : 'General'}
            </Text>
          </View>
          <TouchableOpacity
            className="ml-auto flex-row items-center py-1 pl-3"
            activeOpacity={0.7}
            onPress={() => alternar(producto)}
          >
            <Ionicons
              name={favorito ? 'heart' : 'heart-outline'}
              size={20}
              color={favorito ? '#e11d48' : '#a3a3a3'}
              style={{ marginRight: 5 }}
            />
            <Text className="text-sm font-medium text-neutral-500">
              Favorito
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-2xl font-bold leading-tight tracking-tight text-neutral-900">
          {producto.nombre}
        </Text>

        <View className="mt-2 flex-row items-end justify-between">
          <Text className="text-3xl font-bold text-neutral-900">
            {formatoPrecio(producto.precio)}
          </Text>
          <Text
            className={
              sinStock
                ? 'text-[13px] font-semibold text-danger'
                : 'text-[13px] font-semibold text-success'
            }
          >
            {sinStock
              ? 'Agotado'
              : `En stock · ${producto.stock} disponibles`}
          </Text>
        </View>

        <View className="mt-6 mb-8 rounded-2xl border border-neutral-200 bg-white p-5">
          <Text className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Descripción
          </Text>
          <Text className="mt-2.5 text-[15px] leading-6 text-neutral-600">
            {producto.descripcion}
          </Text>
        </View>

        <TouchableOpacity
          className={
            sinStock
              ? 'h-13 flex-row items-center justify-center gap-2 rounded-2xl bg-neutral-300'
              : 'h-13 flex-row items-center justify-center gap-2 rounded-2xl bg-neutral-900'
          }
          style={{ gap: 8, minHeight: 52 }}
          activeOpacity={0.85}
          onPress={agregarAlCarrito}
          disabled={sinStock}
        >
          <Ionicons name="cart-outline" size={20} color={sinStock ? '#a3a3a3' : '#fff'} />
          <Text className="text-[15px] font-semibold text-white">
            {sinStock ? 'Agotado' : 'Agregar al carrito'}
          </Text>
        </TouchableOpacity>

        {cantidadTotal > 0 && (
          <TouchableOpacity
            className="mt-3 items-center py-2.5"
            activeOpacity={0.7}
            onPress={() => router.push('/(drawer)/carrito')}
          >
            <Text className="text-sm font-medium text-neutral-900 underline">
              Ver carrito ({cantidadTotal}{' '}
              {cantidadTotal === 1 ? 'producto' : 'productos'})
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}