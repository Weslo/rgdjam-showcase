const m = require('mithril');
const Component = require('../core/Component');
const GameCard = require('./GameCard');

class Showcase extends Component {

    view() {
        return m('.showcase', [
            m('.row', [
                m(GameCard),
                m(GameCard),
                m(GameCard),
                m(GameCard),
                m(GameCard)
            ])
        ]);
    }
}

module.exports = Showcase;
