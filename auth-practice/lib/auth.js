import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite';
import { Lucia } from 'lucia';
import { cookies } from 'next/headers';

import db from './db';

const adapter = new BetterSqlite3Adapter(db, {
  // [attribute]: [table name]
  user: 'users',
  session: 'sessions',
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
});

export async function createAuthSession(userId) {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  /**
   * Check [Application] -> [Storage] -> [Cookies] -> the current page URL in the developer tools.
   * You can see the cookie that contains the session ID.
   * And the header on every request sent contains cookie that has authentication session ID.
   */
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}
