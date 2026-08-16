export type Categoria = 'tecnologia' | 'ropa';

export interface Seccion {
  id: string;
  nombre: string;
  emoji: string;
  imagen: string;
  categoria: Categoria;
}

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  emoji: string;
  imagen: string;
  seccionId: string;
  stock: number;
}

export const INFO_CATEGORIAS: Record<
  Categoria,
  { nombre: string; emoji: string }
> = {
  tecnologia: { nombre: 'Tecnología', emoji: '💻' },
  ropa: { nombre: 'Ropa', emoji: '👕' },
};

export const seccionesIniciales: Seccion[] = [
  {
    id: 'sec-audio',
    nombre: 'Audio',
    emoji: '🎧',
    imagen:
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600&auto=format&fit=crop',
    categoria: 'tecnologia',
  },
  {
    id: 'sec-computacion',
    nombre: 'Computación',
    emoji: '💻',
    imagen:
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=600&auto=format&fit=crop',
    categoria: 'tecnologia',
  },
  {
    id: 'sec-telefonia',
    nombre: 'Telefonía',
    emoji: '📱',
    imagen:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
    categoria: 'tecnologia',
  },
  {
    id: 'sec-wearables',
    nombre: 'Wearables',
    emoji: '⌚',
    imagen:
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop',
    categoria: 'tecnologia',
  },
  {
    id: 'sec-cargadores',
    nombre: 'Cargadores',
    emoji: '🔋',
    imagen:
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop',
    categoria: 'tecnologia',
  },
  {
    id: 'sec-superior',
    nombre: 'Superior',
    emoji: '👕',
    imagen:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop',
    categoria: 'ropa',
  },
  {
    id: 'sec-inferior',
    nombre: 'Inferior',
    emoji: '👖',
    imagen:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=600&auto=format&fit=crop',
    categoria: 'ropa',
  },
  {
    id: 'sec-calzado',
    nombre: 'Calzado',
    emoji: '👟',
    imagen:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop',
    categoria: 'ropa',
  },
  {
    id: 'sec-accesorios',
    nombre: 'Accesorios',
    emoji: '🧢',
    imagen:
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600&auto=format&fit=crop',
    categoria: 'ropa',
  },
];

export const productosIniciales: Producto[] = [
  {
    id: 'tec-1',
    nombre: 'Audífonos Bluetooth',
    precio: 29990,
    descripcion:
      'Audífonos inalámbricos con cancelación de ruido, batería de 30 horas y carga rápida USB-C.',
    emoji: '🎧',
    imagen:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-audio',
    stock: 12,
  },
  {
    id: 'tec-2',
    nombre: 'Teclado Mecánico',
    precio: 24990,
    descripcion:
      'Teclado mecánico con switches rojos, retroiluminación RGB y estructura de aluminio.',
    emoji: '⌨️',
    imagen:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-computacion',
    stock: 8,
  },
  {
    id: 'tec-3',
    nombre: 'Mouse Gamer',
    precio: 14990,
    descripcion:
      'Mouse ergonómico de 12.000 DPI con 7 botones programables y cable mallado.',
    emoji: '🖱️',
    imagen:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-computacion',
    stock: 20,
  },
  {
    id: 'tec-4',
    nombre: 'Monitor 24" Full HD',
    precio: 149990,
    descripcion:
      'Monitor IPS de 24 pulgadas, 1080p, 75 Hz y bordes ultrafinos. Ideal para trabajo y gaming.',
    emoji: '🖥️',
    imagen:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-computacion',
    stock: 5,
  },
  {
    id: 'tec-5',
    nombre: 'Smartphone 128GB',
    precio: 299990,
    descripcion:
      'Smartphone con pantalla AMOLED de 6.5", cámara triple de 50MP y carga rápida de 33W.',
    emoji: '📱',
    imagen:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-telefonia',
    stock: 7,
  },
  {
    id: 'tec-6',
    nombre: 'Parlante Bluetooth Portátil',
    precio: 19990,
    descripcion:
      'Parlante resistente al agua con sonido 360°, 12 horas de batería y micrófono integrado.',
    emoji: '🔊',
    imagen:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-audio',
    stock: 15,
  },
  {
    id: 'tec-7',
    nombre: 'Smartwatch Fitness',
    precio: 59990,
    descripcion:
      'Reloj inteligente con GPS, medición de ritmo cardíaco, sueño y 20 modos deportivos.',
    emoji: '⌚',
    imagen:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-wearables',
    stock: 10,
  },
  {
    id: 'tec-8',
    nombre: 'Cargador Inalámbrico 15W',
    precio: 12990,
    descripcion:
      'Base de carga inalámbrica Qi de 15W con protección contra sobrecarga y diseño antideslizante.',
    emoji: '🔋',
    imagen:
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-cargadores',
    stock: 25,
  },
  {
    id: 'ropa-1',
    nombre: 'Polera Oversize',
    precio: 12990,
    descripcion:
      'Polera de algodón orgánico con corte oversize, cuello reforzado y estampado serigráfico.',
    emoji: '👕',
    imagen:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-superior',
    stock: 30,
  },
  {
    id: 'ropa-2',
    nombre: 'Pantalón Cargo',
    precio: 24990,
    descripcion:
      'Pantalón cargo de tela resistente con 6 bolsillos, ajuste elástico en la cintura y tobillo.',
    emoji: '👖',
    imagen:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-inferior',
    stock: 18,
  },
  {
    id: 'ropa-3',
    nombre: 'Zapatillas Urbanas',
    precio: 49990,
    descripcion:
      'Zapatillas urbanas con suela de espuma ultra ligera, plantilla acolchada y diseño moderno.',
    emoji: '👟',
    imagen:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-calzado',
    stock: 14,
  },
  {
    id: 'ropa-4',
    nombre: 'Polerón con Capucha',
    precio: 29990,
    descripcion:
      'Polerón con capucha forrada, bolsillo canguro y algodón fleece de 350 g/m².',
    emoji: '🧥',
    imagen:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-superior',
    stock: 22,
  },
  {
    id: 'ropa-5',
    nombre: 'Gorra Trucker',
    precio: 9990,
    descripcion:
      'Gorra estilo trucker con malla transpirable, cierre ajustable y bordado frontal.',
    emoji: '🧢',
    imagen:
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-accesorios',
    stock: 40,
  },
  {
    id: 'ropa-6',
    nombre: 'Chaqueta Bomber',
    precio: 39990,
    descripcion:
      'Chaqueta bomber acolchada con cierre metálico, mangas con puños elásticos y bolsillos laterales.',
    emoji: '🧥',
    imagen:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-superior',
    stock: 9,
  },
  {
    id: 'ropa-7',
    nombre: 'Calcetines Deportivos (3 pares)',
    precio: 7990,
    descripcion:
      'Pack de 3 pares de calcetines deportivos con compresión media y tejido antimicrobiano.',
    emoji: '🧦',
    imagen:
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-accesorios',
    stock: 50,
  },
  {
    id: 'ropa-8',
    nombre: 'Mochila Urbana 20L',
    precio: 19990,
    descripcion:
      'Mochila impermeable de 20L con compartimento para notebook, puerto USB y correas acolchadas.',
    emoji: '🎒',
    imagen:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-accesorios',
    stock: 11,
  },
];

export const imagenFallback =
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop';