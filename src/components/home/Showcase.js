const m = require('mithril');
const Component = require('../core/Component');
const GameCard = require('./GameCard');

class Showcase extends Component {

    view() {
        return m('.showcase', [
            m(GameCard)
        ]);
    }
}

module.exports = Showcase;
