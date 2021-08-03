<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-around.align-items-center
      .col-8
        figure.mb-5
          img(src='@/assets/tema1/img-intro.svg', alt='Marketing')
    
    p En este componente se desarrollan las generalidades del presupuesto y se analiza el procedimiento para su planificación. A través del desarrollo de cada uno de los temas, se podrán adquirir las herramientas necesarias para un presupuesto operativo eficiente frente a las expectativas de la administración, permitiendo tener una herramienta para la adecuada toma de decisiones. 

    p #[strong Notas aclaratorias:] las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto, no se numeran y la elaboración es propia.
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
