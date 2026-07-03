"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact, site } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";
import { LinkedInIcon, GitHubIcon, MailIcon, ArrowIcon } from "./ui/Icons";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", site.web3formsKey);
    data.append("subject", `Portfolio enquiry from ${data.get("name") || "someone"}`);
    data.append("from_name", "Radhika Dev Portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        setFeedback("Message sent — I'll get back to you soon. ✦");
        form.reset();
      } else {
        setStatus("error");
        setFeedback(
          json.message?.includes("access_key")
            ? "Form not configured — add your Web3Forms key in lib/data.ts."
            : `Couldn't send — email me at ${site.email}.`
        );
      }
    } catch {
      setStatus("error");
      setFeedback(`Network error — email me at ${site.email}.`);
    }
  }

  const socials = [
    { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
    { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
      <div className="container-px">
        <div className="card overflow-hidden !rounded-xl3 shadow-lift">
          <div className="grid lg:grid-cols-12">
            <div className="border-edge p-8 sm:p-10 lg:col-span-5 lg:border-r">
              <SectionHeading eyebrow="contact" title={contact.heading} intro={contact.body} ghost={false} />
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mt-8 flex flex-col gap-4"
              >
                <motion.a
                  variants={fadeUp}
                  href={`mailto:${site.email}`}
                  className="link-underline w-fit break-all font-mono text-base text-mint"
                >
                  {site.email}
                </motion.a>
                <motion.div variants={fadeUp} className="mt-2 flex gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-edge bg-base text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-mint/50 hover:text-mint"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div className="p-8 sm:p-10 lg:col-span-7">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden className="hidden" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" autoComplete="name" required />
                  <Field label="Email" name="email" type="email" autoComplete="email" required />
                </div>
                <Field label="Company / project" name="company" type="text" />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-ink">
                    Message <span className="text-mint">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about what you're building…"
                    className="field resize-none"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary group disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-mint"
                      role="status"
                    >
                      {feedback}
                    </motion.p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-rose" role="alert">
                      {feedback}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-mint">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field"
      />
    </div>
  );
}
