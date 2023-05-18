import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) { }

  public async sendUserWarning(email: string, tiket_title: string) {
    console.log("entra al sendmail")
    await this.mailerService.sendMail({
        to: 'joebizarre95@gmail.com', // your example mail,
        from: '"The admin team"',
        subject: `Warning this task is ending soon ${tiket_title}` ,
        html:`<p>The tiket with name ${tiket_title} it will expire soon </p>`,
        context: {
            name: email,
        }
    })
  }

}
