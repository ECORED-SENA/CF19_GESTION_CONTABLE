<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Presupuesto financiero
    p.mb-5 Los presupuestos financieros pueden clasificarse en:   

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10.justify-content-md-center.align-self-center
        .crd_01.mb-5
          .crd_01__icon
            img(src="@/assets/tema3/img-1.svg", alt="alt").class          
          .crd_01__txt
            h5 Presupuesto de inversiones:
            p Conformado por los activos fijos y las inversiones estratégicas que los administradores proyectan adquirir durante el periodo de presupuestación. Un activo fijo se puede comprar para reponer otro que ya no está en condiciones de prestar el servicio para el cual fue adquirido, para mejorar la tecnología del activo actual o porque obedece a un programa de expansión de la capacidad instalada.   
        .crd_01.mb-5
          .crd_01__icon
            img(src="@/assets/tema3/img-2.svg", alt="alt").class          
          .crd_01__txt
            h5 Presupuesto de caja: 
            p Es la planeación de todas las entradas y salidas de dinero durante un período futuro determinado. Es una herramienta financiera que permite apoyar a los socios y a la gerencia en la toma de decisiones sobre niveles de inversión, financiación y pago de dividendos.
        .crd_01.mb-5
          .crd_01__icon
            img(src="@/assets/tema3/img-3.svg", alt="alt").class          
          .crd_01__txt
            h5 Presupuesto de financiación: 
            p Incorpora la planeación de las fuentes de financiación de la empresa. Estas fuentes pueden ser internas o externas. Las internas tienen que ver con los recursos provenientes de los socios mediante emisión de acciones comunes, acciones preferentes, aportes de cuotas partes de interés y retención de utilidades. Las fuentes externas se refieren a los recursos provenientes de contratación de deuda financiera con entidades financieras o por emisión de bonos o papeles comerciales. De este presupuesto se genera la estructura financiera y de capital de la empresa. 

    h5.mb-5 Gastos financieros 

    p.mb-5 La proyección de gastos financieros representa la estimación de los costos que genera a la empresa, el uso de fuentes externas de financiamientos para sus actividades para facilitar las transacciones provenientes del curso del negocio por tener disponible y seguro el efectivo de la empresa. 

    p El cálculo de este presupuesto depende del resultado estimado de los otros presupuestos tratados, ya que depende del total de transacciones y recursos a financiar. 





</template>

<script>
export default {
  name: 'Tema3',
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
