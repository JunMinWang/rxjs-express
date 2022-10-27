import express, { Express, Response } from "express";
import { lastValueFrom, take } from "rxjs";
import { subject, collections } from "./data";

const main = async () => {
  const app: Express = express();
  const port = process.env.PORT || "3000";

  collections.subscribe(console.log);

  app.get("/push", (_, res: Response) => {
    subject.next({ name: "1", age: Math.floor(Math.random() * 99 + 1) });
    res.json({ status: "ok" });
  });

  app.get("/get", (_, res: Response) => {
    lastValueFrom(collections.pipe(take(1)))
      .then((user) => {
        res.json(user);
      })
      .catch((e) => {
        res.json({
          error: e,
        });
      });
  });

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
};

main().catch((e) => console.error(`Error occur!`, e));
