module.exports = {
    detect: function (root, fileStat, readFile) {
        if (fileStat.name === '_config.yml') {

            let yaml = require('yamljs');

            let config = yaml.parse(readFile(root, fileStat).toString());

            if (config.title) {
                console.log('> Detected Jekyll');
            }

            return true;
        }
    }
};