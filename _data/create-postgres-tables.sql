CREATE TABLE "products" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "description" varchar,
  "price" float,
  "quantity" integer,
  "category" varchar
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "gender" varchar,
  "email" varchar,
  "age" integer,
  "address" varchar
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "user_id" integer,
  "product_id" integer
);

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

CREATE TABLE "orders_products" (
  "order_id" integer,
  "product_id" integer,
  PRIMARY KEY ("order_id", "product_id")
);

ALTER TABLE "orders_products" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "orders_products" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");
