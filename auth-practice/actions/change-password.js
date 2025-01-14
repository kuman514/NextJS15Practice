'use server';

import { hashUserPassword } from '@/lib/hash';
import { changePasswordByEmail, getUserByEmail } from '@/lib/user';
import { redirect } from 'next/navigation';

export async function changePassword(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  const errors = {};

  if (!email.includes('@')) {
    errors.email = 'Please enter a valid email address.';
  }

  if (password.trim().length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: 'This account does not exist.',
      },
    };
  }

  const hashedPassword = hashUserPassword(password);

  try {
    await changePasswordByEmail(email, hashedPassword);
    redirect('/training');
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return {
        errors: {
          email: 'The email already exists. Try using another one.',
        },
      };
    }
    throw error;
  }
}
