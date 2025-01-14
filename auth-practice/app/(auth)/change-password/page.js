import { redirect } from 'next/navigation';

import DeleteUserForm from '@/components/delete-form';
import ChangePasswordForm from '@/components/password-form';
import { verifyAuth } from '@/lib/auth';
import { getUserById } from '@/lib/user';

export default async function ChangePasswordPage() {
  const result = await verifyAuth();

  if (!result.user) {
    return redirect('/');
  }

  const userInfo = getUserById(result.user.id);

  if (!userInfo) {
    return redirect('/');
  }

  return (
    <>
      <ChangePasswordForm email={userInfo.email} />
      <DeleteUserForm userId={result.user.id} />
    </>
  );
}
