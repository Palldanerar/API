# API on Nest.js

Данное API позволяет получать случайную цитату.

# Запросы
## GET
>api/quote - возвращает одну случайную цитату.

>api/quote/id - возвращает цитату с данным id (1-85).

>api/quotes - возвращает массив цитат.

# Пример ответа

```JavaScript
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
```
# Пример ошибки

```JavaScript
{
    code: 1;
    title: "Цитаты с данным id не существует."
},
```
