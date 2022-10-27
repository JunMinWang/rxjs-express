import express, { Express, Request, Response } from "express";

const main = async () => {
  const app: Express = express();
  const port = process.env.PORT || "3000";

  app.get("/test", (req: Request, res: Response) => {
    
  });

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
};

main().catch((e) => console.error(`Error occur!`, e));
