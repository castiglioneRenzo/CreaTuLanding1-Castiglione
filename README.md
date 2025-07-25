# 🛍️ E-commerce React App

Una aplicación de comercio electrónico moderna construida con **React**, **Vite**, **Firebase** y **Tailwind CSS** que ofrece una experiencia de compra completa y fluida.

## ✨ Características Principales

### 🏪 Catálogo de Productos
- **Vista de productos**: Listado completo de productos con imágenes, títulos, precios y calificaciones
- **Filtros por categoría**: Navegación por categorías dinámicas obtenidas desde Firebase
- **Detalles del producto**: Vista detallada con descripción completa, imágenes y opciones de compra
- **Sistema de calificación**: Visualización de ratings con estrellas (incluyendo medias estrellas)

### 🛒 Carrito de Compras
- **Gestión del carrito**: Agregar, eliminar y modificar cantidades de productos
- **Persistencia**: El carrito mantiene los productos durante la sesión
- **Cálculos automáticos**: Total de productos y precio total en tiempo real
- **Widget del carrito**: Indicador visual en la barra de navegación con cantidad de items

### 🏷️ Navegación y Categorías
- **Navegación responsive**: Barra de navegación adaptable con menú hamburguesa en móviles
- **Categorías dinámicas**: PopOver con categorías obtenidas automáticamente de Firebase
- **Routing avanzado**: Navegación SPA con React Router para una experiencia fluida
- **Páginas de error**: Manejo de rutas no encontradas (404)

### 💳 Proceso de Compra
- **Checkout completo**: Formulario de datos del cliente para finalizar compra
- **Validación de formularios**: Verificación de campos obligatorios
- **Orden de compra**: Generación de órdenes de compra con datos del cliente y productos
- **Integración con Firebase**: Guardado de órdenes en la base de datos

### 🎨 Diseño y UX
- **UI moderna**: Diseño atractivo con Tailwind CSS y DaisyUI
- **Tema dinámico**: Controlador de temas para cambiar entre diferentes estilos
- **Responsive design**: Adaptable a dispositivos móviles, tablets y desktop
- **Componentes reutilizables**: Arquitectura modular con componentes React

### 🔥 Integración con Firebase
- **Base de datos en tiempo real**: Firestore para productos, categorías y órdenes
- **Operaciones CRUD**: Lectura y escritura de datos desde/hacia Firebase
- **Filtros avanzados**: Consultas por categoría y búsqueda de productos específicos

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca principal para la interfaz de usuario
- **Vite 6.3.5** - Herramienta de build y desarrollo rápido
- **React Router 7.6.2** - Navegación y routing del lado del cliente

### Estilos y UI
- **Tailwind CSS 4.1.8** - Framework CSS utility-first
- **DaisyUI 5.0.43** - Componentes prediseñados para Tailwind
- **Headless UI 2.2.4** - Componentes accesibles sin estilos
- **Heroicons 2.2.0** - Iconos SVG optimizados

### Backend y Base de Datos
- **Firebase 11.10.0** - Plataforma de desarrollo de aplicaciones
- **Firestore** - Base de datos NoSQL en tiempo real

### Herramientas de Desarrollo
- **ESLint 9.25.0** - Linter para mantener calidad de código
- **Vite Plugin React 4.4.1** - Plugin de React para Vite

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── Cart.jsx        # Carrito de compras
│   ├── CartWidget.jsx  # Widget del carrito en navbar
│   ├── Checkout.jsx    # Proceso de checkout
│   ├── ItemDetail.jsx  # Detalle del producto
│   ├── ItemList.jsx    # Lista de productos
│   ├── NavBar.jsx      # Barra de navegación
│   ├── OrdenCompra.jsx # Confirmación de orden
│   └── ...            # Otros componentes
├── firebase/           # Configuración de Firebase
│   ├── config.js      # Configuración de Firebase
│   └── db.js          # Funciones de base de datos
├── assets/            # Recursos estáticos
├── App.jsx           # Componente principal
├── CartContext.js    # Context para el carrito
├── CartProvider.jsx  # Provider del carrito
└── main.jsx         # Punto de entrada
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd CreaTuLanding1-Castiglione
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase**
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Firestore Database
   - Actualizar las credenciales en `src/firebase/config.js`

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Construir para producción**
   ```bash
   npm run build
   ```

## 📱 Funcionalidades Detalladas

### Gestión de Productos
- **Listado de productos**: Vista grid/list con información básica
- **Búsqueda por categoría**: Filtrado automático de productos
- **Vista detallada**: Información completa del producto con opción de agregar al carrito
- **Control de cantidad**: Selector de cantidad antes de agregar al carrito

### Carrito de Compras
- **Agregar productos**: Con validación de cantidad
- **Modificar cantidades**: Incrementar/decrementar desde el carrito
- **Eliminar productos**: Remoción individual de items
- **Limpiar carrito**: Vaciar carrito completo
- **Cálculos en tiempo real**: Subtotales y total general

### Proceso de Compra
- **Formulario de checkout**: Datos del cliente (nombre, email, dirección)
- **Validación de datos**: Verificación de campos obligatorios
- **Resumen de compra**: Productos seleccionados y totales
- **Generación de orden**: Creación de orden de compra en Firebase
- **Confirmación**: Página de confirmación con detalles de la orden

### Experiencia de Usuario
- **Navegación intuitiva**: Menús claros y accesibles
- **Feedback visual**: Indicadores de carga y confirmaciones
- **Responsive design**: Adaptación a todos los dispositivos
- **Manejo de errores**: Páginas de error personalizadas

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

