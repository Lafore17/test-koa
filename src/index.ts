import Koa from "koa";
import Router from "koa-router";
import { Client } from "pg";
import { config as setUpDotenvConfig } from "dotenv";
import { createConnection } from "typeorm";
import { Team } from "./entities";
import "reflect-metadata";

setUpDotenvConfig();

const app = new Koa();
const router = new Router();
const client = new Client();

client.connect();

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Dima7360684",
  database: "my-first-postgres-db",
  entities: [Team],
  synchronize: true,
})
  .then((connection) => {
    console.log(connection);
  })
  .catch((error) => console.log(error));

router.get("/getNames", (ctx) => {
  ctx.body = { a: 1 };
});

app.use(router.routes());
app.listen(3000);
