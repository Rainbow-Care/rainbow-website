const RECIPIENT_MAIL = 'rainbow.cfare@gmail.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { contact, message } = body;

    if (!contact || contact.trim() === '') {
      return Response.json(
        { error: 'Contact information (email or phone) is required.' },
        { status: 400 }
      );
    }

    // TODO: Integrate with an email service.
    // Recommended: Resend (https://resend.com) or Nodemailer.
    // Example with Resend:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@rainbowdaycarecentre.org',
    //   to: RECIPIENT_MAIL,
    //   subject: `Enquiry from ${contact}`,
    //   text: message,
    // });

    console.info(
      `[Contact Form] Recipient: ${RECIPIENT_MAIL} | From: ${contact}`
    );

    return Response.json({ success: true }, { status: 200 });
  } catch {
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
