const Service = require('egg').Service;
// 通常在service中去连接数据库
class PubliceService extends Service {
    async index() {
        return {
            id: 1,
            name: "lisi",
            message: "service"
        }
    }
}
module.exports = PubliceService