/**
 * notification.module.ts
 *
 * Author: Hung Vu
 * 
 * Export the service to use in other modules.
 */

import { Module } from "@nestjs/common";
import { NotificationService } from "./notification.service";

@Module({
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}