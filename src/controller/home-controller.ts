import HomeService from "@src/service/home-service"

export default class HomeController {
  static async hello(ctx) {
    ctx.body = await HomeService.hello();
  }
}
