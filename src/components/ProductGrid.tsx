import React from 'react';
import { View } from 'react-native';

import type { Producto } from '../data/productos';
import ProductCard from './ProductCard';

interface ProductGridProps {
  productos: Producto[];
}

export default function ProductGrid({ productos }: ProductGridProps) {
  return (
    <View className="flex-row flex-wrap justify-between">
      {productos.map((producto) => (
        <View key={producto.id} className="w-[48.5%]">
          <ProductCard producto={producto} />
        </View>
      ))}
    </View>
  );
}