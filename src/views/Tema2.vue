<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Presupuesto operativo

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.justify-content-md-center.align-self-center
        figure
          img.img-450.mb-2(src="@/assets/tema2/img-1.svg")
    p.mb-5 A continuación, se hará una breve descripción de los elementos que integran el presupuesto maestro, es de vital importancia leerlos detenidamente para empoderarse de ellos y realizar, en un futuro cercano, un presupuesto operativo propio.
    br
    #t_2_1.titulo-segundo
      h2 2.1 Presupuesto de ventas
    .row.justify-content-around.align-items-center 
      .col-lg-6.justify-content-md-center.mb-4 
        figure
          img.img-350.mb-2(src="@/assets/tema2/img-2.svg")      
      .col-lg-6.justify-content-md-center.align-self-center
        p Contiene la presupuestación de los volúmenes y los precios de venta. Plasma la política empresarial de penetración en el mercado y la estrategia empresarial para conseguirla. Se puede elaborar por líneas de productos o por zonas geográficas. Es el más complicado de preparar dado que contiene los pronósticos de ventas o unidades que probablemente venderá la empresa, razón por la cual involucra un cierto grado de riesgo por la probabilidad de ocurrencia de las cifras presupuestadas. Existen varias técnicas para determinar el porcentaje de participación que podrá tener la empresa dentro de todo un mercado: método de los mínimos cuadrados, regresión lineal y promedios históricos de empresas del mismo sector. 
    separador
    #t_2_2.titulo-segundo
      h2 2.2 Presupuesto de producción
    .row.justify-content-around.align-items-center 
      .col-lg-6.justify-content-md-center.align-self-center
        p Calcula el número de unidades que se van a producir, la cantidad de materia prima a utilizar en el proceso productivo, la cantidad de materia prima a comprar, el número de empleados a contratar en el departamento de producción, el valor de la nómina de producción y el monto de los costos indirectos de fabricación, así como la cantidad de unidades en proceso que deben quedar al final del periodo depende de las políticas sobre inventarios que los administradores hayan plasmado en el plan estratégico. 
        p Así, por ejemplo, si la política de materia prima es justo a tiempo o inventario cero, la cantidad de materia prima a comprar será exactamente la requerida en el proceso productivo. En este aspecto, se debe tener en cuenta las políticas de inventario de materia prima, de productos en proceso y de productos terminados. La política de inventarios determina la inversión que los socios están dispuestos a efectuar y da como resultado el valor de los inventarios finales.    
      .col-lg-6.justify-content-md-center.mb-4 
        figure
          img.img-350.mb-2(src="@/assets/tema2/img-3.svg")      
    separador
    #t_2_3.titulo-segundo
      h2 2.3 Presupuesto de gastos de operación
    p.mb-5 Corresponde a la proyección de los recursos destinados para financiar el proceso de puesta en marcha de la empresa, la gestión administrativa, la distribución de los productos o servicios, la publicidad y demás actividades necesarias para sostenerse activo en un mercado objetivo. Contiene dos tipos de presupuesto, a saber:
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10.justify-content-md-center.align-self-center
        .crd_01.mb-5
          .crd_01__icon
            img(src="@/assets/tema2/img-4.svg", alt="alt").class          
          .crd_01__txt
            h5 Gastos de administración
            p Comprende la proyección de los gastos de nómina de administración, servicios públicos, mantenimiento, reparación, seguros, arrendamientos, honorarios y depreciación de los activos destinados para la administración de la empresa.
        .crd_01
          .crd_01__icon
            img(src="@/assets/tema2/img-5.svg", alt="alt").class          
          .crd_01__txt
            h5 Gastos de ventas
            p Contiene además de los mencionados en el presupuesto de gastos de administración, los gastos por comisiones en ventas y los de fletes en ventas (Ministerio de Hacienda y crédito Público, 2020).
    separador

    #t_2_4.titulo-segundo
      h2 2.4 Metodología de elaboración 

    PasosA.color-acento-contenido.mb-5(tipo="l")
        div
          p La metodología utilizada en la elaboración de los presupuestos operativos parte del presupuesto de ventas que proyecta las ventas del negocio en cantidades y valores. Es el presupuesto base para los demás, determina el tamaño de la empresa y, por lo tanto, el volumen de inversión en activos, la capacidad instalada de la planta y el tamaño de los costos y gastos de operación.

        div
          p En la segunda etapa se elabora el presupuesto de producción que determina el número de unidades a producir, los requerimientos de materia prima, mano de obra directa y carga fabril, y el costo de producción presupuestado.

        div
          p Luego, se calcula el monto de la inversión en inventarios que depende de la política de inventarios plasmada por los administradores en el plan estratégico de la organización.

        div
          p Un cuarto paso consiste en proyectar la inversión en cartera que depende de la política de cartera organizacional.

        div
          p En quinto lugar, se calcula la inversión en efectivo, que proyecta la cantidad de dinero requerido para funcionar. Este paso es muy útil, sobre todo en empresas que están iniciando operaciones y requieren efectivo para soportar la operación durante los primeros meses de vida mientras se dan a conocer en el mercado, consiguen los clientes y la calidad crediticia.

        div
          p Enseguida, se proyecta el monto de dinero requerido para sostener la operación y se calculan los gastos de administración y de ventas. Una vez obtenidas las cifras que determinan el monto total de la inversión requerida por la empresa, se proyectan las fuentes de financiación tanto con proveedores, como con acreedores financieros y socios. 
    .row.justify-content-around.align-items-center 
      .col-lg-6.justify-content-md-center.align-self-center
        p A continuación, se presenta un ejercicio que ilustra la metodología descrita.
        p Un grupo de inversionistas ha contratado la elaboración de unos estudios preoperativos tendientes a determinar la viabilidad financiera de constituir una empresa. La empresa contratada elaboró un estudio de mercados para determinar el volumen potencial de ventas y el precio de ventas, un estudio técnico que determinó los volúmenes de producción, los requerimientos de materia prima en el departamento de producción, el volumen de materia prima a comprar, el valor de la mano de obra directa, la cantidad de costos indirectos de fábrica, el volumen de activos fijos, y otros datos con los cuales se debe elaborar el presupuesto de la entidad, y un estudio gerencial para elaborar el plan estratégico.
        p Uno de los objetivos busca es determinar el monto de la inversión inicial y la cantidad de financiación con proveedores, con acreedores financieros y con socios. Además, se tuvieron en cuenta las políticas contempladas en el plan estratégico. 

 
      .col-lg-6.justify-content-md-center.mb-4 
        figure
          img.img-500.mb-2(src="@/assets/tema2/img-6.svg")      
    p El siguiente es el resumen de las cifras que sirvieron de base para elaborar el presupuesto:
    p.mb-5 Ventas proyectadas de 125.000 unidades calculadas utilizando el método de regresión lineal que sigue la siguiente metodología:

    .tarjeta.tarjeta-color
      .row.justify-content-start
        .col-lg-1.mb-3.px-md-3
          span.circ a
        .col-lg-11 
          .crd_03__txt
            h4 Se dispone de las ventas históricas del sector durante los últimos 6 años:
            .row.justify-content-around.align-items-center
              .col-lg-6
                table.bordecel
                  thead
                    tr
                      th Año (histórico)
                      th Cantidad
                  tbody.t-f1
                    tr.t-f3
                      td.t-f5 Año 1
                      td 4.950.000
                    tr
                      td.t-f5 Año 2
                      td 5.380.000
                    tr.t-f3
                      td.t-f5 Año 3
                      td 5.760.000
                    tr
                      td.t-f5 Año 4
                      td 6.150.000
                    tr.t-f3
                      td.t-f5 Año 5
                      td 6.625.000
                    tr
                      td.t-f5 Año 6
                      td 8.377.500


    .tarjeta.tarjeta-color
      .row.justify-content-start
        .col-lg-1.mb-3.px-md-3
          span.circ b
        .col-lg-11 
          .crd_03__txt
            h4 Se proyectan las ventas futuras del sector para los próximos años utilizando la ecuación <em>y = mx + b</em>, en donde:
            p <em>#[strong m]</em>	es la pendiente de la línea de regresión que representa el número de unidades que aumenta <em>#[strong y]</em> por cada unidad de <em>#[strong x]</em>. Se calcula con la siguiente fórmula:
            figure
              img.img-220.mb-5(src="@/assets/tema2/img-7.svg")  
            p.mb-5 <em>#[strong b]</em> es la intersección de <em>#[strong y]</em> en la línea de regresión cuando <em>#[strong x]</em> toma el valor de cero. Se calcula con la siguiente fórmula:
            figure
              img.img-220.mb-5(src="@/assets/tema2/img-8.svg")      
            p.mb-5 <em>#[strong x]</em> es el número del año histórico.    



    .tarjeta.tarjeta-color
      .row.justify-content-start
        .col-lg-1.mb-3.px-md-3
          span.circ c
        .col-lg-11 
          .crd_03__txt
            h4 Para desarrollar las fórmulas de <em>#[strong m]</em> y <em>#[strong b]</em> se utilizó la siguiente tabla en Excel:         
            .row
              .col-lg-6.mb-5  
                .tabla-a
                  table.t-f5.bordecel
                    thead.t-f1
                      tr
                        th Año (histórico)
                        th X
                        th Y
                        th XY
                        th X
                          sup 2
                    tbody.t-f1
                      tr.t-f3
                        td Año 1
                        td 1
                        td 4.950.000
                        td 4.950.000
                        td 1
                      tr
                        td Año 2
                        td 2
                        td 5.380.000
                        td 10.760.000
                        td 4
                      tr.t-f3
                        td Año 3
                        td 3
                        td 5.760.000
                        td 17.280.000
                        td 9
                      tr
                        td Año 4
                        td 4
                        td 6.150.000
                        td 24.000.000
                        td 16
                      tr.t-f3
                        td Año 5
                        td 5
                        td 6.625.000
                        td 33.125.000
                        td 25
                      tr
                        td Año 6
                        td 6
                        td 8.377.500
                        td 50.265.000
                        td 36
                      tr.t-f3
                        td.fond-5
                          b Sumatorias
                        td
                          b 21
                        td
                          b 37.242.500.
                        td
                          b 140.980.000
                        td
                          b 91
              .col-lg-6.px-lg-5
                p El resumen de los datos es el siguiente: 
                .tabla-a.color-acento-botones.mb-5    
                  table
                    thead.t-f1
                      tr
                        th n	
                        th 6
                    tbody.t-f1
                      tr.t-f3
                        td.t-f5 Sumatoria de Y	
                        td 37.242.500
                      tr 
                        td.t-f5 Sumatoria de X	
                        td 21
                      tr.t-f3 
                        td.t-f5 Sumatoria de XY	
                        td 140.980.000
                      tr 
                        td.t-f5 Sumatoria de X 
                          sup 2	
                        td 91
    .tarjeta.tarjeta-color
      .row.justify-content-start
        .col-lg-1.mb-3.px-md-3
          span.circ d
        .col-lg-11 
          .crd_03__txt
            h4 A continuación, se presenta la gráfica de la línea de regresión elaborada con los datos consignados anteriormente:         
            figure
              img.img-500.mb-2(src="@/assets/tema2/img-9.svg")
    .tarjeta.tarjeta-color
      .row.justify-content-start
        .col-lg-1.mb-3.px-md-3
          span.circ e
        .col-lg-11 
          .crd_03__txt
            h4.mb-4 Con los datos calculados de <em>m</em> y <em>b</em> se proyectan las ventas para los períodos que se necesiten. A continuación, se muestra la proyección para 6 años siendo 7 el primer año de la proyección:
            .row.justify-content-around.align-items-center
              .col-lg-6
                table.bordecel
                  thead
                    tr
                      th Año (proyectado)
                      th N° del año
                      th Cantidad
                  tbody.t-f1
                    tr.t-f3
                      td Año 1
                      td 7
                      td 8.333.333
                    tr
                      td Año 2
                      td 8
                      td 8.940.833
                    tr.t-f3
                      td Año 3
                      td 9
                      td 9.548.333
                    tr
                      td Año 4
                      td 10
                      td 10.155.833
                    tr.t-f3
                      td Año 5
                      td 11
                      td 10.763.333
                    tr
                      td Año 6
                      td 12
                      td 11.370.833
    .tarjeta.tarjeta-color
      .row.justify-content-start
        .col-lg-1.mb-3.px-md-3
          span.circ f
        .col-lg-11 
            .crd_03__txt
            h4.mb-4 De acuerdo con un estudio del mercado, la empresa podría participar con una participación del 1,5% de las ventas del sector, por lo cual la empresa vendería durante los próximos 6 años el siguiente volumen de unidades:
            .row.justify-content-around.align-items-center
              .col-lg-6
                table.bordecel
                  thead
                    tr
                      th Cantidad de ventas del sector
                      th Participación de la empresa
                      th Ventas de la empresa
                  tbody.t-f1
                    tr.t-f3
                      td 8.333.333
                      td 1,5%
                      td 125.000
                    tr
                      td 8.940.833
                      td 1,5%
                      td 134.113
                    tr.t-f3
                      td 9.548.333
                      td 1,5%
                      td 143.225
                    tr
                      td 10.155.833
                      td 1,5%
                      td 152.338
                    tr.t-f3
                      td 10.763.333
                      td 1,5%
                      td 161.450
                    tr
                      td 11.370.833
                      td 1,5%
                      td 170.563

    p Es de aclarar que existen otros métodos para efectuar la proyección de ventas como:

    p #[strong Incremento porcentual:] se basa en calcular el promedio simple del incremento porcentual en el volumen de ventas de un año con respecto del anterior: 
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-5.px-2
        figure
            img.img-500.mb-2(src="@/assets/tema2/img-10-.svg")
      .col-lg-5.px-2
        p El cálculo para los seis años quedaría de la siguiente manera:
        table
          thead
            tr
              th CANTIDAD DE VENTAS DEL SECTOR
              th INCREMENTO PORCENTUAL
          tbody.t-f1
            tr.t-f3
              td.t-f5 4.950.000
              td
                
            tr
              td.t-f5 5.380.000
              td 8,69%
            tr.t-f3
              td.t-f5 5.760.000
              td 7,06%
            tr
              td.t-f5 6.150.000
              td 6,77%
            tr.t-f3
              td.t-f5 6.625.000
              td 7,72%
            tr
              td.t-f5 8.377.500
              td 26,45%
            tr.t-f3
              td.t-f5
                b Promedio
              td 11,34%

    p.mb-4 Si se utiliza este método, las ventas para el primer año de proyección sería de:
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.justify-content-md-center.align-self-center
        figure
          img.img-450.mb-2(src="@/assets/tema2/img-11.svg")  

    p #[strong Crecimiento de la economía:] medido con el macroindicador económico Producto Interno Bruto (PIB). Este método se basa en el supuesto de que el crecimiento en el volumen de ventas de una empresa, debe ser al menos el crecimiento económico del país o del sector al cual pertenezca la empresa.

    p Existen otros métodos de pronóstico de ventas los cuales se recomienda investigar en su debido momento.

    p.mb-5 Se debe tener en cuenta al momento de proyectar las ventas, si la empresa vende productos con estacionalidad, como ocurre con los útiles escolares o artículos navideños.
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-8.justify-content-md-center.align-self-center

        table.bord
          tbody
            tr.t-f3
              td.t-f5 Ventas esperadas para el primer año - unidades
              td.t-f4 125.000
          
            tr
              td.t-f5 Precio de venta unitario
              td.t-f4 $245
            tr.t-f3
              td(colspan='2') Costo primo
            tr
              td.t-f5 Costo unitario de materia prima
              td.t-f4 $85
            tr.t-f3
              td.t-f5 Costo unitario de mano de obra directa
              td.t-f4 $35
            tr
              td.t-f5 Porcentaje de prestaciones sociales
              td.t-f4 50%
            tr.t-f3
              td.t-f5 Porcentaje de prestaciones pagadas de contado
              td.t-f4 80%
        br 
        br
        table.bord
          thead
            tr.t-f3
              td.t-f5
                b Inversión en maquinaria
              td.t-f4
                b $12.000.000
            tr
              td.t-f5
                b Vida útil estimada de la maquinaria - años
              td.t-f4
                b 10
        br 
        br
        table
          thead
            tr
              th(colspan='4') Costos indirectos de fabricación
          tbody
            tr.t-f3
              td.t-f5(colspan='3') Manode obra indirecta - Mensual
              td.t-f4 $65.000
            tr
              td.t-f5(colspan='3') Arrendamiento - Mensual
              td.t-f4 $22.000
            tr.t-f3
              td.t-f5(colspan='3') Mantenimiento - Mensual
              td.t-f4 $11.000
            tr
              td.t-f5(colspan='3') Otros - Mensual
              td.t-f4 $45.000
        br
        br

        table.bord.bordecel.m-der 
          thead
            tr.t-f3
              td(colspan='3')
                b Gastos de administración y ventas - Mensual
              td.t-f4
                b $250.000
        br
        br
        table.bordecel.m-der 
          thead        
            tr
              th(colspan='4') Financiación con acreedores financieros
          tbody
            tr.t-f3
              td(colspan='3') Monto del pr&eacute;stamo bancario
              td $7.500.000
            tr
              td(colspan='3') Tasa anual del pr&eacute;stamo - anual
              td 24%
            tr.t-f3
              td(colspan='3') Plazo del pr&eacute;stamo en a&ntilde;os
              td 3
            tr
              td(colspan='3') Abono anual
              td $2.500.000
        br
        br

        table.bord
          thead
            tr.t-f3
              td(colspan='3') 
                b Plazode proveedores de materia prima - Días
              td.t-f4
                b 45
        br 
        br
        table.bordecel.m-der 
          thead
            tr
              th(colspan='4') Niveles de inversi&oacute;n en activos corrientes
          tbody
            tr.t-f3
              td.t-f5(colspan='3') Cuentas por cobrar - Medido en d&iacute;as de ventas
              td.t-f4 60
            tr
              td.t-f5(colspan='3') Materia prima - Medido en d&iacute;as de producci&oacute;n
              td.t-f4 60
            tr.t-f3
              td.t-f5(colspan='3') Productos en proceso - Medido en d&iacute;as de venta
              td.t-f4 15
            tr
              td.t-f5(colspan='3') Producto terminado - Medido en d&iacute;as de ventas
              td.t-f4 75
        br 
        br
        table.bord
            tr.t-f3
              td.t-f5(colspan='3')
                b Tasa de impuesto a la renta
              td.t-f4
                b 35%
        br 
        br
    p.mb-5 Inicialmente, se debe elaborar el presupuesto de producción para determinar el número de unidades a producir, cifra que depende del volumen de ventas, y de las políticas sobre inventarios de productos en proceso y productos terminados. En este proceso se utiliza el conocido método de juego de inventarios de la siguiente manera:        
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-5.col-sm-8.justify-content-md-center.align-self-center

        table
          thead
            tr
              td.w-20              
              th Inventario inicial
          tbody
            tr.t-f3
              td.t-f5
                b Más
              td Unidades a producir
            tr
              td.t-f5
                b Menos
              td Inventario final
            tr.t-f3
              td.t-f5
                b Igual
              td Unidades a vender
        br 
        br
    p.mb-5 Como lo que se desea determinar es el número de unidades a producir, se despeja la ecuación anterior:       
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-5.col-sm-8.justify-content-md-center.align-self-center
        table
          thead
            tr
              td.w-20              
              th Unidades a vender
          tbody
            tr.t-f3
              td.t-f5
                b Menos
              td Inventario inicial
            tr
              td.t-f5
                b Más
              td Inventario final
            tr.t-f3
              td.t-f5
                b Igual
              td Unidades a producir
        br 

    p Ahora bien, el caso plantea que al final del periodo presupuestado quedan no sólo unidades de productos terminados sino también de productos en proceso.
    p.mb-5 Por lo anterior, se efectúa un doble juego de inventarios como se ilustra a continuación:     
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6.col-sm-8.justify-content-md-center.align-self-center
        table
          thead
            tr
              td.w-20              
              th Unidades a vender
          tbody
            tr.t-f3
              td.t-f5
                b Menos
              td Inventario inicial de productos en proceso 
            tr
              td.t-f5
                b Menos
              td Inventario final de productos terminados                
            tr.t-f3
              td.t-f5
                b Más
              td Inventario final de productos en proceso 
            tr
              td.t-f5
                b Menos
              td Inventario final de productos terminados                
            tr.t-f3
              td.t-f5
                b Igual
              td Unidades a producir

        br 
        br

    p Si se tiene en cuenta que es el primer año de operaciones de la empresa, los valores de inventarios iniciales serán 0. 
    p Para calcular las cantidades de inventarios finales se utilizan los índices de rotación.
    p.mb-5 Una política de inventario de productos terminados de 15 días significa que los administradores esperan que el proceso de venta dure máximo 15 días, por consiguiente, al final del periodo presupuestado quedarán unidades terminadas para 15 días de ventas. ¿Cuál es ese número de unidades?

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.justify-content-md-center.align-self-center
        figure
          img.img-450.mb-2(src="@/assets/tema2/img-12-.svg")

    p.mb-5 De igual manera se calcula el número de unidades terminadas equivalentes al inventario final de productos en proceso:

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.justify-content-md-center.align-self-center
        figure
          img.img-450.mb-2(src="@/assets/tema2/img-13-.svg")

    p.mb-5 Con los datos anteriores se calcula el número de unidades a producir bajo el siguiente esquema:
     
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.col-sm-8.justify-content-md-center.align-self-center
        table.table
          thead
            tr
              td.w-20              
              th.w-50 Unidades a vender
              th 125.000
          tbody
            tr.t-f3
              td.t-f5
                b Menos
              td.t-f5 Inventario inicial de productos en proceso
              td.t-f4 -
            tr
              td.t-f5
                b Menos
              td.t-f5 Inventario final de productos terminados  
              td.t-f4 -              
            tr.t-f3
              td.t-f5
                b Más
              td.t-f5 Inventario final de productos en proceso
              td.t-f4 5.208
            tr
              td.t-f5
                b Más
              td.t-f5 Inventario final de productos terminados
              td.t-f4 26.042	                
            tr.t-f3
              td.t-f5
                b (=)
              td.t-f5 Unidades a producir 
              td.t-f4 156.250
        br 
        br
    p Seguidamente se calcula el presupuesto de costo de producción:
    p.mb-5 Con el valor del costo de producción unitario en efectivo

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6.col-sm-8.justify-content-md-center.align-self-center
        table.table-striped.bordecel.m-der 
          thead
            tr
              th(colspan='3') 
                b Presupuesto de costo de productos  (miles de pesos)
            
          tbody
            tr
              td  Primera prima
              td  (85 x 156.250)
              td $13.281.250
            tr
              td  Mano de obra directa
              td  (35 x 156.250)
              td $5.468.750
            tr
              td  Mano de obra indirecta
              td  (65.000 X 12)
              td $780.000
            tr
              td  Prestaciones sociales
              td  (5.468.750 x 780.000) x 50%
              td $3.124.375
            tr
              td  Arrendamiento
              td  (22.000 x 12)
              td $264.000
            tr
              td  Mantenimiento
              td  (11.000 x 12)
              td $132.000
            tr
              td  Otros costos indirectos de fábrica
              td  (45.000 x 12)
              td $540.000
            tr
              td 
                b Total costos en efectivo
              td 
                br
              td
                b $23.590.375
            tr
              td  Depreciaci&oacute;n
              td 
                br
              td $1.200.000
        br
        br     
        table.table-striped.bordecel.m-der 
          tbody
            tr
              td  Costos unitario total
              td  (24.790.375 / 156.250)
              td $158.66
            tr
              td  Costos unitario en efectivo
              td  (23.590.375 / 156.250)
              td $150.98

        br 
        br

    p.mb-5 Se calcula la inversión que se debe hacer en inventarios y en cartera:
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6.col-sm-8.justify-content-md-center.align-self-center
        table.table-striped.bordecel.m-der 
          thead
            tr
              th(colspan='3' rowspan='2') Inversi&oacute;n en activos corrientes  (miles de pesos)
            tr
          tbody
            tr
              td Productos en proceso
              td (5.208 x 150.98)
              td $786.346
            tr
              td Productos terminados
              td (26.042 X 150.98)
              td $3.931.729
            tr
              td Materia prima
              td (13.281.350 / 360 X 60)
              td $2.213.542
            tr
              td Cartera
              td (125.000 / 360 X 60) X 150.98
              td $3.145.383
            tr
              td(colspan='2')
                b Total inversi&oacute;n en capital de trabajo operativo
              td $10.077.000
    br
    
    p.mb-5 Para calcular el valor de la inversión en inventario de materia prima, se obtiene el consumo diario dividiendo el costo total de materia prima entre el número de días del año.

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.justify-content-md-center.align-self-center
        figure
          img.img-450.mb-2(src="@/assets/tema2/img-14.svg")

    p.mb-5 Luego se multiplica el valor diario por los días de materia prima para calcular la inversión en materia prima: 

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.justify-content-md-center.align-self-center
        figure
          img.img-450.mb-2(src="@/assets/tema2/img-15.svg")

    p.mb-5 Para determinar el valor de la inversión en cartera se debe determinar el número de unidades que los clientes quedan debiendo al final del periodo y luego multiplicar ese número por el costo unitario en efectivo. Si al año se venden 125.000 unidades y los clientes quedan debiendo el equivalente a 60 días, pues quedan debiendo 20.833 unidades calculas de la siguiente manera:

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.justify-content-md-center.align-self-center
        figure
          img.img-450.mb-2(src="@/assets/tema2/img-16.svg")
    p.mb-5 Las cuales valoradas al costo unitario en efectivo dan una inversión de $3.145.383:

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.justify-content-md-center.align-self-center
        figure
          img.img-450.mb-2(src="@/assets/tema2/img-17.svg")
    p La inversión total en capital de trabajo operativo se debe financiar una parte con proveedores y el resto con el flujo de caja generado por la empresa.
    p.mb-5 Para calcular el valor a financiar con proveedores se debe determinar primero el valor de las compras de materia prima de todo el periodo.
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6.col-sm-8.justify-content-md-center.align-self-center
        table.table-striped.bordecel.m-der 
          thead
            tr
              th(colspan='2') 
                b Financiación con proveedores  (miles de pesos)
            
          tbody
            tr
              td Consumo de materia prima 
              td.t-f4 $13.281.250
              
            tr
              td -	Inventario inicial de materia prima 
              td.t-f4 $0
              
            tr
              td + Inventario final de materia prima 
              td.t-f4 $2.213.542
          
            tr
              td = Compras a crédito
              td.t-f4 $15.494.792
              
    br 
    br
    p.mb-5 Luego el valor que la empresa queda debiendo a los proveedores al final del año:      
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-7.justify-content-md-center.align-self-center
        figure
          img.img-450.mb-2(src="@/assets/tema2/img-18.svg")

    p.mb-5 Ya se tiene información suficiente para determinar el valor total de la inversión inicial requerida en activos que debe hacer la compañía y la financiación disponible:
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6.col-sm-8.justify-content-md-center.align-self-center
        table.table-striped.bordecel.m-der    
          thead
            tr
              th(colspan='2') Cálculo de la inversión inicial y los aportes  (miles de pesos)
           
          tbody
            tr
              td.t-ng Inversión en activos
              td.t-ng
            tr
              td Efectivo
              td.t-f4 $1.697.458
            tr
              td Cuentas por cobrar
              td.t-f4 $3.145.383
            tr
              td Inventario de materia prima
              td.t-f4 $2.213.542
            tr
              td Inventario de productos en proceso
              td.t-f4 $786.346
            tr
              td Inventario de productos terminados
              td.t-f4 $3.931.729
            tr
              td Maquinaria
              td.t-f4 $12.000.000
            tr
              td
                b Total
              td.t-f4
                b $23.774.458
        br
        br
        table.table-striped.bordecel.m-der    
          tbody        
            tr
              td.t-ng Financiación disponible
              td.t-ng
                        
            tr
              td Efectivo en activos
              td.t-f4 $0
            tr
              td Proveedores
              td.t-f4 $1.936.849
            tr
              td Préstamos bancarios
              td.t-f4 $7.500.000
            tr
              td
                b Total
              td.t-f4
                b $9.436.849
        br
        br
        table.table-striped.bordecel.m-der   
          tbody        
            tr
              td.t-ng Aporte requerido de socios
              td.t-ng          
            tr
              td Inversión en activos
              td.t-f4 $23.774.458
            tr
              td  - Financiación disponible
              td.t-f4 $9.436.849
            tr
              td
                b = Total aporte requerido de socios
              td.t-f4
                b $14.337.609

    br 
    br 
    p.mb-5 El siguiente paso es calcular el costo de ventas.
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6.col-sm-8.justify-content-md-center.align-self-center
        table.table-striped.bordecel.m-der       
          thead
            tr
              th(colspan='2' ) Costos de ventas (miles de pesos)
            
          tbody
            tr
              td Inventario inicial producto en proceso
              td.t-f4 $0
            tr
              td M&aacute;s: costo de producci&oacute;n
              td $24.790.375
            tr
              td Menos: inventario final productos en proceso
              td.t-f4 $826.346
            tr
              td = Costos de los productos terminados
              td.t-f4 $23.964.029
            tr
              td M&aacute;s: inventario inicial productos terminados
              td
                br
            tr
              td Menos: inventario final productos terminados
              td.t-f4 $4.131.729
            tr
              td
                b =Total costo de venta
              td.t-f4
                b $19.832.300
    br
  
    p.mb-5 Con el valor del costo de ventas se elabora el estado de resultados proyectado como se muestra a continuación:

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6.col-sm-8.justify-content-md-center.align-self-center
        table.table-striped.bordecel 

          thead
            tr
              th(colspan='2') Estado de resultados (miles de pesos)
            
          tbody
            tr
              td Ventas
              td.t-f4 $30.625.000
            tr
              td - Costo de ventas
              td.t-f4 $19.832.300
            tr
              td = Utilidad bruta
              td.t-f4 $10.792.700
            tr
              td - Gastos de administraci&oacute;n y ventas
              td.t-f4 $3.000.000
            tr
              td = Utilidad operativa
              td.t-f4 $7.792.700
            tr
              td - Intereses
              td.t-f4 $1.800.000
            tr
              td = Utilidad antes de impuestos
              td.t-f4 $5.992.700
            tr
              td - Impuestos
              td.t-f4 $2.097.445
            tr
              td = Utilidad neta
              td.t-f4 $3.895.255
    br 
    br
    p El siguiente paso es elaborar el estado de flujo de efectivo presupuestado para lo que se debe tener en cuenta los ingresos y los egresos de dinero.
    p.mb-5 Los ingresos y los egresos de dinero tienen tres fuentes:

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6.justify-content-md-center.align-self-center
        figure
          img.mb-2(src="@/assets/tema2/img-19--.svg")

    p ¿Qué datos van al estado de flujo de efectivo?
    p.mb-5 Veamos, por ejemplo, cómo se reparte el valor de las ventas en los diferentes estados financieros:

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-8.col-sm-10.justify-content-md-center.align-self-center
        table.table-striped.bordecel     
          thead
            tr
              th Operación
              th Valor
              th Estado financiero
            tr
          tbody
            tr
              td Ventas a crédito
              td $30.625.000
              td Resultados
            tr
              td Los clientes quedan debiendo 60 días
              td $5.104.166
              td Balance general
            tr
              td Los clientes pagaron 300 días
              td $25.520.833
              td Flujo de efectivo
   
    p.mb-5 El estado de flujo de efectivo se elabora bajo el siguiente formato:
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-8.col-sm-10.justify-content-md-center.align-self-center
        table.table-striped.bordecel.m-der  
          thead
            tr
              th(colspan='3') Estado de flujo de efectivo proyectado (miles   de pesos)
            tr
          tbody
            tr
              td.t-ng(colspan='3') Efectivo generado por las operaciones
            tr
              td Recaudo de cartera
              td 
              td $25.520.833.3
            tr
              td Menos: egresos operativos
              td 
              td 
            tr
              td Pagos de materia prima
              td $13.557.943
              td 
            tr
              td Sueldos y salarios
              td $6.248.750
              td 
            tr
              td Prestaciones sociales
              td $2.499.500
              td 
            tr
              td Arrendamiento
              td $264.000
              td 
            tr
              td Mantenimiento
              td $132.000
              td 
            tr
              td Otros costos indirectos
              td $540.000
              td 
            tr
              td Gastos de administraci&oacute;n y ventas
              td $3.000.000
              td 
            tr
              td Pago de impuestos
              td 
              td 
            tr
              td Total egresos operativos
              td 
              td $26.242.193
            tr
              td(colspan='2')
                b Total efectivo generado por las operaciones
              td $721.359
        br
        br
        h5 M&aacute;s: efectivo que proveer&aacute;n las actividades de financiaci&oacute;n
        table.table-striped.bordecel.m-der  
          tbody 

            tr
              td Aportes de socios
              td $14.337.609
              td 
            tr
              td Pr&eacute;stamos bancarios
              td $7.500.000
              td 
            tr
              td Menos: abono a pr&eacute;stamo
              td $2.500.000
              td 
            tr
              td Menos: intereses
              td $1.800.000
              td 
            tr
              td(colspan='2') 
                b Efectivo provisto actividades de financiaci&oacute;n
              td
                b $17. 537.609
        br 
        br            
        h5 Menos: Efectivo que demandar&aacute;n las actividades de inversi&oacute;n
        table.table-striped.bordecel.m-der  
          tbody               
            tr
              td Compra de maquinaria
              td $12.000.000
              td 
            tr
              td(colspan='2') 
                b Total efectivo demandado actividades de inversi&oacute;n
              td
                b $12.000.000
        br
        br
        table.table-striped.bordecel.m-der  
          tbody
            tr
              td Aumento del efectivo
              td 
              td $4.816.250
            tr
              td M&aacute;s: efectivo inicial
              td 
              td $0
            tr
              td
                b Efectivo final
              td 
              td
                b $4.816.250

    p Como es el primer año de actividades no hay efectivo inicial.

    p El aumento del efectivo es la sumatoria del efectivo generado por la operación más el efectivo provisto por las actividades de financiación menos el efectivo que demandan las actividades de inversión.

    p El valor del efectivo final se lleva al estado de balance general en la cuenta de efectivo.

    p.mb-5 Finalmente, ya está todo listo para elaborar el estado de situación financiera (balance general) presupuestado, que resume el movimiento y saldo de cada una de las operaciones efectuadas por la empresa.
    
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-6.col-sm-8.justify-content-md-center.align-self-center
        table.table-striped.bordecel.m-der.mb-5  
          thead
            tr
              th(colspan='2') 
                b Balance general proyectado (miles de pesos)
          tbody
            tr
              td.t-ng Activos
              td.t-ng
            tr
              td Efectivo
              td $4.816.250
            tr
              td Cuentas por cobrar
              td $5.104.166
            tr
              td Materias primas
              td $2.213.541
            tr
              td Producto en proceso
              td $826
            tr
              td Producto terminado
              td $4.131.729
            tr
              td Maquinaria
              td $12.000.000
            tr
              td Menos depreciaci&oacute;n acumulada
              td -$1.200.000
            tr
              td
                b Totales activos
              td
                b $27.892.033
        table.table-striped.bordecel.m-der.mb-5
          tbody
            tr
              td.t-ng Pasivos
              td.t-ng 
            tr
              td Proveedores
              td $1.936.849
            tr
              td Pr&eacute;stamos bancarios
              td $5.000.000
            tr
              td Impuestos por pagar
              td $2.097.445
            tr
              td Prestaciones sociales
              td $624.875
            tr
              td
                b Total pasivos
              td
                b $9.659.169
        table.table-striped.bordecel.m-der.mb-5
          tbody
            tr
              td.t-ng Patrimonio
              td.t-ng 
            tr
              td Capital
              td $14.337.609
            tr
              td Utilidades retenidas
              td $3.895.255
            tr
              td
                b Total patrimonio
              td
                b $18.232.864
        table.table-striped.bordecel.m-der.mb-5
          tbody
            tr
              td
                b Total pasivos y patrimonio
              td
                b $27.892.033

    
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

<style lang="sass" scoped></style>
