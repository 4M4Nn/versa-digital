"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { saveLead } from "@/lib/supabase";
import { openWhatsApp } from "@/lib/whatsapp";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_OPTIONS = [
  "AI SEO + AEO",
  "Social Media Marketing",
  "Performance Marketing",
  "Content + Video",
  "Full Digital Marketing Package",
  "Not sure yet",
];

const BUDGET_OPTIONS = ["Under ₹15,000", "₹15,000 – ₹25,000", "₹25,000 – ₹50,000", "₹50,000+"];

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      e.phone = "Valid 10-digit phone number required";
    }
    if (!form.email.trim() || !EMAIL_REGEX.test(form.email)) e.email = "Valid email required";
    return e;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      await saveLead({
        name: form.name,
        phone: form.phone,
        email: form.email,
        company: form.company || undefined,
        service: form.service || undefined,
        budget: form.budget || undefined,
        message: form.message || undefined,
        source: "versa-digital",
      });
      openWhatsApp({ name: form.name, phone: form.phone, email: form.email, service: form.service });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = dark
    ? "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-violet-light focus:outline-none"
    : "w-full rounded-lg border border-text-dark/15 bg-white px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted/60 focus:border-violet focus:outline-none";
  const labelClass = dark ? "mb-1.5 block text-xs font-semibold text-white/80" : "mb-1.5 block text-xs font-semibold text-text-dark";

  if (status === "success") {
    return (
      <div className={dark ? "rounded-2xl border border-violet-light/30 bg-violet/10 p-8 text-center" : "rounded-2xl border border-violet/20 bg-violet-pale p-8 text-center"}>
        <p className={dark ? "font-heading text-lg font-bold text-white" : "font-heading text-lg font-bold text-text-dark"}>
          Request received!
        </p>
        <p className={dark ? "mt-2 text-sm text-white/70" : "mt-2 text-sm text-text-muted"}>
          We&apos;ve opened WhatsApp for you — send the message and our team will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && <p className="text-sm text-red-500">Something went wrong. Please try again or WhatsApp us directly.</p>}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className={fieldClass}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="10-digit mobile number"
            className={fieldClass}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className={fieldClass}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass}>Company (optional)</label>
          <input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Your business name"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Service Interested</label>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={fieldClass}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Budget</label>
          <select
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className={fieldClass}
          >
            <option value="">Select a range</option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Message (optional)</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your business and goals..."
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-violet py-3.5 text-sm font-bold text-white transition-colors hover:bg-violet-light disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Get Free Consultation"}
        {status !== "loading" && <Send className="size-4" />}
      </button>
    </form>
  );
}
