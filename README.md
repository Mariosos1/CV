# CV React con Tailwind CSS

Aplicación moderna e interactiva de CV desarrollada con React 19, TypeScript y Tailwind CSS 4. Incluye internacionalización, tema oscuro/claro, y efectos visuales avanzados con partículas.

![Deploy Status](https://img.shields.io/github/deployments/Mariosos1/CV/github-pages?label=Deploy)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌐 Demo en Vivo

👉 **[Ver CV Online](https://mariosos1.github.io/CV)**

## 🚀 Tecnologías

- **React 19** - Framework de JavaScript para interfaces de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS 4** - Framework de CSS utilitario moderno
- **Vite 7** - Herramienta de construcción ultrarrápida
- **PostCSS** - Procesador de CSS
- **Motion** - Biblioteca de animaciones fluidas
- **TSParticles** - Efectos de partículas interactivos

## 📦 Instalación

1. Instala las dependencias:

```bash
npm install
```

## 🏃 Ejecución

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🏗️ Construcción

Para crear una versión de producción:

```bash
npm run build
```

## 👀 Vista Previa

Para previsualizar la construcción de producción:

```bash
npm run preview
```

## ✨ Características Principales

### 🌐 Internacionalización

- ✅ Soporte multiidioma (Español/English)
- ✅ Selector de idioma integrado
- ✅ Persistencia en localStorage
- ✅ Traducciones modulares

### 🎨 Tema Dinámico

- ✅ Modo claro y oscuro
- ✅ Toggle de tema integrado
- ✅ Persistencia de preferencias
- ✅ Transiciones suaves

### 🎭 Efectos Visuales

- ✅ Partículas interactivas (Vortex)
- ✅ Animaciones fluidas con Motion
- ✅ Diseño moderno y atractivo
- ✅ Efectos de hover avanzados

### 📱 Responsive Design

- ✅ Diseño adaptativo completo
- ✅ Optimizado para móviles, tablets y desktop
- ✅ UX optimizada en todos los dispositivos

### ⚡ Performance

- ✅ Code splitting inteligente
- ✅ Optimización automática de bundles
- ✅ Lazy loading de componentes
- ✅ Build optimizado para producción

### 🚀 Deploy Automático

- ✅ CI/CD con GitHub Actions
- ✅ Despliegue automático en GitHub Pages
- ✅ Verificación de TypeScript antes del deploy
- ✅ Deploy al publicar releases

## 📂 Estructura del Proyecto

```
CV/
├── src/
│   ├── components/      # Componentes React reutilizables
│   │   ├── Header.tsx
│   │   ├── Contact.tsx
│   │   ├── Summary.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Languages.tsx
│   │   ├── LanguageSelector.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ui/
│   │       └── vortex.tsx  # Efectos de partículas
│   ├── context/          # Context API
│   │   ├── LanguageContext.tsx
│   │   └── ThemeContext.tsx
│   ├── translations/     # Archivos de traducción
│   │   └── translations.ts
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── .github/workflows/    # GitHub Actions
│   └── deploy.yml        # Workflow de deploy
├── public/               # Archivos estáticos
└── vite.config.ts        # Configuración de Vite
```

## 🎨 Personalización

### Editar Contenido

1. **Datos Personales**: Edita `src/components/Header.tsx`
2. **Experiencia**: Modifica `src/components/Experience.tsx`
3. **Habilidades**: Actualiza `src/components/Skills.tsx`
4. **Educación**: Edita `src/components/Education.tsx`

### Agregar Idiomas

1. Edita `src/translations/translations.ts`
2. Agrega las traducciones en el objeto correspondiente

### Personalizar Tema

- Modifica los colores en `src/index.css`
- Ajusta las variables CSS para theme personalizado

## 🚀 Deploy en GitHub Pages

### Configuración Automática

El proyecto está configurado para desplegarse automáticamente en GitHub Pages cuando se publica una release:

```bash
# 1. Haz commit de tus cambios
git add .
git commit -m "Update CV"

# 2. Push del código
git push origin main

# 3. En GitHub, ve a Releases → Create a new release
# El workflow se ejecutará automáticamente
```

### URL del Sitio

Después del deploy, tu CV estará disponible en:

```
https://mariosos1.github.io/CV/
```

## 📄 Licencia

MIT - Siéntete libre de usar este proyecto para tu CV personal.

## 👤 Autor

**Mario de Pablo Damián**

- GitHub: [@Mariosos1](https://github.com/Mariosos1)

## 🙏 Agradecimientos

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Motion](https://motion.dev/)
- [TSParticles](https://tsparticles.pierogis.dev/)
