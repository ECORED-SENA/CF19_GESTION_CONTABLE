<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Presupuesto

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.justify-content-md-center.align-self-center
        figure
          img.img-450.mb-2(src="@/assets/tema1/img-1.svg")
    p.mb-5 El presupuesto es un estado de las entradas y salidas de efectivo planeadas de la empresa que se utiliza para calcular sus necesidades de efectivo a corto plazo, dedicando especial atención a la planificación de los excedentes y faltantes de caja. Se diseña para cubrir un período de un año, dividido en intervalos más pequeños. El número y tipo de intervalos depende de la naturaleza de la empresa, puesto que muchas empresas se enfrentan a un patrón de flujo de efectivo estacional, el presupuesto se presenta con una frecuencia mensual.
    br
    #t_1_1.titulo-segundo
      h2 1.1 Generalidades
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6.justify-content-md-center.align-self-center
        p El término presupuesto se escucha a menudo en los medios de comunicación y en la vida cotidiana cuando las personas van a realizar un viaje, planificar sus gastos mensuales o proyectar sus inversiones o metas; en este proceso se determina el tiempo, el dinero y los insumos requeridos para lograr las metas.
        p El presupuesto tiene presencia desde cuando los egipcios lo usaban en la proyección del recaudo de los impuestos de los pueblos conquistados; pero solo hasta finales del siglo XVIII en Inglaterra, y gracias al parlamento británico, el presupuesto fue implementado como herramienta administrativa de planeación y control para controlar los procesos encaminados al logro de los objetivos de las empresas tanto públicas como privadas. 
        p Un presupuesto es un plan expresado en términos financieros con respecto a las operaciones, inversiones y financiamiento de una empresa, durante un periodo determinado, con el fin de lograr los objetivos fijados en el plan estratégico de la organización. 
      .col-lg-6.justify-content-md-center.mb-4 
        figure
          img.img-350.mb-2(src="@/assets/tema1/img-2.svg")    

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10.justify-content-md-center.align-self-center        
        .cajon.color-primario.p-4.mb-4.fond2
            .h4 Importancia del presupuesto
            p Es una herramienta de planeación, organización, dirección y control que facilita la toma de decisiones, el seguimiento y control de los procesos, la orientación a los colaboradores en la ejecución de procesos, además, aporta al desarrollo de estrategias para la maximización del valor de la empresa y para disminuir los riesgos tanto financieros como operacionales.

    .h5.mb-4 Características generales del presupuesto
    .row.justify-content-around.align-items-center.mb-5.mx-md-4
      .col-lg-10.justify-content-md-center.align-self-center
        .ul.lista-ul--color
            li.mb-0 
              i.fas.fa-check
              p Cuantifica en términos monetarios los planes operativos de la empresa.
            li.mb-0
              i.fas.fa-check
              p Se presenta de acuerdo con la normatividad contable y financiera, las normas internacionales y políticas empresariales vigentes. 
            li.mb-0 
              i.fas.fa-check
              p En su elaboración se integra de manera general a la organización, puesto que se reconoce la interacción de cada área y de todos los niveles en el cumplimiento del objeto social de la compañía (Ramírez, 2011).
            li.mb-0 
              i.fas.fa-check
              p Se elabora para períodos regularmente de un año.
    .h5.mb-4 Etapas o ciclo presupuestal
    p Es el conjunto de fases que las empresas deben desarrollar periódicamente desde la planeación del presupuesto hasta el control presupuestal. 
    p Las fases son las siguientes:

    PasosA.color-acento-contenido.mb-5(tipo="l")
        div
          p #[strong Planeación:] esta etapa comprende el análisis de las variaciones y ajustes de la ejecución del presupuesto del periodo anterior. Aquí se analizan los factores internos y externos a la empresa para determinar las oportunidades, amenazas, fortalezas y debilidades. También se determinan y aprueban los objetivos empresariales y las estrategias para alcanzarlos, las políticas de ingresos, costos, gastos, inversión y financiación, así como la cantidad y perfiles requeridos de los colaboradores que van a desarrollar las actividades.

        div
          p #[strong Elaboración:] en esta fase se convierten los planes y programas operativos en cifras monetarias, de tal manera que se cuantifiquen las ventas, costos, gastos, inversiones a realizar y la financiación requerida. Una vez se tengan las cifras presupuestales, se elabora el informe presupuestal con destino a la gerencia, para su aprobación final y publicación.

        div
          p #[strong Ejecución:] en esta fase continúa la ejecución de los planes trazados y la gerencia integra a las diferentes áreas con las metas trazadas en el presupuesto, con la finalidad de interrelacionar la importancia de la efectividad del desarrollo de sus funciones en la operación y cumplimiento del presupuesto. 
          p Adicionalmente, se determinan las metodologías y herramientas a utilizar para hacerle seguimiento a la ejecución del presupuesto, así como las estrategias para comunicar y motivar a los líderes y colaboradores en sus funciones. 

        div
          p #[strong Control presupuestal:] aquí lo primero que se realiza es la unificación de criterios sobre cómo realizar los procesos y presentar los informes parciales por cada área, con fechas e información requerida, con el fin de identificar inconvenientes o falencias que estén afectando la ejecución del presupuesto y de esa manera realizar los ajustes necesarios oportunamente.
          p La gerencia tiene la tarea de evaluar dentro de los informes parciales los avances ejecutados, para medir el nivel de cumplimiento de las metas frente al tiempo proyectado y actualizar procesos de ser necesario. 
    separador
    #t_1_2.titulo-segundo
      h2 1.2 Clasificación del presupuesto
    p Los presupuestos pueden clasificarse según la flexibilidad, el período, el sector empresarial y el campo de aplicación, como se explica a continuación: 

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul fond1")
      .row(titulo="Según la flexibilidad")
        .col-md-4.mb-4.mb-md-0
          figure
            img.mx-5.img-220(src='@/assets/tema1/img-3.svg')
        .col-md-8
          p #[strong Rígidos:] se elaboran para un único volumen de producción, el cual, una vez alcanzado, no permite ajustes ya que tienen como función generar un control anticipado sin tener en cuenta variaciones en el entorno económico, político o social. Anteriormente eran muy utilizados en el sector público.
          p #[strong Flexibles:] se elaboran para diferentes niveles de producción, tienen en cuenta el comportamiento de los indicadores macroeconómicos como el PIB, la tasa de cambio y la inflación, al igual que, movimientos políticos y sociales a nivel nacional e internacional, por lo cual se pueden adaptar fácilmente a las circunstancias cambiantes del entorno. Son de gran aceptación en el campo de la presupuestación moderna, pues son dinámicos, adaptativos, pero complicados y costosos.
      div(titulo="Según el periodo")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img.mx-5.img-220(src='@/assets/tema1/img-4.svg')
          .col-md-8
            p #[strong A corto plazo:] son los que se realizan para cubrir la planeación de la empresa en periodos de hasta un año. Constituyen el típico proceso de presupuestación y exigen que se calculen con el más mínimo detalle todos los rubros que incidirán en la elaboración de los estados financieros de la empresa.
            p #[strong A largo plazo:] constituyen el denominado proceso de proyección de estados financieros que tiene por objeto medir el efecto de las alternativas de decisión que tomen los administradores sobre la situación financiera de la empresa en un plazo mayor a un año (mediano y largo plazo). 
      div(titulo="Según sector empresarial")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img.mx-5.img-220(src='@/assets/tema1/img-5.svg')
          .col-md-8
            p #[strong Presupuestos del sector público:] es la herramienta que le permite al sector público cumplir con la producción de bienes y servicios públicos para satisfacer las necesidades de la población de conformidad con el rol asignado al Estado en la economía y sociedad del país (Ministerio de Hacienda y crédito Público, 2020).
            p El control presupuestal para las entidades del Estado lo efectúa la Contraloría General de la República, ante quien tienen que rendir cuentas los administradores de dichas entidades, sometiéndose, en algunas ocasiones, a procesos disciplinarios que terminan en muchos casos en destitución y pérdida de la libertad.
            p La metodología de elaboración de este tipo de presupuestos consiste en calcular el valor de los gastos e inversiones que se van a realizar durante el periodo y luego se planea la forma cómo se obtendrán los recursos que pueden ser recaudando impuestos, recurriendo a empréstitos o emitiendo papel moneda. 
            p #[strong Presupuestos del sector privado:] son elaborados por empresas particulares. Al contrario de los presupuestos públicos, los del sector privado calculan primero la cantidad de recursos provenientes del desarrollo de la actividad principal del negocio como son las ventas de contado, el recaudo de cartera y la financiación con proveedores, luego determinan el monto de la inversión requerida tanto en activos, como la necesaria para funcionar (costos y gastos) y finalmente, se calculan los requerimientos de financiación con pasivo financiero y con patrimonio.
      div(titulo="Según el campo de aplicación")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img.mx-5.img-220(src='@/assets/tema1/img-6.svg')
          .col-md-8
            p #[strong Operativos:] incluye los presupuestos de ventas, de producción y de gastos de operación. 
            p #[strong Financieros:] involucra los presupuestos de caja o tesorería, inversión y financiación.          
            p #[strong Presupuesto maestro:] incluye el presupuesto operativo y financiero. Se elabora generalmente para períodos anuales, pero se recomienda presupuestar mensualmente y al final del año se analizan los datos con el fin de elaborar los estados financieros. Por medio de esta herramienta, los administradores pueden planificar a la compañía en todas y cada una de sus áreas.
            p Para elaborar el presupuesto maestro se debe tener en cuenta la planeación estratégica aprobada por la gerencia. El presupuesto representa una herramienta para dirigir la empresa hacia los objetivos trazados.








  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
