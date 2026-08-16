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
  {
    id: 'tec-9',
    nombre: 'Audífonos Gamer Over-Ear',
    precio: 34990,
    descripcion:
      'Audífonos gamer con drivers de 50mm, micrófono retráctil, sonido envolvente 7.1 y almohadillas de espuma viscoelástica.',
    emoji: '🎧',
    imagen:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-audio',
    stock: 9,
  },
  {
    id: 'tec-10',
    nombre: 'Micrófono USB Streaming',
    precio: 44990,
    descripcion:
      'Micrófono de condensador USB con patrón cardioide, ganancia ajustable, mute táctil y sonido profesional para streaming y podcasts.',
    emoji: '🎙️',
    imagen:
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-audio',
    stock: 6,
  },
  {
    id: 'tec-11',
    nombre: 'Barra de Sonido Bluetooth',
    precio: 69990,
    descripcion:
      'Barra de sonido 2.1 con subwoofer inalámbrico, Bluetooth 5.0, entradas HDMI ARC y control remoto.',
    emoji: '🔊',
    imagen:
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-audio',
    stock: 5,
  },
  {
    id: 'tec-12',
    nombre: 'Auriculares In-Ear TWS',
    precio: 15990,
    descripcion:
      'Auriculares inalámbricos in-ear con estuche de carga, cancelación de ruido activa y 24 horas de batería total.',
    emoji: '🎧',
    imagen:
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-audio',
    stock: 25,
  },
  {
    id: 'tec-13',
    nombre: 'Notebook 15.6" Core i5',
    precio: 749990,
    descripcion:
      'Notebook con procesador Intel Core i5, 16GB RAM, SSD 512GB, pantalla Full HD y batería de larga duración.',
    emoji: '💻',
    imagen:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-computacion',
    stock: 4,
  },
  {
    id: 'tec-14',
    nombre: 'Cámara Web Full HD',
    precio: 24990,
    descripcion:
      'Cámara web 1080p con micrófono dual, corrección de iluminación automática y clip universal para monitores.',
    emoji: '📷',
    imagen:
      'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-computacion',
    stock: 12,
  },
  {
    id: 'tec-15',
    nombre: 'Tablet Android 10.5"',
    precio: 199990,
    descripcion:
      'Tablet con pantalla 2K, 8GB RAM, 128GB de almacenamiento, parlantes estéreo y batería para todo el día.',
    emoji: '📲',
    imagen:
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-computacion',
    stock: 8,
  },
  {
    id: 'tec-16',
    nombre: 'Control Inalámbrico',
    precio: 39990,
    descripcion:
      'Control inalámbrico con motores de vibración, gatillos adaptativos y batería recargable de 12 horas.',
    emoji: '🎮',
    imagen:
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-computacion',
    stock: 18,
  },
  {
    id: 'tec-17',
    nombre: 'Smartphone Gama Media 256GB',
    precio: 249990,
    descripcion:
      'Smartphone con pantalla OLED 120Hz, cámara de 64MP, resistencia al agua y carga rápida de 45W.',
    emoji: '📱',
    imagen:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-telefonia',
    stock: 8,
  },
  {
    id: 'tec-18',
    nombre: 'Smartphone Económico 64GB',
    precio: 159990,
    descripcion:
      'Smartphone de entrada con pantalla HD+, batería de 5000mAh, doble cámara y lector de huellas.',
    emoji: '📱',
    imagen:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-telefonia',
    stock: 15,
  },
  {
    id: 'tec-19',
    nombre: 'Funda Protectora Universal',
    precio: 9990,
    descripcion:
      'Funda transparente de silicona con protección anticaídas, bordes reforzados y corte preciso para cargador.',
    emoji: '📱',
    imagen:
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-telefonia',
    stock: 40,
  },
  {
    id: 'tec-20',
    nombre: 'Smartwatch Deportivo Pro',
    precio: 79990,
    descripcion:
      'Smartwatch con GPS dual, sensor de ritmo cardíaco, oxímetro de pulso, 50 modos deportivos y 14 días de batería.',
    emoji: '⌚',
    imagen:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-wearables',
    stock: 7,
  },
  {
    id: 'tec-21',
    nombre: 'Pulsera de Actividad',
    precio: 24990,
    descripcion:
      'Pulsera inteligente con monitor de sueño, pasos, calorías, llamadas y notificaciones, resistente al agua 5ATM.',
    emoji: '⌚',
    imagen:
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-wearables',
    stock: 20,
  },
  {
    id: 'tec-22',
    nombre: 'Audífonos Deportivos',
    precio: 29990,
    descripcion:
      'Audífonos deportivos resistentes al sudor con ganchos ajustables, graves potentes y 18 horas de batería.',
    emoji: '🎧',
    imagen:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-wearables',
    stock: 22,
  },
  {
    id: 'tec-23',
    nombre: 'Cargador Rápido 65W GaN',
    precio: 19990,
    descripcion:
      'Cargador GaN de 65W con 2 puertos USB-C y 1 USB-A, ideal para notebook, smartphone y tablet.',
    emoji: '🔌',
    imagen:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-cargadores',
    stock: 20,
  },
  {
    id: 'tec-24',
    nombre: 'Power Bank 20000mAh',
    precio: 24990,
    descripcion:
      'Batería externa de 20000mAh con carga rápida 22.5W, doble salida USB y pantalla de porcentaje.',
    emoji: '🔋',
    imagen:
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-cargadores',
    stock: 16,
  },
  {
    id: 'tec-25',
    nombre: 'Cable USB-C 2m',
    precio: 7990,
    descripcion:
      'Cable USB-C a USB-C trenzado de 2 metros, carga rápida de 100W y transferencia de datos de alta velocidad.',
    emoji: '🔌',
    imagen:
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-cargadores',
    stock: 60,
  },
  {
    id: 'ropa-9',
    nombre: 'Polera Básica Algodón',
    precio: 9990,
    descripcion:
      'Polera básica de algodón peinado 180g, cuello reforzado y corte regular. Ideal para el día a día.',
    emoji: '👕',
    imagen:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-superior',
    stock: 45,
  },
  {
    id: 'ropa-10',
    nombre: 'Camisa Oversize',
    precio: 19990,
    descripcion:
      'Camisa de manga larga con corte oversize, tela de algodón y lío, botones de cuerno y bolsillo frontal.',
    emoji: '👔',
    imagen:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-superior',
    stock: 18,
  },
  {
    id: 'ropa-11',
    nombre: 'Polerón Clásico',
    precio: 24990,
    descripcion:
      'Polerón de algodón fleece 300g con cuello redondo, puños elásticos y estampado minimalista.',
    emoji: '🧥',
    imagen:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-superior',
    stock: 20,
  },
  {
    id: 'ropa-12',
    nombre: 'Sudadera con Cremallera',
    precio: 27990,
    descripcion:
      'Sudadera con cremallera completa, capucha forrada, bolsillos laterales con cierre y tela french terry.',
    emoji: '🧥',
    imagen:
      'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-superior',
    stock: 14,
  },
  {
    id: 'ropa-13',
    nombre: 'Jeans Slim',
    precio: 21990,
    descripcion:
      'Jeans slim de mezclilla elástica 4 vías, color índigo lavado, 5 bolsillos y cierre metálico.',
    emoji: '👖',
    imagen:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-inferior',
    stock: 17,
  },
  {
    id: 'ropa-14',
    nombre: 'Short Deportivo',
    precio: 12990,
    descripcion:
      'Short deportivo de tejido técnico transpirable, cintura elástica con cordón y costuras planas.',
    emoji: '🩳',
    imagen:
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-inferior',
    stock: 24,
  },
  {
    id: 'ropa-15',
    nombre: 'Jogger Street',
    precio: 18990,
    descripcion:
      'Jogger de corte recto con bolsillos cargo, puños en el tobillo y tela suave tipo algodón.',
    emoji: '👖',
    imagen:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-inferior',
    stock: 21,
  },
  {
    id: 'ropa-16',
    nombre: 'Zapatillas Running',
    precio: 59990,
    descripcion:
      'Zapatillas de running con espuma reactiva, placa de soporte, malla transpirable de una pieza y 10mm de drop.',
    emoji: '👟',
    imagen:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-calzado',
    stock: 11,
  },
  {
    id: 'ropa-17',
    nombre: 'Zapatillas Casual Blancas',
    precio: 45990,
    descripcion:
      'Zapatillas urbanas de cuero blanco, suela de goma vulcanizada y diseño atemporal para cualquier look.',
    emoji: '👟',
    imagen:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-calzado',
    stock: 13,
  },
  {
    id: 'ropa-18',
    nombre: 'Zapatillas de Moda',
    precio: 74990,
    descripcion:
      'Zapatillas de estilo retro con colores vibrantes, plataforma ligera y detalles cosidos premium.',
    emoji: '👟',
    imagen:
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-calzado',
    stock: 6,
  },
  {
    id: 'ropa-19',
    nombre: 'Gorra Béisbol',
    precio: 7990,
    descripcion:
      'Gorra de béisbol de algodón con visera curva, ajuste de correa y bordado frontal central.',
    emoji: '🧢',
    imagen:
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-accesorios',
    stock: 50,
  },
  {
    id: 'ropa-20',
    nombre: 'Mochila Notebook 15"',
    precio: 24990,
    descripcion:
      'Mochila acolchada para notebook de 15.6", compartimento antirrobo, puerto USB externo y correas laterales.',
    emoji: '🎒',
    imagen:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-accesorios',
    stock: 9,
  },
  {
    id: 'ropa-21',
    nombre: 'Lentes de Sol',
    precio: 14990,
    descripcion:
      'Lentes de sol con protección UV400, marco liviano de acetato y estuche rígido de regalo.',
    emoji: '🕶️',
    imagen:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-accesorios',
    stock: 27,
  },
  {
    id: 'ropa-22',
    nombre: 'Cartera de Cuero',
    precio: 11990,
    descripcion:
      'Cartera de cuero sintético con 8 tarjetas, compartimento para billetes y cierre metálico.',
    emoji: '👝',
    imagen:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-accesorios',
    stock: 19,
  },
  {
    id: 'tec-26',
    nombre: 'Parlante de Fiesta 40W',
    precio: 34990,
    descripcion:
      'Parlante portátil de 40W con luces LED dinámicas, Bluetooth 5.3, resistencia al agua IPX7 y 12 horas de batería.',
    emoji: '🔊',
    imagen:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-audio',
    stock: 14,
  },
  {
    id: 'tec-27',
    nombre: 'Audífonos Monitor Studio',
    precio: 45990,
    descripcion:
      'Audífonos cerrados de estudio con drivers de 45mm, respuesta plana para mezcla y almohadillas de velour.',
    emoji: '🎧',
    imagen:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-audio',
    stock: 7,
  },
  {
    id: 'tec-28',
    nombre: 'Bocina Retro Bluetooth',
    precio: 18990,
    descripcion:
      'Bocina de diseño retro con perilla física, Bluetooth y entrada AUX, sonido cálido y batería de 10 horas.',
    emoji: '📻',
    imagen:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-audio',
    stock: 12,
  },
  {
    id: 'tec-29',
    nombre: 'Kit Micrófono Podcast',
    precio: 54990,
    descripcion:
      'Kit de micrófono USB con brazo articulado, filtro antipop, pop shield y buena captación cardioide para grabar podcasts.',
    emoji: '🎙️',
    imagen:
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-audio',
    stock: 5,
  },
  {
    id: 'tec-30',
    nombre: 'Impresora Multifunción',
    precio: 129990,
    descripcion:
      'Impresora multifunción láser con impresión, escaneo y copiado, conexión WiFi y dúplex automático.',
    emoji: '🖨️',
    imagen:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-computacion',
    stock: 4,
  },
  {
    id: 'tec-31',
    nombre: 'Router WiFi 6 Dual Band',
    precio: 69990,
    descripcion:
      'Router WiFi 6 AX3000 de doble banda con 4 antenas, puertos gigabit y cobertura amplia para toda la casa.',
    emoji: '📡',
    imagen:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-computacion',
    stock: 6,
  },
  {
    id: 'tec-32',
    nombre: 'Base Refrigerante Notebook',
    precio: 19990,
    descripcion:
      'Base refrigerante de aluminio con 3 ventiladores silenciosos, puerto USB hub y ángulo ajustable.',
    emoji: '💻',
    imagen:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-computacion',
    stock: 22,
  },
  {
    id: 'tec-33',
    nombre: 'Smartphone Gama Alta 256GB',
    precio: 599990,
    descripcion:
      'Smartphone tope de gama con pantalla AMOLED 120Hz, cámara de 108MP, carga rápida de 67W y 256GB de almacenamiento.',
    emoji: '📱',
    imagen:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-telefonia',
    stock: 5,
  },
  {
    id: 'tec-34',
    nombre: 'Smartphone 5G Pro Max',
    precio: 449990,
    descripcion:
      'Smartphone 5G con pantalla de 6.8", triple cámara con estabilización óptica, batería de 5500mAh y carga inalámbrica.',
    emoji: '📱',
    imagen:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-telefonia',
    stock: 6,
  },
  {
    id: 'tec-35',
    nombre: 'Cargador Coche Fast Charge',
    precio: 14990,
    descripcion:
      'Cargador de auto con doble puerto USB-C y USB-A, carga rápida PD 30W y pantalla LED de voltaje.',
    emoji: '🔌',
    imagen:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-telefonia',
    stock: 30,
  },
  {
    id: 'tec-36',
    nombre: 'Soporte Escritorio Ajustable',
    precio: 12990,
    descripcion:
      'Soporte de escritorio con brazo ajustable en altura e inclinación, compatible con smartphones y tablets.',
    emoji: '📱',
    imagen:
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-telefonia',
    stock: 28,
  },
  {
    id: 'tec-37',
    nombre: 'Funda Silicona Anticaídas',
    precio: 7990,
    descripcion:
      'Funda de silicona flexible con bordes reforzados, protección militar y diseño delgado con agarre antideslizante.',
    emoji: '📱',
    imagen:
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-telefonia',
    stock: 45,
  },
  {
    id: 'tec-38',
    nombre: 'Batería Externa 10000mAh Slim',
    precio: 15990,
    descripcion:
      'Batería externa delgada de 10000mAh con carga rápida de 22.5W, puerto USB-C bidireccional y diseño de bolsillo.',
    emoji: '🔋',
    imagen:
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-telefonia',
    stock: 18,
  },
  {
    id: 'tec-39',
    nombre: 'Smartwatch Serie Sport',
    precio: 69990,
    descripcion:
      'Smartwatch deportivo con pantalla AMOLED, GPS, sensor de ritmo cardíaco, oxímetro y 15 días de batería.',
    emoji: '⌚',
    imagen:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-wearables',
    stock: 9,
  },
  {
    id: 'tec-40',
    nombre: 'Correas de Repuesto (2 uds)',
    precio: 9990,
    descripcion:
      'Pack de 2 correas de silicona transpirable para smartwatch, con cierre metálico y 20 colores disponibles.',
    emoji: '⌚',
    imagen:
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-wearables',
    stock: 25,
  },
  {
    id: 'tec-41',
    nombre: 'Reloj Monitor Corazón Premium',
    precio: 89990,
    descripcion:
      'Reloj inteligente premium con medición continua de frecuencia cardíaca, electrocardiograma y notificaciones.',
    emoji: '⌚',
    imagen:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-wearables',
    stock: 6,
  },
  {
    id: 'tec-42',
    nombre: 'Bandas Deportivas Resistencia',
    precio: 7990,
    descripcion:
      'Bandas de actividad anti-alérgicas con ajuste seguro, control de sueño y modo gimnasio, resistentes al agua.',
    emoji: '⌚',
    imagen:
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-wearables',
    stock: 30,
  },
  {
    id: 'tec-43',
    nombre: 'Smartwatch AMOLED 1.4"',
    precio: 79990,
    descripcion:
      'Smartwatch con pantalla AMOLED de 1.4", llamadas Bluetooth, 150 esferas y batería para 10 días.',
    emoji: '⌚',
    imagen:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-wearables',
    stock: 7,
  },
  {
    id: 'tec-44',
    nombre: 'Tracker Kids GPS',
    precio: 19990,
    descripcion:
      'Reloj localizador para niños con GPS, botón SOS, llamadas a contactos seguros y resistencia al agua IP67.',
    emoji: '⌚',
    imagen:
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-wearables',
    stock: 12,
  },
  {
    id: 'tec-45',
    nombre: 'Cargador Pared 25W PD',
    precio: 14990,
    descripcion:
      'Cargador compacto de pared con Power Delivery 25W, puerto USB-C y protección inteligente contra sobrecarga.',
    emoji: '🔌',
    imagen:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-cargadores',
    stock: 26,
  },
  {
    id: 'tec-46',
    nombre: 'Estación de Carga 3 en 1',
    precio: 25990,
    descripcion:
      'Estación de carga inalámbrica para smartphone, smartwatch y audífonos, con puerto USB-C y diseño plegable.',
    emoji: '🔌',
    imagen:
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-cargadores',
    stock: 9,
  },
  {
    id: 'tec-47',
    nombre: 'Cargador Inalámbrico Doble',
    precio: 19990,
    descripcion:
      'Base de carga inalámbrica Qi de doble bobina para cargar dos dispositivos a la vez con 15W de potencia.',
    emoji: '🔋',
    imagen:
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-cargadores',
    stock: 15,
  },
  {
    id: 'tec-48',
    nombre: 'Adaptador Universal Viaje',
    precio: 12990,
    descripcion:
      'Adaptador de enchufe universal compatible con más de 150 países, con 2 puertos USB y fusible de seguridad.',
    emoji: '🌍',
    imagen:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-cargadores',
    stock: 20,
  },
  {
    id: 'tec-49',
    nombre: 'Power Bank Solar 30000mAh',
    precio: 34990,
    descripcion:
      'Batería externa de 30000mAh con panel solar recargable, linterna LED y doble salida de carga rápida.',
    emoji: '🔋',
    imagen:
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-cargadores',
    stock: 8,
  },
  {
    id: 'tec-50',
    nombre: 'Cargador Rápido Wall 20W',
    precio: 9990,
    descripcion:
      'Cargador de pared de 20W con puerto USB-C, compatible con carga rápida de smartphones y tablets modernas.',
    emoji: '🔌',
    imagen:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-cargadores',
    stock: 50,
  },
  {
    id: 'ropa-23',
    nombre: 'Polera Oversize Blanca',
    precio: 11990,
    descripcion:
      'Polera blanca de algodón 240g con corte oversize, hombro caído y cuello reforzado, básica y versátil.',
    emoji: '👕',
    imagen:
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-superior',
    stock: 35,
  },
  {
    id: 'ropa-24',
    nombre: 'Polo Piqué Clásico',
    precio: 15990,
    descripcion:
      'Polo de piqué de algodón con cuello y puños acanalados, corte regular y botones de tono a juego.',
    emoji: '👔',
    imagen:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-superior',
    stock: 20,
  },
  {
    id: 'ropa-25',
    nombre: 'Cardigan Oversize',
    precio: 25990,
    descripcion:
      'Cardigan tipo boyfriend de tejido suave con botones, bolsillos frontales y mangas largas, ideal para capas.',
    emoji: '🧥',
    imagen:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-superior',
    stock: 14,
  },
  {
    id: 'ropa-26',
    nombre: 'Bermuda de Algodón',
    precio: 13990,
    descripcion:
      'Bermuda de algodón de tiro medio con cintura elástica, bolsillos laterales y largo sobre la rodilla.',
    emoji: '🩳',
    imagen:
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-inferior',
    stock: 24,
  },
  {
    id: 'ropa-27',
    nombre: 'Jogger Oversize Gris',
    precio: 18990,
    descripcion:
      'Jogger de corte holgado en tono gris, cintura con cordón, bolsillos mates y puños en el tobillo.',
    emoji: '👖',
    imagen:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-inferior',
    stock: 18,
  },
  {
    id: 'ropa-28',
    nombre: 'Jeans Skinny Negro',
    precio: 21990,
    descripcion:
      'Jeans skinny de color negro especia, mezclilla elástica 4 vías, 5 bolsillos y cierre metálico.',
    emoji: '👖',
    imagen:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-inferior',
    stock: 16,
  },
  {
    id: 'ropa-29',
    nombre: 'Short de Baño Estampado',
    precio: 11990,
    descripcion:
      'Short de baño con estampado tropical, malla interior, cintura ajustable y secado rápido.',
    emoji: '🩳',
    imagen:
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-inferior',
    stock: 21,
  },
  {
    id: 'ropa-30',
    nombre: 'Calzas Running 7/8',
    precio: 19990,
    descripcion:
      'Calzas deportivas 7/8 con compresión, cintura alta con bolsillo, tejido que absorbe la humedad y costuras planas.',
    emoji: '👖',
    imagen:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-inferior',
    stock: 13,
  },
  {
    id: 'ropa-31',
    nombre: 'Pantalón Baggie Denim',
    precio: 22990,
    descripcion:
      'Pantalón baggie de mezclilla con lavado desgastado, pierna holgada y tobillo ajustado por botón.',
    emoji: '👖',
    imagen:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-inferior',
    stock: 10,
  },
  {
    id: 'ropa-32',
    nombre: 'Zapatillas Lifestyle',
    precio: 54990,
    descripcion:
      'Zapatillas urbanas con amortiguación ligera, upper de malla y cuero, y diseño deportivo de uso diario.',
    emoji: '👟',
    imagen:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-calzado',
    stock: 11,
  },
  {
    id: 'ropa-33',
    nombre: 'Zapatillas Blancas Minimal',
    precio: 47990,
    descripcion:
      'Zapatillas blancas de cuero sintético con suela de goma, silueta limpia y versatilidad para todo outfit.',
    emoji: '👟',
    imagen:
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-calzado',
    stock: 15,
  },
  {
    id: 'ropa-34',
    nombre: 'Zapatillas Running Pro',
    precio: 64990,
    descripcion:
      'Zapatillas de running con espuma de retorno de energía, placa de fibra, malla ultratranspirable y 8mm de drop.',
    emoji: '👟',
    imagen:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-calzado',
    stock: 7,
  },
  {
    id: 'ropa-35',
    nombre: 'Bototos Chelsea',
    precio: 69990,
    descripcion:
      'Bototos estilo Chelsea de cuero sintético con elásticos laterales, punta redonda y plantilla acolchada.',
    emoji: '👢',
    imagen:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-calzado',
    stock: 6,
  },
  {
    id: 'ropa-36',
    nombre: 'Zapatillas Urbanas Pop',
    precio: 51990,
    descripcion:
      'Zapatillas de estilo urbano con colores vibrantes, lengüeta alta y suela de copa con gran agarre.',
    emoji: '👟',
    imagen:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-calzado',
    stock: 12,
  },
  {
    id: 'ropa-37',
    nombre: 'Zapatos Formal Derby',
    precio: 79990,
    descripcion:
      'Zapatos formales derby de cuero con costuras reforzadas, suela de caucho antideslizante y horma cómoda.',
    emoji: '👞',
    imagen:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-calzado',
    stock: 5,
  },
  {
    id: 'ropa-38',
    nombre: 'Riñonera Urbana',
    precio: 14990,
    descripcion:
      'Riñonera impermeable con 3 compartimentos, correa ajustable y hebilla de seguridad, ideal para salidas.',
    emoji: '👜',
    imagen:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-accesorios',
    stock: 17,
  },
  {
    id: 'ropa-39',
    nombre: 'Gorro Invernal Beanie',
    precio: 7990,
    descripcion:
      'Gorro beanie tejido de lana acrílica, doble capa, dobladillo flexible y corte acogedor para el invierno.',
    emoji: '🧣',
    imagen:
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-accesorios',
    stock: 28,
  },
  {
    id: 'ropa-40',
    nombre: 'Guantes de Lana',
    precio: 9990,
    descripcion:
      'Guantes de lana acrílica con acabado suave, compatibles con pantalla táctil y estilo clásico de invierno.',
    emoji: '🧤',
    imagen:
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=600&auto=format&fit=crop',
    seccionId: 'sec-accesorios',
    stock: 22,
  },
];

export const imagenFallback =
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop';