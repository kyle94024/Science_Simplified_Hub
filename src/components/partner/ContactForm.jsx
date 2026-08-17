"use client";

import { useState } from "react";
import { Loader2, Lock } from "lucide-react";

import Button from "@/components/ui/Button";
import { site } from "@/data/site";

const initialValues = {
  name: "",
  organization: "",
  email: "",
  message: "",
  website: "", // honeypot — real people leave this empty
};

const REQUIRED_FIELDS = ["name", "email", "message"];

// Thrown for messages our own API produced; anything else (offline, DNS,
// server unreachable) surfaces as a browser TypeError we never show raw.
class ServerMessageError extends Error {}

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted transition-colors focus:border-navy-400 aria-[invalid]:border-red-400";

function FieldLabel({ htmlFor, children, required = false }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block font-display text-sm font-semibold text-navy-800"
    >
      {children}
      {required ? (
        <span aria-hidden="true" className="text-violet-600">
          {" "}
          *
        </span>
      ) : (
        <span className="font-normal text-muted"> (optional)</span>
      )}
    </label>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [invalidFields, setInvalidFields] = useState([]);

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setInvalidFields((current) => current.filter((name) => name !== field));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (status.state === "sending") return;

    const missing = REQUIRED_FIELDS.filter((field) => !values[field].trim());
    if (missing.length) {
      setInvalidFields(missing);
      setStatus({
        state: "error",
        message: "Please add your name, email, and a message.",
      });
      document.getElementById(missing[0])?.focus();
      return;
    }

    setInvalidFields([]);
    setStatus({ state: "sending", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new ServerMessageError(
          data.error || `We couldn't send that. Please email ${site.email} directly.`
        );
      }

      setValues(initialValues);
      setStatus({
        state: "sent",
        message: "Thank you — your message is on its way. We'll be in touch soon.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof ServerMessageError
            ? error.message
            : `We couldn't send that. Please email ${site.email} directly.`,
      });
    }
  }

  const sending = status.state === "sending";
  const fieldProps = (field) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: update(field),
    "aria-invalid": invalidFields.includes(field) || undefined,
    "aria-describedby": invalidFields.includes(field) ? "form-status" : undefined,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="name" required>
            Your name
          </FieldLabel>
          <input
            {...fieldProps("name")}
            autoComplete="name"
            required
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </div>
        <div>
          <FieldLabel htmlFor="organization">Organization</FieldLabel>
          <input
            {...fieldProps("organization")}
            autoComplete="organization"
            placeholder="Rare Disease Foundation"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="email" required>
          Your email
        </FieldLabel>
        <input
          {...fieldProps("email")}
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.org"
          className={inputClasses}
        />
      </div>

      <div>
        <FieldLabel htmlFor="message" required>
          How can we help?
        </FieldLabel>
        <textarea
          {...fieldProps("message")}
          rows={4}
          required
          placeholder="Tell us about your organization or research."
          className={`${inputClasses} resize-y`}
        />
      </div>

      {/* honeypot */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={update("website")}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={sending}
        arrow={!sending}
        className="w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p
        id="form-status"
        role="status"
        aria-live="polite"
        className={`min-h-[1.25rem] text-sm ${
          status.state === "error" ? "text-red-600" : "text-mint-700"
        }`}
      >
        {status.message}
      </p>

      <p className="flex items-center gap-2 text-xs text-muted">
        <Lock className="h-3.5 w-3.5" aria-hidden="true" />
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}
