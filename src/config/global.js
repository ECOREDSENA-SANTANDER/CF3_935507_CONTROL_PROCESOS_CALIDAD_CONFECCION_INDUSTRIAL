export default {
  global: {
    Name: 'Mantenimiento en máquinas de confección',
    Description:
      'Describir las piezas y mecanismos que conforman las máquinas y su funcionamiento. Identificar el tipo de puntada de cada máquina según las Normas Internacionales de Estandarización ISO 4915, así mismo los diferentes tipos de costuras bajo la norma ISO 4916. Diagnosticar fallas que afectan la calidad de la costura y establecer la importancia de mantenimientos autónomos y necesidades de capacitación. Seleccionar la solución adecuada según la falla presentada en la costura, de acuerdo con el nivel de problema presentado. Integrar la importancia del plan de mantenimiento en los objetivos de mejora continua de la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Partes de la maquinaria de confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Partes, mecanismos y funciones de las máquinas de confección',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Mecanismos de las máquinas de confección industrial',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación de puntadas y costuras',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mantenimiento máquinas de confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Partes, mecanismos y funciones de las máquinas de confección',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Plan de mantenimiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas de confección',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF3_935507_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Control visual',
      significado:
        'técnica de comunicación donde la información se transmite por medio de señales en los que se utilice el sentido de la vista, con el fin de controlar algún proceso. También conocido como Andón, en japones traduce lámpara.',
    },
    {
      termino: '<em>Kaizen</em>',
      significado:
        'palabra formada por dos vocablos japoneses, cambio y bueno, significa mejora continua, actividades que se desarrollan con el propósito de perfeccionar cada vez más los procesos en la empresa.',
    },
    {
      termino: '<em>Kanban</em>',
      significado:
        'en japonés traduce tarjetas visuales. Técnica de comunicación en la que se usan tarjetas para informar sobre las actividades de mantenimiento y en los demás procesos de la empresa.',
    },
    {
      termino: 'Mantenimiento autónomo',
      significado:
        'actividades sencillas que requieren de poco entrenamiento y pueden ser desarrolladas por el operario de la máquina, para prevenir la aparición de fallas en las máquinas y equipos.',
    },
    {
      termino: '<em>SMED</em>',
      significado:
        'del inglés Single Minute Exchange of Die, es decir, el cambio de una herramienta o equipo, en un solo digito de tiempo.',
    },
    {
      termino: 'Tiempos muertos',
      significado:
        'lapso en el cual el personal no realiza ninguna operación en producción.',
    },
    {
      termino: 'Tomador de lazada',
      significado:
        'elemento mecánico que junto con la aguja se encarga de formar la puntada. Estos elementos son auxiliados algunas veces en la formación de la puntada por otros elementos mecánicos.',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Nelftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'CENTRO INDUSTRIAL DEL DISEÑO Y LA MANUFACTURA - Regional Santander',
        },
        {
          nombre: 'Sandra Cecilia Gutiérrez',
          cargo: 'Experta temática',
          centro:
            'CENTRO INDUSTRIAL DEL DISEÑO Y LA MANUFACTURA - Regional Santander',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Gestión Empresarial - Regional Distrito Capital',
        },
        {
          nombre: 'Oscar Andrés Fernández Urrego',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica – CENIGRAF - Regional Bogotá',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
