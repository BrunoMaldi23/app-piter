import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { useProductos } from '../../context/ProductosContext';
import { useSesion } from '../../context/SesionContext';
import { useCarrito } from '../../context/CarritoContext';
import { formatoPrecio } from '../../utils/formato';
import ProductImage from '../../components/ProductImage';

const DESTACADOS_COUNT = 6;

export default function Home() {
  const { productos } = useProductos();
  const { rol, cerrarSesion } = useSesion();
  const { cantidadTotal } = useCarrito();

  const esAdmin = rol === 'admin';
  const destacados = productos.slice(0, DESTACADOS_COUNT);

  const categorias = [
    {
      nombre: 'Tecnología',
      emoji: '💻',
      color: '#6366f1',
      fondo: '#eef2ff',
      ruta: '/(drawer)/productos',
    },
    {
      nombre: 'Ropa',
      emoji: '👕',
      color: '#0d9488',
      fondo: '#f0fdfa',
      ruta: '/(drawer)/ropa',
    },
    {
      nombre: 'Favoritos',
      emoji: '🤍',
      color: '#e11d48',
      fondo: '#fff1f2',
      ruta: '/(drawer)/favoritos',
    },
    {
      nombre: 'Carrito',
      emoji: '🛒',
      color: '#f59e0b',
      fondo: '#fffbeb',
      ruta: '/(drawer)/carrito',
    },
    ...(esAdmin
      ? [
          {
            nombre: 'Administración',
            emoji: '⚙️',
            color: '#404040',
            fondo: '#f5f5f5',
            ruta: '/(drawer)/admin',
          },
        ]
      : []),
  ];

  return (
    <ScrollView
      className="flex-1 bg-neutral-50"
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="p-5">
        <View className="mt-2 mb-5 flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-2xl font-bold tracking-tight text-neutral-900">
              Hola, {esAdmin ? 'Administrador' : 'usuario'} 👋
            </Text>
            <Text className="mt-1 text-[15px] text-neutral-500">
              Bienvenido de vuelta a MiniStore.
            </Text>
          </View>
          <TouchableOpacity
            className="h-11 w-11 items-center justify-center rounded-full bg-white"
            activeOpacity={0.7}
            onPress={() => {
              cerrarSesion();
              router.replace('/');
            }}
            accessibilityLabel="Cerrar sesión"
          >
            <Ionicons name="log-out-outline" size={20} color="#525252" />
          </TouchableOpacity>
        </View>

        <View className="mb-7 overflow-hidden rounded-3xl bg-neutral-900">
          <View className="flex-row items-center justify-between p-5">
            <View className="flex-1 pr-4">
              <View className="mb-2 self-start rounded-full bg-white/10 px-2.5 py-1">
                <Text className="text-[11px] font-semibold uppercase tracking-widest text-white/80">
                  Nuevo catálogo 2026
                </Text>
              </View>
              <Text className="text-xl font-bold leading-tight tracking-tight text-white">
                Lo mejor en tecnología y moda, al mejor precio.
              </Text>
              <TouchableOpacity
                className="mt-4 h-10 flex-row items-center justify-center gap-1.5 self-start rounded-xl bg-white px-4"
                style={{ gap: 6 }}
                activeOpacity={0.85}
                onPress={() => router.push('/(drawer)/productos')}
              >
                <Text className="text-[13px] font-semibold text-neutral-900">
                  Ver catálogo
                </Text>
                <Ionicons name="arrow-forward" size={15} color="#171717" />
              </TouchableOpacity>
            </View>
            <View className="h-20 w-20 items-center justify-center rounded-2xl bg-white/10">
              <Ionicons name="sparkles" size={36} color="#e0e7ff" />
            </View>
          </View>
        </View>

        <View className="mb-6 flex-row flex-wrap justify-between">
          {categorias.map((cat) => (
            <TouchableOpacity
              key={cat.nombre}
              className="mb-3 w-[48.5%] flex-row items-center rounded-2xl border border-neutral-200 bg-white p-3.5"
              activeOpacity={0.75}
              onPress={() => router.push(cat.ruta as never)}
            >
              <View
                className="mr-3 h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: cat.fondo }}
              >
                <Text className="text-xl">{cat.emoji}</Text>
              </View>
              <Text className="flex-1 text-[14px] font-semibold text-neutral-900">
                {cat.nombre}
              </Text>
              {cat.nombre === 'Carrito' && cantidadTotal > 0 && (
                <View className="h-5 min-w-5 items-center justify-center rounded-full bg-neutral-900 px-1.5">
                  <Text className="text-[10px] font-bold text-white">
                    {cantidadTotal}
                  </Text>
                </View>
              )}
              <Ionicons name="chevron-forward" size={16} color="#d4d4d4" />
            </TouchableOpacity>
          ))}
        </View>

        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-lg font-bold tracking-tight text-neutral-900">
            Destacados
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push('/(drawer)/productos')}
          >
            <Text className="text-[13px] font-semibold text-neutral-900 underline">
              Ver todos
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {destacados.map((producto) => (
          <TouchableOpacity
            key={producto.id}
            className="mr-3 w-40 overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            activeOpacity={0.8}
            onPress={() => router.push(`/producto/${producto.id}`)}
          >
            <View className="h-36 w-full bg-neutral-100">
              <ProductImage
                uri={producto.imagen}
                emoji={producto.emoji}
                className="h-full w-full"
                fallbackClassName="text-4xl"
                label={producto.nombre}
              />
            </View>
            <View className="p-3">
              <Text
                className="text-[13px] font-semibold leading-snug text-neutral-900"
                numberOfLines={1}
              >
                {producto.nombre}
              </Text>
              <Text className="mt-0.5 text-[14px] font-bold text-neutral-900">
                {formatoPrecio(producto.precio)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="mt-7 items-center px-5">
        <Text className="text-xs text-neutral-400">
          {productos.length} productos disponibles · Envío a todo Chile
        </Text>
      </View>
    </ScrollView>
  );
}