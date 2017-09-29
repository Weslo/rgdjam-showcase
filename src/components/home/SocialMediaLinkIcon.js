const m = require('mithril');
const Component = require('../core/Component');

class SocialMediaLinkIcon extends Component {

    view(vnode) {
        return m('li', { onclick: () => { this.goto(vnode.attrs.link) } }, [
            m('img', { src: vnode.attrs.img })
        ]);
    }

    goto(addr) {
        window.location.href = addr;
    }
}

module.exports = SocialMediaLinkIcon;
