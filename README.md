# YouTalk Blog — домашнее задание

Адаптивная вёрстка блога компании YouTalk по [макету Figma](https://www.figma.com/design/NsD6GG3ZWD29ZWzkCMUkjU/Youtalk---Blog?node-id=0-1&p=f).

## Страницы проекта

- **Главная блога:** [pages/blog.html](pages/blog.html)
- **Страница статьи:** [pages/article.html](pages/article.html)
- **index.html** — редирект на `pages/blog.html`

## Технологии

- HTML5 (семантическая разметка)
- CSS3 (Nested BEM, Flexbox, CSS Grid, media queries)
- SVG-иконки, PNG-изображения
- Шрифты: Montserrat, Open Sans

## Структура

```text
blocks/     — BEM-блоки (CSS)
pages/      — blog.html, article.html
vendor/     — normalize, fonts
images/     — svg, cards, article
```

## Запуск локально

Откройте `pages/blog.html` или `pages/article.html` в браузере, либо используйте Live Server.

## GitHub Pages

Репозиторий содержит `.nojekyll`. Для деплоя укажите корень репозитория; главная страница блога — `pages/blog.html`.
