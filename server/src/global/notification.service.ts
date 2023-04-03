/**
 * notification.service.ts
 *
 * Author: Hung Vu
 * 
 * Discord notification service powered by Novu.
 */

import { Injectable } from "@nestjs/common";
import { ChatProviderIdEnum, Novu } from "@novu/node";

@Injectable()
export class NotificationService {
  novu = new Novu(process.env.NOVU_API_KEY!);
  notifyDiscordCommunity = async () => {
    try {
      // You may notice there is no credential configuration for Discord webhook in Novu dashboard, so this step is to assign a URL to your service user.
      await this.novu.subscribers.setCredentials(process.env.NOVU_SERVICE_USER_ID!, ChatProviderIdEnum.Discord, {
        // This is a Discord webhook URL retrieved in a very first step.
        webhookUrl: process.env.DISCORD_WEBHOOK!,
      });

      // Send Discord notification via a service user.
      await this.novu.trigger("discord", {
        to: {
          // This is a user ID created in a previous step.
          subscriberId: process.env.NOVU_SERVICE_USER_ID!,
        },
        payload: {},
      });
    } catch (err) {
      console.error(err);
    }
  };
}