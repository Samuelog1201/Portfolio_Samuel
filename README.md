# Portfolio de Samuel Ortiz

Portafolio web moderno, elegante y completamente responsive para Product Designer, UX/UI Designer e Interactive Media Student.

## Características

✨ **Diseño Premium**
- Tema oscuro minimalista con paleta de colores azul
- Componentes elegantes con glassmorphism sutil
- Animaciones suaves con Framer Motion

🎯 **Optimizado para Conversión**
- Enfoque en proyectos (50% del contenido)
- Navegación fluida con smooth scroll
- Responsive en mobile, tablet y desktop

⚡ **Tecnología Moderna**
- React 18 con TypeScript
- Vite para desarrollo rápido
- Tailwind CSS para estilos
- Framer Motion para animaciones
- Lucide React para iconos

## Estructura del Proyecto

```
portfolio-samuel/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   └── index.ts
│   ├── sections/            # Secciones de la página
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── index.ts
│   ├── data/
│   │   └── portfolio.ts     # Datos mock del portafolio
│   ├── assets/              # Imágenes y recursos
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── .prettierrc
```

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

## Personalización

### Datos del Portafolio

Edita `src/data/portfolio.ts` para actualizar:
- Información personal
- Proyectos
- Habilidades
- Experiencia laboral
- Educación
- Contacto

```typescript
export const portfolioData = {
  hero: { ... },
  about: { ... },
  skills: [ ... ],
  projects: [ ... ],
  // etc.
}
```

### Colores

Personaliza la paleta en `tailwind.config.js`:

```javascript
colors: {
  'bg-primary': '#050816',
  'bg-secondary': '#0B1120',
  'primary': '#2563EB',
  // ...
}
```

### Animaciones

Las animaciones se controlan con Framer Motion en cada componente. Ajusta:
- `duration` - Duración de la animación
- `delay` - Retraso antes de empezar
- `transition` - Tipo de transición

### Fuentes

Por defecto usa Space Grotesk e Inter. Cambiar en `src/index.css`:

```css
font-family: 'Tu Fuente', system-ui, sans-serif;
```

## Secciones

### 1. Hero
Primera impresión con biografía corta, roles y CTA principal.

### 2. Sobre mí
Descripción personal y métricas clave.

### 3. Habilidades
Agrupadas por categoría: UX/UI, Diseño, Desarrollo, Marketing Digital.

### 4. Proyectos
Sección principal con proyectos en formato grande y detallado.

### 5. Proceso de Diseño
Timeline visual del proceso creativo.

### 6. Experiencia
Timeline vertical con experiencia laboral.

### 7. Educación
Información académica.

### 8. Contacto
Formulario y enlaces de contacto.

## Imágenes

Las imágenes de los proyectos se muestran con placeholders. Para agregar imágenes reales:

1. Coloca las imágenes en `public/` o en una URL externa
2. Actualiza los URLs en `src/data/portfolio.ts`

```typescript
image: '/ruta-a-imagen.jpg' // Local
image: 'https://ejemplo.com/imagen.jpg' // URL externa
```

## SEO

El proyecto incluye meta tags básicos en `index.html`. Personaliza:

```html
<meta name="description" content="Tu descripción">
<meta property="og:title" content="Tu título">
```

## Rendimiento

- Build optimizado: 181.37 kB gzip
- CSS: 4.40 kB gzip
- Animaciones suaves sin bloqueos

## Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

## Notas Importantes

⚠️ **Placeholders Identificados**
- `[Foto profesional]` - Reemplazar con foto real
- `[PLACEHOLDER]` en experiencia - Completar descripciones
- Datos de contacto - Actualizar con información real
- URLs de proyectos - Vincular a casos de estudio

## Contribuciones

Si encuentras bugs o tienes sugerencias, no dudes en reportarlos.

## Licencia

Este proyecto es personal y está diseñado específicamente para Samuel Ortiz.

---

Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS.
