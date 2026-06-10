export const portfolioData = {
  hero: {
    greeting: 'Hola, soy',
    name: 'Samuel Ortiz Guevara',
    roles: [
      'Product Designer',
      'UX/UI Designer',
      'Interactive Media Student'
    ],
    description: 'Diseño experiencias digitales centradas en las personas combinando investigación, diseño visual y desarrollo frontend para transformar ideas en productos funcionales y atractivos.',
    cta: {
      projects: 'Ver proyectos',
      cv: 'Descargar CV',
      contact: 'Contactarme'
    }
  },

  about: {
    title: 'Sobre mí',
    description: 'Soy estudiante de Diseño de Medios Interactivos en la Universidad Icesi con interés en Product Design, UX/UI Design y experiencias digitales.',
    details: 'Mi experiencia combina investigación de usuarios, diseño de interfaces, comunicación digital, producción audiovisual y desarrollo frontend. Disfruto construir soluciones digitales que resuelvan problemas reales mediante procesos centrados en las personas.',
    metrics: [
      {
        value: '+3 años',
        label: 'Creando contenido digital'
      },
      {
        value: '5+',
        label: 'Proyectos académicos y profesionales'
      },
      {
        value: 'UX + UI + Frontend',
        label: 'Multidisciplinario'
      },
      {
        value: 'Inglés B2',
        label: 'Idiomas'
      }
    ]
  },

  skills: [
    {
      category: 'UX/UI',
      icon: 'Layers',
      skills: [
        'UX Research',
        'User Interviews',
        'User Flows',
        'Wireframing',
        'Prototyping',
        'Design Systems',
        'Accessibility'
      ]
    },
    {
      category: 'Diseño',
      icon: 'Palette',
      skills: [
        'Figma',
        'Adobe Photoshop',
        'Adobe Premiere',
        'Branding',
        'Visual Design'
      ]
    },
    {
      category: 'Desarrollo',
      icon: 'Code',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Git'
      ]
    },
    {
      category: 'Marketing Digital',
      icon: 'TrendingUp',
      skills: [
        'Social Media Management',
        'Content Creation',
        'Video Editing',
        'Comunicación Digital'
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: 'TuPlata',
      category: 'Fintech',
      description: 'Proyecto enfocado en educación financiera para jóvenes colombianos. Participación en investigación, definición de necesidades, diseño de experiencia y validación de soluciones digitales.',
      roles: ['UX Research', 'User Interviews', 'Product Design', 'UI Design', 'Prototyping'],
      tools: ['Figma', 'Miro', 'Notion'],
      image: 'https://res.cloudinary.com/doczdljac/image/upload/v1781079859/tuplat_qvzjko.png',
      caseStudy: '/case-studies/tuplata'
    },
    {
      id: 2,
      title: 'Uber UI Design System',
      category: 'Design Systems',
      description: 'Proyecto universitario enfocado en la creación de un sistema de diseño escalable. Incluye foundations, componentes, patrones y criterios de accesibilidad.',
      roles: ['UI Design', 'Design Systems', 'Accessibility', 'Documentation'],
      tools: ['Figma'],
      image: 'https://res.cloudinary.com/doczdljac/image/upload/v1781079442/descarga_zburhw.png',
      caseStudy: '/case-studies/design-system'
    },
    {
      id: 3,
      title: 'Planea',
      category: 'Investigación y Producción Audiovisual',
      description: 'Proyecto enfocado en investigación de herramientas digitales y producción audiovisual para comunicación efectiva.',
      roles: ['Research', 'Video Editing', 'Communication', 'Digital Content'],
      tools: ['Adobe Premiere', 'Figma', 'Notion'],
      image: 'https://res.cloudinary.com/doczdljac/image/upload/v1781079864/Planea_keknws.png',
      caseStudy: '/case-studies/planea'
    }
  ],

  designProcess: [
    {
      step: '01',
      title: 'Investigación',
      description: 'Recopilo datos y contexto para entender el problema',
      icon: 'Search'
    },
    {
      step: '02',
      title: 'Descubrimiento',
      description: 'Identifico insights y necesidades del usuario',
      icon: 'Lightbulb'
    },
    {
      step: '03',
      title: 'Definición',
      description: 'Defino el alcance y objetivos del proyecto',
      icon: 'Target'
    },
    {
      step: '04',
      title: 'Ideación',
      description: 'Genero múltiples soluciones posibles',
      icon: 'Brain'
    },
    {
      step: '05',
      title: 'Wireframes',
      description: 'Estructuro la información y flujos',
      icon: 'Grid'
    },
    {
      step: '06',
      title: 'Diseño Visual',
      description: 'Aplico identidad visual y detalles',
      icon: 'Palette'
    },
    {
      step: '07',
      title: 'Prototipado',
      description: 'Creaprototipos interactivos',
      icon: 'Zap'
    },
    {
      step: '08',
      title: 'Testing',
      description: 'Valido con usuarios reales',
      icon: 'CheckCircle'
    },
    {
      step: '09',
      title: 'Iteración',
      description: 'Refino basado en feedback',
      icon: 'RefreshCw'
    }
  ],

    experience: [
      {
      id: 1,
      company: 'Comunidad de MI',
      position: 'Investigador UX y Desarrollador Frontend',
      year: '2026 - Actualidad',
      description: 'Participé en procesos de investigación de usuarios para identificar necesidades y oportunidades de mejora dentro de la comunidad. Además, desarrollé minitests y herramientas web utilizando React, contribuyendo al diseño, implementación y validación de experiencias digitales centradas en el usuario.'
      },
      {
      id: 2,
      company: 'Uber',
      position: 'UI Designer',
      year: '2026 - Actualidad',
      description: 'Responsable del diseño de interfaces en Figma, incluyendo la construcción de componentes reutilizables, foundations, sistemas de color, tipografía y documentación visual. Colaboré en la creación y mantenimiento de un sistema de diseño consistente para garantizar escalabilidad y coherencia en la experiencia de usuario.'
      },
      {
      id: 3,
      company: 'TuPlata',
      position: 'UX Researcher y Product Designer',
      year: '2025 - 2026',
      description: 'Participé en la investigación y validación de una solución fintech enfocada en educación financiera para jóvenes. Realicé entrevistas, pruebas con usuarios, análisis de necesidades y desarrollo de prototipos de alta fidelidad para evaluar la viabilidad y experiencia de la aplicación antes de su implementación.'
      },
      {
      id: 4,
      company: 'Planea',
      position: 'Investigador, Editor de Video y Diseñador de Interfaces',
      year: '2025',
      description: 'Estuve a cargo de la investigación y recopilación de documentación para el proyecto, así como del desarrollo de contenido audiovisual y videos promocionales. También participé en el diseño y desarrollo de interfaces digitales orientadas a mejorar la comunicación y presentación de la información.'
      },
      {
      id: 5,
      company: 'La Hojarasca',
      position: 'Gestión de Redes Sociales y Contenido Audiovisual',
      year: '2023 - 2025',
      description: 'Gestioné redes sociales y estrategias de comunicación digital para aumentar la visibilidad del negocio. Desarrollé contenido audiovisual, administré campañas publicitarias en Instagram y Meta Ads, y apoyé la promoción de eventos mediante fotografía, video y marketing digital.'
      }
    ],


  education: [
    {
      id: 1,
      institution: 'Universidad Icesi',
      degree: 'Diseño de Medios Interactivos',
      graduation: 'Junio 2027',
      current: true
    }
  ],

  contact: {
    title: 'Vamos a conectar',
    description: 'Estoy siempre abierto a nuevas oportunidades, preguntas o simplemente para charlar sobre diseño.',
    email: 'samuelortizguevara@gmail.com',
    links: [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/samuel-ortiz-guevara-8585b13b8/',
        icon: 'Linkedin'
      },
      {
        label: 'Behance',
        url: 'https://www.behance.net/samuelortizg',
        icon: 'ExternalLink'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/Samuelog1201',
        icon: 'Github'
      }
    ]
  }
}
