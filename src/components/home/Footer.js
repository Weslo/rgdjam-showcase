const m = require('mithril');
const Component = require('../core/Component');

class Footer extends Component {

    view() {
        return m('.footer', [
            m('.row', [
                m('.about col-2', [
                    m('h4', "About"),
                    m('p', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus dolor sed accumsan placerat. Integer orci sem, eleifend a lorem a, scelerisque viverra augue. Fusce sagittis, elit sagittis tristique lacinia, orci purus mattis erat, et accumsan dolor ipsum ac risus. Donec quis urna aliquet libero malesuada dapibus eu vel mi. Nulla congue euismod sodales. Nulla non commodo dolor. Mauris ut ipsum cursus, malesuada mi ac, lacinia nisi. Etiam interdum sapien quis libero imperdiet consequat. In congue non leo eu tristique.")
                ]),
                m('.social col-2', [
                    m('h4', "Join Us")
                ])
            ])
        ]);
    }
}

module.exports = Footer;
