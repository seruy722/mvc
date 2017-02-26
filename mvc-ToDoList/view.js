'use strict';

class View {
    constructor(data) {
        this.init();
        this.render(data);
    }

    init() {
        this.elements = {
            list: document.querySelector('.list-item'),
            add: document.querySelector('.btn'),
            input: document.querySelector('.input')
        }
    }

    render(data) {
        this.elements.list.innerHTML += data.reduce((row, item) => {
            console.log(row);
            return row += `<li>${item}<li>`
        },'')
    }
}
