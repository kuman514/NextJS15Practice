'use client';

import { useActionState } from 'react';

import { changePassword } from '@/actions/change-password';

export default function ChangePasswordForm({ email }) {
  const [formState, formAction] = useActionState(changePassword, {});

  return (
    <>
      <h1>Change Password</h1>
      <form id="auth-form" action={formAction}>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" readOnly value={email} />
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
          <button type="submit">Change Password</button>
        </p>
      </form>
    </>
  );
}
