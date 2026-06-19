<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Partes de la maquinaria de confección
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")        
      .col-lg-12
        img(src='@/assets/curso/tema1/1.png', alt='')
    
    p.mb-0(data-aos="fade-left") En relación con el avance en tecnología, se han desarrollado piezas electromecánicas y electrónicas, lo cual diferencia cada máquina en su funcionamiento, así como en el mantenimiento requerido.
    

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Partes, mecanismos y funciones de las máquinas de confección
    
    p.mb-4(data-aos="fade-right") Las partes de las máquinas están compuestas por piezas que junto con otros mecanismos realizan funciones específicas. Es necesario identificar las piezas mecánicas para entender el funcionamiento de los mecanismos y detectar los daños en las máquinas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Figura 1. 
          | Partes de las máquinas de confección
        .bg1.p-lg-5.p-md-4.p-3.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-lg-0.mb-4
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
    
    p.mb-4(data-aos="fade-right") Las funciones de algunas partes que componen los mecanismos de las máquinas son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema1/3.png', alt='')
      .col-lg-6
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Árbol")
            .col-lg-12
              p.mb-0 Elemento mecánico que toma y transfiere movimiento girando sobre sí mismo, en revoluciones completas.
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
              p.mb-0 Rueda plana o acanalada que, dependiendo de la función requerida, puede ser fija o móvil, montada sobre un eje o árbol.
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

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/5.png', alt='')
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5
            img(src='@/assets/curso/tema1/6.svg', alt='')
          .col-lg-7
            .bg2.p-lg-5.p-4
              p.mb-0.text-white.mb-lg-3.mt-lg-3 Son el resultado de la unión y acople de varias piezas y elementos para desarrollar una función, como son el tensor del hilo, el transporte, el formador de lazada. Para generar el movimiento de la máquina se requiere la unión de varios elementos mecánicos como el árbol, excéntrico, eje, polea, piñones, volante, barra, chumacera, chaveta, buje, pernos, pasadores, acoples, entre otros.
        p.mb-0.mt1 En la creación de la máquina para generar el movimiento se requería del pedal para accionar el movimiento o detenerla, luego que se diera la energía eléctrica, se dio paso al desarrollo del motor para las máquinas de confección con el fin de industrializar los procesos; dependiendo de su capacidad de producción las máquinas se clasifican en industriales o familiares.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Mecanismo sistema tensor

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/7.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4.mx-lg-4.mtt
            p.mb-0 Su función es realizar la oposición necesaria al paso del hilo. La presión es ejercida por los discos tensores al hilo, de allí su importancia al realizar la costura para obtener la tensión óptima. El mecanismo lo componen las siguientes piezas: tuerca manual, disco de graduación de tensión, resorte de tensor, dos discos tensores, espárrago, resorte tirahílo, buje soporte del espárrago, abridor del tensor.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Mecanismo de arrastre

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")    
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2.col-md-2.col-5
            img.mb-lg-0.mb-md-0.mb-4.img-t.img-a(src='@/assets/curso/tema1/9.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 El movimiento de vaivén del mecanismo es una combinación en sentido vertical y horizontal, producido por los ejes y el cigüeñal unidos por dos bielas. El mecanismo además está conformado por diente, pie, planchuela y soporte de dientes.
        p.mb-0 En el caso de la planchuela debe estar libre de asperezas y obstrucciones para poder realizar la costura, debe tener aberturas para que pueda mover los dientes, y una abertura en forma redonda u ovalada según el tipo de puntada para que pase la aguja hacia el formador de lazada, el cual debe pasar sin rozar el borde de la abertura, además, se debe revisar que los bordes no tengan asperezas o rebordes cortantes para no afectar la formación de la puntada, produciendo deterioro en la aguja y por tanto de la costura o el material que se está trabajando.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/8.png', alt='')
    
    p.mb-5(data-aos="fade-right") Los dientes en su movimiento deben sobresalir de la planchuela, haciendo juego con la misma, se deben graduar la altura según el material u operación. En consecuencia, al no estar bien sujetos por medio de los tornillos, no se desliza el material, esto se debe tener en cuenta en la revisión para si es el caso, ajustarlos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Figura 2. 
          | Mecanismo de arrastre
        .bg3.p-lg-5.p-md-4.p-3.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/10.png', alt='Diagrama del mecanismo de arrastre en una máquina de confección. Muestra el ciclo de movimiento de los dientes de arrastre en cuatro etapas: A) sobresalen de la placa y desplazan la tela hacia adelante; B) descienden por debajo de la placa al finalizar el avance; C) regresan a su posición inicial por debajo de la placa; y D) vuelven a elevarse para iniciar un nuevo ciclo de arrastre.')
            .col-lg-4
              p.mb-5 #[b Movimiento A:] los dientes de arrastre sobresalen por encima de la placa, enganchando el tejido y tirando de él en el sentido de su orientación.
              p.mb-5 #[b Movimiento B:] cuando ha avanzado el largo de una puntada, los dientes descienden bajo la placa, soltando el tejido que arrastraron en el movimiento A
              p.mb-5 #[b Movimiento C:] después de B, los dientes deshacen el camino andado en A, mientras están bajo la placa.
              p.mb-0 #[b Movimiento D:] después de C, los dientes vuelven a subir y sobresalir de la placa, como al principio de A, recomenzando el movimiento A. Se repite sucesivamente.
        figcaption Fuente: Manual corte y confección, CIDEP (2012)
    
    p.mb-5(data-aos="fade-right") Las partes del prensatelas son: vástago, zapatilla, talón, dedos y pasador. Dependiendo de la máquina, puede incorporar resortes y protectores de dedos. En las máquinas planas existen diversos tipos de prensatelas, cuya utilización depende de la operación que se vaya a realizar. En el caso del prensatelas universal, este debe corresponder al tipo de material que se trabaja. Generalmente, los prensatelas se fabrican en acero templado.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Mecanismo de formación de lazada

    p.mb-4(data-aos="fade-right") Cada pieza o mecanismo de las máquinas puede reemplazarse, pero debe tener cuidado en el mercado, según la disponibilidad puede encontrar piezas originales de la marca de la máquina o encontrar los llamados genéricos que inciden en su precio y calidad en términos de vida útil.

    p.mb-4(data-aos="fade-left") Los mecanismos tomadores de lazada se describen en el manual técnico y estos son:

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/11.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="1. Gancho rotatorio")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 Gancho rotatorio  
                p.mb-0 Es un elemento mecánico conformado por el cuerpo, desviador de hilo, punta, carril, talón, canastilla, desviador de hilo, punta separadora, guarda aguja y mecha. El desgaste del gancho en muchos casos proviene de su punta, de allí la relevancia al presentar problemas en la costura. Existen varios tipos de ganchos conforme a su posición respecto al árbol, pueden ser transversal, vertical y horizontal.
          .tarjeta.color-a.p-4(titulo="2. La caja bobina")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 La caja bobina
                p.mb-0 Va dentro del gancho rotatorio y la componen varias partes, en la máquina plana son: cuerpo, palanca del pestillo, resorte del pestillo, muelle de tensión, tornillo retenedor del muelle de tensión, tornillo sujetador de muelle auxiliar, muelle auxiliar. El buen estado de la caja bobina depende del cuidado, por eso se deben evitar golpes, caídas y contacto con sustancias que aumenten su oxidación.
          .tarjeta.color-a.p-4(titulo="3. Corchete")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 Corchete
                p.mb-0 Este elemento es utilizado para producir la puntada de cadeneta a un hilo, siempre da revoluciones completas, si la máquina tiene alimentación, trabaja sólo con la aguja, pero si tiene transporte, necesita de un elemento auxiliar llamado extensor, para compensar la falta del alzador en máquina.
          .tarjeta.color-a.p-4(titulo="4. Extensor")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 Extensor
                p.mb-0 Este elemento mecánico es utilizado la mayoría de las veces como auxiliar de los #[em looper] y corchetes, para formar varios tipos de puntadas de diferentes series.
          .tarjeta.color-a.p-4(titulo="5. <em>Looper</em>")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 #[em Looper]
                p.mb-0 Se requiere para formar la puntada en la fileteadora, la recubridora, cerradora de codo, multiagujas, empretinadora, entre otras. Puede variar su posición y cantidad a usar, según el tipo de máquina y puntada. Además del enhebrado se debe revisar el estado de su punta la cual podría producir fallas en la costura.
          .tarjeta.color-a.p-4(titulo="6. Recubridor")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-3 Recubridor
                p.mb-0 Elemento mecánico que sin llevar ojo guía para el hilo si lleva hilo, el cual se extiende sobre la tela superior al formar la puntada de cadeneta con recubridor, dicho hilo es sostenido por el hilo de la aguja, cada que el material avance.


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Clasificación de puntadas y costuras
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        p.mb-4 Se suele confundir el término puntada y costura, pero se debe tener en cuenta la diferencia; se habla de la puntada como el resultado del enlace de los hilos, y la costura consiste en varias puntadas en un material o puede ser para unir dos o más materiales.
        .bg4.p-4.p-lg-5
          p.mb-0.mx-lg-2 Aclarado lo anterior se necesitaron unas normas para concertar a nivel mundial los diferentes tipos de puntadas y costuras, identificando por medio de letras o de números según cada norma, lo cual facilita la comprensión de la ficha técnica de una máquina o de un producto en cualquier parte del mundo.
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(src='@/assets/curso/tema1/12.svg' alt='AvatarTop')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Clasificación serie de puntadas ISO 4915

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/13.png', alt='')
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5
            img(src='@/assets/curso/tema1/14.svg', alt='')
          .col-lg-7
            .bg5.p-4
              p.mb-0.text-white.mx-lg-4.mt-lg-3.mb-lg-3 Esta norma internacional clasifica, designa, describe e ilustra las diversas puntadas que se utilizan en las costuras cosidas a mano y a máquina, lo que facilita su identificación en los diversos tipos de producción general y enfocada a la industria de la moda. Esta norma tiene el equivalente militar que es el Federal Standard 7515-a el cual define los estándares para la fabricación de uniformes militares y el estándar ASTM D6193 que define el estándar para la confección de prendas industriales.
        p.mb-0.mt1 En esta norma las diferentes puntadas se agruparon en series por centena según correspondía a la formación de lazada, y a cada puntada en particular le corresponde un consecutivo.

    .cont_5_1.mt-4(data-aos="fade-right").mb-4
      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema1/15.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema1/up.svg' alt="")
                .col-lg-10
                  h5.mb-3.txp Serie 100
              p.mb-0.txp Corresponde a las puntadas de cadeneta sencilla, desarrolladas con un hilo en las diferentes máquinas. Por ejemplo, la puntada en la máquina botonadora de un hilo.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema1/16.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema1/up.svg' alt="")
                .col-lg-10
                  h5.mb-3.txp Serie 200
              p.mb-0.txp Las puntadas se desarrollan manualmente (puntadas a mano) o artesanales, por ejemplo, las puntadas con agujas de crochet.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema1/17.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema1/up.svg' alt="")
                .col-lg-10
                  h5.mb-3.txp Serie 300
              p.mb-0.txp Llamadas de doble pespunte, donde interviene la aguja y el gancho rotatorio, de manera que la puntada se realiza en las máquinas: plana de una aguja y dos agujas (puntada 301), zigzadora, ojaladora, botonadora con gancho, presilladora.

    .cont_5_1.mt-4(data-aos="fade-left").mb-5
      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema1/18.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema1/up.svg' alt="")
                .col-lg-10
                  h5.mb-3.txp Serie 400
              p.mb-0.txp Puntada de cadeneta doble o múltiple, formada por aguja y #[em looper]; pertenecen a esta serie las puntadas realizadas en la máquina fileteadora, cerradora de codo, empretinadora y recubridora. Desarrollan la puntada 401. En el caso de la recubridora además puede realizar la puntada 406 al enhebrar dos agujas y 407 al enhebrar las tres agujas.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema1/19.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema1/up.svg' alt="")
                .col-lg-10
                  h5.mb-3.txp Serie 500
              p.mb-0.txp Puntadas de sobrehilado, pertenecen las desarrolladas en la fileteadora.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema1/20.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema1/up.svg' alt="")
                .col-lg-10
                  h5.mb-3.txp Serie 600
              p.mb-0.txp Llamadas de cadeneta doble, se realizan en la recubridora.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Clasificación de costuras ISO 4916

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        p.mb-4 Esta norma clasifica e ilustra las secciones transversales de los materiales y clasifica los tipos de costuras cosidas; es necesario consultar esta norma junto con la ISO 4915.
        .bg6.p-4.p-lg-4
          p.mb-0.mx-lg-4.mt-lg-1 Se puede desarrollar la misma costura en diferentes máquinas que trabajan una serie de puntadas diferentes, a su vez, se debe tener en cuenta la operación para seleccionar el tipo de costura acorde al diseño y patronaje especificado, un caso es la operación de sesgar un escote, que se puede realizar en máquina plana y máquina recubridora.
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(src='@/assets/curso/tema1/21.svg' alt='AvatarTop')
    
    .ti.p-2.mb-5(data-aos="fade-right")
      h4.mb-0.pe-3.ps-3 Tipos de costuras clasificadas

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/22.svg' alt='AvatarTop')
            h4.text-center.mb-3 Costuras solapadas
            p.mb-0 En las cuales se guardan costuras o dos o más materiales se solapan con los bordes y se unen con una costura de pespunte.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/23.svg' alt='AvatarTop')
            h4.text-center.mb-3 Costuras superpuestas
            p.mb-0 Como su nombre lo indica se realizan con dos piezas de material superpuestas una sobre otra y unidas cerca al borde por un pespunte.
          .tarjeta.tarjeta--slyder.b3.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/24.svg' alt='AvatarTop')
            h4.text-center.mb-3 Costuras ribeteadas
            p.mb-0 La costura se forma doblando un ribete sobre el borde de las capas de material unidas con varias hileras de pespuntes al borde del material.
          .tarjeta.tarjeta--slyder.b4.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/25.svg' alt='AvatarTop')
            h4.text-center.mb-3 Costuras planas
            p.mb-0 Son costuras con dos bordes de material doblados que se juntan y se cosen con doble pespunte en zigzag.
          .tarjeta.tarjeta--slyder.b5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/26.svg' alt='AvatarTop')
            h4.text-center.mb-3 Costuras de pespuntes
            p.mb-0 Costuras desarrolladas para reforzar costuras internas o adornar las costuras según un diseño ornamental.


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
