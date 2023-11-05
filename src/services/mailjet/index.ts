import Mailjet from 'node-mailjet';
import type { RequestData } from 'node-mailjet/declarations/request/Request';

const SUCCESS_STATUS = [200, 201];

const mailjet = new Mailjet({
  apiKey: import.meta.env.MAILJET_API_KEY,
  apiSecret: import.meta.env.MAILJET_SECRET_KEY
});

export const sendEmail = async (data: RequestData) => {
  let success = false;
  const request = await mailjet
    .post('send', { version: 'v3.1' })
    .request(data)
    .catch((error: Error) =>
      console.error('Error using Mailjet service:', error)
    );

  if(request) {
    success = SUCCESS_STATUS.includes(request.response.status);
  }

  return { success };
}