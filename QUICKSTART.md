# 🚀 Inicio Rápido - CV React con Tailwind

## Instalación y Ejecución

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

El proyecto estará disponible en: http://localhost:5173

### 3. Construir para producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`

## 📁 Estructura del Proyecto

```
.
├── src/
│   ├── components/          # Componentes React
│   │   ├── CV.jsx         # Componente principal
│   │   ├── Header.jsx     # Encabezado con nombre
│   │   ├── Summary.jsx    # Resumen profesional
│   │   ├── Experience.jsx # Sección de experiencia
│   │   ├── Education.jsx  # Sección de educación
│   │   └── Skills.jsx     # Habilidades
│   ├── App.jsx            # Componente raíz
│   ├── main.jsx           # Punto de entrada
│   ├── index.css          # Estilos globales con Tailwind
│   └── App.css            # Estilos adicionales
├── index.html             # HTML principal
├── package.json           # Dependencias
├── vite.config.js         # Configuración de Vite
├── tailwind.config.js     # Configuración de Tailwind
└── postcss.config.js      # Configuración de PostCSS
```

## 🎨 Características

- ✅ **React 18.3** - Última versión estable
- ✅ **Tailwind CSS 3.4** - Framework CSS más reciente
- ✅ **Vite 5** - Build tool ultrarrápido
- ✅ **Diseño responsive** - Se adapta a todos los dispositivos
- ✅ **Componentes modulares** - Fácil de mantener y extender
- ✅ **Optimizado para impresión** - CSS especial para print media

## 📝 Personalizar el CV

Edita los archivos en `src/components/` para personalizar:

- **Header.jsx**: Nombre y título profesional
- **Summary.jsx**: Resumen profesional
- **Experience.jsx**: Experiencia laboral
- **Education.jsx**: Educación y certificaciones
- **Skills.jsx**: Habilidades

## 🖨️ Imprimir el CV

Para imprimir el CV, simplemente usa la función de imprimir de tu navegador (Ctrl+P / Cmd+P).
El CSS está configurado para que solo se imprima el contenido del CV, sin elementos extra.

## 🔧 Tecnologías Utilizadas

- **React**: ^18.3.1
- **Vite**: ^5.4.10
- **Tailwind CSS**: ^3.4.14
- **PostCSS**: ^8.4.47
- **Autoprefixer**: ^10.4.20

## 📄 Licencia

MIT

