<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Partes de la maquinaria de confección
    
    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-12
        img(src='@/assets/curso/tema1/1.png', alt='')
    
    p.mb-0 En relación con el avance en tecnología, se han desarrollado piezas electromecánicas y electrónicas, lo cual diferencia cada máquina en su funcionamiento, así como en el mantenimiento requerido.
    

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Partes, mecanismos y funciones de las máquinas de confección
    
    p.mb-4 Las partes de las máquinas están compuestas por piezas que junto con otros mecanismos realizan funciones específicas. Es necesario identificar las piezas mecánicas para entender el funcionamiento de los mecanismos y detectar los daños en las máquinas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Figura 1. 
          | Partes de las máquinas de confección
        .bg1.p-lg-5.p-md-4.p-3.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-7
              img(src='@/assets/curso/tema1/2.svg', alt='Este diagrama detalla los componentes internos y el funcionamiento mecánico de una máquina de coser industrial. La ilustración muestra la interconexión entre el árbol superior e inferior a través de un eje vertical y un sistema de piñones, permitiendo la sincronización entre el tirahílos, la barra de agujas en la cabeza y el movimiento del garfio y los dientes de arrastre en la base. El esquema identifica piezas clave como el volante, la biela, el cigüeñal y los diversos ejes que transmiten el movimiento rotativo y lineal necesario para el proceso de costura.')
            .col-lg-5
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-6.col-md-6.col-6
                  p.mb-0 1. Brazo vertical
                  p.mb-0 2. Brazo horizontal
                  p.mb-0 3. Cabeza
                  p.mb-0 4. Plato o Cama
                  p.mb-0 5. Correa
                  p.mb-0 6. Polea
                  p.mb-0 7. Volante
                  p.mb-0 8. Árbol superior
                  p.mb-0 9. Excéntrico
                  p.mb-0 10. Biela A
                  p.mb-0 11. Biela B
                  p.mb-0 12. Tirahílos
                  p.mb-0 13. Barra de agujas
                  p.mb-0 14. Polea
                .col-lg-6.col-md-6.col-6
                  p.mb-0 17. Árbol inferior
                  p.mb-0 18. Cigüeñal
                  p.mb-0 19. Biela
                  p.mb-0 20. Eje de dientes
                  p.mb-0 21. Extremo del cigüeñal
                  p.mb-0 22. Biela
                  p.mb-0 24. Eje de dientes
                  p.mb-0 25. Soporte de dientes
                  p.mb-0 31. Garfio
                  p.mb-0 32. Piñón
                  p.mb-0 33. Piñón
                  p.mb-0 34. Eje vertical
                  p.mb-0 35. Piñones
                  p.mb-0 36. Piñones
    
    p.mb-4 Las funciones de algunas partes que componen los mecanismos de las máquinas son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/tema1/3.png', alt='')
      .col-lg-6
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Árbol")
            .col-lg-12
              p.mb-0 Elemento mecánico que toma y trasfiere movimiento girando sobre sí mismo, en revoluciones completas.
          .row.justify-content-center.align-items-center.mb-0(numero="2" titulo="Barra")
            .col-lg-12
              p.mb-0 Elemento mecánico que toma y transfiere movimiento sin girar, trabaja en sentido rectilíneo; según su forma puede ser, cuadrada, circular, rectangular, entre otras.
          .row.justify-content-center.align-items-center.mb-0(numero="3" titulo="Biela")
            .col-lg-12
              p.mb-0 Elemento mecánico que se utiliza para transmitir movimiento, convirtiendo de circular u oscilante a rectilíneo u oscilante. La biela se compone de cabeza y pie, la cabeza recibe el movimiento, la singularidad de la biela es que ni el pie ni la cabeza giran, su movimiento es oscilante.
          .row.justify-content-center.align-items-center.mb-0(numero="4" titulo="Cigüeñal")
            .col-lg-12
              p.mb-0 Elemento mecánico que toma y transfiere movimiento circular y lo transfiere por el muñón. Por medio del cigüeñal cambia el movimiento circular en oscilante.
          .row.justify-content-center.align-items-center.mb-0(numero="5" titulo="Eje")
            .col-lg-12
              p.mb-0 Elemento mecánico que toma y transfiere movimiento oscilante, sin completar las revoluciones.
          .row.justify-content-center.align-items-center.mb-0(numero="6" titulo="Excéntrica")
            .col-lg-12
              p.mb-0 Elemento mecánico que convierte el movimiento de circular uniforme, en rectilíneo u oscilante, se identifica al tener su centro de giro fuera de su centro geométrico y su superficie de contacto (trabajo), completamente uniforme.
          .row.justify-content-center.align-items-center.mb-0(numero="7" titulo="Leva")
            .col-lg-12
              p.mb-0 Elemento mecánico que sirve para transferir movimiento, cambiar de circular en rectilíneo u oscilante o de oscilante en rectilíneo. Se identifica por tener su superficie de trabajo (contacto), con anormalidades, además puede tener su centro de giro fuera o dentro del centro geométrico.
          .row.justify-content-center.align-items-center.mb-0(numero="8" titulo="Rueda dentada o piñón")
            .col-lg-12
              p.mb-0 Elemento mecánico en forma de rueda dentada, el cual se emplea para transferir movimiento circular mediante otros elementos. El piñón puede ser pequeño y se engrana con un piñón más grande.
          .row.justify-content-center.align-items-center.mb-0(numero="9" titulo="Polea")
            .col-lg-12
              p.mb-0 Rueda plana o acanalada que dependiendo de la función requerida puede ser fijo o móvil hacia un eje o árbol.
          .row.justify-content-center.align-items-center.mb-0(numero="10" titulo="Volante")
            .col-lg-12
              p.mb-0 Rueda cuyo movimiento puede activarse con las manos para mover un mecanismo, controlar una máquina. Fijado al extremo casi siempre de un árbol para controlar su movimiento.

    .tarjeta.color-acento-contenido.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/4.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-2 Manual técnico
              p.mb-0 Para ampliar los conocimientos sobre las partes y funcionamiento de la máquina, puede consultar el manual técnico complementario.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_mecanico.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Mecanismos de las máquinas de confección industrial

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-3
        img(src='@/assets/curso/tema1/5.png', alt='')
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5
            img(src='@/assets/curso/tema1/6.svg', alt='')
          .col-lg-7
            .bg2.p-lg-5.p-4
              p.mb-0.text-white.mb-lg-3.mt-lg-3 Son el resultado de la unión y acople de varias piezas y elementos para desarrollar una función, como son el tensor del hilo, el transporte, el formador de lazada. Para generar el movimiento de la máquina se requiere la unión de varios elementos mecánicos como el árbol, excéntrico, eje, polea, piñones, volante, barra, chumacera, chaveta, buje, pernos, pasadores, acoples, entre otros.
        p.mb-0.mt1 En la creación de la máquina para generar el movimiento se requería del pedal para accionar el movimiento o detenerla, luego que se diera la energía eléctrica, se dio paso al desarrollo del motor para las máquinas de confección con el fin de industrializar los procesos; dependiendo de su capacidad de producción las máquinas se clasifican en industriales o familiares.





    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Clasificación de puntadas y costuras



</template>

<script>
export default {
  name: 'Tema1',
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
