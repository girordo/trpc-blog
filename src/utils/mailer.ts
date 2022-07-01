import nodemailer from "nodemailer";

export async function sendLoginEmail({
  email,
  url,
  token,
}: {
  email: string;
  url: string;
  token: string;
}) {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <fredfoo@example.com>',
    to: email,
    subject: "Login to your account",
    html: `<p>Hello, <a href="${url}/login${token}=">login here</a>?</p>`,
  });

  console.log("Message sent: %s", info.messageId);
}
