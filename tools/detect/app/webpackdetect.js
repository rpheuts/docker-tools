module.exports = {
    detect: function (root, fileStat, readFile) {
        if (fileStat.name === 'webpack.config.js') {
            console.log('> Detected NPM...');

            return true;
        }
    }
};