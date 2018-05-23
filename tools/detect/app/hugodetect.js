module.exports = {
    detect: function (root, fileStat, readFile) {
        if (fileStat.name === 'config.toml') {

            let toml = require('toml');
            let config = toml.parse(readFile(root, fileStat));

            if (config.baseurl) {
                console.log('> Detected Hugo');
            }

            return true;
        }
    }
};