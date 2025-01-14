'use client';

import { useActionState } from 'react';

import { deleteUser } from '@/actions/delete-user';

export default function DeleteUserForm({ userId }) {
  const [formState, formAction] = useActionState(deleteUser, {});

  return (
    <form id="auth-form" action={formAction}>
      <p>
        <input type="hidden" id="userId" name="userId" value={userId} />
        <button type="submit">Delete Account</button>
      </p>
      {formState.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map((errorKey) => (
            <li key={errorKey}>{formState.errors[errorKey]}</li>
          ))}
        </ul>
      )}
    </form>
  );
}
