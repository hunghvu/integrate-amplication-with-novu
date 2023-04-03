/**
 * product.module.ts
 *
 * Author: Hung Vu
 * 
 * A central location to configure modules to be used in product endpoint.
 */
import { Module } from "@nestjs/common";
import { ProductModuleBase } from "./base/product.module.base";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { ProductResolver } from "./product.resolver";
import { NotificationModule } from "../global/notification.module";

@Module({
  // Import the Notification module, so it can be used
  // in the controller.
  imports: [ProductModuleBase, NotificationModule],
  controllers: [ProductController],
  providers: [ProductService, ProductResolver],
  exports: [ProductService],
})
export class ProductModule {}