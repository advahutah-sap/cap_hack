/**
* Implementation for CatalogService defined in ./cat-service.cds
*/
const cds = require('@sap/cds')
module.exports = function (){
    const error = new Error("[cap_hack-srv] MyError1");
    console.error(error);
    console.error(error);
    console.error(error);
    console.error(error);
  // Register your event handlers in here, e.g....
  this.after ('READ','Books', each => {
    if (each.stock > 111) {
      each.title += ` -- 11% discount!`
    }
  })
}