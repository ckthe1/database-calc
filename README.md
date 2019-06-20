## To start
npm run server
npm run client

## database
need to create a database called 'sezzle_calc'

CREATE TABLE "calculator" (
  "id" SERIAL PRIMARY KEY,
  "input" varchar,
  "result" varchar,
  "equalSign" varchar
);
