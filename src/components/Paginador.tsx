import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PaginadorProps {
  pagina: number;
  totalPaginas: number;
  onChange: (pagina: number) => void;
}

function rangoVisible(
  pagina: number,
  totalPaginas: number,
  maxBotones = 7
): (number | 'ellipsis')[] {
  if (totalPaginas <= maxBotones) {
    return Array.from({ length: totalPaginas }, (_, i) => i + 1);
  }
  const salida: (number | 'ellipsis')[] = [];
  const inicio = Math.max(2, pagina - 2);
  const fin = Math.min(totalPaginas - 1, inicio + maxBotones - 2 - 1);

  salida.push(1);
  if (inicio > 2) {
    salida.push('ellipsis');
  }
  for (let n = inicio; n <= fin; n++) {
    salida.push(n);
  }
  if (fin < totalPaginas - 1) {
    salida.push('ellipsis');
  }
  salida.push(totalPaginas);
  return salida;
}

export default function Paginador({
  pagina,
  totalPaginas,
  onChange,
}: PaginadorProps) {
  if (totalPaginas <= 1) {
    return null;
  }

  const paginas = rangoVisible(pagina, totalPaginas);

  return (
    <View className="mt-4 flex-row items-center justify-center gap-1.5">
      <TouchableOpacity
        className="h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white"
        activeOpacity={0.7}
        disabled={pagina <= 1}
        onPress={() => onChange(pagina - 1)}
        accessibilityLabel="Página anterior"
      >
        <Ionicons
          name="chevron-back"
          size={17}
          color={pagina <= 1 ? '#d4d4d4' : '#171717'}
        />
      </TouchableOpacity>

      {paginas.map((numero, indice) =>
        numero === 'ellipsis' ? (
          <Text
            key={`ellipsis-${indice}`}
            className="px-1 text-sm font-semibold text-neutral-400"
          >
            ...
          </Text>
        ) : (
          <TouchableOpacity
            key={numero}
            className={`h-10 min-w-10 items-center justify-center rounded-xl px-2 ${
              numero === pagina
                ? 'bg-neutral-900'
                : 'border border-neutral-200 bg-white'
            }`}
            activeOpacity={0.7}
            onPress={() => onChange(numero)}
            accessibilityLabel={`Ir a la página ${numero}`}
            accessibilityState={{ selected: numero === pagina }}
          >
            <Text
              className={`text-[14px] font-semibold ${
                numero === pagina ? 'text-white' : 'text-neutral-700'
              }`}
            >
              {numero}
            </Text>
          </TouchableOpacity>
        )
      )}

      <TouchableOpacity
        className="h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white"
        activeOpacity={0.7}
        disabled={pagina >= totalPaginas}
        onPress={() => onChange(pagina + 1)}
        accessibilityLabel="Página siguiente"
      >
        <Ionicons
          name="chevron-forward"
          size={17}
          color={pagina >= totalPaginas ? '#d4d4d4' : '#171717'}
        />
      </TouchableOpacity>
    </View>
  );
}