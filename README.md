## Перед началом работы

npm ci

### Разработка

npm run dev

### Деплой

`package.json` отредактировать поле `homepage` и скрипт `build`, заменив `имя_пользователя` и
`имя_репозитория` на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория",
"scripts": {
  "build": "parcel build src/*.html --public-url /имя_репозитория/"
},
```

## Файлы и папки

- Все паршалы файлов стилей -> в папке `src/sass` и импортироваться в `src/sass/main.scss`
- Изображения -> в папку `src/images`, заранее оптимизировав их.

### 'https://www.youtube.com/watch?v=sxeW_z5-sq4'
