let ghpages = require('gh-pages')
let moment = require('moment')

ghpages.publish('out', {
    branch: 'main',
    dotfiles: true,
    message: `🚀 Deploy [${moment().format('DD/MM/YY')}]`,
})