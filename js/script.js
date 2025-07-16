function calculatePrice(ref) {
    const matches = ref.match(/\d+$/);
    if (!matches) return "$0"; // Precio por defecto si no hay número
    const lastNumber = parseInt(matches[0]);
    const calculatedPrice = (lastNumber * 1000 / 12) * 1.7;
    return `$${Math.round(calculatedPrice).toLocaleString('es-CO', {maximumFractionDigits: 0})}`;
}


const products = [
    {
    id: 1,
    name: "Ref: W-96-35-40-108",
    price: "$25.000",
    category: ["casual", "playa", "unisex"],
    description: "Chanclas estilo japonés con diseño ergonómico y colores neutros. Ideales para el hogar o salidas relajadas.",
    features: [
      "Diseño minimalista en blanco y negro",
      "Suela gruesa con doble línea decorativa",
      "Material liviano y cómodo",
      "Agarre seguro y transpirable"
    ],
    sizes: [],
    image: "img/1.jpeg"
  },
  {
    id: 2,
    name: "Ref: M-18-40-45",
    price: "",
    category: ["casual", "hombre"],
    description: "Sandalias tipo descanso con suela gruesa y banda amplia. Colores deportivos y diseño robusto para uso diario.",
    features: [
      "Tiras texturizadas para mayor agarre",
      "Variedad de colores (rojo, verde, azul, gris)",
      "Interior acolchado para mayor confort",
      "Suela curva para mejor postura"
    ],
    sizes: [],
    image: "img/2.jpeg"
  },
  {
    id: 3,
    name: "Ref: 226-39-44-156",
    price: "",
    category: ["casual", "hombre"],
    description: "Sandalias negras con textura de cuadros entrelazados. Estilo elegante y resistente para interiores y exteriores.",
    features: [
      "Diseño texturizado tipo rombo",
      "Color negro con detalles brillantes",
      "Plantilla anatómica antideslizante",
      "Marca destacada en el empeine"
    ],
    sizes: [],
    image: "img/3.jpeg"
  },
  {
    id: 4,
    name: "Ref: 101-36-40-120",
    price: "",
    category: ["niña", "verano"],
    description: "Sandalias tipo flip-flop con diseños florales y detalle de mariposa en la tira. Coloridas, ideales para niñas.",
    features: [
      "Estampado floral alegre y variado",
      "Tira transparente con glitter",
      "Adorno de mariposa brillante",
      "Diseño divertido y veraniego"
    ],
    sizes: [],
    image: "img/4.jpeg"
  },
  {
    id: 5,
    name: "Ref: 35-43",
    price: "$45.000",
    category: ["deportivo", "hombre"],
    description: "Zapatillas NEHK para fútbol con diseño agresivo y colores vibrantes. Ideales para césped sintético o tierra.",
    features: [
      "Diseños en negro con naranja o verde fosforescente",
      "Suela de taches para tracción en campo",
      "Refuerzo lateral y frontal",
      "Ajuste firme y cómodo"
    ],
    sizes: [],
    image: "img/5.jpeg"
  },
  {
    id: 6,
    name: "Ref: 35-43",
    price: "$45.000",
    category: ["deportivo", "hombre"],
    description: "Zapatillas deportivas AIR2025 con diseño moderno y aerodinámico. Comodidad y velocidad en cada paso.",
    features: [
      "Disponible en blanco/rojo, rosa, negro/dorado",
      "Suela plana con buen agarre",
      "Ligereza ideal para entrenamientos",
      "Estilo moderno tipo profesional"
    ],
    sizes: [],
    image: "img/6.jpeg"
  },
  {
    id: 7,
    name: "Ref: 5P-433K-18-23-168",
    price: "",
    category: ["infantil", "niño"],
    description: "Sandalias infantiles con diseño de osito piloto y hélice. Ideales para juego, escuela o casa.",
    features: [
      "Diseño animado 3D de piloto",
      "Ajuste con velcro para seguridad",
      "Base acolchada con estampado",
      "Colores llamativos y divertidos"
    ],
    sizes: [],
    image: "img/7.jpeg"
  },
  {
    id: 8,
    name: "Ref: 2046-35-40-120",
    price: "",
    category: ["hogar", "unisex"],
    description: "Sandalias acolchadas con diseño de osito en la tira. Comodidad total para estar en casa.",
    features: [
      "Suela tipo nube ultra suave",
      "Colores pastel y neutros",
      "Diseño divertido con oso tierno",
      "Textura acanalada antideslizante"
    ],
    sizes: [],
    image: "img/8.jpeg"
  },
  {
    id: 9,
    name: "Ref: 217-36-40-132",
    price: "",
    category: ["casual", "unisex"],
    description: "Sandalias LOOKIN con plataforma media y diseño moderno. Perfectas para uso diario en casa o fuera.",
    features: [
      "Estilo minimalista con líneas definidas",
      "Diseños en colores pastel y oscuros",
      "Tira ancha acolchada y cómoda",
      "Suela ancha y estable"
    ],
    sizes: [],
    image: "img/9.jpeg"
  },
  {
    id: 10,
    name: "Ref: 828-24-29-120",
    price: "",
    category: ["infantil", "niño", "niña"],
    description: "Sandalias tipo crocs con diseño de osito, ideales para niños. Ligeras, cómodas y divertidas.",
    features: [
      "Correa ajustable con botón decorativo",
      "Colores pastel encantadores",
      "Diseño de oso, nubes y huellitas",
      "Fácil de lavar y mantener"
    ],
    sizes: [],
    image: "img/10.jpeg"
  },
    { 
        id: 11, 
        name: "Ref: 39-44", 
        price: "$45.000", 
        category: ["deportivo", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/11.jpeg"
    },
    { 
        id: 12, 
        name: "Ref: 173-36-40-330", 
        price: "$27.500", 
        category: ["casual", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/12.jpeg"
    },
    { 
        id: 13, 
        name: "Ref: 101-30-35-90", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/13.jpeg"
    },
    { 
        id: 14, 
        name: "Ref: 113-36-41", 
        price: "", 
        category: ["casual", "niño"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/14.jpeg"
    },
    { 
        id: 15, 
        name: "Ref: 113-36-41-348", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/15.jpeg"
    },
    { 
        id: 16, 
        name: "Ref: KNOX-37-42", 
        price: "", 
        category: ["casual", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/16.jpeg"
    },
    { 
        id: 17, 
        name: "Ref: 148w-35-40-156", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/17.jpeg"
    },
    { 
        id: 18, 
        name: "Ref: MARA-36-41-252", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/18.jpeg"
    },
    { 
        id: 19, 
        name: "Ref: 220-39-44", 
        price: "", 
        category: ["casual", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/19.jpeg"
    },
    { 
        id: 20, 
        name: "Ref: 2051-35-40", 
        price: "", 
        category: ["casual", "niño"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/20.jpeg"
    },
    { 
        id: 21, 
        name: "Ref: 2037-35-40", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/21.jpeg"
    },
    { 
        id: 22, 
        name: "Ref: 5P-110D-38-42-384", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/22.jpeg"
    },
    { 
        id: 23, 
        name: "Ref: 5P-446N-18-23-168", 
        price: "", 
        category: ["casual", "niño"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/23.jpeg"
    },
    { 
        id: 24, 
        name: "Ref: 5P-171D-38-42-276", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/24.jpeg"
    },
    { 
        id: 25, 
        name: "Ref: 18-23", 
        price: "", 
        category: ["casual", "hombre, mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/25.jpeg"
    },
    { 
        id: 26, 
        name: "Ref: 5P-87D-37-41-264", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/26.jpeg"
    },
    { 
        id: 27, 
        name: "Ref: 5P-184D-37-41-336", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/27.jpeg"
    },
    { 
        id: 28, 
        name: "Ref: 5P-131N-18-23-168", 
        price: "", 
        category: ["casual", "niño"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/28.jpeg"
    },
    { 
        id: 29, 
        name: "Ref: 203-M-39-44-198", 
        price: "", 
        category: ["casual", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/29.jpeg"
    },
    { 
        id: 30, 
        name: "Ref: H185-38-43-564", 
        price: "", 
        category: ["casual", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/30.jpeg"
    },
    { 
        id: 31, 
        name: "Ref: 40-45", 
        price: "$45.000", 
        category: ["deportivo", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/31.jpeg"
    },
    { 
        id: 32, 
        name: "Ref: 34-38  39-43", 
        price: "$45.000", 
        category: ["deportivo", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/32.jpeg"
    },
    { 
        id: 33, 
        name: "Ref: 35-38  39-43", 
        price: "$45.000", 
        category: ["deportivo", "hombre"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/33.jpeg"
    },
    { 
        id: 34, 
        name: "Ref: D195-A-35-40-540", 
        price: "", 
        category: ["casual", "hombre", "urbano"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/34.jpeg"
    },
    { 
        id: 35, 
        name: "Ref: H205-C-38-43-540", 
        price: "", 
        category: ["casual", "hombre", "urbano"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/35.jpeg"
    },
    { 
        id: 36, 
        name: "Ref: 35-40", 
        price: "", 
        category: ["casual", "mujer", "urbano"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: [],
        image: "img/36.jpeg"
    },
    { 
        id: 37, 
        name: "Ref: GRETTA-35-40", 
        price: "$12.000", 
        category: ["casual", "mujer", "urbano"],
        description: "Zapatillas urbanas con diseño moderno y cómodo, ideal para uso diario. Fabricadas con materiales resistentes que combinan estilo y durabilidad.",
        features: [
            "Diseño urbano moderno",
            "Materiales resistentes",
            "Suela de goma antideslizante",
            "Ajuste cómodo y seguro"
        ],
        sizes: [],
        image: "img/37.jpeg"
    },
    { 
        id: 38, 
        name: "Ref: FENIX 35-40 39-44", 
        price: "$17.000", 
        category: ["deportivo", "hombre"],
        description: "Zapatillas deportivas de alto rendimiento con tecnología de amortiguación para entrenamiento intenso. Diseño ergonómico que se adapta al pie.",
        features: [
            "Tecnología de amortiguación",
            "Materiales transpirables",
            "Suela de alta tracción",
            "Soporte lateral reforzado"
        ],
        sizes: [],
        image: "img/38.jpeg"
    },
    { 
        id: 39, 
        name: "Ref: S-341-39-44-144", 
        price: "", 
        category: ["casual", "hombre"],
        description: "Zapatillas Air-Shoe con diseño ligero y cómodo, perfectas para el uso diario. Estilo versátil que combina con cualquier outfit.",
        features: [
            "Tecnología de aire para mayor comodidad",
            "Upper en malla transpirable",
            "Suela flexible",
            "Diseño unisex"
        ],
        sizes: [],
        image: "img/39.jpeg"
    },
    { 
        id: 40, 
        name: "Ref: 5-358-36-41-39-44", 
        price: "", 
        category: ["deportivo", "hombre", "running"],
        description: "Zapatillas Surfing diseñadas para corredores, con excelente amortiguación y tracción en todo tipo de superficies.",
        features: [
            "Amortiguación reactiva",
            "Upper transpirable",
            "Suela de goma duradera",
            "Refuerzos estratégicos"
        ],
        sizes: [],
        image: "img/40.jpeg"
    },
    { 
        id: 41, 
        name: "Ref: 203-35-40-192", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Zapatillas especializadas para golf con excelente tracción y estabilidad. Diseño elegante que cumple con los requisitos del deporte.",
        features: [
            "Tacos integrados para mejor tracción",
            "Materiales resistentes al agua",
            "Soporte para movimientos laterales",
            "Plantilla extraíble"
        ],
        sizes: [],
        image: "img/41.jpeg"
    },
    { 
        id: 42, 
        name: "Ref: 211-W-36-40-192", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con diseño elegante y cómodo, perfectas para el día a día. Combinan estilo y funcionalidad.",
        features: [
            "Diseño femenino moderno",
            "Plantilla acolchada",
            "Suela flexible",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/42.jpeg"
    },
    { 
        id: 43, 
        name: "Ref: 35-43", 
        price: "$45.000", 
        category: ["deportivo", "hombre"],
        description: "Zapatillas femeninas con diseño elegante y cómodo, perfectas para el día a día. Combinan estilo y funcionalidad.",
        features: [
            "Diseño femenino moderno",
            "Plantilla acolchada",
            "Suela flexible",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/43.jpeg"
    },
    { 
        id: 44, 
        name: "Ref: 007-M3-35-40", 
        price: "$45.000", 
        category: ["casual", "hombre"],
        description: "Zapatillas urbanas con diseño minimalista y versátil. Ideales para combinar con diferentes estilos de ropa.",
        features: [
            "Diseño minimalista",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/44.jpeg"
    },
    { 
        id: 45, 
        name: "Ref: 41-45", 
        price: "$20.000", 
        category: ["casual", "hombre"],
        description: "Zapatillas urbanas con diseño minimalista y versátil. Ideales para combinar con diferentes estilos de ropa.",
        features: [
            "Diseño minimalista",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/45.jpeg"
    },
    { 
        id: 46, 
        name: "Ref: FRT-534-CG6-24-29", 
        price: "", 
        category: ["niños", "casual", "mujer"],
        description: "Zapatillas deportivas para niños con diseño divertido y colores vibrantes. Ofrecen comodidad y soporte para actividades diarias.",
        features: [
            "Diseño infantil colorido",
            "Materiales suaves y flexibles",
            "Suela antideslizante",
            "Cierre con velcro fácil de usar"
        ],
        sizes: [],
        image: "img/46.jpeg"
    },
    { 
        id: 47, 
        name: "Ref: FRT-520-CB8-24-29", 
        price: "", 
        category: ["niños", "casual"],
        description: "Zapatillas deportivas infantiles con tecnología de confort y diseño ergonómico para el desarrollo saludable de los pies.",
        features: [
            "Plantilla anatómica",
            "Materiales transpirables",
            "Suela flexible",
            "Refuerzos en zonas de desgaste"
        ],
        sizes: [],
        image: "img/47.jpeg"
    },
    { 
        id: 48, 
        name: "Ref: FRT-693-CG26-24-29", 
        price: "", 
        category: ["niños", "casual"],
        description: "Zapatillas Liger para niños, ultra livianas y cómodas. Diseño colorido que gustará a los más pequeños.",
        features: [
            "Peso ultra ligero",
            "Materiales suaves",
            "Suela flexible",
            "Diseño divertido"
        ],
        sizes: [],
        image: "img/48.jpeg"
    },
    { 
        id: 49, 
        name: "Ref: FRT-669-CB14-24-29", 
        price: "", 
        category: ["niños", "casual", "hombre"],
        description: "Zapatillas infantiles con tecnología de confort y soporte para el crecimiento saludable de los pies.",
        features: [
            "Soporte para arco plantar",
            "Plantilla extraíble",
            "Materiales duraderos",
            "Cierre seguro"
        ],
        sizes: [],
        image: "img/49.jpeg"
    },
    { 
        id: 50, 
        name: "Ref: FRT-667-CG13", 
        price: "$9.000", 
        category: ["niños", "casual"],
        description: "Zapatillas casuales para niños con diseño moderno y colores atractivos. Perfectas para el uso escolar y diario.",
        features: [
            "Diseño escolar",
            "Materiales fáciles de limpiar",
            "Suela resistente",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/50.jpeg"
    },
    { 
        id: 51, 
        name: "Ref: FLEXRUN-35-40-624", 
        price: "", 
        category: ["urbano", "hombre"],
        description: "Zapatillas FlexRun con tecnología de amortiguación para corredores. Ofrecen máxima flexibilidad y retorno de energía.",
        features: [
            "Tecnología FlexRun",
            "Upper transpirable",
            "Suela de alta tracción",
            "Amortiguación reactiva"
        ],
        sizes: [],
        image: "img/51.jpeg"
    },
    { 
        id: 52, 
        name: "Ref: FLEXRUN 35-40-624", 
        price: "", 
        category: ["deportivo", "hombre", "running"],
        description: "Zapatillas de running con sistema de amortiguación avanzado para mayor comodidad en cada paso. Diseño aerodinámico.",
        features: [
            "Sistema de amortiguación avanzado",
            "Materiales ligeros",
            "Suela de desgaste prolongado",
            "Soporte para arco plantar"
        ],
        sizes: [],
        image: "img/52.jpeg"
    },
    { 
        id: 53, 
        name: "Ref: N15-25-29-156", 
        price: "", 
        category: ["niños", "casual"],
        description: "Zapatillas infantiles con diseño clásico y cómodo, perfectas para el día a día de los más pequeños.",
        features: [
            "Diseño clásico infantil",
            "Materiales suaves",
            "Suela flexible",
            "Fácil de poner y quitar"
        ],
        sizes: [],
        image: "img/53.jpeg"
    },
    { 
        id: 54, 
        name: "Ref: 35-40-624", 
        price: "", 
        category: ["deportivo", "hombre"],
        description: "Zapatillas deportivas versátiles para entrenamiento y uso casual. Combinan estilo y funcionalidad deportiva.",
        features: [
            "Versátil para deporte y casual",
            "Materiales transpirables",
            "Suela multidireccional",
            "Ajuste personalizable"
        ],
        sizes: [],
        image: "img/54.jpeg"
    },
    { 
        id: 55, 
        name: "Ref: 35-40", 
        price: "$33.000", 
        category: ["casual", "hombre", "urbano"],
        description: "Zapatillas deportivas versátiles para entrenamiento y uso casual. Combinan estilo y funcionalidad deportiva.",
        features: [
            "Versátil para deporte y casual",
            "Materiales transpirables",
            "Suela multidireccional",
            "Ajuste personalizable"
        ],
        sizes: [],
        image: "img/55.jpeg"
    },
    { 
        id: 56, 
        name: "Ref: YANEU X4 38-43", 
        price: "", 
        category: ["casual", "hombre", "urbano"],
        description: "Zapatillas YANEU X4 con tecnología de alto rendimiento para deportistas exigentes. Diseño moderno y aerodinámico.",
        features: [
            "Tecnología X4 para máximo rendimiento",
            "Upper en malla técnica",
            "Sistema de amortiguación reactiva",
            "Suela de tracción multidireccional"
        ],
        sizes: [],
        image: "img/56.jpeg"
    },
    { 
        id: 57, 
        name: "Ref: YANBU X4 35-40", 
        price: "", 
        category: ["casual", "hombre", "urbano"],
        description: "Zapatillas YANBU X4 diseñadas para entrenamiento de alta intensidad. Ofrecen estabilidad y soporte en cada movimiento.",
        features: [
            "Soporte para entrenamiento intenso",
            "Materiales resistentes",
            "Suela de alta durabilidad",
            "Sistema de ajuste seguro"
        ],
        sizes: [],
        image: "img/57.jpeg"
    },
    { 
        id: 58, 
        name: "Ref: YANBU X4 38-43", 
        price: "", 
        category: ["casual", "hombre"],
        description: "Zapatillas YANBU X4 en color azul oscuro, diseñadas para alto rendimiento con tecnología de amortiguación avanzada y soporte para entrenamientos intensos.",
        features: [
            "Tecnología X4 de alto rendimiento",
            "Amortiguación reactiva",
            "Upper en malla transpirable",
            "Suela de tracción multidireccional"
        ],
        sizes: [],
        image: "img/58.jpeg"
    },
    { 
        id: 59, 
        name: "Ref: YANBU 35-40 Azul Oscuro", 
        price: "", 
        category: ["casual", "hombre"],
        description: "Zapatillas YANBU en azul oscuro con diseño ergonómico para máxima comodidad. Ideales para entrenamiento y uso diario con estilo deportivo.",
        features: [
            "Color azul oscuro moderno",
            "Plantilla Ortholite para confort",
            "Suela de goma duradera",
            "Ajuste seguro y cómodo"
        ],
        sizes: [],
        image: "img/59.jpeg"
    },
    { 
        id: 60, 
        name: "Ref: 35-40", 
        price: "", 
        category: ["deportivo", "hombre", "running"],
        description: "Zapatillas Milésponsiver diseñadas para runners, con tecnología de absorción de impacto y máxima respirabilidad para largas distancias.",
        features: [
            "Tecnología de absorción de impacto",
            "Upper ultra transpirable",
            "Suela de alta durabilidad",
            "Peso ligero para competencia"
        ],
        sizes: [],
        image: "img/60.jpeg"
    },
    { 
        id: 61, 
        name: "Ref: D032-35-40-624", 
        price: "", 
        category: ["casual", "hombre"],
        description: "Zapatillas urbanas con diseño moderno y versátil. Perfectas para combinar con jeans o ropa casual, ofreciendo comodidad durante todo el día.",
        features: [
            "Estilo urbano moderno",
            "Plantilla acolchada",
            "Suela flexible antideslizante",
            "Materiales resistentes"
        ],
        sizes: [],
        image: "img/61.jpeg"
    },
    { 
        id: 62, 
        name: "Ref: D025-35-40-672", 
        price: "", 
        category: ["casual", "hombre"],
        description: "Zapatillas casuales con diseño contemporáneo y detalles premium. Ofrecen comodidad y estilo para el uso diario en la ciudad.",
        features: [
            "Diseño contemporáneo",
            "Detalles en materiales premium",
            "Suela de goma con patrón de tracción",
            "Ajuste personalizable"
        ],
        sizes: [],
        image: "img/62.jpeg"
    },
    { 
        id: 63, 
        name: "Ref: 36-41", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Zapatillas casuales con diseño moderno y cómodo para el día a día.",
        features: [
            "Diseño moderno",
            "Materiales cómodos",
            "Suela resistente",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/63.jpeg"
    },
    { 
        id: 64, 
        name: "Ref: PW-101-36-41-96", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas casuales con diseño moderno y cómodo para el día a día.",
        features: [
            "Diseño moderno",
            "Materiales cómodos",
            "Suela resistente",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/64.jpeg"
    },
    { 
        id: 65, 
        name: "Ref: 195W-36-41-138", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con estilo urbano y cómodo para uso diario.",
        features: [
            "Estilo urbano",
            "Plantilla acolchada",
            "Suela flexible",
            "Ajuste seguro"
        ],
        sizes: [],
        image: "img/65.jpeg"
    },
    { 
        id: 66, 
        name: "Ref: 200-40-45-400", 
        price: "$", 
        category: ["deportivo", "hombre", "golfer"],
        description: "Zapatillas especializadas para golf con excelente tracción y estabilidad.",
        features: [
            "Tacos integrados para mejor tracción",
            "Materiales resistentes al agua",
            "Soporte para movimientos laterales",
            "Plantilla extraíble"
        ],
        sizes: [],
        image: "img/66.jpeg"
    },
    { 
        id: 67, 
        name: "Ref: 003-39-44-126", 
        price: "$", 
        category: ["casual", "hombre"],
        description: "Zapatillas urbanas con diseño versátil para combinar con diferentes estilos.",
        features: [
            "Diseño versátil",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/67.jpeg"
    },
    { 
        id: 68, 
        name: "Ref: 173-39-44-144", 
        price: "$", 
        category: ["deportivo", "hombre", "air-shoe"],
        description: "Zapatillas deportivas con tecnología Air-Shoe para mayor comodidad.",
        features: [
            "Tecnología Air-Shoe",
            "Upper transpirable",
            "Suela flexible",
            "Diseño unisex"
        ],
        sizes: [],
        image: "img/68.jpeg"
    },
    { 
        id: 69, 
        name: "Ref: 182-36-40", 
        price: "$", 
        category: ["casual", "hombre", "lookingport"],
        description: "Zapatillas Lookingport con estilo urbano y cómodo para el día a día.",
        features: [
            "Estilo urbano moderno",
            "Plantilla acolchada",
            "Suela flexible antideslizante",
            "Materiales resistentes"
        ],
        sizes: [],
        image: "img/69.jpeg"
    },
    { 
        id: 70, 
        name: "Ref: 35-40-348", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con diseño elegante y cómodo para uso diario.",
        features: [
            "Diseño femenino",
            "Plantilla acolchada",
            "Suela flexible",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/70.jpeg"
    },
    { 
        id: 71, 
        name: "Ref: F-1135-40-45-168", 
        price: "$", 
        category: ["casual", "hombre", "urbano"],
        description: "Zapatillas femeninas con diseño elegante y cómodo para uso diario.",
        features: [
            "Diseño femenino",
            "Plantilla acolchada",
            "Suela flexible",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/71.jpeg"
    },
    { 
        id: 72, 
        name: "Ref: 200W-36-41-400", 
        price: "$", 
        category: ["deportivo", "mujer", "golfer"],
        description: "Zapatillas de golf femeninas con excelente tracción y estabilidad.",
        features: [
            "Diseño específico para golf",
            "Tacos integrados",
            "Materiales resistentes al agua",
            "Soporte para movimientos laterales"
        ],
        sizes: [],
        image: "img/72.jpeg"
    },
    { 
        id: 73, 
        name: "Ref: E-7199-36-41", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con diseño moderno y cómodo para el día a día.",
        features: [
            "Diseño moderno",
            "Materiales cómodos",
            "Suela resistente",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/73.jpeg"
    },
    { 
        id: 74, 
        name: "Ref: AE-WLXD91884-21-26", 
        price: "$", 
        category: ["niños", "anderson"],
        description: "Zapatillas infantiles Anderson con diseño divertido y cómodo para niños.",
        features: [
            "Diseño infantil",
            "Materiales suaves",
            "Suela flexible",
            "Fácil de poner y quitar"
        ],
        sizes: [],
        image: "img/74.jpeg"
    },
    { 
        id: 75, 
        name: "Ref: AE-WLXD91884-21-26", 
        price: "$", 
        category: ["niños", "anderson"],
        description: "Zapatillas infantiles Anderson con diseño colorido y cómodo para niños.",
        features: [
            "Diseño colorido",
            "Materiales suaves",
            "Suela flexible",
            "Cierre seguro"
        ],
        sizes: [],
        image: "img/75.jpeg"
    },
    { 
        id: 76, 
        name: "Ref: XJ-903-36-41-252", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con diseño elegante y cómodo para el día a día.",
        features: [
            "Diseño femenino",
            "Plantilla acolchada",
            "Suela flexible",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/76.jpeg"
    },
    { 
        id: 77, 
        name: "Ref: XJ-908-36-41-252", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con estilo moderno y versátil para diferentes ocasiones.",
        features: [
            "Estilo versátil",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/77.jpeg"
    },
    { 
        id: 78, 
        name: "Ref: 41-449D-37-41-288", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con estilo moderno y versátil para diferentes ocasiones.",
        features: [
            "Estilo versátil",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/78.jpeg"
    },
    { 
        id: 79, 
        name: "Ref: HO27-38-43-756", 
        price: "$", 
        category: ["running", "hombre", "deportivo"],
        description: "Zapatillas femeninas con estilo moderno y versátil para diferentes ocasiones.",
        features: [
            "Estilo versátil",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/79.jpeg"
    },
    { 
        id: 80, 
        name: "Ref: D035-35-40-648", 
        price: "$", 
        category: ["casual", "hombre"],
        description: "Zapatillas urbanas con diseño minimalista y versátil para el día a día.",
        features: [
            "Diseño minimalista",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/80.jpeg"
    },
    { 
        id: 81, 
        name: "Ref: E-7158-36-41-264", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas urbanas con diseño minimalista y versátil para el día a día.",
        features: [
            "Diseño minimalista",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/81.jpeg"
    },
    { 
        id: 82, 
        name: "Ref: 047-4-39-44-168", 
        price: "$", 
        category: ["casual", "hombre"],
        description: "Zapatillas urbanas con diseño moderno y cómodo para uso diario.",
        features: [
            "Estilo urbano moderno",
            "Plantilla acolchada",
            "Suela flexible antideslizante",
            "Materiales resistentes"
        ],
        sizes: [],
        image: "img/82.jpeg"
    },
    { 
        id: 83, 
        name: "Ref: 173W-36-40-340", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con estilo urbano y cómodo para el día a día.",
        features: [
            "Estilo urbano",
            "Plantilla acolchada",
            "Suela flexible",
            "Ajuste seguro"
        ],
        sizes: [],
        image: "img/83.jpeg"
    },
    { 
        id: 84, 
        name: "Ref: 2036-24-29-84", 
        price: "$", 
        category: ["niños", "casual"],
        description: "Zapatillas infantiles con diseño cómodo y divertido para el día a día.",
        features: [
            "Diseño infantil",
            "Materiales suaves",
            "Suela flexible",
            "Fácil de poner y quitar"
        ],
        sizes: [],
        image: "img/84.jpeg"
    },
    { 
        id: 85, 
        name: "Ref: PYW1462-36-41-264", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con estilo moderno y versátil para diferentes ocasiones.",
        features: [
            "Estilo versátil",
            "Materiales duraderos",
            "Suela de goma resistente",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/85.jpeg"
    },
    { 
        id: 86, 
        name: "Ref: PYW145I-36-41-264", 
        price: "$", 
        category: ["casual", "mujer", "lcdsert"],
        description: "Zapatillas LCDSERT con diseño femenino y cómodo para uso diario.",
        features: [
            "Diseño femenino",
            "Plantilla acolchada",
            "Suela flexible",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/86.jpeg"
    },
    { 
        id: 87, 
        name: "Ref: FE-93546-36-41-192", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas femeninas con diseño elegante y cómodo para el día a día.",
        features: [
            "Diseño elegante",
            "Materiales premium",
            "Suela flexible",
            "Ajuste seguro"
        ],
        sizes: [],
        image: "img/87.jpeg"
    },
    { 
        id: 88, 
        name: "Ref: FR0-316-L7-36-41-192", 
        price: "$", 
        category: ["casual", "mujer"],
        description: "Zapatillas urbanas con diseño moderno y versátil para combinar con diferentes estilos.",
        features: [
            "Diseño moderno",
            "Materiales resistentes",
            "Suela antideslizante",
            "Ajuste personalizable"
        ],
        sizes: [],
        image: "img/88.jpeg"
    },
    { 
        id: 89, 
        name: "Ref: 123M-40-45-168", 
        price: "$", 
        category: ["casual", "hombre"],
        description: "Zapatillas urbanas masculinas con estilo moderno y cómodo para el día a día.",
        features: [
            "Estilo urbano moderno",
            "Plantilla acolchada",
            "Suela flexible antideslizante",
            "Materiales resistentes"
        ],
        sizes: [],
        image: "img/89.jpeg"
    },
    { 
        id: 90, 
        name: "Ref: 111-M-39-44-138", 
        price: "$", 
        category: ["deportivo", "hombre", "golf"],
        description: "Zapatillas de golf con tecnología especializada para mejor tracción y estabilidad.",
        features: [
            "Diseño específico para golf",
            "Tacos integrados",
            "Materiales resistentes al agua",
            "Soporte para movimientos laterales"
        ],
        sizes: [],
        image: "img/90.jpeg"
    },
    { 
        id: 91, 
        name: "Ref: 1002, 1003, 1011", 
        price: "$", 
        category: ["casual", "hombre", "urbano"],
        description: "Zapatillas deportivas Nikenier para entrenamiento y running con tecnología de amortiguación.",
        features: [
            "Tecnología de amortiguación",
            "Materiales transpirables",
            "Suela de alta tracción",
            "Soporte para arco plantar"
        ],
        sizes: [],
        image: "img/91.jpeg"
    },
    { 
        id: 92, 
        name: "Ref: H050-38-43-540", 
        price: "", 
        category: ["deportivo", "hombre", "running"],
        description: "Zapatillas Fitter con tecnología Flexion Modes para mayor comodidad y flexibilidad en cada paso. Ideales para entrenamiento y uso diario.",
        features: [
            "Tecnología Flexion Modes",
            "Materiales transpirables",
            "Suela de alta tracción",
            "Ajuste ergonómico"
        ],
        sizes: [],
        image: "img/92.jpeg"
    },
    { 
        id: 93, 
        name: "Ref: 193-20-25-168", 
        price: "", 
        category: ["mujer", "niño", "casual"],
        description: "Zapatillas infantiles Lookin con diseño divertido y cómodo para los más pequeños. Perfectas para uso escolar y diario.",
        features: [
            "Diseño infantil colorido",
            "Materiales suaves y flexibles",
            "Suela antideslizante",
            "Fácil de poner y quitar"
        ],
        sizes: [],
        image: "img/93.jpeg"
    },
    { 
        id: 94, 
        name: "Ref: DEMI-36-41-240", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Zapatillas Xiella con diseño femenino y elegante. Ideales para combinar con outfits casuales y urbanos.",
        features: [
            "Estilo femenino moderno",
            "Plantilla acolchada",
            "Suela flexible",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/94.jpeg"
    },
    { 
        id: 95, 
        name: "Ref: 003-36-40-120", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Zapatillas Look Me con diseño urbano y versátil. Perfectas para el uso diario con estilo casual.",
        features: [
            "Diseño urbano moderno",
            "Materiales resistentes",
            "Suela de goma duradera",
            "Ajuste cómodo"
        ],
        sizes: [],
        image: "img/95.jpeg"
    },
    { 
        id: 96, 
        name: "Ref: M-67-40-45-162", 
        price: "", 
        category: ["casual", "hombre"],
        description: "Zapatillas Resta diseñadas para alto rendimiento con tecnología de amortiguación para mayor comodidad en actividades deportivas.",
        features: [
            "Amortiguación reactiva",
            "Upper transpirable",
            "Suela de alta durabilidad",
            "Soporte para arco plantar"
        ],
        sizes: [],
        image: "img/96.jpeg"
    },
    { 
        id: 97, 
        name: "SURFING", 
        price: "", 
        category: ["deportivo", "hombre", "casual"],
        description: "Zapatillas Surfing diseñadas para corredores, con excelente amortiguación y tracción en todo tipo de superficies.",
        features: [
            "Tecnología de amortiguación",
            "Upper transpirable",
            "Suela de goma duradera",
            "Refuerzos estratégicos"
        ],
        sizes: [],
        image: "img/97.jpeg"
    },
    { 
        id: 98, 
        name: "Ref: 5P-142D-37-41-240", 
        price: "", 
        category: ["casual", "mujer"],
        description: "Zapatillas Rubu con diseño femenino y cómodo para el día a día. Combinan estilo y funcionalidad.",
        features: [
            "Diseño femenino moderno",
            "Plantilla acolchada",
            "Suela flexible",
            "Variedad de colores"
        ],
        sizes: [],
        image: "img/98.jpeg"
    }
    ].map(product => ({
    ...product,
    price: product.price || calculatePrice(product.name) // Conserva precios o calcula
}));
    


let cart = [];
const productsPerPage = 15;
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
                <h4></h4>
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
