import { MailAdapter, SendMailData } from '../mail-adpater';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c3bab7f47c7d9d",
    pass: "8eb873fae3366b",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Marcelo Alencar <alencar.marcelo1997@gmail.com>",
    subject,
    html: body,
  });
  }
}