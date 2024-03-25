import { Resend } from "resend";

export async function POST(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const emailData = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Superchem <info@superchem.com.ar>",
      to: ["Superchem <info@superchem.com.ar>"],
      subject: `Formulario de contacto - ${emailData.fullName} - ${emailData.company}`,
      html: `
      <h1>Name: ${emailData.fullName}</h1>
      </br>
      <h1>Company: ${emailData.company}</h1>
      </br>
      <h1>Mail: ${emailData.mail}</h1>
      </br>
      <h1>Phone: ${emailData.phone}</h1>
      </br>
      <h1>Message: ${emailData.message}</h1>
      `,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
