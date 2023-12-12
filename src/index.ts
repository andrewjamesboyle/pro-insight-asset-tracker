const PORT = process.env.PORT || 3000;
import express, { Request, Response,  } from "express";
const app = express();


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
