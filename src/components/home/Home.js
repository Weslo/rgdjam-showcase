const m = require('mithril');
const Component = require('../core/Component');
const Header = require('./Header');
const Footer = require('./Footer');
const GameCard = require('./GameCard');

class Home extends Component {

    view() {
        return('.home', [
            m(Header),
            m(GameCard),
            m(Footer)
        ]);
    }
}

module.exports = Home;
