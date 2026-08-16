import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import {
  Drawer,
  DrawerContentScrollView,
  DrawerItemList,
  type DrawerContentComponentProps,
} from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

import { useCarrito } from '../../context/CarritoContext';
import { useSesion } from '../../context/SesionContext';
import TopBar from '../../components/TopBar';

function DrawerContenido(props: DrawerContentComponentProps) {
  const { rol, cerrarSesion } = useSesion();
  const esAdmin = rol === 'admin';

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="mb-6 border-b border-neutral-100 px-5 pt-6 pb-5">
        <View className="mb-3 h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900">
          <Ionicons name="bag-handle" size={22} color="#fff" />
        </View>
        <Text className="text-lg font-bold tracking-tight text-neutral-900">
          MiniStore
        </Text>
        <Text className="mt-0.5 text-xs text-neutral-400">
          {esAdmin ? 'Administrador' : 'Cliente'}
        </Text>
      </View>

      <DrawerItemList {...props} />

      <View className="mt-auto px-4 pt-6 pb-4">
        <View className="mb-3 h-px bg-neutral-100" />
        <TouchableOpacity
          className="h-12 flex-row items-center gap-2.5 rounded-xl bg-brand-50 px-4"
          style={{ gap: 10 }}
          activeOpacity={0.8}
          onPress={() => {
            cerrarSesion();
            router.replace('/');
          }}
          accessibilityLabel="Cerrar sesión"
        >
          <Ionicons name="log-out-outline" size={20} color="#9f1e4a" />
          <Text className="text-[15px] font-semibold text-brand-700">
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  const { cantidadTotal } = useCarrito();
  const { rol } = useSesion();
  const esAdmin = rol === 'admin';

  useEffect(() => {
    if (!rol) {
      router.replace('/');
    }
  }, [rol]);

  return (
    <Drawer
      drawerContent={(props) => <DrawerContenido {...props} />}
      screenOptions={{
        header: () => <TopBar />,
        drawerActiveTintColor: '#4f46e5',
        drawerInactiveTintColor: '#525252',
        drawerActiveBackgroundColor: '#eef2ff',
        drawerLabelStyle: {
          fontSize: 16,
        },
        drawerStyle: {
          backgroundColor: '#fafafa',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#171717',
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: 'Inicio',
          title: 'Inicio',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="productos"
        options={{
          drawerLabel: 'Tecnología',
          title: 'Tecnología',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="phone-portrait-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="ropa"
        options={{
          drawerLabel: 'Ropa',
          title: 'Ropa',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="shirt-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="favoritos"
        options={{
          drawerLabel: 'Favoritos',
          title: 'Favoritos',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="carrito"
        options={{
          drawerLabel: ({ color }) => (
            <View className="flex-row items-center gap-2">
              <Text style={[styles.label, { color: color as string }]}>
                Carrito
              </Text>
              {cantidadTotal > 0 && (
                <View className="h-5 min-w-5 items-center justify-center rounded-full bg-neutral-900 px-1.5">
                  <Text className="text-[11px] font-semibold text-white">
                    {cantidadTotal}
                  </Text>
                </View>
              )}
            </View>
          ),
          title: 'Carrito',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="admin"
        options={{
          drawerLabel: 'Administración',
          title: 'Administración',
          drawerItemStyle: esAdmin ? undefined : { display: 'none' },
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}

const styles = {
  label: {
    fontSize: 16,
  },
};