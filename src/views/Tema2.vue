<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mantenimiento máquinas de confección




    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Partes, mecanismos y funciones de las máquinas de confección



    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Plan de mantenimiento


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Herramientas de confección


</template>

<script>
export default {
  name: 'Tema2',
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
