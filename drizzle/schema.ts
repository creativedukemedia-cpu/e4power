import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const cmsUsers = mysqlTable("cms_users", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  name: varchar("name", { length: 160 }).notNull(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  role: mysqlEnum("role", ["admin", "editor"]).default("admin").notNull(),
  isActive: int("isActive").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn"),
});

export const cmsContentItems = mysqlTable("cms_content_items", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 190 }).notNull().unique(),
  title: varchar("title", { length: 220 }).notNull(),
  contentType: mysqlEnum("contentType", ["white-paper", "newsletter", "funding-opportunity", "thought-leadership"]).notNull(),
  status: mysqlEnum("status", ["draft", "published"]).default("draft").notNull(),
  excerpt: text("excerpt"),
  body: text("body"),
  coverImageUrl: text("coverImageUrl"),
  createdByUserId: int("createdByUserId"),
  updatedByUserId: int("updatedByUserId"),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const contactInquiries = mysqlTable("contact_inquiries", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  inquiryTopic: varchar("inquiryTopic", { length: 160 }).notNull(),
  organizationType: varchar("organizationType", { length: 160 }).notNull(),
  message: text("message").notNull(),
  routingLane: varchar("routingLane", { length: 160 }).notNull(),
  routingReason: varchar("routingReason", { length: 255 }).notNull(),
  status: mysqlEnum("status", ["new", "reviewed"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type CmsUser = typeof cmsUsers.$inferSelect;
export type InsertCmsUser = typeof cmsUsers.$inferInsert;
export type CmsContentItem = typeof cmsContentItems.$inferSelect;
export type InsertCmsContentItem = typeof cmsContentItems.$inferInsert;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = typeof contactInquiries.$inferInsert;
