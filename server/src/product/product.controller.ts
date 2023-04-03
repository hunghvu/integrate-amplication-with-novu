/**
 * product.controller.ts
 *
 * Author: Hung Vu
 *
 * Controller for product endpoint, that invoke Novu notification workflow
 * when a new product is successfully added to the database.
 */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductService } from "./product.service";
import { ProductControllerBase } from "./base/product.controller.base";
import { NotificationService } from "../global/notification.service";
import { HttpCode, Post } from "@nestjs/common";

@swagger.ApiTags("products")
@common.Controller("products")
export class ProductController extends ProductControllerBase {
  constructor(
    protected readonly service: ProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    // Gain access to NotificationService
    protected notificationService: NotificationService
  ) {
    super(service, rolesBuilder);
  }

  // When a new product is successfully added to the database
  // via REST API POST request, HTTP status code 200 is returned
  // and fire a Discord notification workflow in Novu.
  @Post()
  @HttpCode(200)
  async notifyDiscordCommunity() {
    this.notificationService.notifyDiscordCommunity();
  }
}
