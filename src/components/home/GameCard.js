const m = require('mithril');
const Component = require('../core/Component');

class GameCard extends Component {

    view() {
        return('.game-card', [
            m('a[href="games/test/index.html"]', "Test Game")
        ]);
    }
}

module.exports = GameCard;
