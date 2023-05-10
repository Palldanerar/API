import IQuote from './interface';

const quotes: IQuote[] = [
  {
    id: 1,
    title: 'Чем умнее человек, тем легче он признает себя дураком.',
    author: 'Альберт Эйнштейн',
  },
  {
    id: 2,
    title: 'Никогда не ошибается тот, кто ничего не делает.',
    author: 'Теодор Рузвельт',
  },
  {
    id: 3,
    title: 'Менее всего просты люди, желающие казаться простыми.',
    author: 'Лев Николаевич Толстой',
  },
  {
    id: 4,
    title:
      'Мы находимся здесь, чтобы внести свой вклад в этот мир. Иначе зачем мы здесь?',
    author: 'Стив Джобс',
  },
  {
    id: 5,
    title: 'Ядерную войну невозможно выиграть.',
    author: 'Андрей Сахаров',
  },
  {
    id: 6,
    title:
      'Тренируйся с теми, кто сильнее. Не сдавайся там, где сдаются другие. И победишь там, где победить нельзя.',
    author: 'Брис Ли',
  },
  {
    id: 7,
    title: 'Стремитесь не к успеху, а к ценностям, которые он дает.',
    author: 'Альберт Эйнштейн',
  },
  {
    id: 8,
    title:
      'Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.',
    author: 'Флоренс Найтингейл',
  },
  {
    id: 9,
    title:
      'Сложнее всего начать действовать, все остальное зависит только от упорства.',
    author: 'Амелия Эрхарт',
  },
  {
    id: 10,
    title:
      'Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.',
    author: 'Альберт Эйнштейн',
  },
  {
    id: 11,
    title: 'Надо любить жизнь больше, чем смысл жизни.',
    author: 'Федор Достоевский',
  },
  {
    id: 12,
    title: 'Жизнь - это то, что с тобой происходит, пока ты строишь планы.',
    author: 'Джон Леннон',
  },
  {
    id: 13,
    title: 'Начинать всегда стоит с того, что сеет сомнения.',
    author: 'Борис Стругацкий',
  },
  {
    id: 14,
    title: 'Неосмысленная жизнь не стоит того, чтобы жить.',
    author: 'Сократ',
  },
  {
    id: 15,
    title: '80% успеха - это появиться в нужном месте в нужное время.',
    author: 'Вуди Аллен',
  },
  {
    id: 16,
    title: 'В моем словаре нет слова «невозможно».',
    author: 'Наполеон Бонапарт',
  },
  {
    id: 17,
    title:
      'Свобода ничего не стоит, если она не включает в себя свободу ошибаться.',
    author: 'Махатма Ганди',
  },
  {
    id: 18,
    title:
      'Два самых важных дня в твоей жизни: день, когда ты появился на свет, и день, когда понял, зачем.',
    author: 'Марк Твен',
  },
  {
    id: 19,
    title: 'Лучшая месть – огромный успех.',
    author: 'Фрэнк Синатра',
  },
  {
    id: 20,
    title:
      'Слабые люди всю жизнь стараются быть не хуже других. Сильным во что бы то ни стало нужно стать лучше всех.',
    author: 'Борис Акунин',
  },
  {
    id: 21,
    title:
      'Есть только один способ избежать критики: ничего не делайте, ничего не говорите и будьте никем.',
    author: 'Аристотель',
  },
  {
    id: 22,
    title:
      'Человек, которым вам суждено стать – это только тот человек, которым вы сами решите стать.',
    author: 'Ральф Уолдо Эмерсон',
  },
  {
    id: 23,
    title:
      'Лучше быть уверенным в хорошем результате, чем надеяться на отличный.',
    author: 'Уоррен Баффет',
  },
  {
    id: 24,
    title: 'Стоит только поверить, что вы можете – и вы уже на полпути к цели.',
    author: 'Теодор Рузвельт',
  },
  {
    id: 25,
    title: 'Упади семь раз и восемь раз поднимись.',
    author: 'Японская поговорка',
  },
  {
    id: 26,
    title: 'У всего есть своя красота, но не каждый может ее увидеть.',
    author: 'Конфуций',
  },
  {
    id: 27,
    title:
      'Как прекрасно, что не нужно ждать ни минуты, чтобы начать делать мир лучше.',
    author: 'Анна Франк',
  },
  {
    id: 28,
    title: 'Если нет ветра, беритесь за вёсла.',
    author: 'Латинская поговорка',
  },
  {
    id: 29,
    title:
      'Каждый хочет изменить человечество, но никто не задумывается о том, как изменить себя.',
    author: 'Лев Толстой',
  },
  {
    id: 30,
    title: 'Я не жертва обстоятельств, я - результат моих решений.',
    author: 'Стивен Кови',
  },
  {
    id: 31,
    title:
      'Я не провалил тест. Я просто нашел сто способов написать его неправильно.',
    author: 'Бенджамин Франклин',
  },
  {
    id: 32,
    title:
      'Я уверен: нельзя позволять, чтобы тебя остановило убогое словцо «нельзя».',
    author: 'Ричард Брэнсон',
  },
  {
    id: 33,
    title: 'Никогда не делает ошибок только тот, кто не пробует ничего нов',
    author: 'Альберт Эйнштейн',
  },
  {
    id: 34,
    title: 'Я лучше умру от страсти, чем от скуки.',
    author: 'Винсент ван Гог',
  },
  {
    id: 35,
    title: 'Наше сознание - это все. Вы становитесь тем, о чем думаете.',
    author: 'Будда',
  },
  {
    id: 36,
    title:
      'Не столь важно, как медленно ты идешь, как то, как долго ты идешь, не останавливаясь.',
    author: 'Конфуций',
  },
  {
    id: 37,
    title: 'Чтобы вести людей за собой, иди за ними.',
    author: 'Лао Цзы',
  },
  {
    id: 38,
    title: 'Запомните, что не достичь успеха – иногда тоже большая удача.',
    author: 'Далай Лама',
  },
  {
    id: 39,
    title:
      'Всякая мысль подобна тесту, стоит помять ее хорошенько — все из нее сделаешь.',
    author: 'Иван Тургенев',
  },
  {
    id: 40,
    title:
      'Запомните, никто не может заставить вас чувствовать себя неполноценным без вашего на то согласия.',
    author: 'Элеонор Рузвельт',
  },
  {
    id: 41,
    title:
      'Мир делится на два класса — одни веруют в невероятное, другие совершают невозможное.',
    author: 'Оскар Уайлд',
  },
  {
    id: 42,
    title: 'Выживает не самый сильный, а самый восприимчивый к переменам.',
    author: 'Чарльз Дарвин',
  },
  {
    id: 43,
    title:
      'Ни разу не упасть — не самая большая заслуга в жизни. Главное каждый раз подниматься.',
    author: 'Нельсон Мандела',
  },
  {
    id: 44,
    title:
      'Вопрос не в том, кто мне разрешит, а в том, кто сможет мне запретить.',
    author: 'Айн Рэнд',
  },
  {
    id: 45,
    title:
      'Мудрый человек требует всего только от себя, ничтожный же человек требует всего от других.',
    author: 'Лев Толстой',
  },
  {
    id: 46,
    title:
      'У истоков каждого успешного предприятия стоит однажды принятое смелое решение.',
    author: 'Питер Друкер',
  },
  {
    id: 47,
    title: 'На самом деле жизнь проста, но мы настойчиво ее усложняем.',
    author: 'Конфуций',
  },
  {
    id: 48,
    title:
      'Не так важно то, что вы получите, достигнув своих целей, как то, чем вы станете, сделав это.',
    author: 'Зиг Зиглар',
  },
  {
    id: 49,
    title: 'Всем великим переменам предшествует хаос.',
    author: 'Дипак Чопра',
  },
  {
    id: 50,
    title:
      'Большинство начинают вопить о несправедливости, только когда это касается их лично.',
    author: 'Чарльз Буковски',
  },
  {
    id: 51,
    title:
      'Лучше быть хорошим человеком, "ругающимся матом", чем тихой, воспитанной тварью.',
    author: 'Фаина Раневская',
  },
  {
    id: 52,
    title:
      'Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть.',
    author: 'Генри Форд',
  },
  {
    id: 53,
    title:
      'Мой способ шутить – это говорить правду. На свете нет ничего смешнее',
    author: 'Бернард Шоу',
  },
  {
    id: 54,
    title: 'Комедия – это очень серьёзное дело!',
    author: 'Юрий Никулин',
  },
  {
    id: 55,
    title:
      'У тебя есть враги? Хорошо. Значит, в своей жизни ты что-то когда-то отстаивал.',
    author: 'Уинстон Черчилль',
  },
  {
    id: 56,
    title: 'Когда-нибудь не страшно умереть – страшно умереть вот сейчас.',
    author: 'Александр Солженицын',
  },
  {
    id: 57,
    title: 'Внимай лишь одному учителю – Природе.',
    author: 'Рембрандт',
  },
  {
    id: 58,
    title: 'Берегите в себе человека.',
    author: 'Антон Чехов',
  },
  {
    id: 59,
    title: 'Громким смехом не скроешь дикой боли.',
    author: 'Марина Цветаева',
  },
  {
    id: 60,
    title: 'Люди – слишком сложные существа, чтобы понять их полностью.',
    author: 'Том Хэнкс',
  },
  {
    id: 61,
    title:
      'Чемпионами становятся не в тренажёрных залах. Чемпиона рождает то, что у человека внутри: желания, мечты, цели.',
    author: 'Мухаммед Али',
  },
  {
    id: 62,
    title: 'Не так уж сложно изменить общество – сложно изменить себя.',
    author: 'Нельсон Мандела',
  },
  {
    id: 63,
    title: '',
    author: '',
  },
  {
    id: 64,
    title: '',
    author: '',
  },
  {
    id: 65,
    title: '',
    author: '',
  },
  {
    id: 66,
    title: '',
    author: '',
  },
  {
    id: 67,
    title: '',
    author: '',
  },
  {
    id: 68,
    title: '',
    author: '',
  },
  {
    id: 69,
    title: '',
    author: '',
  },
  {
    id: 70,
    title: '',
    author: '',
  },
  {
    id: 70,
    title: '',
    author: '',
  },
  {
    id: 71,
    title: '',
    author: '',
  },
  {
    id: 72,
    title: '',
    author: '',
  },
  {
    id: 73,
    title: '',
    author: '',
  },
  {
    id: 74,
    title: '',
    author: '',
  },
  {
    id: 75,
    title: '',
    author: '',
  },
  {
    id: 76,
    title: '',
    author: '',
  },
  {
    id: 77,
    title: '',
    author: '',
  },
  {
    id: 78,
    title: '',
    author: '',
  },
  {
    id: 79,
    title: '',
    author: '',
  },
  {
    id: 80,
    title: '',
    author: '',
  },
  {
    id: 81,
    title: '',
    author: '',
  },
  {
    id: 82,
    title: '',
    author: '',
  },
  {
    id: 83,
    title: '',
    author: '',
  },
  {
    id: 84,
    title: '',
    author: '',
  },
  {
    id: 85,
    title: '',
    author: '',
  },
  {
    id: 86,
    title: '',
    author: '',
  },
  {
    id: 87,
    title: '',
    author: '',
  },
  {
    id: 88,
    title: '',
    author: '',
  },
  {
    id: 89,
    title: '',
    author: '',
  },
  {
    id: 90,
    title: '',
    author: '',
  },
  {
    id: 91,
    title: '',
    author: '',
  },
  {
    id: 92,
    title: '',
    author: '',
  },
  {
    id: 93,
    title: '',
    author: '',
  },
  {
    id: 94,
    title: '',
    author: '',
  },
  {
    id: 95,
    title: '',
    author: '',
  },
  {
    id: 96,
    title: '',
    author: '',
  },
  {
    id: 97,
    title: '',
    author: '',
  },
  {
    id: 98,
    title: '',
    author: '',
  },
  {
    id: 99,
    title: '',
    author: '',
  },
  {
    id: 100,
    title: '',
    author: '',
  },
];

export default quotes;
