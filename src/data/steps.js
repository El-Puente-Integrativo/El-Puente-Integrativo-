export const STEPS = [
  {
    id: 'lectio',
    number: 1,
    name: 'Lectio',
    subtitle: 'La Lectura',
    latinName: 'Lectio',
    color: 'from-blue-700 to-sacred-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-800',
    accentColor: 'bg-blue-700',
    icon: '📖',
    duration: 5,
    description:
      'Lee el texto bíblico lentamente, en voz alta si es posible. Léelo dos o tres veces con atención y reverencia. Escucha con el corazón: ¿qué palabra, frase o imagen te llama especialmente la atención?',
    instruction:
      '¿Qué palabra o frase del texto te tocó el corazón?',
    prompt:
      'Escribe la palabra o frase que resonó en ti durante la lectura...',
    tip: 'Lee despacio, como si Dios mismo te hablara a través del texto. No busques entender todo, simplemente escucha.',
  },
  {
    id: 'meditatio',
    number: 2,
    name: 'Meditatio',
    subtitle: 'La Meditación',
    latinName: 'Meditatio',
    color: 'from-emerald-700 to-teal-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-800',
    accentColor: 'bg-emerald-700',
    icon: '🌿',
    duration: 10,
    description:
      'Toma la palabra o frase que te llamó la atención y medita en ella. Deja que penetre en tu corazón como el agua en la tierra. ¿Qué te dice esta Palabra a ti, en este momento de tu vida? ¿Qué imágenes, recuerdos o situaciones evoca?',
    instruction:
      '¿Qué te dice este texto a ti personalmente hoy?',
    prompt:
      'Reflexiona sobre cómo este texto habla a tu vida concreta, a tu situación actual...',
    tip: 'Rumia la Palabra como un animal que mastica lentamente. Deja que te nutra desde adentro.',
  },
  {
    id: 'oratio',
    number: 3,
    name: 'Oratio',
    subtitle: 'La Oración',
    latinName: 'Oratio',
    color: 'from-purple-700 to-violet-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-800',
    accentColor: 'bg-purple-700',
    icon: '🙏',
    duration: 10,
    description:
      'Responde a Dios desde el corazón. La meditación se convierte en diálogo. Puedes expresar gratitud, petición, alabanza, dolor o lo que sientas. No hay palabras perfectas: habla con Dios como un hijo habla a su Padre.',
    instruction:
      '¿Qué le quieres decir a Dios en respuesta a su Palabra?',
    prompt:
      'Escribe tu oración, tu respuesta al Señor. Puede ser alabanza, petición, gratitud o simplemente un "sí"...',
    tip: 'La oración nace de la meditación. Deja que tu corazón hable libremente a Dios, sin fórmulas ni artificios.',
  },
  {
    id: 'contemplatio',
    number: 4,
    name: 'Contemplatio',
    subtitle: 'La Contemplación',
    latinName: 'Contemplatio',
    color: 'from-amber-600 to-gold-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-800',
    accentColor: 'bg-amber-600',
    icon: '✨',
    duration: 10,
    description:
      'Descansa en el silencio de la presencia de Dios. No es momento de pensar ni hablar, sino simplemente de ser con Él. Suelta las palabras, los pensamientos y las preocupaciones. Deja que Dios actúe en ti.',
    instruction:
      '¿Qué experimentaste en el silencio contemplativo?',
    prompt:
      'Anota lo que viviste en el silencio: una paz, una imagen, una certeza interior, una emoción...',
    tip: 'Si la mente divaga, vuelve suavemente al texto o a una sola palabra. El silencio es el lenguaje del amor.',
  },
  {
    id: 'actio',
    number: 5,
    name: 'Actio',
    subtitle: 'La Acción',
    latinName: 'Actio',
    color: 'from-rose-700 to-red-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-800',
    accentColor: 'bg-rose-700',
    icon: '🕊️',
    duration: 5,
    description:
      'El encuentro con la Palabra de Dios nos transforma y nos envía al mundo. ¿Qué llamada concreta escuchas para tu vida cotidiana? ¿Qué actitud, decisión o gesto pequeño puedes llevar hoy como fruto de esta oración?',
    instruction:
      '¿Qué fruto concreto llevarás de esta Lectio Divina?',
    prompt:
      'Escribe un compromiso concreto, pequeño y real que puedas llevar a tu vida esta semana...',
    tip: 'La Palabra de Dios siempre fructifica. Un pequeño paso vivido con amor vale más que grandes propósitos olvidados.',
  },
]

export const SUGGESTED_TEXTS = [
  {
    reference: 'Juan 15, 1-5',
    text: 'Yo soy la vid verdadera y mi Padre es el viñador. Todo sarmiento que en mí no da fruto, lo corta, y todo el que da fruto, lo poda para que dé más fruto. Vosotros ya estáis limpios gracias a la Palabra que os he comunicado. Permaneced en mí, como yo en vosotros. Igual que el sarmiento no puede dar fruto por sí mismo si no permanece en la vid, tampoco vosotros si no permanecéis en mí. Yo soy la vid, vosotros los sarmientos. El que permanece en mí y yo en él, ese da mucho fruto; porque sin mí no podéis hacer nada.',
  },
  {
    reference: 'Mateo 5, 3-10',
    text: 'Bienaventurados los pobres en el espíritu, porque de ellos es el reino de los cielos. Bienaventurados los que lloran, porque ellos serán consolados. Bienaventurados los mansos, porque ellos heredarán la tierra. Bienaventurados los que tienen hambre y sed de justicia, porque ellos serán saciados. Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia. Bienaventurados los limpios de corazón, porque ellos verán a Dios. Bienaventurados los que trabajan por la paz, porque ellos serán llamados hijos de Dios. Bienaventurados los que padecen persecución por la justicia, porque de ellos es el reino de los cielos.',
  },
  {
    reference: 'Salmo 23',
    text: 'El Señor es mi pastor, nada me falta. En verdes prados me hace descansar; me conduce a aguas tranquilas y repara mis fuerzas. Me guía por el recto camino por amor de su nombre. Aunque camine por cañadas oscuras, nada temo, porque tú vas conmigo: tu vara y tu cayado me sosiegan. Me preparas una mesa ante mis enemigos; me unges la cabeza con perfume, y mi copa rebosa. Tu bondad y tu misericordia me acompañarán todos los días de mi vida, y habitaré en la casa del Señor por años sin término.',
  },
  {
    reference: 'Lucas 10, 38-42',
    text: 'Entrando en camino, entró en una aldea; y una mujer llamada Marta le recibió en su casa. Esta tenía una hermana que se llamaba María, la cual, sentándose a los pies de Jesús, oía su palabra. Pero Marta se preocupaba con muchos quehaceres, y acercándose, dijo: Señor, ¿no te importa que mi hermana me deje servir sola? Dile, pues, que me ayude. Respondiendo Jesús, le dijo: Marta, Marta, afanada y turbada estás con muchas cosas. Pero solo una cosa es necesaria; y María ha escogido la buena parte, la cual no le será quitada.',
  },
  {
    reference: 'Isaías 43, 1-4',
    text: 'Pero ahora así dice el Señor, el que te creó, Jacob, el que te formó, Israel: No temas, que yo te he redimido; te he llamado por tu nombre, tú eres mío. Cuando cruces las aguas, estaré contigo; cuando cruces los ríos, no te ahogarás; cuando camines sobre el fuego, no te quemarás, las llamas no te quemarán. Porque yo soy el Señor, tu Dios, el Santo de Israel, tu Salvador. He dado a Egipto como tu rescate, a Etiopía y a Sebá en tu lugar. Porque te aprecio y eres de valor para mí, porque te amo.',
  },
]
