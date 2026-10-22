// Texto de la página de detalle de cada proyecto
export type ProjectText = {
  description: string
}

const projectItems = {
  'socias': {
    description: 'Socias (2008 - Canal 13) es una comedia dramática argentina producida por Pol-ka y protagonizada por Mercedes Morán, Nancy Dupláa y Andrea Pietra. La historia sigue a tres abogadas que comparten un estudio jurídico y enfrentan los desafíos de sus vidas profesionales, familiares y amorosas, mientras construyen una amistad atravesada por distintas experiencias y conflictos.',
  },
  'ciega-a-citas': {
    description: 'La historia sigue a Lucía González, una mujer de 30 años, soltera y con sobrepeso que escucha a su madre apostar que llegará sola a la boda de su hermana menor. Decidida a ganar la apuesta y encontrar el amor, Lucía se impone el desafío de conseguir un novio en 258 días, embarcándose en una disparatada serie de citas a ciegas mientras busca reencontrarse consigo misma y reafirmar su propia identidad.',
  },
  'danos-colaterales': {
    description: 'Especial de ficción emitido por El Trece a beneficio de Fundación Huésped, con motivo del Día Mundial de la Lucha contra el Sida. Protagonizado por Carola Reyna y Diego Torres, cuenta la historia de Julia, una mujer que, tras la muerte repentina de su marido, descubre que él tenía una amante. En su búsqueda por reconstruir lo sucedido, la historia aborda los prejuicios en torno al VIH y la importancia de la prevención. Guion de Marta Betoldi y dirección de Gabriel Nesci.',
  },
  'cuando-me-sonreis': {
    description: 'Protagonizada por Facundo Arana y Natalia Oreiro, la historia sigue a Gastón Murski, un hombre estructurado y obsesionado con el control cuya vida da un giro radical tras ser abandonado por su prometida y recibir la inesperada llegada de su padre ausente y de un hijo del que no sabía nada. Su mundo se desordena aún más cuando se enamora de Aurora, una apasionada e impulsiva chef de barrio que llega a enseñarle a soltar los mandatos y reconectarse con los afectos.',
  },
  'solamente-vos': {
    description: 'Solamente vos (2013-2014 - Canal 13) es una comedia romántica argentina protagonizada por Adrián Suar y Natalia Oreiro. La historia sigue a Juan Cousteau, un director de orquesta que, tras una crisis matrimonial, inicia una nueva etapa de su vida y conoce a Aurora, su vecina. Entre enredos, romances y situaciones cotidianas, la ficción explora los vínculos familiares y las segundas oportunidades.',
  },
  'esperanza-mia': {
    description: 'Esperanza mía (2015-2016 - Canal 13) es una comedia romántica argentina producida por Pol-ka y protagonizada por Lali Espósito y Mariano Martínez. La historia sigue a Julia, una joven que llega a Buenos Aires y, para cumplir una misión importante, se refugia en un convento bajo una identidad falsa. Allí conoce a Tomás, un sacerdote con quien surge un amor inesperado. La ficción combina romance, humor, música y conflictos familiares.',
  },
  'las-estrellas': {
    description: 'La historia sigue a cinco hermanas de personalidades opuestas que, tras la muerte de su padre, deben cumplir con una particular cláusula de su testamento para cobrar una millonaria herencia: administrar con éxito un hotel boutique durante un año entero. Obligadas a convivir y trabajar juntas, las cinco reconstruyen su vínculo familiar mientras atraviesan historias de amor, secretos del pasado y la búsqueda de su propia identidad.',
  },
  'el-host': {
    description: 'Segunda temporada de la serie protagonizada por Adrián Suar, ambientada en el Hotel A. Mientras prepara la reapertura del hotel, Adrián deberá enfrentarse a nuevos enredos amorosos y al desafío de encontrar al verdadero amor antes de cumplir 50 años. Entre situaciones disparatadas, personajes inesperados y romances cruzados, esta temporada combina comedia y música en una historia sobre el amor y las segundas oportunidades.',
  },
  'edha': {
    description: 'Protagonizada por Juana Viale, la historia sigue a una exitosa y visionaria diseñadora de moda de Buenos Aires cuya vida y carrera dan un vuelco tras conocer a Teo, un atractivo modelo e inmigrante que busca venganza. La trama combina el glamour de la alta costura con los oscuros secretos de la industria textil, la traición, el deseo y la lucha de clases.',
  },
  'planners': {
    description: 'Protagonizada por Celeste Cid, la trama sigue a Malena Carregal, una mujer que, tras divorciarse de su esposo y socio, reacondiciona su vida profesional montando su propia agencia de organización de eventos. La historia aborda los desafíos del emprendedurismo, el caos detrás del lujo y las celebraciones, la reconstrucción personal a los 40 años y la búsqueda de independencia emocional y laboral.',
  },
  'betty-la-fea': {
    description: 'Betty, la fea: la historia continúa (2024 - Amazon Prime) es una serie colombiana de comedia y drama, secuela de Yo soy Betty, la fea, protagonizada por Ana María Orozco y Jorge Enrique Abello. Veinte años después, Betty enfrenta nuevos desafíos personales y profesionales mientras intenta reconstruir el vínculo con su hija adolescente y atraviesa una crisis en su relación con Armando. La serie retoma la historia de los personajes originales y explora los cambios en sus relaciones y en el mundo empresarial de Ecomoda.',
  },
  'simplemente-alicia': {
    description: 'La serie sigue la vida de Alicia, una mujer atrapada en un dilema emocional que la lleva a tener una doble vida sentimental y terminar casada con dos hombres a la vez. Con un tono que combina el humor y el drama, la historia explora la bigamia femenina, los límites del deseo, las contradicciones del amor y el choque entre los mandatos sociales y la libertad personal.',
  },
  'el-relato-de-la-esposa-del-alergologo': {
    description: 'Adaptación teatral.',
  },
  'loca-feliz-muy-loca': {
    description: 'Adaptación teatral.',
  },
  'extras': {
    description: 'Obra teatral escrita por Marta, en Estados Unidos.',
  },
  'contracciones': {
    description: 'Estrenada en el marco de TeatroxlaIdentidad, la obra entrelaza los monólogos de dos mujeres en dos momentos diferentes unidas por el proceso de gestar. A través de un cruce íntimo y conmovedor, explora la maternidad, la memoria, la verdad oculta de las madres argentinas y la búsqueda de la identidad.',
  },
  'las-gratitudes': {
    description: 'Las gratitudes (2026) es una obra teatral basada en la novela homónima de la escritora francesa Delphine de Vigan. La historia sigue a Michka, una mujer mayor que comienza a perder la capacidad de hablar y emprende la búsqueda de las personas que la ayudaron durante su infancia para poder agradecerles. A través de una historia íntima y emotiva, la obra reflexiona sobre la memoria, los vínculos humanos y la importancia de expresar gratitud.',
  },
  'hasta-el-final-de-la-fiesta': {
    description: 'Combina humor, música y emoción para celebrar la vida y las ganas de seguir disfrutando sin importar la edad. Protagonizada por Mamen García, la historia presenta a una mujer que comparte sus experiencias, deseos y sueños pendientes, en un espectáculo que invita a reflexionar sobre el paso del tiempo, la libertad y las segundas oportunidades.',
  },
  'escribiendo-el-fin-del-mundo': {
    description: 'Protagonizada por Eleonora Wexler y Favio Posca, esta audioserie explora una intrigante historia narrada a través del sonido, el drama y el suspenso. La trama se sumerge en las grietas emocionales, los enigmas y las reflexiones sobre la existencia en un mundo al borde del colapso, aprovechando al máximo el lenguaje inmersivo del podcast de ficción para construir una atmósfera envolvente e íntima.',
  },
} satisfies Record<string, ProjectText>

// Slugs válidos: si se agrega un proyecto en data/projects.ts sin su texto, no compila
export type ProjectSlug = keyof typeof projectItems

// Notas y entrevistas de Prensa (medio, fecha y link en data/press.ts)
export type PressText = { title: string; description: string }

const pressTexts = {
  'articulo14-alicia': { title: '“El nuevo fenómeno de Netflix es una telenovela colombiana sobre una mujer casada con dos hombres”', description: '\'Simplemente Alicia\', la nueva serie colombiana de Netflix, se convierte en un fenómeno con su historia provocadora de dobles vidas.' },
  'esto-no-es-una-entrevista': { title: 'Esto no es una entrevista — #15', description: 'Marta Betoldi lleva décadas en el mundo de la ficción, ya sea como actriz, guionista o creadora. Un referente en el mundo de la ficción y de la creación que siempre ha hecho por poner a los personajes femeninos al frente de sus historias. De su cabeza han salido "Ciega a citas" o "Socias" y recientemente ha estrenado "Betty la Fea, 20 años después".' },
  'ntn24-alicia': { title: 'Simplemente Alicia — charla con su libretista', description: 'Simplemente Alicia es un proyecto de Estudios RCN y Netflix Colombia que llegó con una gran historia a conquistar corazones. Aquí, la charla con su libretista, Marta Betoldi.' },
  'alicia-creadoras': { title: 'Entrevista con Marta Betoldi y Catalina Hernández', description: 'He aquí las verdaderas creadoras de la serie Simplemente Alicia (Netflix): la consagrada escritora y guionista argentina Marta Betoldi y la directora de grandes éxitos del audiovisual colombiano Cata Hernández, quienes cuentan todo el proceso hasta llegar al éxito de la aclamada serie.' },
  'produ-primetime': { title: 'PRODU primetime — entrevista con Ríchard Izarra', description: 'Marta habla sobre la construcción de personajes femeninos, su trabajo en Betty, la fea: la historia continúa y su catálogo de proyectos.' },
  'produ-catalogo': { title: '“Escritora Marta Betoldi con un catálogo de buenas historias femeninas que ella misma pitchea”', description: 'Repasa su recorrido como guionista, su mirada sobre los personajes femeninos y su trabajo en Betty, la fea: la historia continúa.' },
  'pagina12-podcast': { title: '“Actuar y escribir en la era de los podcast”', description: 'La creación de Escribiendo el fin del mundo, el podcast desarrollado para Atresmedia junto a Nancy Dupláa.' },
  'canal7-teatroxlaidentidad': { title: '"Teatro x la Identidad" — Mañanas Públicas', description: 'Gabriel Corrado entrevista a Marta Betoldi para hablar de "Contracciones", una obra que tiene como objetivo encontrar a los 400 nietos que todavía faltan, a través de Teatro x la Identidad.' },
  'eltrece-separadas': { title: 'Separadas — entrevista a su autora', description: 'La guionista de la nueva ficción de eltrece cuenta por qué esta historia no tiene nada que ver con rupturas de pareja, amores frustrados ni romances de novela.' },
  'fuera-de-libreto': { title: 'Fuera de libreto — entrevista con Malena Solda', description: 'Una charla sobre el rol de los guionistas en la ficción argentina, su recorrido profesional y el paso de la actuación a la escritura. También recuerdan cuando compartieron elenco en Montaña Rusa y la obra Contracciones. Dura unos 52 minutos.' },
  'con-la-gente': { title: '“Los modos que nos tocan en el siglo XXI son femeninos”', description: 'Una conversación sobre su trabajo como guionista y la representación de las mujeres en la ficción, con referencias a Socias, Ciega a citas, Solamente vos, Esperanza mía y Las Estrellas.' },
  'la-nacion': { title: '“Por qué Las Estrellas gustan tanto, según su guionista Marta Betoldi”', description: 'Marta analiza las claves del éxito de Las Estrellas, la tira de Pol-ka de la que fue guionista principal, y cómo se construyó su historia.' },
  'el-dia': { title: '“El fino arte de atar todo con alambre”', description: 'El trabajo de los guionistas de televisión, las diferencias entre la ficción diaria y las producciones para plataformas como Netflix, y la experiencia de Marta en Las Estrellas y Edha.' },
  'la-once-diez': { title: 'Viernes Espectáculos — entrevista con Pablo Gorlero', description: 'En el especial "Viernes Espectáculos", Pablo Gorlero entrevista a Marta Betoldi para charlar de su rol de guionista, escritora y productora.' },
  'pagina12-novicia': { title: '“Una vocación más fuerte que la de la Novicia Rebelde”', description: 'Su recorrido profesional, su formación en Letras y su trabajo en Ciega a citas. Es un perfil que permite conocer su trayectoria y su manera de trabajar con los equipos de guion.' },
} satisfies Record<string, PressText>

export type PressId = keyof typeof pressTexts

// Premios: nombres y categorías (año y obra en data/awards.ts)
const awardNames = {
  tato: 'Premios Tato',
  martinFierro: 'Premios Martín Fierro',
  kidsChoice: 'Kids\' Choice Awards',
  fundTV: 'Premios FundTV',
  roseDor: 'Premios Rose d’Or',
  accolade: 'Premios Accolade',
  argentores: 'Premios Argentores',
  clarin: 'Premios Clarín',
  produ: 'Premios PRODU',
  indiaCatalina: 'Premios India Catalina',
  emmy: 'International Emmy Awards',
}

const awardCategories = {
  dailyComedy: 'Mejor Comedia Diaria',
  production: 'Premio a la producción',
  seriesTelenovelas: 'Series y Telenovelas',
  excellenceFiction: 'Premio a la Excelencia como Mejor Ficción',
  sitcom: 'Mejor Telecomedia',
  bestWriter: 'Mejor Autora',
  writingRecognition: 'Reconocimiento autoral',
  dramedyScript: 'Guión de Serie Dramedy',
  romComSeries: 'Serie de Comedia Romántica',
  familyRomanticDramaScript: 'Guión de Serie de Drama Familiar, Romántico',
  romDramaSeries: 'Serie de Drama Romántico',
  fictionScript: 'Mejor Libreto de Ficción',
  fictionSeries: 'Mejor Serie de Ficción',
  screenwriter: 'Mejor Guionista',
  dailyFiction: 'Mejor Ficción Diaria',
  telenovela: 'Mejor Telenovela',
  authorScriptwriter: 'Mejor Autor/Libretista',
  fictionOrWriting: 'Mejor Ficción y/o categoría autoral',
}

export type AwardName = keyof typeof awardNames
export type AwardCategory = keyof typeof awardCategories

export const es = {
  nav: {
    projects: 'Proyectos',
    press: 'Prensa',
    awards: 'Premios',
    contact: 'Contacto',
    language: 'Idioma',
    darkMode: 'Activar modo oscuro',
    lightMode: 'Activar modo claro',
  },

  subtitle: 'Autora, Guionista, Dramaturga',

  bio: {
    photoAlt: 'Foto Marta Betoldi',
    // Formato: **negrita**, *itálica*, ***negrita e itálica*** (ver RichText.tsx)
    paragraphs: [
      'Soy **guionista, dramaturga y actriz argentina**, licenciada en Letras por la **Universidad de Buenos Aires (UBA)** y egresada de Dramaturgia de la **Escuela Metropolitana de Arte Dramático (EMAD)**. Resido en Madrid y completé mi formación en guión con referentes como **John Truby, Robert McKee y Linda Seger**, además de participar en talleres con **Juan Campanella y Aída Bortnik**.',
      'A lo largo de mi trayectoria, desarrollé y escribí ficciones como *Socias*, *Ciega a citas*, *Cuando me sonreís*, *Daños Colaterales*, *Edha*, *Esperanza mía*, *Solamente Vos*, *Las Estrellas*, *El Host II* y *Planners II*, entre otras. También incursioné en el podcast con "*Escribiendo el fin del mundo*", una creación para **Atresmedia**.',
      'Mi trabajo abarca producciones para televisión abierta, plataformas de streaming y productoras de distintos mercados. Entre las empresas y plataformas con las que trabajé se encuentran Pol-ka, Telefe, Canal 13, Televisión Pública, Flow, Netflix, Amazon Prime Video, Disney+, Fox International, Canal RCN, Dori Media y Good Mood.',
      'Soy **creadora de** ***Betty, la fea: la historia continúa***, serie derivada de la obra original de Fernando Gaitán, en la que también me desempeñé como **guionista principal**. Asimismo, desarrollé el **formato original de *Simplemente Alicia* para Netflix Global**, donde fui guionista principal.',
      'Me desempeño como **coordinadora de Desarrollo de Contenidos para Gosua España** y ofrezco servicios de **consultoría y asesoramiento de guión** para productoras hispanoamericanas. He trabajado en la revisión y el desarrollo de proyectos para distintos mercados, incluyendo *Ciega a citas* en Shanghái (China), Croton TV, Sony en Hungría, Lituania y Chile, y *Socias* en Chile.',
      'También soy miembro del jurado de los **Premios Emmy Internacionales, Premios PRODU y Premios Anillos de Oro en España**, y embajadora de **Recreas**.',
      'Mi catálogo reúne proyectos de autoría propia y creaciones desarrolladas en colaboración con autores de destacada trayectoria, como David Serrano, Fernando Castets, Julio Rojas, Paula del Fierro y Esteban del Campo.',
    ],
  },

  projects: {
    learnMore: 'Saber más +',
    back: '← Volver a Proyectos',
    notFound: 'Proyecto no encontrado',
    watch: 'Ver online →',
    trailer: 'Tráiler',
    teaser: 'Teaser',
    play: 'Reproducir',
    categories: {
      series: 'Series',
      theater: 'Teatro',
      podcast: 'Podcast',
    },
    items: projectItems as Record<ProjectSlug, ProjectText>,
  },

  press: {
    items: pressTexts as Record<PressId, PressText>,
  },

  awards: {
    winsTitle: 'Premios',
    nominationsTitle: 'Nominaciones',
    names: awardNames,
    categories: awardCategories,
  },

  contact: {
    title: 'Contacto',
    email: 'Email',
    agent: 'Representación',
    socials: 'Plataformas',
    writeEmail: 'Escribir un email',
  },
}

export type Translations = typeof es
