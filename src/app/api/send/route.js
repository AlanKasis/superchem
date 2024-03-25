import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend("re_EoEMXZTK_89TkaDQZAKmLTkGLKUBGxFNf");

export async function POST() {
  try {
    const res = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return Response.json(res);
  } catch (error) {
    return Response.json({ error });
  }
}