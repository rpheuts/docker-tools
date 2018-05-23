module.exports = {
        generate: function (config) {
            console.log('Generating Buildspec.yml...');

            let yaml = require('yamljs');

            let spec = {version: 0.2};
            spec.phases = {};
            let buildCommand = (config.yarn) ? 'yarn' :'npm';

            if (config.npm) {
                spec.phases.install = {};
                spec.phases.install.commands = [buildCommand + ' install'];

                if (config.npm.commands && config.npm.commands.lint) {
                    spec.phases.pre_build = {};
                    spec.phases.pre_build.commands = [buildCommand + ' run ' + config.npm.commands.lint];
                }

                if (config.npm.commands && config.npm.commands.build) {
                    spec.phases.build = {};
                    spec.phases.build.commands = [buildCommand + ' run ' + config.npm.commands.build];
                }

                if (config.npm.commands && config.npm.commands.test) {
                    spec.phases.post_build = {};
                    spec.phases.post_build.commands = [buildCommand + ' run ' + config.npm.commands.test];
                }
            }

            if (config.webpack && !spec.phases.build) {
                spec.phases.build = {};
                spec.phases.build.commands = ['node ./node_modules/webpack/bin/webpack.js'];
            }

            if (config.jekyll && !spec.phases.build) {
                spec.phases.build = {};
                spec.phases.build.commands = ['jekyll b'];
            }

            if (config.hugo && !spec.phases.build) {
                spec.phases.build = {};
                spec.phases.build.commands = ['hugo'];
            }

            // Artifacts
            spec.artifacts = {};
            if (config.jekyll) {
                spec.artifacts.files = ['_site'];
            } else if (config.hugo) {
                spec.artifacts.files = ['public'];
            } else {
                spec.artifacts.files = ['*.*'];
            }

            // Caching between builds
            if (config.npm) {
                spec.cache = {};
                spec.cache.paths = ['node_modules'];
            }

            return yaml.stringify(spec, 4);
        }
};