<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-0         
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-2.col-md-2.col-5
            img.mb-lg-0.mb-md-0.mb-4.img-t.img-a(src='@/assets/curso/intro/2.svg')
          .col-lg-10.col-md-10
            p.mb-0 Los instrumentos más importantes para la confección industrial son las máquinas de coser, conocer sus partes, el mantenimiento y cuidado que requieren permitirá un buen funcionamiento y así mismo una adecuada ejecución de la producción.
        p.mb-0 Con el estudio de este material usted podrá identificar y describir las piezas que conforman una máquina industrial, así como diagnosticar las fallas que se pueden presentar durante la producción, y su posible solución; de forma que como supervisor planee el tipo y frecuencia de mantenimientos necesarios como instrumento de mejora continua que le permitan cumplir con los objetivos de producción, no solo en términos de tiempo, sino bajo los lineamientos de las normas de estandarización ISO 4915 e ISO 4916.


</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass"></style>
