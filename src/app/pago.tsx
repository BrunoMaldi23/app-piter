import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { useCarrito } from '../context/CarritoContext';
import { formatoPrecio } from '../utils/formato';
import ProductImage from '../components/ProductImage';

type MetodoPago = 'debito' | 'credito';

const CUOTAS = [1, 2, 3, 6, 12];

function formatearNumeroTarjeta(valor: string): string {
  const digitos = valor.replace(/\D/g, '').slice(0, 16);
  return digitos.replace(/(.{4})/g, '$1 ').trim();
}

function formatearVencimiento(valor: string): string {
  const limpio = valor.replace(/\D/g, '').slice(0, 4);
  if (limpio.length <= 2) {
    return limpio;
  }
  return `${limpio.slice(0, 2)}/${limpio.slice(2)}`;
}

export default function Pago() {
  const { items, total, cantidadTotal, vaciar } = useCarrito();

  const [metodo, setMetodo] = useState<MetodoPago>('debito');
  const [cuotas, setCuotas] = useState(1);
  const [titular, setTitular] = useState('');
  const [numero, setNumero] = useState('');
  const [vencimiento, setVencimiento] = useState('');
  const [cvv, setCvv] = useState('');
  const [procesando, setProcesando] = useState(false);

  const valorCuota = useMemo(() => {
    if (metodo === 'debito' || cuotas <= 1) {
      return null;
    }
    return total / cuotas;
  }, [total, metodo, cuotas]);

  if (items.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-neutral-50 p-8">
        <Stack.Screen options={{ headerShown: false }} />
        <Text className="mb-3 text-5xl">🛒</Text>
        <Text className="text-lg font-semibold text-neutral-900">
          No hay nada que pagar
        </Text>
        <Text className="mt-1.5 text-center text-sm text-neutral-500">
          Tu carrito está vacío. Agrega productos antes de continuar.
        </Text>
        <TouchableOpacity
          className="mt-6 h-12 items-center justify-center rounded-xl bg-neutral-900 px-6"
          activeOpacity={0.8}
          onPress={() => router.replace('/(drawer)/productos')}
        >
          <Text className="text-[15px] font-semibold text-white">
            Ir a comprar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const validar = (): boolean => {
    if (titular.trim().length < 3) {
      Alert.alert('Dato incompleto', 'Ingresa el nombre del titular de la tarjeta.');
      return false;
    }
    const digitos = numero.replace(/\s/g, '');
    if (numero.replace(/\s/g, '').length !== 16) {
      Alert.alert('Dato incompleto', 'La tarjeta debe tener 16 dígitos.');
      return false;
    }
    const vencimientoValido =
      /^\d{2}\/\d{2}$/.test(vencimiento) &&
      Number(vencimiento.slice(0, 2)) >= 1 &&
      Number(vencimiento.slice(0, 2)) <= 12;
    if (!vencimientoValido) {
      Alert.alert('Dato incompleto', 'Ingresa el vencimiento en formato MM/AA.');
      return false;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      Alert.alert('Dato incompleto', 'Ingresa el código de seguridad (3 o 4 dígitos).');
      return false;
    }
    if (digitos.length !== 16) {
      Alert.alert('Dato incompleto', 'La tarjeta debe tener 16 dígitos.');
      return false;
    }
    return true;
  };

  const pagar = () => {
    if (!validar() || procesando) {
      return;
    }
    setProcesando(true);
    setTimeout(() => {
      setProcesando(false);
      Alert.alert(
        'Pago exitoso 🎉',
        `Pagaste ${formatoPrecio(total)} con tarjeta de ${
          metodo === 'debito' ? 'débito' : 'crédito'
        }${
          metodo === 'credito' && cuotas > 1
            ? ` en ${cuotas} cuotas`
            : ''
        }. ¡Gracias por tu compra en MiniStore!`,
        [
          {
            text: 'OK',
            onPress: () => {
              vaciar();
              router.back();
            },
          },
        ]
      );
    }, 1200);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        className="flex-1 bg-neutral-50"
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            className="h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white"
            activeOpacity={0.7}
            onPress={() => router.back()}
            accessibilityLabel="Volver al carrito"
          >
            <Ionicons name="chevron-back" size={20} color="#171717" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold tracking-tight text-neutral-900">
            Pago
          </Text>
        </View>

        <View className="mt-5 flex-row items-center justify-between rounded-2xl bg-neutral-900 p-5">
          <View className="flex-1">
            <Text className="text-xs text-neutral-400">Total a pagar</Text>
            <Text className="mt-0.5 text-3xl font-bold text-white">
              {formatoPrecio(total)}
            </Text>
            {valorCuota && (
              <Text className="mt-1 text-sm text-neutral-400">
                {cuotas} cuotas de {formatoPrecio(valorCuota)}
              </Text>
            )}
          </View>
          <Ionicons name="card-outline" size={34} color="#fff" />
        </View>

        <View className="mt-5 mb-2 flex-row justify-between gap-3">
          {(
            [
              {
                key: 'debito',
                label: 'Débito',
                icon: 'cash-outline' as const,
              },
              {
                key: 'credito',
                label: 'Crédito',
                icon: 'card-outline' as const,
              },
            ] as const
          ).map((opcion) => {
            const activo = metodo === opcion.key;
            return (
              <TouchableOpacity
                key={opcion.key}
                className={`flex-1 flex-row items-center justify-center gap-2 rounded-2xl border-2 p-4 ${
                  activo
                    ? 'border-neutral-900 bg-neutral-900'
                    : 'border-neutral-200 bg-white'
                }`}
                activeOpacity={0.8}
                onPress={() => setMetodo(opcion.key)}
                accessibilityRole="button"
                accessibilityState={{ selected: activo }}
                accessibilityLabel={`Pagar con tarjeta de ${opcion.label.toLowerCase()}`}
              >
                <Ionicons
                  name={opcion.icon}
                  size={20}
                  color={activo ? '#fff' : '#525252'}
                />
                <Text
                  className={`text-[15px] font-semibold ${
                    activo ? 'text-white' : 'text-neutral-700'
                  }`}
                >
                  {opcion.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {metodo === 'credito' && (
          <View className="mb-2">
            <Text className="mb-2 mt-1 text-[13px] font-semibold text-neutral-500">
              Cuotas sin interés
            </Text>
            <View className="flex-row gap-2">
              {CUOTAS.map((cantidad) => {
                const activo = cuotas === cantidad;
                return (
                  <TouchableOpacity
                    key={cantidad}
                    className={`flex-1 items-center rounded-xl border-2 py-2.5 ${
                      activo
                        ? 'border-neutral-900 bg-neutral-900'
                        : 'border-neutral-200 bg-white'
                    }`}
                    activeOpacity={0.8}
                    onPress={() => setCuotas(cantidad)}
                    accessibilityState={{ selected: activo }}
                  >
                    <Text
                      className={`text-[13px] font-bold ${
                        activo ? 'text-white' : 'text-neutral-700'
                      }`}
                    >
                      {cantidad === 1 ? '1 pago' : `${cantidad}x`}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}

        <View className="mt-4">
          <Text className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-neutral-500">
            Datos de la tarjeta
          </Text>

          <Text className="mb-1 ml-1 text-xs font-medium text-neutral-500">
            Titular
          </Text>
          <TextInput
            className="mb-3 h-12 rounded-xl border border-neutral-200 bg-white px-4 text-[15px] text-neutral-900"
            placeholder="Nombre y apellido"
            placeholderTextColor="#a3a3a3"
            value={titular}
            onChangeText={setTitular}
            autoCapitalize="words"
          />

          <Text className="mb-1 ml-1 text-xs font-medium text-neutral-500">
            Número de tarjeta
          </Text>
          <TextInput
            className="mb-3 h-12 rounded-xl border border-neutral-200 bg-white px-4 text-[15px] text-neutral-900"
            placeholder="0000 0000 0000 0000"
            placeholderTextColor="#a3a3a3"
            value={numero}
            onChangeText={(texto) => setNumero(formatearNumeroTarjeta(texto))}
            keyboardType="number-pad"
            maxLength={19}
          />

          <View className="flex-row justify-between gap-3">
            <View className="flex-1">
              <Text className="mb-1 ml-1 text-xs font-medium text-neutral-500">
                Vencimiento
              </Text>
              <TextInput
                className="h-12 rounded-xl border border-neutral-200 bg-white px-4 text-[15px] text-neutral-900"
                placeholder="MM/AA"
                placeholderTextColor="#a3a3a3"
                value={vencimiento}
                onChangeText={(texto) =>
                  setVencimiento(formatearVencimiento(texto))
                }
                keyboardType="number-pad"
                maxLength={5}
              />
            </View>
            <View className="w-28">
              <Text className="mb-1 ml-1 text-xs font-medium text-neutral-500">
                CVV
              </Text>
              <TextInput
                className="h-12 rounded-xl border border-neutral-200 bg-white px-4 text-[15px] text-neutral-900"
                placeholder="123"
                placeholderTextColor="#a3a3a3"
                value={cvv}
                onChangeText={(texto) =>
                  setCvv(texto.replace(/\D/g, '').slice(0, 4))
                }
                keyboardType="number-pad"
                maxLength={4}
                secureTextEntry
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="mt-6 h-14 flex-row items-center justify-center gap-2 rounded-2xl bg-neutral-900"
          style={{ gap: 8 }}
          activeOpacity={0.8}
          disabled={procesando}
          onPress={pagar}
          accessibilityLabel="Confirmar pago"
        >
          <Ionicons
            name={procesando ? 'hourglass-outline' : 'lock-closed-outline'}
            size={20}
            color="#fff"
          />
          <Text className="text-[16px] font-bold text-white">
            {procesando
              ? 'Procesando...'
              : `Pagar ${formatoPrecio(total)}`}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-3 h-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white"
          activeOpacity={0.8}
          disabled={procesando}
          onPress={() => router.back()}
          accessibilityLabel="Cancelar compra"
        >
          <Text className="text-[15px] font-semibold text-red-600">
            Cancelar compra
          </Text>
        </TouchableOpacity>
        <Text className="mt-3 text-center text-xs text-neutral-400">
          Simulación de pago · Ningún cobro real será realizado.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}