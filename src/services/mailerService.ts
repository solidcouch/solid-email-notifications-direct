import * as nodemailer from 'nodemailer'
import { SendMailOptions } from 'nodemailer'
import * as path from 'path'
import { appLogo, smtpTransportOptions } from '../config/index.js'

export const sendMail = async (options: SendMailOptions) => {
  const smtpTransport = nodemailer.createTransport(smtpTransportOptions)
  await smtpTransport.sendMail({
    ...options,
    attachments: [
      {
        filename: path.basename(appLogo),
        path: appLogo,
        cid: 'applogo@solidcouch.org',
      },
      ...(options.attachments ?? []),
    ],
  })
}
