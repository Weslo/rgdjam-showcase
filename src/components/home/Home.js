const m = require('mithril');
const Component = require('../core/Component');
const Header = require('./Header');
const Showcase = require('./Showcase');
const Footer = require('./Footer');

class Home extends Component {

    view() {
        return('.home', [
            m(Header),
            m(Showcase),
            m(Footer)
        ]);
    }
}

module.exports = Home;
