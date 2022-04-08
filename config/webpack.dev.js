
const commonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
module.exports = merge(commonConfig, devConfig);
