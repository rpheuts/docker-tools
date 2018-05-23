"use strict";

let walk = require('walk');
let npm = require('./app/npmdetect');
let yarn = require('./app/yarndetect');
let webpack = require('./app/webpackdetect');
let hugo = require('./app/hugodetect');
let jekyll = require('./app/jekylldetect');
let netlify = require('./app/netlifydetect');
let specGen = require('./app/specgenerator');
let specRun = require('./app/specrunner');
let fs = require('fs');

let walker = walk.walk(process.argv[2], {filters: ["node_modules"]});
let detected = {};

walker.on("file", function (root, fileStats, next) {
    let npmInfo = npm.detect(root, fileStats, function(root, fileStats) {
        return fs.readFileSync(root + '/' + fileStats.name);
    });

    if (npmInfo) {
        detected.npm = npmInfo;
    }

    let yarnInfo = yarn.detect(root, fileStats, function(root, fileStats) {
        return fs.readFileSync(root + '/' + fileStats.name);
    });

    if (yarnInfo) {
        detected.yarn = yarnInfo;
    }

    let webpackInfo = webpack.detect(root, fileStats, function(root, fileStats) {
        return fs.readFileSync(root + '/' + fileStats.name);
    });

    if (webpackInfo) {
        detected.webpack = webpackInfo;
    }

    let hugoInfo = hugo.detect(root, fileStats, function(root, fileStats) {
        return fs.readFileSync(root + '/' + fileStats.name);
    });

    if (hugoInfo) {
        detected.hugo = hugoInfo;
    }

    let jekyllInfo = jekyll.detect(root, fileStats, function(root, fileStats) {
        return fs.readFileSync(root + '/' + fileStats.name);
    });

    if (jekyllInfo) {
        detected.jekyll = jekyllInfo;
    }

    let netlifyInfo = netlify.detect(root, fileStats, function(root, fileStats) {
        return fs.readFileSync(root + '/' + fileStats.name);
    });

    if (netlifyInfo) {
        detected.netlify = netlifyInfo;
    }

    next();
});

walker.on("errors", function (root, nodeStatsArray, next) {
    next();
});

walker.on("end", function () {
    let spec = specGen.generate(detected);

    // Write spec file
    fs.writeFileSync(process.argv[2] + '/buildspec.yml', spec);

    specRun.run(spec, process.argv[2]);
});

