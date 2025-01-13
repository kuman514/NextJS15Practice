'use client';

export default function ChangePasswordForm({ email }) {
  return (
    <form id="auth-form">
      <div>Change Password</div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" disabled value={email} />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {/* {formState.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map((errorKey) => (
            <li key={errorKey}>{formState.errors[errorKey]}</li>
          ))}
        </ul>
      )} */}
      <p>
        <button type="submit">Change Password</button>
      </p>
    </form>
  );
}
