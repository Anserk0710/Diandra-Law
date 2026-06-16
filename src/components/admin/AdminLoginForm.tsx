"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import {
  authenticateAdmin,
  type LoginActionState,
} from "@/features/auth/auth.actions";

const initialState: LoginActionState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Memeriksa..." : "Masuk"}
    </button>
  );
}

export function AdminLoginForm() {
  const [state, formAction] = useActionState(
    authenticateAdmin,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="space-y-5"
      noValidate
    >
      {state.error ? (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {state.error}
        </div>
      ) : null}

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-slate-700"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="username"
          autoCapitalize="none"
          spellCheck={false}
          className="input-text"
          placeholder="admin@firmahukum.com"
          aria-invalid={
            state.fieldErrors?.email ? true : undefined
          }
          aria-describedby={
            state.fieldErrors?.email
              ? "email-error"
              : undefined
          }
        />

        {state.fieldErrors?.email ? (
          <p
            id="email-error"
            className="text-sm text-red-600"
          >
            {state.fieldErrors.email[0]}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-slate-700"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          required
          maxLength={128}
          autoComplete="current-password"
          className="input-text"
          placeholder="Masukkan password"
          aria-invalid={
            state.fieldErrors?.password ? true : undefined
          }
          aria-describedby={
            state.fieldErrors?.password
              ? "password-error"
              : undefined
          }
        />

        {state.fieldErrors?.password ? (
          <p
            id="password-error"
            className="text-sm text-red-600"
          >
            {state.fieldErrors.password[0]}
          </p>
        ) : null}
      </div>

      <SubmitButton />
    </form>
  );
}