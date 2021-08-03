"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  global: {
    componenteFormativo: 'Presupuesto operativo',
    descripcionCurso: 'Se definen conocimientos básicos sobre el presupuesto como herramienta que permite determinar si la planificación administrativa es viable, sostenible y rentable; así como los tipos de presupuestos, su importancia en la gestión, control y planificación para alcanzar los objetivos, por medio de la estimación cuantitativa del plan de acción y la determinación de las estrategias comerciales, económicas y financieras. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png')
  },
  menuPrincipal: {
    menu: [{
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio'
    }, {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true
    }, {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Presupuesto',
      desarrolloContenidos: true,
      subMenu: [{
        icono: 'far fa-file-alt',
        numero: '1.1',
        titulo: 'Generalidades',
        hash: 't_1_1'
      }, {
        icono: 'far fa-file-alt',
        numero: '1.2',
        titulo: 'Clasificación del presupuesto',
        hash: 't_1_2'
      }]
    }, {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Presupuesto operativo',
      desarrolloContenidos: true,
      subMenu: [{
        icono: 'far fa-file-alt',
        numero: '2.1',
        titulo: 'Presupuesto de ventas',
        hash: 't_2_1'
      }, {
        icono: 'far fa-file-alt',
        numero: '2.2',
        titulo: 'Presupuesto de producción',
        hash: 't_2_2'
      }, {
        icono: 'far fa-file-alt',
        numero: '2.3',
        titulo: 'Presupuesto de gastos de operación',
        hash: 't_2_3'
      }, {
        icono: 'far fa-file-alt',
        numero: '2.4',
        titulo: 'Metodología de elaboración',
        hash: 't_2_4'
      }]
    }, {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Presupuesto financiero',
      desarrolloContenidos: true
    }],
    subMenu: [{
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario'
    }, {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario'
    }, {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias'
    }, {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip'
    }, {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos'
    }]
  },
  referencias: [{
    referencia: 'Araújo, A., D. (2012). Presupuestos empresariales: eje de la planeación financiera. Editorial Trillas.'
  }, {
    referencia: 'Ministerio de Hacienda y Crédito Público. (2020). Aspectos generales del proceso presupuestal colombiano.',
    link: '/downloads/Lineamiento_Ministerio-de-Hacienda-y-Credito-Publico.pdf'
  }, {
    referencia: 'Ramírez, M., C. (2011). Los presupuestos: sus objetivos e importancia. Revista Cultural Unilibre, (2), 74-84.'
  }],
  glosario: [{
    termino: 'Administración',
    significado: 'proceso de planificar, organizar, dirigir y controlar el uso de los recursos y las demás actividades, con el fin de lograr los objetivos o metas de la organización de forma eficiente y eficaz.'
  }, {
    termino: 'Control',
    significado: 'función administrativa que abarca el proceso de medición y evaluación del desempeño, a fin de adoptar las medidas correctivas necesarias, que debe ser un proceso permanente y regulador.'
  }, {
    termino: 'Estados financieros',
    significado: 'informes financieros o de cuentas anuales que, por disposición legal, deben presentar las empresas para mostrar su situación económica y financiera durante un periodo determinado.'
  }, {
    termino: 'Estrategia Margen de rentabilidad bruto',
    significado: 'herramienta de dirección que proporciona procedimientos y técnicas con fundamento científico que, aplicadas de forma permanente, permiten mejorar las relaciones de la organización y su entorno. buscando siempre cumplir la satisfacción de las necesidades de sus clientes y el logro de objetivos'
  }, {
    termino: 'Margen rentabilidad neta',
    significado: 'representa el margen de utilidad obtenido sobre las ventas, donde sólo se recupera el costo de ventas.'
  }, {
    termino: 'Meta',
    significado: 'representa el margen de utilidad obtenido sobre las ventas, una vez cubierto los impuestos y las reservas.'
  }, {
    termino: 'Objetivo',
    significado: 'término definido para demostrar el cumplimiento de una meta, estas se complementan con los objetivos definidos en la estrategia.'
  }, {
    termino: 'Política',
    significado: 'enunciado de un deseo y las acciones concretas que se proponen para alcanzarlo. Este debe ser claro, medible y observable. define de forma más abstracta y cualitativamente, lo que pretende lograr'
  }],
  complementario: [{
    texto: 'Contabilidad de costo en alta gerencia	Polo, G., B. (2017). Contabilidad de costos en la alta gerencia: teórico-práctico. Grupo Editorial Nueva Legislación SAS.',
    tipo: 'e-Libro',
    link: 'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/70840'
  }],
  creditos: {
    liderEquipo: [{
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
      centro: 'Dirección General'
    }],
    contenidoInstruccional: [{
      nombre: 'Hernando Rodríguez Figueroa',
      cargo: 'Coordinador de Formación Virtual',
      centro: 'Centro de Servicios Financieros - Regional Distrito Capital'
    }, {
      nombre: 'Maryuri Agudelo Franco',
      cargo: 'Diseñadora instruccional',
      centro: 'Centro de Diseño y Metrología - Regional Distrito Capital'
    }, {
      nombre: 'Vilma Lucía Perilla Méndez',
      cargo: 'Revisora metodológica y pedagógica',
      centro: 'Centro de Gestión Industrial - Regional Distrito Capital'
    }, {
      nombre: 'José Gabriel Ortiz Abella',
      cargo: 'Corrector de estilo',
      centro: 'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital'
    }],
    desarrolloProducto: [{
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
      centro: 'Centro Industrial del Diseño y la Manufactura - Regional Santander'
    }, {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
      centro: 'Centro de Comercio y Servicios - Regional Tolima'
    }, {
      nombre: 'Luis Zenen Arevalo Mantilla',
      cargo: 'Diseño web',
      centro: 'Centro Industrial del Diseño y la Manufactura - Regional Santander'
    }, {
      nombre: 'Jorge Leonardo Camacho Pardo',
      cargo: 'Desarrollo Front-End',
      centro: 'Centro Industrial del Diseño y la Manufactura - Regional Santander'
    }, {
      nombre: '',
      cargo: 'Validación de diseño y contenido',
      centro: 'Centro Industrial del Diseño y la Manufactura - Regional Santander'
    }],
    gestoresRepositorio: [{
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: 'Validación y vinculación en plataforma LMS',
      centro: 'Centro de Comercio y Servicios - Regional Tolima'
    }]
  } // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],

};
exports["default"] = _default;