const PORT = process.env.PORT || 3000;
import express, { Request, Response,  } from "express";
const app = express();
require('dotenv').config()


//middleware for parsing json
app.use(express.json())

app.use('/processContacts', require('./controllers/processContacts'))


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
