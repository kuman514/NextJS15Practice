import Link from 'next/link';

import { logout } from '@/actions/auth';

import '../globals.css';

export default function AuthRootLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back!</p>
        <div>
          <Link href="/change-password">Change Password</Link>
          <form action={logout}>
            <button>Logout</button>
          </form>
        </div>
      </header>
      {children}
    </>
  );
}
