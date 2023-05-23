# API on Nest.js

Данное API позволяет получать случайную цитату. (Временно недоступно)

# Запросы
## GET
>api/quote - возвращает одну случайную цитату.

>api/quote/id - возвращает цитаты с данным id (1-100).

>api/quotes - возвращает массив цитат.

# Пример ответа

```JavaScript
{
    id: 1,
    ru_lang: {
        title: 'Чем умнее человек, тем легче он признает себя дураком.', 
        author: 'Альберт Эйнштейн'
    }
    en_lang: {
        title: 'The smarter a person is, the easier he recognizes himself as a fool.',
        author: 'Albert Einstein'
    }
}
```
