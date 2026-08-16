import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Platform } from 'react-native';

export type Rol = 'admin' | 'cliente';

const CLAVE_SESION = '@minimarket/sesion';

function leerRolGuardado(): Rol | null {
  try {
    if (Platform.OS === 'web') {
      const valor = localStorage.getItem(CLAVE_SESION);
      return valor === 'admin' || valor === 'cliente' ? valor : null;
    }
  } catch {
    // almacenamiento no disponible: ignorar
  }
  return null;
}

function guardarRol(rol: Rol | null) {
  try {
    if (Platform.OS === 'web') {
      if (rol) {
        localStorage.setItem(CLAVE_SESION, rol);
      } else {
        localStorage.removeItem(CLAVE_SESION);
      }
    }
  } catch {
    // almacenamiento no disponible: ignorar
  }
}

interface SesionContextValue {
  rol: Rol | null;
  iniciarSesion: (rol: Rol) => void;
  cerrarSesion: () => void;
}

const SesionContext = createContext<SesionContextValue | undefined>(
  undefined
);

export function SesionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rol, setRol] = useState<Rol | null>(() => leerRolGuardado());

  const value = useMemo(
    () => ({
      rol,
      iniciarSesion: (nuevoRol: Rol) => {
        setRol(nuevoRol);
        guardarRol(nuevoRol);
      },
      cerrarSesion: () => {
        setRol(null);
        guardarRol(null);
      },
    }),
    [rol]
  );

  return (
    <SesionContext.Provider value={value}>
      {children}
    </SesionContext.Provider>
  );
}

export function useSesion(): SesionContextValue {
  const context = useContext(SesionContext);
  if (!context) {
    throw new Error('useSesion debe usarse dentro de SesionProvider');
  }
  return context;
}