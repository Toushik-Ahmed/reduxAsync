import express from 'express';
import connectMongoose from './db';
import { router } from './router';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(router);

async function bootstrap() {
  try {
    await connectMongoose();
    app.listen(5000, () => {
      console.log(`server is runnimg on 5000`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
