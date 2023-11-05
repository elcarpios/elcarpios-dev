import type { APIRoute } from "astro";
import { sendEmail } from "@services/mailjet";
import { getContactEmailData } from "@services/mailjet/templates/contact";

export const POST: APIRoute = async ({ request }) => {
  const data = { name: '', email: '', message: '' };
  const formData = await request.formData();
  const errors: string[] = [];

  Object.keys(data).forEach((field) => {
    const value = formData.get(field);

    if(!value) {
      errors.push(field);
    } else {
      data[field as 'name' | 'email' | 'message'] = value as string;
    }
  });

  if(errors.length > 0) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'All fields are important!',
        errors
      }), { status: 200 }
    );
  }

  const { success } = await sendEmail(getContactEmailData(data))

  return new Response(
    JSON.stringify({
      success,
      message: success ? 'Your message has been sent!' : 'It has been an error sending the message!',
      errors
    }),
    { status: 200 }
  );
};