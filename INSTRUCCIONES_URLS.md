═══════════════════════════════════════════════════════════════════════════════
GUÍA: CÓMO AGREGAR URLs DE PROYECTOS Y CV
═══════════════════════════════════════════════════════════════════════════════

Fecha: Junio 2026
Cambios realizados: Todos los placeholders implementados

═══════════════════════════════════════════════════════════════════════════════
PASO 1: AGREGAR URL DEL CV
═══════════════════════════════════════════════════════════════════════════════

Archivo: src/data/portfolio.ts (Línea ~17)

ACTUAL:
  cvUrl: '[AGREGAR_URL_CV]'

QUÉ HACER:
  Reemplaza [AGREGAR_URL_CV] con la URL de tu CV

OPCIONES:

  A) Si tu CV está en Google Drive:
     cvUrl: 'https://drive.google.com/file/d/TU_FILE_ID/view?usp=sharing'

  B) Si tu CV está en Dropbox:
     cvUrl: 'https://dl.dropboxusercontent.com/s/tu-archivo.pdf?dl=1'

  C) Si tu CV está en tu servidor:
     cvUrl: 'https://tudominio.com/cv.pdf'

  D) Si está en la carpeta public del proyecto:
     cvUrl: '/cv.pdf'  (guarda el archivo como public/cv.pdf)

EJEMPLO COMPLETADO:
  cvUrl: 'https://drive.google.com/file/d/1_DU9Q8XmPqWzLa5eY9gH0Tj8KpL2vMn3/view?usp=sharing'

═══════════════════════════════════════════════════════════════════════════════
PASO 2: AGREGAR URLs DE PROYECTOS
═══════════════════════════════════════════════════════════════════════════════

Archivo: src/data/portfolio.ts (Líneas ~100, ~112, ~125)

PROYECTO 1: TuPlata
─────────────────────

ACTUAL:
  projectUrl: '[AGREGAR_URL_TUPLATA]'

OPCIONES:

  A) Link a Behance:
     projectUrl: 'https://www.behance.net/gallery/TU_PROYECTO_ID/TuPlata'

  B) Link a Figma (design file):
     projectUrl: 'https://www.figma.com/file/TU_FILE_ID/TuPlata'

  C) Link a caso de estudio propio:
     projectUrl: 'https://tuportafolio.com/tuplata'

  D) Link a GitHub (si tiene código):
     projectUrl: 'https://github.com/usuario/tuplata'

EJEMPLO COMPLETADO:
  projectUrl: 'https://www.behance.net/gallery/180456789/TuPlata-Fintech'

─────────────────────

PROYECTO 2: Uber UI Design System
──────────────────────────────────

ACTUAL:
  projectUrl: '[AGREGAR_URL_UBER_DESIGN_SYSTEM]'

OPCIONES:

  A) Link a Figma (lo más común para Design Systems):
     projectUrl: 'https://www.figma.com/file/TU_FILE_ID/Uber-Design-System'

  B) Link a documentación:
     projectUrl: 'https://tudominio.com/design-system'

  C) Link a Behance:
     projectUrl: 'https://www.behance.net/gallery/180456789/Uber-Design-System'

EJEMPLO COMPLETADO:
  projectUrl: 'https://www.figma.com/file/a8bC9dE0fGhIjKlMnOpQrStUvWxYz123/Uber-Design-System'

──────────────────────

PROYECTO 3: Planea
──────────────────

ACTUAL:
  projectUrl: '[AGREGAR_URL_PLANEA]'

OPCIONES:

  A) Link a YouTube (si es video):
     projectUrl: 'https://www.youtube.com/watch?v=TU_VIDEO_ID'

  B) Link a Vimeo:
     projectUrl: 'https://vimeo.com/TU_VIDEO_ID'

  C) Link a Behance:
     projectUrl: 'https://www.behance.net/gallery/180456789/Planea'

  D) Link a documentación o landing:
     projectUrl: 'https://tudominio.com/planea'

EJEMPLO COMPLETADO:
  projectUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

═══════════════════════════════════════════════════════════════════════════════
PASO 3: CÓMO ACTUALIZAR LOS DATOS
═══════════════════════════════════════════════════════════════════════════════

1. Abre el archivo: src/data/portfolio.ts

2. Busca la sección "hero:" (línea ~17) y actualiza cvUrl

3. Busca la sección "projects:" (línea ~91) y actualiza cada projectUrl:
   - TuPlata (línea ~102)
   - Uber UI Design System (línea ~115)
   - Planea (línea ~128)

4. IMPORTANTE: Los valores entre comillas deben ser URLs completas
   ✓ CORRECTO:   projectUrl: 'https://behance.net/...'
   ✗ INCORRECTO: projectUrl: '[AGREGAR_URL_TUPLATA]'

5. Guarda el archivo (Ctrl+S)

6. El navegador debería actualizar automáticamente (hot reload)

═══════════════════════════════════════════════════════════════════════════════
PASO 4: VERIFICA QUE FUNCIONAN
═══════════════════════════════════════════════════════════════════════════════

1. En la sección Hero:
   - Haz clic en "Descargar CV" → Debe abrir/descargar tu CV en nueva pestaña
   - Haz clic en "Ver proyectos" → Debe hacer scroll a la sección proyectos
   - Haz clic en "Contactarme" → Debe hacer scroll a la sección contacto

2. En la sección Proyectos:
   - Cada botón "Ver caso de estudio" debe abrir la URL en nueva pestaña
   - Si aparece "Próximamente" es porque aún falta la URL

3. En la sección Contacto:
   - Todos los links de redes deben funcionar ✓

═══════════════════════════════════════════════════════════════════════════════
AYUDA: SI ALGO NO FUNCIONA
═══════════════════════════════════════════════════════════════════════════════

❌ El botón dice "Próximamente":
   → La URL tiene el placeholder [AGREGAR_URL_...]
   → Reemplaza con URL real

❌ El botón no abre nada:
   → Verifica que la URL sea completa (incluye https://)
   → Prueba la URL en el navegador directamente

❌ El archivo no compila:
   → Verifica que no haya sintaxis rota
   → Asegúrate de cerrar comillas correctamente

❌ El CV no se descarga:
   → Verifica que la URL sea válida
   → Intenta agregar ?dl=1 al final si es Dropbox

═══════════════════════════════════════════════════════════════════════════════
ESTRUCTURA COMPLETA DE UN PROYECTO (Referencia)
═══════════════════════════════════════════════════════════════════════════════

{
  id: 1,
  title: 'TuPlata',
  category: 'Fintech',
  description: 'Proyecto enfocado...',
  roles: ['UX Research', 'Product Design', ...],
  tools: ['Figma', 'Miro', ...],
  image: 'https://res.cloudinary.com/...',
  projectUrl: 'https://www.behance.net/...'  ← AQUÍ VA LA URL
}

═══════════════════════════════════════════════════════════════════════════════
RECOMENDACIONES
═══════════════════════════════════════════════════════════════════════════════

✓ Prioridad de plataformas para cada tipo de proyecto:

  Proyectos de UI/UX:
    1. Behance (mejor para portafolio visual)
    2. Figma (si es design system)
    3. Sitio propio con caso de estudio

  Proyectos de Video/Audiovisual:
    1. YouTube (máximo alcance)
    2. Vimeo (más profesional, mejor privacidad)
    3. Sitio propio

  Proyectos de Frontend/Desarrollo:
    1. GitHub (repositorio con README)
    2. Live demo / Vercel / Netlify
    3. Sitio propio

✓ Mejores prácticas:
  - Usa URLs públicas (sin requerer login)
  - Evita URLs que cambien (favorece Behance > links internos débiles)
  - Abre siempre en nueva pestaña (_blank)
  - Verifica que la URL sea accesible antes de enviar portafolio

═══════════════════════════════════════════════════════════════════════════════
EJEMPLO COMPLETO: Cómo quedará src/data/portfolio.ts
═══════════════════════════════════════════════════════════════════════════════

export const portfolioData = {
  hero: {
    // ... otros campos ...
    cvUrl: 'https://drive.google.com/file/d/1_ABC123XYZ/view?usp=sharing'
  },

  projects: [
    {
      id: 1,
      title: 'TuPlata',
      // ... otros campos ...
      projectUrl: 'https://www.behance.net/gallery/180456789/TuPlata-Fintech'
    },
    {
      id: 2,
      title: 'Uber UI Design System',
      // ... otros campos ...
      projectUrl: 'https://www.figma.com/file/a8bC9dE0fGhIjKlMnOpQrStUvWxYz123/Uber-Design-System'
    },
    {
      id: 3,
      title: 'Planea',
      // ... otros campos ...
      projectUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ],

  // ... resto del archivo ...
}

═══════════════════════════════════════════════════════════════════════════════
