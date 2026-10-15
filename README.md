# Skypro Kanban

Учебный проект — канбан-доска для ведения задач, созданный на React + Vite.

## Стек

- React
- Vite
- CSS (БЭМ-нейминг)

## Структура проекта

src/
├── components/
│ ├── Card/ — карточка задачи
│ ├── Column/ — колонка канбана
│ ├── Main/ — основная доска
│ ├── Header/ — шапка сайта
│ ├── Calendar/ — календарь
│ └── popups/
│ ├── PopBrowse/ — попап просмотра задачи
│ ├── PopNewCard/ — попап создания задачи
│ └── PopUser/ — попап пользователя
├── App.jsx
├── App.css
├── index.css
└── main.jsx


## Что сделано в этой домашке

- Перенесена вёрстка из `main.html` в `App.jsx`, атрибуты исправлены под JSX
- Стили из `main.css` перенесены в `App.css`
- Картинки перенесены в `public/images/`
- Подключён шрифт Roboto через Google Fonts
- Компонент `App` разбит на 8 отдельных компонентов
- Модальные окна размещены в папке `popups`

## Запуск проекта

```bash
npm install
npm run dev