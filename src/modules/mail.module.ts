import { Module } from "@nestjs/common";
import { MailService } from "src/services/mail.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { ServeStaticModule } from '@nestjs/serve-static';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Module({
    providers: [MailService],
    imports: [
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'client'),
      }),
      MailerModule.forRoot({
        transport: {
          host: 'smtp.gmail.com',
          secure: true,
          auth: {
            user: 'joebizarre95@gmail.com',
            pass: 'uqcyycskelwkhmxq',
          },
        },
        defaults: {
          from: '"No Reply <Admin@omigo.app>"',
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    ],
    exports: [MailService],
  })
  export class MailModule {}