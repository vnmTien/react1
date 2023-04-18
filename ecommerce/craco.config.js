/* craco.config.js */
const path = require(`path`);
const CracoLessPlugin = require("craco-less");

module.exports = {
   webpack: {
      alias: {
         '@': path.resolve(__dirname, 'src/'),
         '@Components': path.resolve(__dirname, 'src/components'),
      },
   },
   plugins: [{ 
      plugin: CracoLessPlugin,
   }],
};