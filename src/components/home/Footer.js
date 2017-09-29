const m = require('mithril');
const Component = require('../core/Component');
const SocialMediaLinkIcon = require('./SocialMediaLinkIcon');

class Footer extends Component {

    view() {
        return m('.footer', [
            m('.row', [
                m('.about col-2', [
                    m('h4', "About"),
                    m('p', "ROC Game Dev is monthly meetup of video game developers that anyone can attend. Come hang out, learn how to make games, and join the community."),
                    m('p', "The Rochester Mini-Game Suite is a ongoing collection of small games all about Rochester. We started making these over a weekend and now you can play them! If you have a game idea and want to get your game up here, come to a meetup and let's do it!")
                ]),
                m('.social col-2', [
                    m('h4', "Join Us"),
                    m('ul', [
                        m(SocialMediaLinkIcon, {
                            link: "https://discordapp.com/invite/5Aafv5t",
                            img: "assets/imgs/social/discord.png"
                        }),
                        m(SocialMediaLinkIcon, {
                            link: "https://www.facebook.com/groups/rocgamedev",
                            img: "assets/imgs/social/facebook.png"
                        }),
                        m(SocialMediaLinkIcon, {
                            link: "https://www.twitter.com/rocgamedev",
                            img: "assets/imgs/social/twitter.png"
                        })
                    ])
                ])
            ])
        ]);
    }
}

module.exports = Footer;
