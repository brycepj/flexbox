##scss boilerplate

a scss-based, SMACSS-friendly, grunt-ready derivative of HTML5 boilerplate

##using it 

- add custom mixins and place holders to mixins.scss
- break up selectors into separate modules in scss/modules folder. 
- global styles go in global folder
- import base.scss & neccessary modules in scss/pages
- use media query mixin **MQ** with standard screen widths (XS, S, M, L, XL, XXL). Adjust presets in mixins.scss


to get started with grunt, install the following plugins in your root folder:

npm install grunt --save-dev
npm install grunt-autoprefixer --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-sass --save-dev
npm install grunt-contrib-imagemin --save-dev
npm install grunt-contrib-jshint --save-dev


