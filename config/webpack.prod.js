
const commonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
const prodConfig = {mode:"production"}
module.exports = merge(commonConfig, prodConfig);


