'use client';

import Link from 'next/link';
import { useActionState } from 'react';

import { signup } from '@/actions/auth';

export default function AuthForm({ mode }) {
  const [formState, formAction] = useActionState(signup, {});

  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {formState.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map((errorKey) => (
            <li key={errorKey}>{formState.errors[errorKey]}</li>
          ))}
        </ul>
      )}
      <p>
        {mode === 'login' && <button type="submit">Login</button>}
        {mode === 'signup' && <button type="submit">Create Account</button>}
      </p>
      <p>
        {mode === 'login' && (
          <Link href="/?mode=signup">Create an account.</Link>
        )}
        {mode === 'signup' && (
          <Link href="/?mode=login">Login with existing account.</Link>
        )}
      </p>
    </form>
  );
}
