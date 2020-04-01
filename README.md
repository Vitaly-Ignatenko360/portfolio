## Build Setup:

# Install dependencies:

npm install

# Server with hot reload at http://localhost:8081/

npm run dev

# Output will be at dist/ folder

npm run build

```

## Project Structure:

* `src/index.html` - main app HTML
* `src/assets/scss` - put custom app SCSS styles here. Don't forget to import them in `index.js`
* `src/assets/css` - the same as above but CSS here. Don't forget to import them in `index.js`
* `src/assets/img` - put images here. Don't forget to use correct path: `assets/img/some.jpg`
* `src/js` - put custom app scripts here
* `src/index.js` - main app file where you include/import all required libs and init app
* `src/components` - folder with custom `.vue` components
* `src/store` - app store for vue
* `static/` - folder with extra static assets that will be copied into output folder
```

## Import Another libs:

1. Install libs
2. Import libs in `./index.js`

```js
// Bootstrap example
import Bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
```

## Import only SASS or CSS libs:

1. Install libs
2. Go to `/assets/scss/utils/libs.scss`
3. Import libs in node modules

```scss
// Sass librarys example:
@import "../../node_modules/spinners/stylesheets/spinners";
// CSS librarys example:
@import "../../node_modules/flickity/dist/flickity.css";
```

## Import js files:

1. Create another js module in `./js/` folder
2. Import modules in `./js/index.js` file

```js
// another js file for example
import "./common.js";
```

сбилженые файлы работают правильно на хостинге
