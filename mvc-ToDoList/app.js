'use strict';

(function() {
  let dataBase = ['MVC','JS','React'];

  let model = new Model(dataBase);
  let view = new View(dataBase);
  let controller = new Controller(model, view);
}())