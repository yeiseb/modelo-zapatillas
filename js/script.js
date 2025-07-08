// Datos de     os ampliados
const products = [
    { 
        id: 1, 
        name: "Ref: W-96-35-40-108", 
        price: "$180.000", 
        category: ["casual", "hombre"],
        description: "Las Nike Air Max 270 ofrecen una amortiguación innovadora que proporciona comodidad durante todo el día. Con su diseño moderno y colores vibrantes, son perfectas para el estilo urbano y el running.",
        features: [
            "Amortiguación Air Max para máxima comodidad",
            "Upper transpirable",
            "Suela de goma duradera",
            "Disponible en varios colores"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"],
        image: "img/1.jpeg"
    },
    { 
        id: 2, 
        name: "Ref: M-18-40-45", 
        price: "$220.000", 
        category: ["casual", "hombre", ],
        description: "Las Adidas Ultraboost son el epítome de la tecnología en calzado deportivo. Con su suela Boost que devuelve la energía con cada paso, son ideales para corredores exigentes.",
        features: [
            "Tecnología Boost para máxima energía",
            "Upper Primeknit ajustable",
            "Suela Continental para mejor tracción",
            "Plantilla Ortholite para confort"
        ],
        sizes: ["36", "37", "38", "39", "40"],
        image: "img/2.jpeg"
    },
    { 
        id: 3, 
        name: "Ref: 226-39-44-156", 
        price: "$190.000", 
        category: ["casual", "hombre", ],
        description: "Las Puma RS-X combinan estilo retro con comodidad moderna. Su diseño llamativo y su suela amortiguada las hacen perfectas para el uso diario.",
        features: [
            "Estilo retro futurista",
            "Suela RS amortiguada",
            "Materiales premium",
            "Cómodas para todo el día"
        ],
        sizes: ["39", "40", "41", "42", "43"],
        image: "img/3.jpeg"
    },
    { 
        id: 4, 
        name: "Ref: 101-36-40-120", 
        price: "$210.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas New Balance 574 ofrecen estilo y comodidad en un diseño atemporal. Perfectas para quienes buscan un calzado versátil y duradero.",
        features: [
            "Diseño clásico atemporal",
            "Suela ENCAP para soporte y durabilidad",
            "Plantilla cómoda",
            "Variedad de colores"
        ],
        sizes: ["35", "36", "37", "38", "39"],
        image: "img/4.jpeg"
    },
    { 
        id: 5, 
        name: "Ref: 35-43", 
        price: "$230.000", 
        category: ["deportivo", "hombre", "running"],
        description: "Diseñadas para entrenamiento cruzado, las Reebok Nano X ofrecen estabilidad y flexibilidad para cualquier tipo de ejercicio.",
        features: [
            "FlexWeave para soporte y flexibilidad",
            "Suela de goma duradera",
            "Amortiguación Floatride Energy",
            "Ideal para crossfit"
        ],
        sizes: ["40", "41", "42", "43", "44"],
        image: "img/5.jpeg"
    },
    { 
        id: 6, 
        name: "Ref: 35-43", 
        price: "$160.000", 
        category: ["deportivo", "hombre", "mujer","running"],
        description: "Las icónicas Vans Old Skool son un clásico del calzado urbano. Con su diseño sencillo y su durabilidad, son perfectas para el día a día.",
        features: [
            "Estilo clásico con franja lateral",
            "Suela de goma con agarre",
            "Forro acolchado para comodidad",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/6.jpeg"
    },
    { 
        id: 7, 
        name: "Ref: 433k-18-23-168", 
        price: "$250.000", 
        category: ["niños", "casual", "hombre"],
        description: "Tecnología HOVR para una carrera sin esfuerzo. Las Under Armour HOVR Phantom ofrecen una amortiguación excepcional y retorno de energía.",
        features: [
            "Tecnología HOVR para amortiguación",
            "Upper sin costuras para mayor comodidad",
            "Suela de goma de alta tracción",
            "Conectividad con app MapMyRun"
        ],
        sizes: ["39", "40", "41", "42", "43", "44"],
        image: "img/7.jpeg"
    },
    { 
        id: 8, 
        name: "Ref: 2046-35-40-120", 
        price: "$150.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/8.jpeg"
    },
    { 
        id: 9, 
        name: "Ref: 217-36-40-132", 
        price: "$150.000", 
        category: ["casual", "mujer", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/9.jpeg"
    },
    { 
        id: 10, 
        name: "Ref: 828-24-29-120", 
        price: "$150.000", 
        category: ["niño", "casual"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/10.jpeg"
    },
        { 
        id: 11, 
        name: "Ref: 39-44", 
        price: "$150.000", 
        category: ["deportivo", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/11.jpeg"
    },
        { 
        id: 12, 
        name: "Ref: 173-36-40-330", 
        price: "$150.000", 
        category: ["casual", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/12.jpeg"
    },
        { 
        id: 13, 
        name: "Ref: 101-30-35-90", 
        price: "$150.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/13.jpeg"
    },
        { 
        id: 14, 
        name: "Ref: 113-36-41", 
        price: "$150.000", 
        category: ["casual", "niño"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/14.jpeg"
    },
        { 
        id: 15, 
        name: "Ref: 113-36-41-348", 
        price: "$150.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/15.jpeg"
    },
        { 
        id: 16, 
        name: "Ref: KNOX-37-42", 
        price: "$150.000", 
        category: ["casual", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/16.jpeg"
    },
         { 
        id: 17, 
        name: "Ref: 148w-35-40-156", 
        price: "$150.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/17.jpeg"
    },
        { 
        id: 18, 
        name: "Ref: MARA-36-41-252", 
        price: "$150.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/18.jpeg"
    },
      { 
        id: 19, 
        name: "Ref: 220-39-44", 
        price: "$150.000", 
        category: ["casual", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/19.jpeg"
    },
      { 
        id: 20, 
        name: "Ref: 2051-35-40", 
        price: "$150.000", 
        category: ["casual", "niño"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/20.jpeg"
    },
      { 
        id: 21, 
        name: "Ref: 2037-35-40", 
        price: "$150.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/21.jpeg"
    },
      { 
        id: 22, 
        name: "Ref: 5P-110D-38-42-384", 
        price: "$150.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/22.jpeg"
    },
      { 
        id: 23, 
        name: "Ref: 5P-446N-18-23-168", 
        price: "$150.000", 
        category: ["casual", "niño"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/23.jpeg"
    },
     { 
        id: 24, 
        name: "Ref: 5P-171D-38-42-276", 
        price: "$150.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/24.jpeg"
    },
     { 
        id: 25, 
        name: "Ref: 18-23", 
        price: "$150.000", 
        category: ["casual", "hombre, mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/25.jpeg"
    },
     { 
        id: 26, 
        name: "Ref: 5P-87D-37-41-264", 
        price: "$150.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/26.jpeg"
    },
     { 
        id: 27, 
        name: "Ref: 5P-184D-37-41-336", 
        price: "$150.000", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/27.jpeg"
    },
     { 
        id: 28, 
        name: "Ref: 5P-131N-18-23-168", 
        price: "$150.000", 
        category: ["casual", "niño"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/28.jpeg"
    },
     { 
        id: 29, 
        name: "Ref: 203-M-39-44-198", 
        price: "$150.000", 
        category: ["casual", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/29.jpeg"
    },
     { 
        id: 30, 
        name: "Ref: H185-38-43-564", 
        price: "$150.000", 
        category: ["casual", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/30.jpeg"
    },
     { 
        id: 31, 
        name: "Ref: 40-45", 
        price: "$150.000", 
        category: ["deportivo", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/31.jpeg"
    },
     { 
        id: 32, 
        name: "Ref: 34-38  39-43", 
        price: "$150.000", 
        category: ["deportivo", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/32.jpeg"
    },
     { 
        id: 33, 
        name: "Ref: 35-38  39-43", 
        price: "$150.000", 
        category: ["deportivo", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/33.jpeg"
    },
     { 
        id: 34, 
        name: "Ref: D195-A-35-40-540", 
        price: "$150.000", 
        category: ["casual", "hombre", "urbano"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/34.jpeg"
    },
     { 
        id: 35, 
        name: "Ref: H205-C-38-43-540", 
        price: "$150.000", 
        category: ["casual", "hombre", "urbano"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/35.jpeg"
    },
     { 
        id: 36, 
        name: "Ref: 35-40", 
        price: "$150.000", 
        category: ["casual", "mujer", "urbano"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/36.jpeg"
    },
    { 
        id: 37, 
        name: "Ref: GRETTA-35-40", 
        price: "$150.000", 
        category: ["casual", "mujer", "urbano"],
        description: "Zapatillas urbanas con diseño moderno y cómodo, ideal para uso diario. Fabricadas con materiales resistentes que combinan estilo y durabilidad.",
        features: [
            "Diseño urbano moderno",
            "Materiales resistentes",
            "Suela de goma antideslizante",
            "Ajuste cómodo y seguro"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/37.jpeg"
    },
    { 
        id: 38, 
        name: "Ref: FENIX 35-40 39-44", 
        price: "$160.000", 
        category: ["deportivo", "hombre"],
        description: "Zapatillas deportivas de alto rendimiento con tecnología de amortiguación para entrenamiento intenso. Diseño ergonómico que se adapta al pie.",
        features: [
            "Tecnología de amortiguación",
            "Materiales transpirables",
            "Suela de alta tracción",
            "Soporte lateral reforzado"
        ],
        sizes: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"],
        image: "img/38.jpeg"
    },
    { 
        id: 39, 
        name: "Ref: S-341-39-44-144", 
        price: "$170.000", 
        category: ["casual", "hombre"],
        description: "Zapatillas Air-Shoe con diseño ligero y cómodo, perfectas para el uso diario. Estilo versátil que combina con cualquier outfit.",
        features: [
            "Tecnología de aire para mayor comodidad",
            "Upper en malla transpirable",
            "Suela flexible",
            "Diseño unisex"
        ],
        sizes: ["39", "40", "41", "42", "43", "44"],
        image: "img/39.jpeg"
    },
    { 
        id: 40, 
        name: "Ref: 5-358-36-41-39-44", 
        price: "$180.000", 
        category: ["deportivo", "hombre", "running"],
        description: "Zapatillas Surfing diseñadas para corredores, con excelente amortiguación y tracción en todo tipo de superficies.",
        features: [
            "Amortiguación reactiva",
            "Upper transpirable",
            "Suela de goma duradera",
            "Refuerzos estratégicos"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
        image: "img/40.jpeg"
    },
    { 
        id: 41, 
        name: "Ref: 203-35-40-192", 
        price: "$190.000", 
        category: ["casual", "mujer", ""],
        description: "Zapatillas especializadas para golf con excelente tracción y estabilidad. Diseño elegante que cumple con los requisitos del deporte.",
        features: [
            "Tacos integrados para mejor tracción",
            "Materiales resistentes al agua",
            "Soporte para movimientos laterales",
            "Plantilla extraíble"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/41.jpeg"
    },
    { 
        id: 42, 
        name: "Ref: 211-W-36-40-192", 
        price: "$160.000", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con diseño elegante y cómodo, perfectas para el día a día. Combinan estilo y funcionalidad.",
        features: [
            "Diseño femenino moderno",
            "Plantilla acolchada",
            "Suela flexible",
            "Variedad de colores"
        ],
        sizes: ["36", "37", "38", "39", "40"],
        image: "img/42.jpeg"
    },
    { 
        id: 43, 
        name: "Ref: 35-43", 
        price: "$160.000", 
        category: ["deportivo", "hombre"],
        description: "Zapatillas femeninas con diseño elegante y cómodo, perfectas para el día a día. Combinan estilo y funcionalidad.",
        features: [
            "Diseño femenino moderno",
            "Plantilla acolchada",
            "Suela flexible",
            "Variedad de colores"
        ],
        sizes: ["36", "37", "38", "39", "40"],
        image: "img/43.jpeg"
    },
    { 
        id: 44, 
        name: "Ref: 007-M3-35-40", 
        price: "$150.000", 
        category: ["casual", "hombre"],
        description: "Zapatillas urbanas con diseño minimalista y versátil. Ideales para combinar con diferentes estilos de ropa.",
        features: [
            "Diseño minimalista",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/44.jpeg"
    },
    { 
        id: 45, 
        name: "Ref: 41-45", 
        price: "$150.000", 
        category: ["casual", "hombre"],
        description: "Zapatillas urbanas con diseño minimalista y versátil. Ideales para combinar con diferentes estilos de ropa.",
        features: [
            "Diseño minimalista",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/45.jpeg"
    },
    { 
        id: 46, 
        name: "Ref: FRT-534-CG6-24-29", 
        price: "$120.000", 
        category: ["niños", "casual", "mujer"],
        description: "Zapatillas deportivas para niños con diseño divertido y colores vibrantes. Ofrecen comodidad y soporte para actividades diarias.",
        features: [
            "Diseño infantil colorido",
            "Materiales suaves y flexibles",
            "Suela antideslizante",
            "Cierre con velcro fácil de usar"
        ],
        sizes: ["24", "25", "26", "27", "28", "29"],
        image: "img/46.jpeg"
    },
    { 
        id: 47, 
        name: "Ref: FRT-520-CB8-24-29", 
        price: "$120.000", 
        category: ["niños", "casual"],
        description: "Zapatillas deportivas infantiles con tecnología de confort y diseño ergonómico para el desarrollo saludable de los pies.",
        features: [
            "Plantilla anatómica",
            "Materiales transpirables",
            "Suela flexible",
            "Refuerzos en zonas de desgaste"
        ],
        sizes: ["24", "25", "26", "27", "28", "29"],
        image: "img/47.jpeg"
    },
    { 
        id: 48, 
        name: "Ref: FRT-693-CG26-24-29", 
        price: "$125.000", 
        category: ["niños", "casual"],
        description: "Zapatillas Liger para niños, ultra livianas y cómodas. Diseño colorido que gustará a los más pequeños.",
        features: [
            "Peso ultra ligero",
            "Materiales suaves",
            "Suela flexible",
            "Diseño divertido"
        ],
        sizes: ["24", "25", "26", "27", "28", "29"],
        image: "img/48.jpeg"
    },
    { 
        id: 49, 
        name: "Ref: FRT-669-CB14-24-29", 
        price: "$120.000", 
        category: ["niños", "casual", "hombre"],
        description: "Zapatillas infantiles con tecnología de confort y soporte para el crecimiento saludable de los pies.",
        features: [
            "Soporte para arco plantar",
            "Plantilla extraíble",
            "Materiales duraderos",
            "Cierre seguro"
        ],
        sizes: ["24", "25", "26", "27", "28", "29"],
        image: "img/49.jpeg"
    },
    { 
        id: 50, 
        name: "Ref: FRT-667-CG13", 
        price: "$115.000", 
        category: ["niños", "casual"],
        description: "Zapatillas casuales para niños con diseño moderno y colores atractivos. Perfectas para el uso escolar y diario.",
        features: [
            "Diseño escolar",
            "Materiales fáciles de limpiar",
            "Suela resistente",
            "Ajuste cómodo"
        ],
        sizes: ["24", "25", "26", "27", "28", "29"],
        image: "img/50.jpeg"
    },
    { 
        id: 51, 
        name: "Ref: FLEXRUN-35-40-624", 
        price: "$180.000", 
        category: ["urbano", "hombre", ""],
        description: "Zapatillas FlexRun con tecnología de amortiguación para corredores. Ofrecen máxima flexibilidad y retorno de energía.",
        features: [
            "Tecnología FlexRun",
            "Upper transpirable",
            "Suela de alta tracción",
            "Amortiguación reactiva"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/51.jpeg"
    },
    { 
        id: 52, 
        name: "Ref: FLEXRUN 35-40-624", 
        price: "$180.000", 
        category: ["deportivo", "hombre", "running"],
        description: "Zapatillas de running con sistema de amortiguación avanzado para mayor comodidad en cada paso. Diseño aerodinámico.",
        features: [
            "Sistema de amortiguación avanzado",
            "Materiales ligeros",
            "Suela de desgaste prolongado",
            "Soporte para arco plantar"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/52.jpeg"
    },
    { 
        id: 53, 
        name: "Ref: N15-25-29-156", 
        price: "$110.000", 
        category: ["niños", "casual"],
        description: "Zapatillas infantiles con diseño clásico y cómodo, perfectas para el día a día de los más pequeños.",
        features: [
            "Diseño clásico infantil",
            "Materiales suaves",
            "Suela flexible",
            "Fácil de poner y quitar"
        ],
        sizes: ["25", "26", "27", "28", "29"],
        image: "img/53.jpeg"
    },
    { 
        id: 54, 
        name: "Ref: 35-40-624", 
        price: "$170.000", 
        category: ["deportivo", "hombre"],
        description: "Zapatillas deportivas versátiles para entrenamiento y uso casual. Combinan estilo y funcionalidad deportiva.",
        features: [
            "Versátil para deporte y casual",
            "Materiales transpirables",
            "Suela multidireccional",
            "Ajuste personalizable"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/54.jpeg"
    },
    { 
        id: 55, 
        name: "Ref: 35-40", 
        price: "$170.000", 
        category: ["casual", "hombre", "urbano"],
        description: "Zapatillas deportivas versátiles para entrenamiento y uso casual. Combinan estilo y funcionalidad deportiva.",
        features: [
            "Versátil para deporte y casual",
            "Materiales transpirables",
            "Suela multidireccional",
            "Ajuste personalizable"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/55.jpeg"
    },
    { 
        id: 56, 
        name: "Ref: YANEU X4 38-43", 
        price: "$190.000", 
        category: ["casual", "hombre", "urbano"],
        description: "Zapatillas YANEU X4 con tecnología de alto rendimiento para deportistas exigentes. Diseño moderno y aerodinámico.",
        features: [
            "Tecnología X4 para máximo rendimiento",
            "Upper en malla técnica",
            "Sistema de amortiguación reactiva",
            "Suela de tracción multidireccional"
        ],
        sizes: ["38", "39", "40", "41", "42", "43"],
        image: "img/56.jpeg"
    },
    { 
        id: 57, 
        name: "Ref: YANBU X4 35-40", 
        price: "$190.000", 
        category: ["casual", "hombre", "urbano"],
        description: "Zapatillas YANBU X4 diseñadas para entrenamiento de alta intensidad. Ofrecen estabilidad y soporte en cada movimiento.",
        features: [
            "Soporte para entrenamiento intenso",
            "Materiales resistentes",
            "Suela de alta durabilidad",
            "Sistema de ajuste seguro"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/57.jpeg"
    },
    { 
        id: 58, 
        name: "Ref: YANBU X4 38-43", 
        price: "$190.000", 
        category: ["casual", "hombre"],
        description: "Zapatillas YANBU X4 en color azul oscuro, diseñadas para alto rendimiento con tecnología de amortiguación avanzada y soporte para entrenamientos intensos.",
        features: [
            "Tecnología X4 de alto rendimiento",
            "Amortiguación reactiva",
            "Upper en malla transpirable",
            "Suela de tracción multidireccional"
        ],
        sizes: ["38", "39", "40", "41", "42", "43"],
        image: "img/58.jpeg"
    },
    { 
        id: 59, 
        name: "Ref: YANBU 35-40 Azul Oscuro", 
        price: "$185.000", 
        category: ["casual", "hombre"],
        description: "Zapatillas YANBU en azul oscuro con diseño ergonómico para máxima comodidad. Ideales para entrenamiento y uso diario con estilo deportivo.",
        features: [
            "Color azul oscuro moderno",
            "Plantilla Ortholite para confort",
            "Suela de goma duradera",
            "Ajuste seguro y cómodo"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/59.jpeg"
    },
    { 
        id: 60, 
        name: "Ref: MILESPONSIVER 35-40", 
        price: "$200.000", 
        category: ["deportivo", "hombre", "running"],
        description: "Zapatillas Milésponsiver diseñadas para runners, con tecnología de absorción de impacto y máxima respirabilidad para largas distancias.",
        features: [
            "Tecnología de absorción de impacto",
            "Upper ultra transpirable",
            "Suela de alta durabilidad",
            "Peso ligero para competencia"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/60.jpeg"
    },
    { 
        id: 61, 
        name: "Ref: D032-35-40-624", 
        price: "$160.000", 
        category: ["casual", "hombre"],
        description: "Zapatillas urbanas con diseño moderno y versátil. Perfectas para combinar con jeans o ropa casual, ofreciendo comodidad durante todo el día.",
        features: [
            "Estilo urbano moderno",
            "Plantilla acolchada",
            "Suela flexible antideslizante",
            "Materiales resistentes"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/61.jpeg"
    },
    { 
        id: 62, 
        name: "Ref: D025-35-40-672", 
        price: "$165.000", 
        category: ["casual", "hombre"],
        description: "Zapatillas casuales con diseño contemporáneo y detalles premium. Ofrecen comodidad y estilo para el uso diario en la ciudad.",
        features: [
            "Diseño contemporáneo",
            "Detalles en materiales premium",
            "Suela de goma con patrón de tracción",
            "Ajuste personalizable"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        image: "img/62.jpeg"
    }
];
    
let cart = [];
const productsPerPage = 8;
let currentPage = 1;
let filteredProducts = [...products];

// Renderizar productos
function renderProducts(productsToShow = filteredProducts) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    // Calcular productos para la página actual
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = productsToShow.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        grid.innerHTML = '<p class="no-products">No se encontraron productos que coincidan con tu búsqueda</p>';
        updateProductsCount(0);
        renderPagination(0);
        return;
    }
    
    updateProductsCount(productsToShow.length);
    renderPagination(productsToShow.length);
    
    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" onclick="showProductModal(${product.id})">
                <img src="${product.image || 'img/default-shoe.jpg'}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name" onclick="showProductModal(${product.id})">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id}, event)">
                    Agregar al Carrito
                </button>
            </div>
        `;
        grid.appendChild(productCard);
    });
}

// Actualizar contador de productos
function updateProductsCount(count) {
    const productsCount = document.getElementById('products-count');
    if (productsCount) {
        productsCount.textContent = `Mostrando ${Math.min((currentPage - 1) * productsPerPage + 1, count)}-${Math.min(currentPage * productsPerPage, count)} de ${count} productos`;
    }
}

// Renderizar paginación
function renderPagination(totalProducts) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    pagination.innerHTML = '';
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    if (totalPages <= 1) return;
    
    // Botón Anterior
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '&laquo;';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    pagination.appendChild(prevBtn);
    
    // Botones de página
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        const firstPageBtn = document.createElement('button');
        firstPageBtn.className = 'page-btn';
        firstPageBtn.textContent = '1';
        firstPageBtn.onclick = () => {
            currentPage = 1;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(firstPageBtn);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0.5rem';
            pagination.appendChild(ellipsis);
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => {
            currentPage = i;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(pageBtn);
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0.5rem';
            pagination.appendChild(ellipsis);
        }
        
        const lastPageBtn = document.createElement('button');
        lastPageBtn.className = 'page-btn';
        lastPageBtn.textContent = totalPages;
        lastPageBtn.onclick = () => {
            currentPage = totalPages;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(lastPageBtn);
    }
    
    // Botón Siguiente
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = '&raquo;';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    pagination.appendChild(nextBtn);
}

// Filtrar productos
function filterProducts(category) {
    // Resetear a la primera página
    currentPage = 1;
    
    // Actualizar botones de filtro activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });

    if (category === 'todos') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.category.includes(category)
        );
    }
    
    renderProducts();
    
    // Cerrar menú móvil si está abierto
    document.querySelector('.nav-menu')?.classList.remove('active');
    
    // Scroll al inicio del catálogo
    if (window.location.pathname.includes('catalogo.html')) {
        window.scrollTo({
            top: document.getElementById('catalogo').offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Ordenar productos
function sortProducts() {
    const sortSelect = document.getElementById('sort-select');
    const sortValue = sortSelect.value;
    
    // Resetear a la primera página
    currentPage = 1;
    
    switch(sortValue) {
        case 'price-asc':
            filteredProducts.sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[^0-9]/g, ''));
                const priceB = parseFloat(b.price.replace(/[^0-9]/g, ''));
                return priceA - priceB;
            });
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[^0-9]/g, ''));
                const priceB = parseFloat(b.price.replace(/[^0-9]/g, ''));
                return priceB - priceA;
            });
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // No ordenar
            break;
    }
    
    renderProducts();
}

// Buscar productos
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase();
        currentPage = 1;
        
        if (searchTerm.length > 0) {
            filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.some(cat => cat.toLowerCase().includes(searchTerm))
            );
        } else {
            filteredProducts = [...products];
        }
        
        renderProducts();
    };
    
    searchInput.addEventListener('input', performSearch);
    searchIcon.addEventListener('click', performSearch);
}

// Agregar al carrito
function addToCart(productId, event) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    
    // Animación de feedback
    if (event) {
        const button = event.target;
        button.style.background = '#4CAF50';
        button.textContent = '✓ Agregado';
        setTimeout(() => {
            button.style.background = '';
            button.textContent = 'Agregar al Carrito';
        }, 1000);
    }
    
    // Actualizar contador del carrito con animación
    const cartCount = document.getElementById('cart-count');
    cartCount.classList.add('animate-bounce');
    setTimeout(() => cartCount.classList.remove('animate-bounce'), 1000);
}

// Actualizar display del carrito
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">No hay productos seleccionados</p>';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const priceNumber = parseFloat(item.price.replace(/[^0-9]/g, ''));
        total += priceNumber * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.price} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-item">
                ×
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Mostrar total
    const totalElement = document.createElement('div');
    totalElement.className = 'cart-total';
    totalElement.innerHTML = `
        <hr>
        <div class="total-row">
            <strong>Total:</strong>
            <span>$${total.toLocaleString('es-CO')}</span>
        </div>
    `;
    cartItems.appendChild(totalElement);
}

// Eliminar del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Toggle carrito modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    
    // Actualizar el carrito cuando se abre
    if (modal.style.display === 'flex') {
        updateCartDisplay();
    }
}

// Enviar mensaje de WhatsApp
function sendWhatsAppMessage() {
    if (cart.length === 0) {
        alert('Por favor agrega productos al carrito primero');
        return;
    }
    
    let message = '¡Hola Sandez! Estoy interesado/a en los siguientes productos:\n\n';
    let total = 0;
    
    cart.forEach(item => {
        const priceNumber = parseFloat(item.price.replace(/[^0-9]/g, ''));
        total += priceNumber * item.quantity;
        message += `• ${item.name} - ${item.price} x ${item.quantity}\n`;
    });
    
    message += `\nTotal: $${total.toLocaleString('es-CO')}\n\n`;
    message += 'Por favor indíquenme disponibilidad y métodos de pago. ¡Gracias!';
    
    const phoneNumber = '573174196677';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Enviar mensaje de contacto
function sendContactMessage() {
    const name = document.querySelector('.contact-form input[type="text"]').value.trim();
    const email = document.querySelector('.contact-form input[type="email"]').value.trim();
    const phone = document.querySelector('.contact-form input[type="tel"]').value.trim();
    const message = document.querySelector('.contact-form textarea').value.trim();
    
    if (!name || !email || !message) {
        alert('Por favor completa los campos requeridos: Nombre, Email y Mensaje');
        return;
    }
    
    let whatsappMessage = 'Consulta desde la página web:\n\n';
    whatsappMessage += `Nombre: ${name}\n`;
    whatsappMessage += `Email: ${email}\n`;
    if (phone) whatsappMessage += `Teléfono: ${phone}\n`;
    whatsappMessage += `Mensaje: ${message}`;
    
    const phoneNumber = '573174196677';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
}

// Mostrar modal del producto
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modalBody = document.getElementById('product-modal-body');
    modalBody.innerHTML = `
        <div class="product-modal-image">
            <img src="${product.image || 'img/default-shoe.jpg'}" alt="${product.name}">
        </div>
        <div class="product-modal-info">
            <h2>${product.name}</h2>
            <p class="product-modal-price">${product.price}</p>
            <p class="product-modal-description">${product.description}</p>
            
            <div class="product-details-section">
                <h4>Características:</h4>
                <ul class="product-modal-features">
                    ${product.features.map(feat => `<li>${feat}</li>`).join('')}
                </ul>
            </div>
            
            <div class="product-details-section">
                <h4>Tallas disponibles:</h4>
                <div class="size-buttons">
                    ${product.sizes.map(size => size ? `<button class="size-btn">${size}</button>` : '').join('')}
                </div>
            </div>
            
            <div class="product-modal-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id}); closeProductModal()">
                    Agregar al Carrito
                </button>
                <button class="whatsapp-button" onclick="sendSingleProductWhatsApp(${product.id})">
                    Consultar por WhatsApp
                </button>
            </div>
        </div>
    `;
    
    // Manejar selección de tallas
    const sizeButtons = modalBody.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    document.getElementById('product-modal').style.display = 'flex';
}

// Cerrar modal del producto
function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Enviar mensaje de WhatsApp sobre un producto
function sendSingleProductWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    let message = `¡Hola Sandez! Estoy interesado/a en el producto:\n\n`;
    message += `• ${product.name} - ${product.price}\n\n`;
    message += `¿Podrían darme más información sobre disponibilidad y métodos de pago?`;
    
    const phoneNumber = '573174196677';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Toggle menú móvil
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    navMenu.classList.toggle('active');
    mobileBtn.classList.toggle('active');
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-menu').classList.remove('active');
            document.getElementById('mobile-menu-btn').classList.remove('active');
        }
    });
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Cerrar menú móvil si está abierto
        document.querySelector('.nav-menu').classList.remove('active');
        document.getElementById('mobile-menu-btn').classList.remove('active');
    });
});

// Efecto de navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '0.3rem 0';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(4, 78, 23, 0.3)';
        navbar.style.padding = '0.5rem 0';
    }
});

// Cerrar modales al hacer click fuera
document.addEventListener('click', (e) => {
    const cartModal = document.getElementById('cart-modal');
    if (e.target === cartModal) {
        toggleCart();
    }
    
    const productModal = document.getElementById('product-modal');
    if (e.target === productModal) {
        closeProductModal();
    }
});

// Cerrar modales con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('cart-modal').style.display = 'none';
        document.getElementById('product-modal').style.display = 'none';
    }
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    // Verificar si estamos en la página de catálogo
    const isCatalogPage = window.location.pathname.includes('catalogo.html');
    
    if (isCatalogPage) {
        // Configurar búsqueda y ordenamiento
        setupSearch();
        
        // Verificar parámetros de URL para filtros
        const urlParams = new URLSearchParams(window.location.search);
        const filter = urlParams.get('filter');
        
        if (filter) {
            filterProducts(filter);
        } else {
            // Mostrar todos los productos por defecto
            filteredProducts = [...products];
            renderProducts();
        }
    } else {
        // Para otras páginas, solo renderizar los productos necesarios
        renderProducts();
    }
    
    // Prevenir recarga del formulario de contacto
    document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        sendContactMessage();
    });
});
