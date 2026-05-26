# YouTalk Blog — домашнее задание

Адаптивная вёрстка блога компании YouTalk по [макету Figma](https://www.figma.com/design/NsD6GG3ZWD29ZWzkCMUkjU/Youtalk---Blog?node-id=0-1&p=f).

## Посмотреть сайт

**Основной способ — GitHub Pages:**

- [https://postlog.github.io/MIFIDEV-you-talk/](https://postlog.github.io/MIFIDEV-you-talk/) — главная (редирект на блог)
- [https://postlog.github.io/MIFIDEV-you-talk/pages/blog.html](https://postlog.github.io/MIFIDEV-you-talk/pages/blog.html) — блог
- [https://postlog.github.io/MIFIDEV-you-talk/pages/article.html](https://postlog.github.io/MIFIDEV-you-talk/pages/article.html) — статья

## Страницы в репозитории

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

Клонируйте репозиторий и откройте `pages/blog.html` или `pages/article.html` в браузере, либо используйте Live Server.
