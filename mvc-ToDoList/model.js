'use strict';

class Model {
  constructor(data) {
    this.data = data;
  }

  // We need to edd CRUD
  //CREATE:READ:UPDATE:DELETE
  addItem(newItem) {
    if (!newItem.length) return;
    this.data.push(newItem);
  }

  removeItem(item) {
    let index = this.data.indexOf(item);

    if (index === -1) return;
    this.data.splice(index, 1);
  }

  updateItem(oldName, newName) {
    let index = this.data.indexOf(oldName);
    if (!~index) return;

    this.data.splice(index, 1, newName);
  }
}