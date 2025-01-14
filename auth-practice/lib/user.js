import db from './db';

export function createUser(email, password) {
  const result = db
    .prepare('INSERT INTO users (email, password) VALUES (?, ?)')
    .run(email, password);
  return result.lastInsertRowid;
}

export function getUserByEmail(email) {
  const result = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  return result;
}

export function getUserById(userId) {
  const result = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  return result;
}

export function changePasswordByEmail(email, password) {
  const result = db
    .prepare('UPDATE users SET password = ? WHERE email = ?')
    .run(password, email);
  return result;
}

export function deleteUserById(userId) {
  const result = db.prepare('DELETE FROM users WHERE id = ?').run(userId);
  return result;
}
