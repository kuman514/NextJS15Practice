'use server';

import { destroySession } from '@/lib/auth';
import { deleteUserById, getUserById } from '@/lib/user';

export async function deleteUser(prevState, formData) {
  const id = formData.get('userId');

  const existingUser = getUserById(id);

  if (!existingUser) {
    return {
      errors: {
        account: 'This account does not exist.',
      },
    };
  }

  try {
    /**
     * Destroy session first since the user ID is FOREIGN KEY of session table.
     */
    await destroySession();
    deleteUserById(id);
    redirect('/');
  } catch (error) {
    console.error(error);
    return {
      errors: {
        misc: 'Please try again.',
      },
    };
  }
}
