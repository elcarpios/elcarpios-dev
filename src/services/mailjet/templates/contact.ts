export const getContactEmailData = ({ name, email, message }: { name: FormDataEntryValue, email: FormDataEntryValue, message: FormDataEntryValue }) => ({
  Messages: [
    {
      CustomCampaign: 'ContactForm',
      From: {
        Email: "contact@elcarpios.dev",
        Name: "Contact Form"
      },
      ReplyTo: {
        Email: email,
        Name: name
      },
      To: [
        {
          Email: "hello@elcarpios.dev",
          Name: "Victor Carpio"
        }
      ],
      Subject: "Contact Form",
      HTMLPart: `
        <table bgcolor="#fafafa" style=" width: 100%; height: 100%; background-color: #fafafa; padding: 15px 20px; font-family: system-ui, sans-serif; line-height: 1.6;">
          <tr>
            <td bgcolor="#FFFFFF" style="border: 1px solid #eeeeee; background-color: #ffffff; border-radius:5px; display:block; max-width:600px; margin:0 auto; clear:both;"><div style="padding:20px; max-width:600px; margin:0 auto; display:block;">
              <table style="width: 100%;">
                <tr>
                  <td>
                    <h1 style="font-weight: 100; font-size: 26px; color: #333333; border-bottom:1px solid #dddddd; margin: 0; margin-bottom: 15px; padding-bottom: 5px;">
                      ${name} - ${email}
                    </h1>
                    <p style="font-weight: 200; font-size:16px; margin: 10px 0; color: #333333;">
                      ${message}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`
    }
  ]
});