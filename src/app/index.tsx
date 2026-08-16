import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Linking,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { useSesion } from '../context/SesionContext';

const CREDENCIALES_CLIENTE = {
  correo: 'usuario@app.cl',
  password: '1234',
};

const CREDENCIALES_ADMIN = {
  correo: 'brunopsg061@gmail.com',
  password: '2323',
};

const CORREO_CONTACTO = 'brunopsg061@gmail.com';

export default function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const { rol, iniciarSesion } = useSesion();

  useEffect(() => {
    if (rol) {
      router.replace('/(drawer)/home');
    }
  }, [rol]);

  const ingresar = () => {
    const correoLimpio = correo.trim().toLowerCase();

    if (!correoLimpio || !password) {
      Alert.alert('Campos incompletos', 'Ingresa tu usuario y contraseña.');
      return;
    }

    if (
      correoLimpio === CREDENCIALES_ADMIN.correo &&
      password === CREDENCIALES_ADMIN.password
    ) {
      iniciarSesion('admin');
      return;
    }

    if (
      correoLimpio !== CREDENCIALES_CLIENTE.correo ||
      password !== CREDENCIALES_CLIENTE.password
    ) {
      Alert.alert(
        'Credenciales incorrectas',
        'El usuario o la contraseña no son válidos. Intenta nuevamente.'
      );
      return;
    }

    iniciarSesion('cliente');
  };

  const contactar = () => {
    Linking.openURL(`mailto:${CORREO_CONTACTO}?subject=Contacto%20MiniStore`);
  };

  return (
    <View className="flex-1 bg-neutral-50">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <KeyboardAvoidingView
          className="flex-1 justify-center px-6 py-10"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View className="mb-8 items-center">
            <View className="mb-5 h-20 w-20 items-center justify-center rounded-3xl bg-neutral-900 shadow-lg">
              <Ionicons name="bag-handle" size={34} color="#fff" />
            </View>
            <Text className="text-center text-3xl font-bold tracking-tight text-neutral-900">
              MiniStore
            </Text>
            <Text className="mt-2 text-center text-neutral-500">
              Tu tienda de tecnología y moda
            </Text>
          </View>

          <View className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <View className="mb-5 flex-row items-center gap-3">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                <Ionicons name="person-outline" size={20} color="#404040" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold tracking-tight text-neutral-900">
                  Iniciar sesión
                </Text>
                <Text className="text-xs text-neutral-400">
                  Accede a tu cuenta para continuar
                </Text>
              </View>
            </View>

            <Text className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Usuario
            </Text>
            <View className="mb-4 flex-row items-center rounded-xl border border-neutral-200 bg-neutral-50 px-4">
              <Ionicons name="person-outline" size={18} color="#a3a3a3" style={{ marginRight: 8 }} />
              <TextInput
                className="h-12 flex-1 text-[15px] text-neutral-900"
                placeholder="Ingresa tu usuario"
                placeholderTextColor="#a3a3a3"
                autoCapitalize="none"
                autoCorrect={false}
                value={correo}
                onChangeText={setCorreo}
              />
            </View>

            <Text className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Contraseña
            </Text>
            <View className="mb-6 flex-row items-center rounded-xl border border-neutral-200 bg-neutral-50 px-4">
              <Ionicons name="lock-closed-outline" size={18} color="#a3a3a3" style={{ marginRight: 8 }} />
              <TextInput
                className="h-12 flex-1 text-[15px] text-neutral-900"
                placeholder="Ingresa tu contraseña"
                placeholderTextColor="#a3a3a3"
                secureTextEntry={!mostrarPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setMostrarPassword((v) => !v)}
                activeOpacity={0.7}
                className="h-full justify-center pl-3"
                accessibilityLabel={
                  mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
                }
              >
                <Ionicons
                  name={mostrarPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#a3a3a3"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              className="h-12 flex-row items-center justify-center gap-2 rounded-xl bg-neutral-900"
              onPress={ingresar}
              activeOpacity={0.8}
              style={{ gap: 8 }}
            >
              <Ionicons name="log-in-outline" size={18} color="#fff" />
              <Text className="text-[15px] font-semibold text-white">
                Ingresar
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mt-6 items-center">
            <Text className="text-xs text-neutral-400">
              ¿No tienes cuenta?{' '}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={contactar}
              accessibilityLabel="Contáctanos por correo"
            >
              <Text className="text-sm font-bold text-neutral-900 underline">
                Contáctanos
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}