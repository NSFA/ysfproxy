const program = require('commander');
const path = require('path');
const package = require('../package.json');



program
.version(package.version)
.description('七鱼代理服务器程序')
.option('-i, --init [value]', '初始化目录')
.option('-c, --config [value]', '加载配置文件')
.parse(process.argv);
