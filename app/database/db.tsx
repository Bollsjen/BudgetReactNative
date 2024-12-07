import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';

// Open/create the database
function getDatabase() {
  if (Platform.OS === "web") {
    return null;
  }
  return SQLite.openDatabaseAsync("budget.db");
}

const db = getDatabase();

export const initDatabase = async () => {
  if(!db) return

  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        budget DECIMAL NOT NULL,
        icon TEXT,
        created DATE NOT NULL DEFAULT DATE('now')
    );`
  );

  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        amount DECIMAL NOT NULL,
        category_id INTEGER,
        description TEXT,
        date DATE NOT NULL DEFAULT DATE('now'),
        type TEXT NOT NULL,
        FOREIGN KEY (category_id) REFERENCES categories (id)
    )`
  )

  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS budget (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        amount DOUBLE NOT NULL DEFAULT 0.0,
        date DATE NOT NULL DEFAULT DATE('now')
      );`
  )
}