import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { useCarrito } from '../../context/CarritoContext';
import { formatoPrecio } from '../../utils/formato';
import ProductImage from '../../components/ProductImage';

export default function Carrito() {
  const {
    items,
    total,
    cantidadTotal,
    incrementar,
    disminuir,
    eliminar,
  } = useCarrito();

  const pagar = () => {
    router.push('/pago');
  };

  if (items.length === 0) {
    return (
      <View className="flex-1 bg-neutral-50">
        <View className="mt-3 flex-row items-center gap-3 px-5">
          <TouchableOpacity
            className="h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white"
            activeOpacity={0.7}
            onPress={() => router.back()}
            accessibilityLabel="Volver atrás"
          >
            <Ionicons name="chevron-back" size={20} color="#171717" />
          </TouchableOpacity>
          <Text className="text-lg font-bold tracking-tight text-neutral-900">
            Carrito
          </Text>
        </View>
        <View className="flex-1 items-center justify-center p-8">
          <View className="mb-5 h-24 w-24 items-center justify-center rounded-3xl bg-neutral-100">
            <Ionicons name="cart-outline" size={44} color="#a3a3a3" />
          </View>
          <Text className="text-lg font-semibold text-neutral-900">
            Tu carrito está vacío
          </Text>
          <Text className="mt-1.5 text-center text-sm leading-6 text-neutral-500">
            Agrega productos desde las categorías para comenzar tu compra.
          </Text>
          <TouchableOpacity
            className="mt-6 h-12 items-center justify-center rounded-xl bg-neutral-900 px-6"
            activeOpacity={0.8}
            onPress={() => router.back()}
          >
            <Text className="text-[15px] font-semibold text-white">
              Volver
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-neutral-50">
      <View className="mt-3 flex-row items-center gap-3 px-5 pb-2">
        <TouchableOpacity
          className="h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white"
          activeOpacity={0.7}
          onPress={() => router.back()}
          accessibilityLabel="Volver atrás"
        >
          <Ionicons name="chevron-back" size={20} color="#171717" />
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-lg font-bold tracking-tight text-neutral-900">
            Carrito
          </Text>
          <Text className="text-xs text-neutral-400">
            Resumen de tu compra
          </Text>
        </View>
        <Text className="text-lg font-bold text-neutral-900">
          {formatoPrecio(total)}
        </Text>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.producto.id}
        contentContainerStyle={{ padding: 20, paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="mb-3 flex-row overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <View className="h-full w-20 bg-neutral-100">
              <ProductImage
                uri={item.producto.imagen}
                emoji={item.producto.emoji}
                className="h-full w-full"
                fallbackClassName="text-3xl"
                label={item.producto.nombre}
              />
            </View>

            <View className="flex-1 p-3.5">
              <View className="mb-2 flex-row items-start justify-between gap-3">
                <Text
                  className="flex-1 text-[15px] font-semibold leading-snug text-neutral-900"
                  numberOfLines={2}
                >
                  {item.producto.nombre}
                </Text>
                <TouchableOpacity
                  onPress={() => eliminar(item.producto.id)}
                  activeOpacity={0.6}
                  accessibilityLabel={`Eliminar ${item.producto.nombre}`}
                >
                  <Ionicons name="trash-outline" size={18} color="#c0392b" />
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center justify-between">
                <Text className="text-[15px] font-bold text-neutral-900">
                  {formatoPrecio(item.producto.precio * item.cantidad)}
                </Text>

                <View className="flex-row items-center gap-1.5">
                  <TouchableOpacity
                    onPress={() => disminuir(item.producto.id)}
                    activeOpacity={0.7}
                    className="h-8 w-8 items-center justify-center rounded-lg bg-neutral-100"
                    accessibilityLabel="Disminuir cantidad"
                  >
                    <Ionicons name="remove" size={18} color="#525252" />
                  </TouchableOpacity>

                  <Text className="w-7 text-center text-sm font-semibold text-neutral-900">
                    {item.cantidad}
                  </Text>

                  <TouchableOpacity
                    onPress={() => incrementar(item.producto.id)}
                    activeOpacity={0.7}
                    className="h-8 w-8 items-center justify-center rounded-lg bg-neutral-900"
                    accessibilityLabel="Aumentar cantidad"
                  >
                    <Ionicons name="add" size={18} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />

      <View className="rounded-t-3xl border-t border-neutral-200 bg-white px-5 pb-8 pt-4">
        <View className="mb-1 flex-row items-center justify-between">
          <Text className="text-sm text-neutral-500">Total</Text>
          <Text className="text-xl font-bold text-neutral-900">
            {formatoPrecio(total)}
          </Text>
        </View>
        <Text className="mb-4 text-xs text-neutral-400">
          {cantidadTotal} {cantidadTotal === 1 ? 'producto' : 'productos'} ·{' '}
          {items.length} {items.length === 1 ? 'tipo' : 'tipos'} · Envío gratis
          sobre $50.000
        </Text>

        <TouchableOpacity
          className="h-12 flex-row items-center justify-center gap-2 rounded-xl bg-neutral-900"
          style={{ gap: 8 }}
          activeOpacity={0.8}
          onPress={pagar}
        >
          <Ionicons name="checkmark-circle-outline" size={20} color="#fff" />
          <Text className="text-[15px] font-semibold text-white">
            Pagar compra
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}