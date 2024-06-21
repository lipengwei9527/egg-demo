/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/get', controller.request.index);
  router.get('/get/getQuery', controller.request.getQuery);
  router.get('/get/getParams/:id', controller.request.getParams);
  router.post('/postReq', controller.request.postReq);
  // all:支持所有类型的请求
  // router.all('/postReq', controller.request.postReq);
  router.get('/service', controller.request.getService);
};
