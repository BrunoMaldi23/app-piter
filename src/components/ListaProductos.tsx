import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { Producto } from '../data/productos';
import ProductCard from './ProductCard';
import Paginador from './Paginador';
import FloatingCarrito from './FloatingCarrito';

const POR_PAGINA = 8;

interface ListaProductosProps {
  titulo: string;
  subtitulo: string;
  productos: Producto[];
  vacioEmoji?: string;
  vacioTitulo?: string;
  vacioTexto?: string;
}

export default function ListaProductos({
  titulo,
  subtitulo,
  productos,
  vacioEmoji = '🔍',
  vacioTitulo = 'No hay resultados',
  vacioTexto = 'Intenta con otra palabra clave.',
}: ListaProductosProps) {
  const [busqueda, setBusqueda] = useState('');
  const [pagina, setPagina] = useState(1);

  const filtrados = useMemo(() => {
    const normalizada = busqueda.trim().toLowerCase();
    if (!normalizada) {
      return productos;
    }
    return productos.filter((p) =>
      p.nombre.toLowerCase().includes(normalizada)
    );
  }, [busqueda, productos]);

  const totalPaginas = Math.ceil(filtrados.length / POR_PAGINA);
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
    <View className="flex-1 bg-neutral-50 p-5">
      <Text className="text-2xl font-bold tracking-tight text-neutral-900">
        {titulo}
      </Text>
      <Text className="mt-1 mb-5 text-sm text-neutral-500">
        {subtitulo}
      </Text>

      <View className="mb-4 flex-row items-center rounded-xl bg-neutral-200/60 px-3.5">
        <Ionicons
          name="search"
          size={18}
          color="#a3a3a3"
          style={{ marginRight: 8 }}
        />
        <TextInput
          className="h-11 flex-1 text-[15px] text-neutral-900"
          placeholder="Buscar producto..."
          placeholderTextColor="#a3a3a3"
          value={busqueda}
          onChangeText={cambiarBusqueda}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {busqueda.length > 0 && (
          <TouchableOpacity
            onPress={() => setBusqueda('')}
            accessibilityLabel="Limpiar búsqueda"
          >
            <Ionicons name="close-circle" size={18} color="#a3a3a3" />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={visibles}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View className="w-[48.5%]">
            <ProductCard producto={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 24 }}
        ListEmptyComponent={
          <View className="items-center py-20">
            <Text className="mb-3 text-4xl">{vacioEmoji}</Text>
            <Text className="text-base font-semibold text-neutral-900">
              {vacioTitulo}
            </Text>
            <Text className="mt-1 text-sm text-neutral-500">
              {vacioTexto}
            </Text>
          </View>
        }
        ListFooterComponent={
          <Paginador
            pagina={paginaSegura}
            totalPaginas={totalPaginas}
            onChange={setPagina}
          />
        }
      />

      <FloatingCarrito />
    </View>
  );
}