/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1718970575427_1327';

  // add your middleware config here
  config.middleware = [];

  // 关闭scrf防护
  config.security = {
    csrf: {
      enable: false
    },
  };
  config.view = {
    // 当遇到.html文件时，使用ejs模板引擎来渲染
    mapping: {
      '.html': 'ejs',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
