// Build/js/app.js
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

/*
 * any CSS you import will output into a single css file (main.css in this case)
 */
import '../styles/main.scss'

/*
 * Need jQuery? Install it with "yarn add jquery",
 * then uncomment to import it.
/*
// import $ from 'jquery';

/*
 * Include Bootstrap in your Sass-file. You can here specify which plugins you need
 */
import { Tooltip, Toast, Popover } from 'bootstrap'

// Sprite Loader
function requireAll(r) {
    r.keys().forEach(r)
}
requireAll(require.context('../icons/', true, /\.svg$/))

/*
 * Put your own javascript code here
 */
console.log('Hello Webpack Encore! Edit me in Build/js/app.js')
