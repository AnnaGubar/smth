### Гайд 'https://www.youtube.com/watch?v=sxeW_z5-sq4'

## Перед началом работы

`npm ci`

### Разработка

`npm run dev`

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

## РАБОТА З “GIT”

- Клонируете себе dev(main) : `git clone https://ccылка-на-репозиторий`

- Переходите в ветку dev(main): `git checkout dev(main)`

  - Забираете последние изменения в ветке dev(main) `git pull origin dev(main)`
  - Потом создаете свою ветку находясь в ветке dev(main), с названием своей задачи:
    `git checkout -b name_your_branch`

- Работаете только в своей ветке, все изменения пушите ТОЛЬКО в нее:

  - `git add .`
  - `git commit -m “init name_your_branch”`
  - `git push origin name_your_branch`

- Когда полностью завершили работу в своей ветке и хотите добавить эти изменения в общий проект:

  - Переходите в ветку dev(main) `git checkout dev(main)`
  - Пулите все изменения которые внесли другие `git pull origin dev(main)`
  - Переходим в свою ветку: `git checkout name_your_branch`

- Мерджите dev(main) в свою ветку, разрешаешь конфликты которых то и быть не должно на самом деле:
  `git merge dev(main)`

  - Если есть конфликты, открываем свой редактор кода и решаем возникшие конфликты (при сложностях
    обращаемся к team lead’у).
  - `git add .`
  - `git commit -m “пишем название конкретной задачи которую сделали”`

- Пушите свою ветку на удаленку: `git push origin name_your_branch`
- Создаете pull request на слитие с dev(main) там на гитхабе
