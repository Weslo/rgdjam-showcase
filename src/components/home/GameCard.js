const m = require('mithril');
const Component = require('../core/Component');

class GameCard extends Component {

    oninit(vnode) {
        vnode.state.projectPath = "games/" + vnode.attrs.project + "/"
        vnode.state.projectData = {
            "title": "Showcase Game",
            "author": "Roc Game Dev",
            "description": "This project is missing an info.json file."
        };
        m.request({
            method: "GET",
            url: vnode.state.projectPath + "info.json"
        })
        .then(function(json) {
            vnode.state.projectData = json;
        })
        .catch(function(e) {
            console.log("Error loading project info for " + vnode.attrs.project + ": " + e.message);
        });
    }

    view(vnode) {
        return m('.game-card col-2',
            m('.container', { onclick: () => { this.play(vnode.state.projectPath) } }, [
                m('img', { src: vnode.state.projectPath + "banner.png" }),
                m('h2.title', vnode.state.projectData['title']),
                m('h4.author', vnode.state.projectData['author']),
                m('p.description', vnode.state.projectData['description'])
            ])
        );
    }

    play(addr) {
        window.location.href = addr;
    }
}

module.exports = GameCard;
