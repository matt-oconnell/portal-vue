/**
 * See /build/webpack.test.conf.js for info how this is run.
 */

 /*additional setup with other loaders (polyfills, ...)*/
 const context = require.context(/*directory*/'mocha-loader!./unit', /*recursive*/true, /*match files*//\.spec.js$/);
 context.keys().forEach(context);