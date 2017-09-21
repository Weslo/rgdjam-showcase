const m = require('mithril');
const Component = require('../core/Component');

class GameCard extends Component {

    view() {
        return m('.game-card col-2',
            m('.container', [
                m('img[src="games/test/banner.png"]'),
                m('.title', "Test Game"),
                m('.description', "This is an example of an awesome game made right here in Rochester!")
            ])
        );
    }
}

module.exports = GameCard;
