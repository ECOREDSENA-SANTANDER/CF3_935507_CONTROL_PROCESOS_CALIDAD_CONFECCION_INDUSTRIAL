<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El mantenimiento preventivo y correctivo de la maquinaria es fundamental para el desarrollo de procesos de confección industrial eficientes, ya que permite asegurar el funcionamiento óptimo de las piezas y mecanismos que intervienen en la costura. La integración de la descripción técnica de los componentes junto con la correcta identificación de puntadas y costuras bajo las normas internacionales ISO 4915 y ISO 4916 influye directamente en la calidad del producto terminado, la reducción de desperdicios y la productividad de la línea.

    p.mb-5 El uso de técnicas adecuadas de diagnóstico de fallas, la ejecución de mantenimientos autónomos y la implementación de un plan de mantenimiento estructurado contribuyen a prevenir defectos de calidad y minimizar los tiempos de inactividad. El fortalecimiento de estas capacidades técnicas y de supervisión permite una toma de decisiones basada en estándares de estandarización, garantizando el cumplimiento de los objetivos de mejora continua dentro de la organización.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
