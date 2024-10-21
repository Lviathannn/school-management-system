import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const student = sqliteTable("student", {
  id: integer('id',{mode: 'number'}).primaryKey({autoIncrement: true}),
  name: text('name',{mode: 'text'}),
  age: integer('age',{mode: 'number'}),
  dateOfBirth: text('dateOfBirth'),
})