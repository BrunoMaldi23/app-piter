import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import type { Producto } from '../data/productos';
import { formatoPrecio } from '../utils/formato';
import { useCarrito } from '../context/CarritoContext';
import { useFavoritos } from '../context/FavoritosContext';
import ProductImage from './ProductImage';

export default function ProductCard({ producto }: { producto: Producto }) {
  const { agregar } = useCarrito();
  const { esFavorito, alternar } = useFavoritos();

  const favorito = esFavorito(producto.id);
  const sinStock = producto.stock <= 0;

  return (
    <TouchableOpacity
      className="mb-3 flex-1 overflow-hidden rounded-2xl border border-neutral-200 bg-white"
      activeOpacity={0.75}
      onPress={() => router.push(`/producto/${producto.id}`)}
    >
      <View className="relative h-40 w-full bg-neutral-100">
        <ProductImage
          uri={producto.imagen}
          emoji={producto.emoji}
          className="h-full w-full"
          fallbackClassName="text-5xl"
          label={producto.nombre}
        />
        <TouchableOpacity
          className="absolute right-2.5 top-2.5 h-9 w-9 items-center justify-center rounded-full bg-white/90"
          activeOpacity={0.7}
          onPress={() => alternar(producto)}
          accessibilityLabel={
            favorito
              ? `Quitar ${producto.nombre} de favoritos`
              : `Agregar ${producto.nombre} a favoritos`
          }
        >
          <Ionicons
            name={favorito ? 'heart' : 'heart-outline'}
            size={18}
            color={favorito ? '#e11d48' : '#525252'}
          />
        </TouchableOpacity>
        {sinStock && (
          <View className="absolute left-2.5 top-2.5 rounded-full bg-neutral-900/80 px-2.5 py-1">
            <Text className="text-[10px] font-semibold uppercase tracking-wide text-white">
              Agotado
            </Text>
          </View>
        )}
      </View>

      <View className="p-3">
        <Text
          className="text-[14px] font-semibold leading-snug text-neutral-900"
          numberOfLines={1}
        >
          {producto.nombre}
        </Text>
        <Text className="mt-1 text-[15px] font-bold text-neutral-900">
          {formatoPrecio(producto.precio)}
        </Text>

        <TouchableOpacity
          className={`mt-2.5 h-9 flex-row items-center justify-center gap-1.5 rounded-xl ${
            sinStock ? 'bg-neutral-200' : 'bg-neutral-900'
          }`}
          activeOpacity={0.8}
          disabled={sinStock}
          onPress={() => agregar(producto)}
          style={{ gap: 6 }}
          accessibilityLabel={`Agregar ${producto.nombre} al carrito`}
        >
          <Ionicons name="cart-outline" size={16} color={sinStock ? '#a3a3a3' : '#fff'} />
          <Text
            className={`text-[13px] font-semibold ${
              sinStock ? 'text-neutral-400' : 'text-white'
            }`}
          >
            Agregar
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}