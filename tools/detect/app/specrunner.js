module.exports = {
        run: function (yamlSpec, root) {
            console.log('Executing Buildspec.yml...');

            let yaml = require('yamljs');
            let exec = require('child_process').execSync;

            let spec = yaml.parse(yamlSpec);

            if (spec.phases) {
                if (spec.phases.install) {
                    console.log('Executing install phase...');
                    spec.phases.install.commands.forEach(function (command) {
                        exec(command, {cwd: root, stdio: [0, 1, 2]}, function (error, stdout, stderr) {
                            console.log('stdout: ' + stdout);
                            console.log('stderr: ' + stderr);
                            if (error !== null) {
                                console.log('exec error: ' + error);
                            }
                        });
                    });
                }
                if (spec.phases.pre_build) {
                    console.log('Executing pre_build phase...');
                    spec.phases.pre_build.commands.forEach(function (command) {
                        exec(command, {cwd: root, stdio: [0, 1, 2]}, function (error, stdout, stderr) {
                            console.log('stdout: ' + stdout);
                            console.log('stderr: ' + stderr);
                            if (error !== null) {
                                console.log('exec error: ' + error);
                            }
                        });
                    });
                }
                if (spec.phases.build) {
                    console.log('Executing build phase...');
                    spec.phases.build.commands.forEach(function (command) {
                        exec(command, {cwd: root, stdio: [0, 1, 2]}, function (error, stdout, stderr) {
                            console.log('stdout: ' + stdout);
                            console.log('stderr: ' + stderr);
                            if (error !== null) {
                                console.log('exec error: ' + error);
                            }
                        });
                    });
                }
                if (spec.phases.post_build) {
                    console.log('Executing post_build phase...');
                    spec.phases.post_build.commands.forEach(function (command) {
                        exec(command, {cwd: root, stdio: [0, 1, 2]}, function (error, stdout, stderr) {
                            console.log('stdout: ' + stdout);
                            console.log('stderr: ' + stderr);
                            if (error !== null) {
                                console.log('exec error: ' + error);
                            }
                        });
                    });
                }
            }
        }
};