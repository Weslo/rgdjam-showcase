const m = require('mithril');

class Component {
    constructor(vnode) {
    }

    view() {
        return m('div', "Hello, world!");
    }

    oncreate() {
        console.log("Component created!");
    }
}

module.exports = Component;
