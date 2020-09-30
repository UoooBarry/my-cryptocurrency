import express, { Application, Request, Response, NextFunction } from "express";
const app: Application = express();
import apiRouter from './routes/api';
import Chain from './models/Chain';
import cors from 'cors';
let coins = new Chain();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(cors());


// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

app.use('/api/v1', apiRouter);

app.listen(5000, () =>
  console.log(
    "Cryptocurrencies system is running on port 5000 ..."
  )
);

export default app;
export { coins };