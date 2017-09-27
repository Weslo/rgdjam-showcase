const m = require('mithril');
const Component = require('../core/Component');

class GameCard extends Component {

    oninit(vnode) {
        this.projectPath = "games/" + vnode.attrs.project + "/"
    }

    view(vnode) {
        return m('.game-card col-2',
            m('.container', [
                m('img', { src: this.projectPath + "banner.png" }),
                m('.title', "Test Game"),
                m('.description', "This is an example of an awesome game made right here in Rochester!")
            ])
        );
    }
}

module.exports = GameCard;
