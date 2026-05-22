<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mantenimiento máquinas de confección

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-12
        img(src='@/assets/curso/tema2/1.png', alt='')

    p.mb-4 La metodología Mantenimiento Productivo Total (TPM), busca en pro del trabajo en equipo, procesos cada vez más automatizados, mediante la articulación y participación en las actividades de mantenimiento, en donde el operario de la maquinaria sea corresponsable del mantenimiento, además de las personas que intervienen en el proceso productivo como supervisores, inspectores de calidad, jefe de planta, con el fin de mejorar la efectividad de todos los equipos y disminuir tiempos muertos relacionados en la operación de las máquinas.

    p.mb-0 Las metas en el mantenimiento son de cero paros, cero fallas y cero accidentes. La tarea del mantenimiento no es solo corregir la falla sino descubrir anormalidades que no son visibles para que sea total.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Partes, mecanismos y funciones de las máquinas de confección
    
    p.mb-5 Es posible establecer diferentes clasificaciones de acuerdo con la función y etapa que cumpla dentro del proceso productivo:

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Mantenimiento correctivo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        p.mb-4 El mantenimiento correctivo es el que se realiza durante el proceso de producción y a corto plazo, da una solución en el mínimo de tiempo y la máquina sigue trabajando.
        .bg7.p-4.p-lg-5
          p.mb-0.mx-lg-2.mt-lg-1 Para realizar un adecuado mantenimiento correctivo, se debe diagnosticar la causa del daño, para lo cual se pueden utilizar técnicas como los 5 porqués y el diagrama de causa y efecto, que se estudiará posteriormente y la técnica de SMED una herramienta de mejoramiento continuo que se aplica para el cambio de una máquina, en el montaje de una producción con el fin de reducir el tiempo muerto.
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(src='@/assets/curso/tema2/2.svg' alt='AvatarTop')
    
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/3.png', alt='')
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5
            img(src='@/assets/curso/tema2/4.svg', alt='')
          .col-lg-7
            .bg8.p-lg-5.p-4.cen
              p.mb-0.text-white Las causas pueden ser ocasionadas por fallas del equipo, en la preparación y ajuste de la maquinaria, el trabajo en vacío o paros menores, velocidad reducida, defectos en el proceso de confección y pérdidas por arranque.
        p.mb-0.mt2 Las actividades complejas de mantenimiento con cierto grado de dificultad, necesarias para corregir la falla son realizadas por el equipo especializado en mantenimiento. Algunas de las correcciones más comunes son la sincronización de los tiempos en las máquinas, el ajuste de la altura de dientes, el ajuste de la altura de la barra, el cambio de piezas como el gancho rotatorio, loopers, barras de pie prénsatela o aguja y sistema tensor.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Mantenimiento preventivo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.t22
          h5 Tabla 1.
          | Guía de mantenimiento autónomo
        .tabla-a.tab1
          table
            thead
              tr
                th Descripción del paso
                th Acciones
                th Propósito
            tbody
              tr.bgr
                td 1. Limpieza básica de máquinas, equipos y planta
                td Remover defectos conforme técnica de las 5S.
                td Detectar anormalidades.
              tr
                td 2. Inspección básica
                td
                  p.mb-0 Examinar máquinas.
                  p.mb-0 Facilitar diagnóstico.
                  p.mb-0 Eliminar fuentes de suciedad y contaminación.
                td Diagnóstico del estado de la maquinaria.
              tr.bgr
                td 3. Estandarizar operaciones. (lubricación, ajustes, limpieza, etc.)
                td
                  p.mb-0 Usar listas de chequeo.
                  p.mb-0 Analizar problemas frecuentes.
                  p.mb-0 Entrenar al personal.
                td Generación de instructivos.
              tr
                td 4. Inspección general del equipo
                td Realizar entrenamiento en actividades de primer nivel.
                td Desarrollar el conocimiento de la maquinaria y su funcionamiento Mejorar las habilidades del personal en procesos de inspección.
              tr.bgr
                td 5. Inspección general autónoma
                td
                  p.mb-0 Analizar fallas.
                  p.mb-0 Determinar contramedidas.
                td Gestión temprana.
              tr
                td 6. Aseguramiento de la calidad del proceso
                td Conocer en profundidad la maquinaria y equipos.
                td
                  p.mb-0 Desarrollo del personal.
                  p.mb-0 Garantizar funcionamiento de la maquinaria.
              tr.bgr
                td 7. Control autónomo pleno
                td Utilizar de manera constante el mantenimiento autónomo.
                td Establecer como un hábito.

    .row.justify-content-center.align-items-start.mb-0      
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-2.col-md-2.col-5
            img.mb-lg-0.mb-md-0.mb-4.img-t.img-a(src='@/assets/curso/tema2/5.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 La limpieza y la lubricación son actividades básicas que contribuyen a cuidar la vida útil de la maquinaria, por lo cual se debe establecer la programación de la frecuencia en la limpieza de partes específicas como en el mecanismo de dientes, el cambio de aceite y la limpieza de tanques, sobre todo en el caso de máquinas mecánicas.
        p.mb-0 Para complementar el mantenimiento, es primordial la documentación del proceso para ejercer un control visual en el mantenimiento, algunos formatos como la agenda diaria de inspecciones, la programación de 5S, los tableros control de anormalidades, la ficha de cada máquina y las listas de chequeo son herramientas que facilitan este proceso.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/6.png', alt='')


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Plan de mantenimiento

    p.mb-4 La gestión e implementación organizada del mantenimiento contribuye directamente en la calidad de la producción. Así mismo, reduce los costos de mantenimiento. Se requiere planear el mantenimiento con el fin de garantizar el 100% de la disponibilidad de máquinas, equipos y plantas.

    p.mb-4 Los objetivos del plan de mantenimiento son:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-12
        .row.justify-content-center.align-items-stretch(data-aos="fade-right")
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 1
              p.text-center.mx-3 Asegurar procesos de producción estables y continuos.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 2
              p.text-center.mx-3 Prevenir paros no planeados de la línea.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 3
              p.text-center.mx-3 Apoyar el mantenimiento autónomo realizado por los operarios.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-botones.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 4
              p.text-center.mx-3 Enfocar al equipo de mantenimiento en las actividades especializadas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(src='@/assets/curso/tema2/7.svg' alt='AvatarTop')
      .col-lg-8
        p.mb-4 Se suele confundir el término puntada y costura, pero se debe tener en cuenta la diferencia; se habla de la puntada como el resultado del enlace de los hilos, y la costura consiste en varias puntadas en un material o puede ser para unir dos o más materiales.
        .bg9.p-4.p-lg-5
          p.mb-0.mx-lg-2 Aclarado lo anterior se necesitaron unas normas para concertar a nivel mundial los diferentes tipos de puntadas y costuras, identificando por medio de letras o de números según cada norma, lo cual facilita la comprensión de la ficha técnica de una máquina o de un producto en cualquier parte del mundo.
      
    p.mb-4 Los pasos que comprende el plan de mantenimiento se encuentran especificados a continuación, debe tenerse en cuenta que una vez se cumplen se evalúan y vuelve a iniciar su proceso:

    .row.justify-content-center.mb-0
      .col-lg-12
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            | Establecer prioridades de mantenimiento: identificar las máquinas con más problemas; en donde se gastan más los repuestos.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            | Eliminar puntos débiles: localizar partes del proceso que pueden afectar la producción; monitorear posibles mejoras y optimizar piezas de repuestos.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            | Estructurar un sistema de información: desarrollar un sistema de información mediante utilización de herramientas TIC.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 4
            | Implementar el mantenimiento planeado: controlar el proceso de inicio del plan mediante listas de chequeo y establecimiento de estándares o criterios de calidad. 
          li.d-flex
            .lista-ol--cuadro__vineta
              span 5
            | Aumento en la eficiencia del mantenimiento: implementar indicadores de gestión que muestren disminución de tiempo en la reparación de la maquinaria, tiempo de reacción, tiempos de arranque, mejorar inventario de repuestos, entre otros.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 6
            | Mejorar el mantenimiento planeado: incrementar disponibilidad de máquinas, incremento de ciclo de vida de la maquinaria.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 7
            | Programa de mantenimiento planeado: aplicación de mejorar continua (KAIZEN).


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Herramientas de confección

    p.mb-4 La selección y usos de las herramientas están directamente relacionadas con el diseño de los mecanismos y piezas de las máquinas y sus características como formas, tamaño y función.

    p.mb-4 Se pueden agrupar las herramientas en áreas según su utilidad, como se observa a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/8.png', alt='')
      .col-lg-8
        .tarjetaf.overflow-hidden.p-4.mb-0
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items.p-2.mb-0
              .col-lg-8
                h3.mb-4 Áreas de patronaje, trazo y corte
                ul.lista-ul.mb-0
                  li.d-flex.mb-1
                    i.fas.fa-bolt
                    p.mb-0 #[b Tijeras de tela entre 8” y 10”.]
                  li.d-flex.mb-1
                    i.fas.fa-bolt
                    p.mb-0 #[b Tijeras de papel de 8”.]
                  li.d-flex.mb-1
                    i.fas.fa-bolt
                    p.mb-0 #[b Rodaja para calcar patrones:] es una rueda con orillos punzantes que permite el calco del patrón.
                  li.d-flex.mb-0
                    i.fas.fa-bolt
                    p.mb-0 #[b Piqueteadora:] corta en los orillos del patrón en cartón cartulina para indicar puntos específicos del molde.
            .row.justify-content-center.align-items.p-2.mb-0
              .col-lg-8
                h3.mb-4 Áreas de patronaje, trazo y corte
                ul.lista-ul.mb-0
                  li.d-flex.mb-1
                    i.fas.fa-bolt
                    p.mb-0 #[b Pinza abre huecos:] utilizada para abrir orificios en forma redonda en los patrones o moldes.
                  li.d-flex.mb-1
                    i.fas.fa-bolt
                    p.mb-0 #[b Juego de reglas:] comprenden normalmente regla larga de 80 cm, escuadra a 60° de 54 cm, curva de cadera, curva de tiro, curva de sisa, sismómetro o de gota, curva francesa. También se usan curvígrafos y reglas en T.
                  li.d-flex.mb-0
                    i.fas.fa-bolt
                    p.mb-0 #[b Punzón metálico:] para señalar puntos ubicación de pinzas, por ejemplo.
            .row.justify-content-center.align-items.p-2.mb-0
              .col-lg-8
                h3.mb-4 Áreas de patronaje, trazo y corte
                ul.lista-ul.mb-0
                  li.d-flex.mb-1
                    i.fas.fa-bolt
                    p.mb-0 #[b Pinzas en diferentes tamaños:] se usan para prensar el bloque de las capas de tela.
                  li.d-flex.mb-1
                    i.fas.fa-bolt
                    p.mb-0 #[b Pesas: ]para evitar movimiento del bloque de las capas de tela del tendido.
                  li.d-flex.mb-1
                    i.fas.fa-bolt
                    p.mb-0 #[b Tiqueteadora:] usa tiquetes con adhesivo, se va imprimiendo información, luego se fijan en las piezas de las prendas para identificarlas.
                  li.d-flex.mb-0
                    i.fas.fa-bolt
                    p.mb-0 #[b Pulidor:] es una tijera ergonómica para cortar los hilos al retirar la pieza una vez se realice la costura.
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8
        .bg10.p-4.p-lg-5
          h3.mb-4.mx-lg-4 Área de confección
          ul.lista-ul.mb-0.mx-lg-4
            li.d-flex.mb-3
              i.fas.fa-bolt
              p.mb-0 #[b Destornilladores de pala:] la parte de la pala debe estar acorde a la medida del tornillo a trabajar, hablamos de pala media para soltar tornillo de barra de pie prénsatela o de soporte de aguja y de pala pequeño para trabajar el tornillo de la caja bobina.
            li.d-flex.mb-3
              i.fas.fa-bolt
              p.mb-0 #[b Destornilladores tipo bristol con medidas de 1/16” o 1,5 cm:] especiales para los tornillos sujetadores de aguja de fileteadora, recubridora, cerradora entre otras.
            li.d-flex.mb-3
              i.fas.fa-bolt
              p.mb-0 #[b Llaves bristol.]
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 #[b Llaves boca fija.]
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/10.png', alt='')

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
