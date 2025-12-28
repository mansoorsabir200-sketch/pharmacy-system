import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  decimal,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const UserTable = pgTable("user", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
  salt: text().notNull(),
});

export const userRelations = relations(UserTable, function ({ many }) {
  return {
    products: many(ProductTable),
    session: many(SessionTable),
  };
});
// --------------sesson------------
export const SessionTable = pgTable("sessions", {
  sessionId: text().notNull(),
  userId: uuid().references(() => UserTable.id, { onDelete: "cascade" }),
});

export const SessonRelations = relations(SessionTable, ({ one }) => {
  return {
    user: one(UserTable, {
      fields: [SessionTable.userId],
      references: [UserTable.id],
    }),
  };
});
// ---------------------------------------------------------------

export const ProductTable = pgTable("product", {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid()
    .notNull()
    .references(() => UserTable.id),
  name: text().notNull(),
  brand: text().notNull(),
  buyPrice: decimal({ mode: Number }).notNull(),
  salePrice: decimal({ mode: Number }).notNull(),
  inventoryStock: integer().notNull(),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
  expirydate: timestamp({ withTimezone: true }).notNull(),
});

// -----------------------relations for products
export const productsRelations = relations(ProductTable, ({ one, many }) => {
  return {
    user: one(UserTable, {
      fields: [ProductTable.userId],
      references: [UserTable.id],
    }),
    sales: many(SaleTable),
  };
});
// -----------------------relations for products

export const SaleTable = pgTable("sale", {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid()
    .notNull()
    .references(() => ProductTable.id, {
      onDelete: "no action",
    }),
  saleCount: integer().notNull(),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
});

// -----------------------relations for sales

export const saleRelations = relations(SaleTable, ({ one }) => {
  return {
    product: one(ProductTable, {
      fields: [SaleTable.productId],
      references: [ProductTable.id],
    }),
  };
});
