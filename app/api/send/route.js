import { EmailTemplate } from '../../..//components/email-template.jsx';
import { EmailTemplate2 } from '../../..//components/email-template.jsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const json = await req.json();
    const { name, email, message } = json;
    try {
        const data = await resend.batch.send([{
            from: `${name} <onboarding@resend.dev>`,
            to: ['rajamitstm@gmail.com'],
            reply_to: [`${email}`],
            subject: `New message from ${name}`,
            react: EmailTemplate({ messageData: message, name: name, email: email }),
        },
        {
            from: `Amit Kumar Raj <rajamitstm@gmail.com>`,
            to: [`${email}`],
            subject: `Reply from Amit Kumar Raj`,
            // html: `Dear ${name},<br><br>Thank you for reaching out to us. This is an automated response to let you know that we have received your email. We appreciate your inquiry and will get back to you as soon as possible.<br><br>Best Regards,<br>Amit Kumar Raj<br>`,
            react: EmailTemplate2({ name: name}),
        }]
        );

        return Response.json(data);
    } catch (error) {
        return Response.json({ error: error.message });
    }
}
