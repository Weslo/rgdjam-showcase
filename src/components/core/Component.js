const m = require('mithril');

class Component {
    constructor(vnode) {
    }

    oncreate(vnode) {
        console.log("Component created!");
    }

    oninit(vnode) {
        console.log("Component initialized!");
    }

    view(vnode) {
        return m('div', "Hello, world!");
    }
}

module.exports = Component;
