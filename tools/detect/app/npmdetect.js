module.exports = {
        detect: function (root, fileStat, readFile) {

            if (fileStat.name === 'package.json') {
                console.log('> Detected NPM...');

                let rawdata = readFile(root, fileStat);
                let packageJson = JSON.parse(rawdata);
                let npmDetails = {};

                // Check for 'scripts' section
                if (packageJson.scripts) {
                    npmDetails.commands = this.detectScripts(packageJson);
                }

                return npmDetails;
            }
        },

        detectScripts: function (packageJson) {
            let scripts = packageJson.scripts;
            let commands = {};

            // Is there a start command?
            if (scripts['start']) {
                commands.start = 'start';
            }

            // Is there a run command?
            if (scripts['run']) {
                commands.start = 'run'
            }

            // Is there a stop command?
            if (scripts['stop']) {
                commands.stop = 'stop';
            }

            // Is there a build command?
            if (scripts['build']) {
                commands.build = 'build';
            }

            // Is there a test command?
            if (scripts['test']) {
                commands.test = 'test';
            }

            // Is there a lint command?
            if (scripts['lint']) {
                commands.lint = 'lint';
            }
            return commands;
        }
};