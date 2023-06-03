import IQuote from './Interface/IQuote';

const quotes: IQuote[] = [
  {
    id: 1,
    ru_lang: {
      title: 'Умный человек решает проблему. Мудрый человек избегает ее.',
      author: 'Альберт Эйнштейн',
    },
    en_lang: {
      title: 'A clever person solves a problem. A wise person avoids it.',
      author: 'Albert Einstein',
    },
  },
  {
    id: 2,
    ru_lang: {
      title: 'Надо любить жизнь больше, чем смысл жизни.',
      author: 'Фёдор Достоевский',
    },
    en_lang: {
      title: 'Love life more than the meaning of it.',
      author: 'Fyodor Dostoyevsky',
    },
  },
  {
    id: 3,
    ru_lang: {
      title: 'Учись из прошлого, живи настоящим, надейся на будущее.',
      author: 'Альберт Эйнштейн',
    },
    en_lang: {
      title: 'Learn from yesterday, live for today, hope for tomorrow.',
      author: 'Albert Einstein',
    },
  },
  {
    id: 4,
    ru_lang: {
      title: 'Истинный признак интеллекта не знания, а воображение.',
      author: 'Альберт Эйнштейн',
    },
    en_lang: {
      title: 'The true sign of intelligence is not knowledge but imagination.',
      author: 'Albert Einstein',
    },
  },
  {
    id: 5,
    ru_lang: {
      title:
        'Вас никогда не постигнет неудача, пока вы не перестанете стараться.',
      author: 'Альберт Эйнштейн',
    },
    en_lang: {
      title: 'You never fail until you stop trying.',
      author: 'Albert Einstein',
    },
  },
  {
    id: 6,
    ru_lang: {
      title:
        'Ваше время ограничено, так что не теряйте его, проживая чужую жизнь.',
      author: 'Стив Джобс',
    },
    en_lang: {
      title:
        'Your time is limited, so don’t waste it living someone else’s life.',
      author: 'Steve Jobs',
    },
  },
  {
    id: 7,
    ru_lang: {
      title:
        'Выживает не самый сильный и не самый умный, а тот, кто лучше всех приспосабливается к изменениям.',
      author: 'Чарльз Дарвин',
    },
    en_lang: {
      title:
        'It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.',
      author: 'Charles Darwin',
    },
  },
  {
    id: 8,
    ru_lang: {
      title: 'Никогда не сожалей о том, что заставляет тебя улыбаться.',
      author: 'Марк Твен',
    },
    en_lang: {
      title: 'Never regret anything that made you smile.',
      author: 'Mark Twain',
    },
  },
  {
    id: 9,
    ru_lang: {
      title:
        'Жизнь это 10% того, что с нами происходит, и 90% того, как мы на это реагируем.',
      author: 'Чарльз Свиндолл',
    },
    en_lang: {
      title: 'Life is 10% what happens to us and 90% how we react to it.',
      author: 'Charles Swindoll',
    },
  },
  {
    id: 10,
    ru_lang: {
      title:
        'Нельзя быть слишком хорошо одетым или слишком хорошо образованным.',
      author: 'Оскар Уайльд',
    },
    en_lang: {
      title: 'You can never be overdressed or overeducated.',
      author: 'Oscar Wilde',
    },
  },
  {
    id: 11,
    ru_lang: {
      title:
        'Успех — это способность идти от одной неудачи к другой без потери энтузиазма.',
      author: 'Уинстон Черчилль',
    },
    en_lang: {
      title:
        'Success is the ability to go from one failure to another with no loss of enthusiasm.',
      author: 'Winston Churchill',
    },
  },
  {
    id: 12,
    ru_lang: {
      title: 'Никогда, никогда, никогда не сдаваться!',
      author: 'Уинстон Черчилль',
    },
    en_lang: {
      title: 'Never, never, never give in!',
      author: 'Winston Churchill',
    },
  },
  {
    id: 13,
    ru_lang: {
      title:
        'Человек, который не читает, не имеет преимуществ над человеком, который не умеет читать.',
      author: 'Марк Твен',
    },
    en_lang: {
      title:
        'The man who does not read has no advantage over the man who cannot read.',
      author: 'Mark Twain',
    },
  },
  {
    id: 14,
    ru_lang: {
      title:
        'Хорошие друзья, хорошие книги и спящая совесть вот это идеальная жизнь.',
      author: 'Марк Твен',
    },
    en_lang: {
      title:
        'Good friends, good books, and a sleepy conscience this is the ideal life.',
      author: 'Mark Twain',
    },
  },
  {
    id: 15,
    ru_lang: {
      title: 'Я никогда не позволял школе вмешиваться в мое образование.',
      author: 'Марк Твен',
    },
    en_lang: {
      title: 'I have never let my schooling interfere with my education.',
      author: 'Mark Twain',
    },
  },
  {
    id: 16,
    ru_lang: {
      title: 'Печаль будет длиться вечно.',
      author: 'Ван Гог',
    },
    en_lang: {
      title: 'The sadness will last forever.',
      author: 'Van Gogh',
    },
  },
  {
    id: 17,
    ru_lang: {
      title: 'Самый мужественный поступок, по-прежнему, думать за себя. Вслух.',
      author: 'Коко Шанель',
    },
    en_lang: {
      title: 'The most courageous act is still to think for yourself. Aloud.',
      author: 'Coco Chanel',
    },
  },
  {
    id: 18,
    ru_lang: {
      title: 'Есть люди, у которых есть деньги, и люди, которые богаты.',
      author: 'Коко Шанель',
    },
    en_lang: {
      title: 'There are people who have money and people who are rich.',
      author: 'Coco Chanel',
    },
  },
  {
    id: 19,
    ru_lang: {
      title: 'Мода меняется стиль отстаётся.',
      author: 'Коко Шанель',
    },
    en_lang: {
      title: 'Fashion changes, but style endures.',
      author: 'Coco Chanel',
    },
  },
  {
    id: 20,
    ru_lang: {
      title: 'Мне все равно, что вы думаете обо мне. Я о вас не думаю вовсе.',
      author: 'Коко Шанель',
    },
    en_lang: {
      title:
        'I don’t care what you think about me. I don’t think about you at all.',
      author: 'Coco Chanel',
    },
  },
  {
    id: 21,
    ru_lang: {
      title:
        'Люди, которые достаточно сумасшедшие, чтобы думать, что они могут изменить мир, — это те, кто это делают.',
      author: 'Стив Джобс',
    },
    en_lang: {
      title:
        'The people who are crazy enough to think they can change the world are the ones who do.',
      author: 'Steve Jobs',
    },
  },
  {
    id: 22,
    ru_lang: {
      title: 'Инновация отделяет лидера от последователя.',
      author: 'Стив Джобс',
    },
    en_lang: {
      title: 'Innovation distinguishes between a leader and a follower.',
      author: 'Steve Jobs',
    },
  },
  {
    id: 23,
    ru_lang: {
      title:
        'Имейте отвагу следовать своему сердцу и интуиции. Они каким-то образом знают что кем вы по-настоящему хотите стать.',
      author: 'Стив Джобс',
    },
    en_lang: {
      title:
        'Have the courage to follow your heart and intuition. They somehow know what you truly want to become.',
      author: 'Steve Jobs',
    },
  },
  {
    id: 24,
    ru_lang: {
      title: 'Иногда жизнь бьет вас кирпичем по голове. Не теряйте веры.',
      author: 'Стив Джобс',
    },
    en_lang: {
      title:
        'Sometimes life is going to hit you in the head with a brick. Don’t lose faith.',
      author: 'Steve Jobs',
    },
  },
  {
    id: 25,
    ru_lang: {
      title:
        'Ваше время ограничено, поэтому не тратьте его проживая чужую жизнь.',
      author: 'Стив Джобс',
    },
    en_lang: {
      title:
        'Your time is limited, so don’t waste it living someone else’s life.',
      author: 'Steve Jobs',
    },
  },
  {
    id: 26,
    ru_lang: {
      title: 'Как только вы бросаете учиться, вы начинаете умирать.',
      author: 'Альберт Эйнштейн',
    },
    en_lang: {
      title: 'Once you stop learning, you start dying.',
      author: 'Albert Einstein',
    },
  },
  {
    id: 27,
    ru_lang: {
      title: 'То, что не убивает нас, делает нас сильнее.',
      author: 'Фридрих Ницше',
    },
    en_lang: {
      title: 'That which does not kill us makes us stronger.',
      author: 'Friedrich Nietzsche',
    },
  },
  {
    id: 28,
    ru_lang: {
      title:
        'Иногда люди не хотят слышать правду, потому что они не хотят разрушить их иллюзии.',
      author: 'Фридрих Ницше',
    },
    en_lang: {
      title:
        'Sometimes people don’t want to hear the truth because they don’t want their illusions destroyed.',
      author: 'Friedrich Nietzsche',
    },
  },
  {
    id: 29,
    ru_lang: {
      title: 'Нет фактов. Есть только их интерпретации.',
      author: 'Фридрих Ницше',
    },
    en_lang: {
      title: 'There are no facts, only interpretations.',
      author: 'Friedrich Nietzsche',
    },
  },
  {
    id: 30,
    ru_lang: {
      title:
        'Когда мы утомлены, нас атакуют идеи, которые мы победили много лет назад.',
      author: 'Фридрих Ницше',
    },
    en_lang: {
      title:
        'When we are tired, we are attacked by ideas we conquered long ago.',
      author: 'Friedrich Nietzsche',
    },
  },
  {
    id: 31,
    ru_lang: {
      title:
        'Змея, которая не может сбросить кожу, умирает. Также и наш ум, который противится менять точку зрения; он перестает быть умом.',
      author: 'Фридрих Ницше',
    },
    en_lang: {
      title:
        'The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.',
      author: 'Friedrich Nietzsche',
    },
  },
  {
    id: 32,
    ru_lang: {
      title: 'Мысли — это тени наших чувств. Они темнее, более пусты и просты.',
      author: 'Фридрих Ницше',
    },
    en_lang: {
      title:
        'Thoughts are the shadows of our feelings — always darker, emptier and simpler.',
      author: 'Friedrich Nietzsche',
    },
  },
  {
    id: 33,
    ru_lang: {
      title: 'Мысли — это тени наших чувств. Они темнее, более пусты и просты.',
      author: 'Фридрих Ницше',
    },
    en_lang: {
      title:
        'Thoughts are the shadows of our feelings — always darker, emptier and simpler.',
      author: 'Friedrich Nietzsche',
    },
  },
  {
    id: 34,
    ru_lang: {
      title:
        'Я ненавидел каждую минуту тренировок, но я говорил, «Не бросай. Страдай сейчас и живи оставшуюся жизнь как чемпион».',
      author: 'Мухаммед Али',
    },
    en_lang: {
      title:
        'I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion’.',
      author: 'Muhammad Ali',
    },
  },
  {
    id: 35,
    ru_lang: {
      title: 'Пари как бабочка, жаль как пчела.',
      author: 'Мухаммед Али',
    },
    en_lang: {
      title: 'Float like a butterfly, sting like a bee.',
      author: 'Muhammad Ali',
    },
  },
  {
    id: 36,
    ru_lang: {
      title:
        'Любовь состоит не в том, чтобы смотреть друг на друга, а в том, чтобы смотреть вместе в одном направлении.',
      author: 'Антуан де Сент-Экзюпери',
    },
    en_lang: {
      title:
        'Love does not consist of gazing at each other, but in looking outward together in the same direction.',
      author: 'Antoine de Saint-Exupery',
    },
  },
  {
    id: 37,
    ru_lang: {
      title:
        ' Все взрослые были однажды детьми… но лишь немногие из них помнят это.',
      author: 'Антуан де Сент-Экзюпери',
    },
    en_lang: {
      title:
        'All grown-ups were once children… but only few of them remember it',
      author: 'Antoine de Saint-Exupery',
    },
  },
  {
    id: 38,
    ru_lang: {
      title: 'Цель без плана всего лишь желание.',
      author: 'Антуан де Сент-Экзюпери',
    },
    en_lang: {
      title: 'A goal without a plan is just a wish.',
      author: 'Antoine de Saint-Exupery',
    },
  },
  {
    id: 39,
    ru_lang: {
      title:
        'Я должен выдержать присутствие нескольких гусениц, если я хочу познакомиться к бабочками.',
      author: 'Антуан де Сент-Экзюпери',
    },
    en_lang: {
      title:
        'Well, I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies.',
      author: 'Antoine de Saint-Exupery',
    },
  },
  {
    id: 40,
    ru_lang: {
      title:
        'Я должен выдержать присутствие нескольких гусениц, если я хочу познакомиться к бабочками.',
      author: 'Антуан де Сент-Экзюпери',
    },
    en_lang: {
      title:
        'Well, I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies.',
      author: 'Antoine de Saint-Exupery',
    },
  },
  {
    id: 41,
    ru_lang: {
      title: 'Некоторые люди чувствуют дождь. Другие просто мокнут.',
      author: 'Боб Марли',
    },
    en_lang: {
      title: 'Some people feel the rain. Others just get wet.',
      author: 'Bob Marley',
    },
  },
  {
    id: 42,
    ru_lang: {
      title: 'Нет двух людей, которые читали одну и ту же книгу.',
      author: 'Вудро Вильсон',
    },
    en_lang: {
      title: 'No two persons ever read the same book.',
      author: 'Woodrow Wilson',
    },
  },
  {
    id: 43,
    ru_lang: {
      title: 'Успех — не ключ к счастью. Это счастье — ключ к успеху.',
      author: 'Герман Кейн',
    },
    en_lang: {
      title:
        'Success is not the key to happiness. Happiness is the key to success.',
      author: 'Herman Cain',
    },
  },
  {
    id: 44,
    ru_lang: {
      title: 'Мы не помним дни, мы помним моменты.',
      author: 'Чезаре Павезе',
    },
    en_lang: {
      title: 'We do not remember days, we remember moments.',
      author: 'Cesare Pavese',
    },
  },
  {
    id: 45,
    ru_lang: {
      title:
        'Никогда не смейтесь над человеком, который говорит на ломаном английском. Это значит, что он знает и другой язык.',
      author: 'Х. Джексон Браун — младший',
    },
    en_lang: {
      title:
        'Never make fun of someone who speaks broken English. It means they know another language.',
      author: 'H. Jackson Brown, Jr.',
    },
  },
  {
    id: 46,
    ru_lang: {
      title:
        'Две вещи бесконечны — Вселенная и человеческая глупость, но насчёт Вселенной я не уверен.',
      author: 'Альберт Эйнштейн',
    },
    en_lang: {
      title:
        'Only two things are infinite — the universe and human stupidity, and I’m not sure about the former.',
      author: 'Albert Einstein',
    },
  },
  {
    id: 47,
    ru_lang: {
      title:
        'Больше не гоняясь за бабочками, мы с Камилой посадили наш сад, чтобы они могли прилетать к нам.',
      author: 'Мэттью Макконахи',
    },
    en_lang: {
      title:
        'No longer chasing butterflies, Camila and I planted our garden so they could come to us.',
      author: 'Matthew Mcconaughey',
    },
  },
  {
    id: 48,
    ru_lang: {
      title: 'Да прибудет с тобой сила',
      author: 'Звёздные войны',
    },
    en_lang: {
      title: 'May the Force be with you.',
      author: 'Star Wars',
    },
  },
  {
    id: 49,
    ru_lang: {
      title: 'Коли свои дрова сам, и ты согреешься дважды.',
      author: 'Генри Форд',
    },
    en_lang: {
      title: 'Chop your own wood and it will warm you twice.',
      author: 'Henry Ford',
    },
  },
  {
    id: 50,
    ru_lang: {
      title: 'Наша жизнь есть то, что мы думаем о ней.',
      author: 'Марк Аврелий',
    },
    en_lang: {
      title: 'Our life is what our thoughts make it.',
      author: 'Mark Aurelius',
    },
  },
  {
    id: 51,
    ru_lang: {
      title:
        'Успех — это один процент вдохновения и девяносто девять процентов пота.',
      author: 'Томас Эдисон',
    },
    en_lang: {
      title:
        'Success is one percent inspiration, ninety-nine percent perspiration.',
      author: 'Thomas Edison',
    },
  },
  {
    id: 52,
    ru_lang: {
      title:
        'Вы промахнётесь 100 раз из 100 бросков, которые так и не сделаете.',
      author: 'Уэйн Гретцки',
    },
    en_lang: {
      title: 'You miss 100% of the shots you don’t take.',
      author: 'Wayne Gretzky',
    },
  },
  {
    id: 53,
    ru_lang: {
      title:
        'Вчера я был умным, поэтому я хотел изменить мир. Сегодня я мудр, поэтому меняюсь.',
      author: 'Руми',
    },
    en_lang: {
      title:
        'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.',
      author: 'Rumi',
    },
  },
  {
    id: 54,
    ru_lang: {
      title:
        'Вы живете только один раз, но если вы все делаете правильно, достаточно одного раза',
      author: 'Мэй Уэст',
    },
    en_lang: {
      title: 'You only live once, but if you do it right, once is enough.',
      author: 'Mae West',
    },
  },
  {
    id: 55,
    ru_lang: {
      title:
        'Вещи меняются. И друзья уходят. Жизнь ни для кого не останавливается.',
      author: 'Стивен Чбоски',
    },
    en_lang: {
      title: 'Things change. And friends leave. Life doesn’t stop for anybody.',
      author: 'Stephen Chbosky',
    },
  },
  {
    id: 56,
    ru_lang: {
      title: 'Думай как человек действия и действуй как человек мысли.',
      author: 'Анри Бергсон',
    },
    en_lang: {
      title: 'Think like a man of action and act like a man of thought.',
      author: 'Henri Bergson',
    },
  },
  {
    id: 57,
    ru_lang: {
      title:
        '«Если у вас нет контроля над своим ртом, вы не сможете контролировать свое будущее.',
      author: 'Германия Кент',
    },
    en_lang: {
      title:
        'If you do not have control over your mouth, you will not have control over your future.',
      author: 'Germany Kent',
    },
  },
  {
    id: 58,
    ru_lang: {
      title:
        'Есть два вида идеальных людей: те, кто уже умерли, и те, кто еще не родились.',
      author: 'Китайская пословица',
    },
    en_lang: {
      title:
        'There are two kinds of perfect people: those who are dead, and those who have not been born yet.',
      author: 'Chinese proverb',
    },
  },
  {
    id: 59,
    ru_lang: {
      title:
        'Мудрые люди говорят потому, что им есть, что сказать, глупцы — потому что они должны сказать что-то.',
      author: 'Платон',
    },
    en_lang: {
      title:
        'Wise men speak because they have something to say; fools because they have to say something.',
      author: 'Platon',
    },
  },
  {
    id: 60,
    ru_lang: {
      title:
        'Работайте усердно, чтобы получить то, что любите, иначе придется полюбить то, что получили.',
      author: 'Бернард Шоу',
    },
    en_lang: {
      title:
        'Work hard to get what you like, otherwise you’ll be forced to just like what you get.',
      author: 'Bernard Shaw',
    },
  },
  {
    id: 61,
    ru_lang: {
      title:
        'В конце концов, мы будем помнить не слова врагов, а молчание друзей.',
      author: 'Мартин Лютер Кинг',
    },
    en_lang: {
      title:
        'In the End, we will remember not the words of our enemies, but the silence of our friends.',
      author: 'Martin Luther King',
    },
  },
  {
    id: 62,
    ru_lang: {
      title: 'Слабые никогда не прощают. Умение прощать — свойство сильных.',
      author: 'Махатма Ганди',
    },
    en_lang: {
      title:
        'The weak can never forgive. Forgiveness is the attribute of the strong.',
      author: 'Mahatma Gandhi',
    },
  },
  {
    id: 63,
    ru_lang: {
      title: 'Жизнь — это череда выборов.',
      author: 'Нострадамус',
    },
    en_lang: {
      title: 'Life is a series of choices.',
      author: 'Nostradamus',
    },
  },
  {
    id: 64,
    ru_lang: {
      title: 'В центре трудности лежит возможность.',
      author: 'Альберт Эйнштейн',
    },
    en_lang: {
      title: 'In the middle of difficulty lies opportunity.',
      author: 'Albert Einstein',
    },
  },
  {
    id: 65,
    ru_lang: {
      title:
        'Если слишком долго вглядываться в бездну, бездна начинает вглядываться в тебя.',
      author: 'Фридрих Ницше',
    },
    en_lang: {
      title:
        'And if you gaze long into an abyss, the abyss also gazes into you.',
      author: 'Friedrich Nietzsche',
    },
  },
  {
    id: 66,
    ru_lang: {
      title: 'Красота в глазах смотрящего.',
      author: 'Оскар Уайльд',
    },
    en_lang: {
      title: 'Beauty is in the eye of the beholder.',
      author: 'Oscar Wilde',
    },
  },
  {
    id: 67,
    ru_lang: {
      title:
        'Женись несмотря ни на что. Если попадётся хорошая жена — будешь счастливым, если плохая — философом.',
      author: 'Сократ',
    },
    en_lang: {
      title:
        'By all means marry; if you get a good wife, you’ll be happy. If you get a bad one, you’ll become a philosopher.',
      author: 'Socrates',
    },
  },
  {
    id: 68,
    ru_lang: {
      title: 'Хорошее начало — половина дела.',
      author: 'Платон',
    },
    en_lang: {
      title: 'The beginning is the most important part of the work.',
      author: 'Platon',
    },
  },
  {
    id: 69,
    ru_lang: {
      title: 'Не делай другому того, чего себе не пожелаешь.',
      author: 'Конфуций',
    },
    en_lang: {
      title: 'What you do not want done to yourself, do not do to others.',
      author: 'Confucius',
    },
  },
  {
    id: 70,
    ru_lang: {
      title: 'Я мыслю, а значит существую.',
      author: 'Рене Декарт',
    },
    en_lang: {
      title: 'I think, therefore I am.',
      author: 'Rene Descartes',
    },
  },
  {
    id: 71,
    ru_lang: {
      title: 'Важно качество, а не количество.',
      author: 'Сенека',
    },
    en_lang: {
      title: 'It is quality rather than quantity that matters.',
      author: 'Seneca',
    },
  },
  {
    id: 72,
    ru_lang: {
      title: 'Важно качество, а не количество.',
      author: 'Сенека',
    },
    en_lang: {
      title: 'It is quality rather than quantity that matters.',
      author: 'Seneca',
    },
  },
  {
    id: 73,
    ru_lang: {
      title: 'Талант выигрывает игры, а команда — чемпионаты.',
      author: 'Майкл Джордан',
    },
    en_lang: {
      title: ' Talent wins games, but teamwork wins championships.',
      author: 'Michael Jordan',
    },
  },
  {
    id: 74,
    ru_lang: {
      title: 'Любовь побеждает все, кроме бедности и зубной боли.',
      author: 'Мэй Уэст',
    },
    en_lang: {
      title: 'Love conquers all things except poverty and toothache.',
      author: 'Mae West',
    },
  },
  {
    id: 75,
    ru_lang: {
      title: 'Лучше голодать свободным, чем быть толстым рабом',
      author: 'Эзоп',
    },
    en_lang: {
      title: 'Better to starve free than be a fat slave',
      author: 'Aesop',
    },
  },
  {
    id: 76,
    ru_lang: {
      title: 'Бог любит помогать тому, кто сам стремится помочь себе.',
      author: 'Эсхил',
    },
    en_lang: {
      title: 'God loves to help him who strives to help himself.',
      author: 'Aeschylus',
    },
  },
  {
    id: 78,
    ru_lang: {
      title:
        'Зеркало — это мой лучший друг, потому что когда я плачу, оно никогда не смеется.',
      author: 'Чарльз Чаплин',
    },
    en_lang: {
      title: 'The mirror is my best friend because when I cry it never laughs.',
      author: 'Charles Chaplin',
    },
  },
  {
    id: 79,
    ru_lang: {
      title: 'Если хочешь сделать что-то хорошо, сделай это сам.',
      author: 'Фердинанд Порше',
    },
    en_lang: {
      title: 'If you want a thing done well, do it yourself',
      author: 'Ferdinand Porsche',
    },
  },
  {
    id: 80,
    ru_lang: {
      title: 'Кораблю безопасно в гавани, но не для этого строят корабли.',
      author: 'Джон А. Шедд',
    },
    en_lang: {
      title:
        'A ship in harbor is safe — but that is not what ships are built for',
      author: 'John G. Shedd',
    },
  },
  {
    id: 81,
    ru_lang: {
      title: 'Кораблю безопасно в гавани, но не для этого строят корабли.',
      author: 'Джон А. Шедд',
    },
    en_lang: {
      title:
        'A ship in harbor is safe — but that is not what ships are built for.',
      author: 'John G. Shedd',
    },
  },
  {
    id: 82,
    ru_lang: {
      title: 'Кредиторы отличаются лучшей памятью, чем должники.',
      author: 'Бенджамин Франклин',
    },
    en_lang: {
      title: 'Creditors have better memories than debtors.',
      author: 'Benjamin Franklin',
    },
  },
  {
    id: 83,
    ru_lang: {
      title: 'Постарайся стать не успешным, а ценным человеком.',
      author: 'Альберт Эйнштейн',
    },
    en_lang: {
      title:
        'Try not to become a man of success but rather try to become a man of value.',
      author: 'Albert Einstein',
    },
  },
  {
    id: 84,
    ru_lang: {
      title: 'Образование — это не изучение фактов, а тренировка мышления.',
      author: 'Альберт Эйнштейн',
    },
    en_lang: {
      title:
        'Education is not the learning of facts, but the training of the mind to think',
      author: 'Albert Einstein',
    },
  },
  {
    id: 85,
    ru_lang: {
      title: 'Разум, ограниченный языком, находится в заточении.',
      author: 'Симона Вейль',
    },
    en_lang: {
      title: 'A mind enclosed in language is in prison.',
      author: 'Simone Weil',
    },
  },
];
export default quotes;
