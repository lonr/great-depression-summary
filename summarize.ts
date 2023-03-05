import * as dotenv from 'dotenv';

dotenv.config();
if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY in .env is required');
}

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: 'gpt-3.5-turbo',
  prompt: 'Hello world',
});
console.log(completion.data.choices[0].text);
