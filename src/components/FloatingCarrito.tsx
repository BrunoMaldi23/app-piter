import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { useCarrito } from '../context/CarritoContext';

export default function FloatingCarrito() {
  const { cantidadTotal } = useCarrito();

  return (
    <TouchableOpacity
      className="absolute bottom-8 right-5 z-50 h-14 w-14 items-center justify-center rounded-full bg-neutral-900 shadow-lg"
      activeOpacity={0.85}
      onPress={() => router.push('/(drawer)/carrito')}
      accessibilityLabel={`Ir al carrito, ${cantidadTotal} productos`}
    >
      <Ionicons name="cart-outline" size={23} color="#fff" />
      {cantidadTotal > 0 && (
        <View className="absolute -right-0.5 -top-0.5 h-6 min-w-6 items-center justify-center rounded-full border-2 border-neutral-50 bg-white px-1">
          <Text className="text-[12px] font-bold text-neutral-900">
            {cantidadTotal}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}