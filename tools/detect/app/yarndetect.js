module.exports = {
    detect: function (root, fileStat, readFile) {
        if (fileStat.name === 'yarn.lock') {
            console.log('> Detected Yarn');

            return true;
        }
    }
};