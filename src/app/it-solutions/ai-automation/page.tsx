import type { Metadata } from "next";
import Link from "next/link";
import { Check, MessageSquareText, Workflow, Clock, Cpu } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Automation & Agentic AI Projects",
  description:
    "Custom AI agents, agentic AI projects, chatbots, and workflow automation that remove repetitive work from sales, support, and operations. Built and monitored by Versa Digital & IT Solutions, Kochi.",
};

const service = techOfferings.find((o) => o.id === "ai-automation")!;

const WHY_ITEMS = [
  { icon: MessageSquareText, title: "AI Agents That Actually Help", description: "Chat and voice agents that handle real sales and support conversations, not scripted bots that dead-end every question." },
  { icon: Workflow, title: "Automation Across Your Stack", description: "Your CRM, WhatsApp, email, and internal tools connected so information moves without anyone copy-pasting it." },
  { icon: Clock, title: "Hours Back Every Week", description: "Repetitive follow-ups, data entry, and status updates handled automatically, freeing your team for real work." },
  { icon: Cpu, title: "Human-Reviewed by Design", description: "AI accelerates the work — every automation is built with human oversight and clear escalation paths, not blind autopilot." },
];

export default function AiAutomationPage() {
  return (
    <div>
      <ServiceSchema
        name="AI Automation & Agentic AI Projects"
        description={service.description}
        serviceType="AI Automation & Agentic AI Development"
        url="/it-solutions/ai-automation"
      />

      <PageHero
        label="/ AI AUTOMATION & AGENTIC AI"
        heading="Let AI handle the repetitive work."
        subtext="Custom AI agents, agentic AI projects, and workflow automation that remove manual, repetitive tasks from sales, support, and operations — without removing your team's judgment."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              What AI automation actually looks like
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              Most businesses lose hours a week to the same repetitive tasks: answering the same
              five customer questions, re-typing a lead from WhatsApp into a spreadsheet, chasing
              a follow-up that should have been automatic. AI automation means building an agent
              or a workflow that does that specific task reliably, connected directly to the
              tools you already use.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              This isn&apos;t a generic chatbot widget bolted onto your website. We map your actual
              workflow first, then design an agent or automation around it — with clear
              escalation to a human whenever the AI shouldn&apos;t be making the call alone. The same
              principle we apply to AI-assisted content production for our marketing clients:
              AI accelerates the work, people stay in control of quality and judgment.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              For businesses ready to go further, we also build agentic AI projects — AI agents
              that don&apos;t just answer a question but carry out a multi-step task on their own:
              checking stock, updating a CRM record, drafting and sending a follow-up, or
              escalating to a human only when a decision genuinely needs one. It&apos;s the
              difference between a chatbot that talks and an agent that actually gets work done.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Why it matters
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                  <item.icon className="size-5 text-violet" />
                  <h3 className="mt-3 font-heading text-base font-bold text-text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section data-navbar-theme="dark" className="bg-bg-dark px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-white md:text-4xl">
              Our automation process
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.process.map((step, i) => (
              <StaggerItem key={step}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="font-mono text-xs text-violet-light">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-white">{step}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-violet-light/30 bg-violet/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-light">What you get</p>
              <ul className="mt-4 space-y-2.5">
                {service.results.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-violet-light" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-16 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-violet/15 bg-white p-8 text-center shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-violet">Pairs well with</p>
            <p className="mt-2 text-text-muted">
              AI & Automation connects naturally with{" "}
              <Link href="/it-solutions/internal-platforms" className="font-semibold text-violet hover:text-violet-light">
                Internal Platforms
              </Link>{" "}
              and{" "}
              <Link href="/it-solutions/client-solutions" className="font-semibold text-violet hover:text-violet-light">
                ERP, CRM & HRMS
              </Link>{" "}
              — the same integrations that power an AI agent usually power your other systems too.
            </p>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            What&apos;s eating your team&apos;s time?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Tell us the repetitive task you&apos;d automate first — we&apos;ll tell you honestly whether
            AI can handle it well.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss AI & automation for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Discuss Automation
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
