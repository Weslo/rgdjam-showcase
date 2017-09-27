const m = require('mithril');
const $ = require('jquery');
const Component = require('../core/Component');
const GameCard = require('./GameCard');

class Showcase extends Component {

    oninit(vnode) {
        vnode.state.projects = [];
        m.request({
            method: 'GET',
            url: 'games/manifest.json'
        })
        .then(function(json) {
            console.log("Games manifest loaded!");
            console.dir(json);
            vnode.state.projects = json['projects'];
        })
        .catch(function(e) {
            console.log("Error loading games manifest: " + e.message);
        });
    }

    view(vnode) {
        return m('.showcase', [
            m('.row', vnode.state.projects.map(function(projectName) {
                console.log(projectName);
                return m(GameCard, { project: projectName });
            }))
        ]);
    }
}

module.exports = Showcase;
