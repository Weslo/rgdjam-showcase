const m = require('mithril');
const Component = require('../core/Component');

class Header extends Component {

    view() {
        return m('.header', [
            m('h3', "Roc Game Dev Presents:"),
            m('h1', "Rochester"),
            m('h2', "Mini-Game Suite"),
            m('.social', [
            ]),
        ]);
    }
}

module.exports = Header;
