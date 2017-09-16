const m = require('mithril');
const Component = require('../core/Component');
const GameCard = require('./GameCard');

class Home extends Component {

    view() {
        return('.home', [
            m(GameCard)
        ]);
    }
}

module.exports = Home;
