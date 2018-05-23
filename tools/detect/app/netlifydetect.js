module.exports = {
    detect: function (root, fileStat, readFile) {
        if (fileStat.name === 'netlify.toml') {
            console.log('> Detected Netlify');

            let toml = require('toml');
            let netlify = {};

            let config = toml.parse(readFile(root, fileStat));
            if (config.build) {
                netlify.build = config.build.command;
                netlify.dist = config.build.publish;
            }

            return netlify;
        }
    }
};