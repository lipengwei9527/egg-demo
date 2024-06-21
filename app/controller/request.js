const { Controller } = require('egg');

class GetRequestController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      data: ctx.query.id
    };
  }
  async getQuery() {
    const { ctx } = this;
    ctx.body = {
      data: ctx.query.id
    };
  }
  // 需要router.js中的路径配合
  async getParams() {
    const { ctx } = this;
    ctx.body = {
      data: ctx.params.id
    };
  }
  // egg只接收application/x-www-form-urlencoded类型的body
  async postReq() {
    const { ctx } = this;
    console.log(ctx.request.body)
    ctx.body = {
      data: ctx.request.body
    };
  }
  async getService() {
    const { ctx } = this;
    let serviceRes = await ctx.service.public.index();
    await ctx.render("index.html", { res: serviceRes });
    // ctx.body = {
    //   code: 200,
    //   res: ctx.response.body === ctx.body,
    //   data: serviceRes
    // };
  }
}

module.exports = GetRequestController;
