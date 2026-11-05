import type { ItCatalogItem, ItCategory, ItService } from "@/types";
import { techOfferings } from "@/lib/data";

export const itCategories: { name: ItCategory; description: string }[] = [
  {
    name: "Software Engineering",
    description: "Web, mobile, SaaS and bespoke software, designed and engineered end to end.",
  },
  {
    name: "AI & Data",
    description: "Agentic AI, LLM products, chatbots and the data foundations that make them useful.",
  },
  {
    name: "Cloud & Infrastructure",
    description: "Cloud migration, DevOps pipelines and managed IT that keeps everything running.",
  },
  {
    name: "Business Systems",
    description: "ERP, CRM, HRMS, internal platforms and the integrations that connect them.",
  },
  {
    name: "Security, Quality & Support",
    description: "Security testing, QA, modernisation, maintenance and dedicated engineering teams.",
  },
];

export const itServices: ItService[] = [
  {
    slug: "generative-ai-llm-development",
    category: "AI & Data",
    icon: "brain-circuit",
    name: "Generative AI & LLM Development",
    shortDescription: "Production LLM applications — RAG knowledge assistants, document AI, copilots and fine-tuned models.",
    metaTitle: "Generative AI & LLM Development Company — RAG, Copilots, Document AI",
    metaDescription:
      "Generative AI and LLM application development for businesses in the UAE, UK, USA and India — RAG knowledge assistants, document intelligence, AI copilots and evaluation-driven LLM engineering.",
    keywords: [
      "generative AI development company",
      "LLM application development",
      "RAG development services",
      "custom ChatGPT for business",
      "AI copilot development",
      "generative AI company Dubai",
      "LLM development UK",
    ],
    heroHeading: "Generative AI that answers from your data — not from guesswork.",
    heroSubtext:
      "We engineer LLM applications that are grounded in your documents, connected to your systems and measured against real evaluation sets before they reach a single customer.",
    overview: [
      "Most generative AI pilots stall for the same reason: a chat interface is bolted onto a model with no access to the company's real knowledge, no guardrails, and no way to measure whether the answers are correct. We start from the opposite end — the questions your team and customers actually ask, the sources that hold the right answers, and the accuracy bar the system has to clear.",
      "Our builds combine retrieval-augmented generation (RAG) over your policies, contracts, manuals and product data with structured tool calls into your CRM, ERP or ticketing system. Every system ships with an evaluation set, citation of sources in each answer, role-based access to sensitive content, and logging so you can audit what the AI said and why.",
    ],
    capabilities: [
      { title: "RAG knowledge assistants", description: "Internal and customer-facing assistants that answer from your documents with cited sources and access controls." },
      { title: "Document intelligence", description: "Extraction and classification of invoices, contracts, CVs, KYC files and forms into structured data." },
      { title: "AI copilots inside your software", description: "Drafting, summarising and next-best-action features embedded in your existing product or internal tool." },
      { title: "Model selection & fine-tuning", description: "Choosing between frontier APIs and open-weight models on cost, latency, privacy and accuracy — and fine-tuning where it pays off." },
      { title: "Evaluation & guardrails", description: "Golden-set evaluations, hallucination checks, prompt-injection defences and PII redaction before launch." },
      { title: "Arabic & multilingual AI", description: "Assistants that handle English, Arabic and Indian languages for Gulf and South Asian audiences." },
    ],
    technologies: ["Claude", "OpenAI", "Gemini", "Llama", "LangChain", "LlamaIndex", "pgvector", "Pinecone", "Python", "FastAPI", "Next.js"],
    process: ["Use-case and data audit", "Evaluation set and architecture", "Build, ground and integrate", "Red-team, launch and monitor"],
    outcomes: [
      "Answers grounded in your own sources, with citations",
      "Measured accuracy against an agreed evaluation set",
      "Sensitive data kept behind role-based access",
      "A system your team can audit, extend and own",
    ],
    faqs: [
      { question: "What is RAG and why does it matter for business AI?", answer: "Retrieval-augmented generation (RAG) means the AI looks up relevant passages from your own documents before it answers, and cites them. It keeps answers current and specific to your business without retraining a model, and it makes every answer checkable." },
      { question: "Will our data be used to train public AI models?", answer: "No. We use enterprise API terms that exclude customer data from model training, or deploy open-weight models inside your own cloud account when data residency rules require it." },
      { question: "How long does a generative AI project take?", answer: "A focused knowledge assistant or document-extraction workflow typically reaches a production pilot in 4–8 weeks. Broader copilots embedded across a product take longer and are delivered in phases." },
      { question: "Can you build AI that works in Arabic?", answer: "Yes. Current frontier models handle Modern Standard Arabic well, and we test retrieval, prompts and evaluation sets in Arabic as well as English for UAE, Saudi and Qatar deployments." },
    ],
  },
  {
    slug: "ai-chatbots-whatsapp-automation",
    category: "AI & Data",
    icon: "messages-square",
    name: "AI Chatbots & WhatsApp Automation",
    shortDescription: "AI agents on WhatsApp Business API, website chat and Instagram that qualify leads, book and support 24/7.",
    metaTitle: "AI Chatbot & WhatsApp Business API Automation Agency",
    metaDescription:
      "AI chatbots and WhatsApp Business API automation for businesses in the UAE, Saudi Arabia, UK and India — lead qualification, bookings, order updates and support agents connected to your CRM.",
    keywords: [
      "WhatsApp Business API automation",
      "AI chatbot development company",
      "WhatsApp chatbot Dubai",
      "AI customer support agent",
      "WhatsApp automation UAE",
      "conversational AI agency",
    ],
    heroHeading: "Every enquiry answered in seconds, on the channel your customers already use.",
    heroSubtext:
      "AI agents on WhatsApp, web chat and Instagram that qualify leads, book appointments, share order status and hand over to your team with full context.",
    overview: [
      "In the Gulf and India, WhatsApp is where customers expect to talk to a business — and the business that replies first usually wins the deal. We build conversational agents on the official WhatsApp Business Platform that understand free-text questions, look up live data in your systems and take action, rather than forcing customers through button menus.",
      "Each agent is connected to your CRM so every conversation becomes a tracked lead, uses approved message templates for follow-ups and broadcasts, and escalates to a human with the full transcript whenever the conversation needs one.",
    ],
    capabilities: [
      { title: "WhatsApp Business Platform setup", description: "Number onboarding, business verification, template approval and a compliant opt-in flow." },
      { title: "Lead qualification agents", description: "Ask the right questions, score the lead and push it to your CRM or sales team instantly." },
      { title: "Booking & scheduling", description: "Appointments, site visits, demos and consultations booked directly into your calendar." },
      { title: "Order & service updates", description: "Order status, delivery tracking, payment links and service reminders on autopilot." },
      { title: "Omnichannel inbox", description: "WhatsApp, web chat, Instagram and Messenger in one shared inbox for your team." },
      { title: "Human handover", description: "Seamless escalation with the conversation history attached, so customers never repeat themselves." },
    ],
    technologies: ["WhatsApp Business Platform", "Meta Graph API", "Claude", "OpenAI", "n8n", "HubSpot", "Zoho CRM", "Twilio", "Node.js"],
    process: ["Conversation and intent mapping", "Platform onboarding and templates", "Agent build and CRM integration", "Launch, review transcripts, improve"],
    outcomes: [
      "Replies in seconds at any hour, in English or Arabic",
      "Every conversation logged as a CRM lead",
      "Fewer repetitive questions reaching your team",
      "Higher booking and follow-up completion rates",
    ],
    faqs: [
      { question: "Do I need the WhatsApp Business API rather than the WhatsApp Business app?", answer: "Yes, for automation at scale. The API (WhatsApp Business Platform) supports AI agents, multiple team members, CRM integration and approved broadcast templates. The free app is designed for a single phone and manual replies." },
      { question: "Can the chatbot reply in Arabic?", answer: "Yes. The agent detects the customer's language and replies in Arabic or English, which matters for UAE, Saudi and Qatar audiences." },
      { question: "What happens when the AI doesn't know the answer?", answer: "It hands the conversation to a named team member with the full transcript and a summary, instead of guessing." },
      { question: "Is WhatsApp marketing compliant with GDPR and UAE data law?", answer: "It can be, provided customers opt in, you use approved templates and you honour opt-outs. We build the opt-in capture and consent logging into every deployment." },
    ],
  },
  {
    slug: "data-analytics-business-intelligence",
    category: "AI & Data",
    icon: "bar-chart-3",
    name: "Data Analytics & Business Intelligence",
    shortDescription: "Power BI and Looker dashboards, data warehouses and pipelines that give leadership one version of the truth.",
    metaTitle: "Data Analytics & Business Intelligence Services — Power BI, Looker, Data Warehousing",
    metaDescription:
      "Data analytics and BI services — Power BI and Looker Studio dashboards, BigQuery and Snowflake data warehouses, ETL pipelines and KPI design for SMEs and enterprises in the UAE, UK, USA and India.",
    keywords: [
      "business intelligence services",
      "Power BI consulting",
      "data analytics company",
      "data warehouse development",
      "Power BI developer Dubai",
      "BI dashboard development UK",
    ],
    heroHeading: "One version of the truth, refreshed every morning.",
    heroSubtext:
      "We connect your sales, finance, marketing and operations data into a single warehouse and build dashboards that leadership actually opens.",
    overview: [
      "Most growing companies run on exported spreadsheets that disagree with each other. We design the KPIs first with your leadership team, then build the pipelines that pull data from your ERP, CRM, ad platforms, payment gateway and spreadsheets into a governed warehouse.",
      "Dashboards are built around decisions — weekly revenue, pipeline health, cash position, campaign return, stock and operations — with row-level security so each team sees only what it should.",
    ],
    capabilities: [
      { title: "KPI & metric design", description: "Agreed definitions for revenue, margin, CAC, LTV and operational metrics before anything is built." },
      { title: "Data pipelines (ETL/ELT)", description: "Automated extraction from ERP, CRM, ads, e-commerce and finance systems on a schedule." },
      { title: "Cloud data warehouses", description: "BigQuery, Snowflake, Azure SQL or PostgreSQL warehouses modelled for reporting." },
      { title: "Executive dashboards", description: "Power BI and Looker Studio reports with drill-downs, alerts and mobile views." },
      { title: "Marketing attribution", description: "Unified view of Google, Meta, LinkedIn and CRM data to show what actually drives revenue." },
      { title: "Forecasting & predictive models", description: "Demand, churn and sales forecasting where the data supports it." },
    ],
    technologies: ["Power BI", "Looker Studio", "BigQuery", "Snowflake", "Azure Synapse", "dbt", "Airbyte", "Python", "SQL", "Google Analytics 4"],
    process: ["KPI workshop and data audit", "Warehouse and pipeline build", "Dashboard design and validation", "Rollout, training and iteration"],
    outcomes: [
      "Leadership reporting without manual spreadsheet work",
      "Consistent numbers across finance, sales and marketing",
      "Faster decisions from daily refreshed data",
      "A data foundation ready for AI use cases",
    ],
    faqs: [
      { question: "Power BI or Looker Studio — which should we use?", answer: "Power BI suits companies already on Microsoft 365 and needing complex modelling and row-level security. Looker Studio is free, quick and strong for marketing and Google-ecosystem data. We recommend based on your stack and licence budget." },
      { question: "Do we need a data warehouse for dashboards?", answer: "Not always. Small teams can report directly from a few sources. Once you combine more than three or four systems, or need history the source systems don't keep, a warehouse saves time and errors." },
      { question: "How long does a BI project take?", answer: "A first executive dashboard on two or three sources typically takes 3–6 weeks. A full warehouse across the business is delivered in phases over 2–4 months." },
      { question: "Can you connect Tally or Zoho Books data?", answer: "Yes. We connect accounting systems including Tally, Zoho Books, QuickBooks and Xero, alongside CRMs and ad platforms." },
    ],
  },
  {
    slug: "cloud-devops",
    category: "Cloud & Infrastructure",
    icon: "cloud",
    name: "Cloud Migration & DevOps",
    shortDescription: "AWS, Azure and Google Cloud migration, CI/CD pipelines, containers and infrastructure as code.",
    metaTitle: "Cloud Migration & DevOps Services — AWS, Azure, Google Cloud",
    metaDescription:
      "Cloud migration and DevOps services on AWS, Microsoft Azure and Google Cloud — CI/CD pipelines, Docker and Kubernetes, Terraform, monitoring and cloud cost optimisation for businesses in the UAE, UK, USA and India.",
    keywords: [
      "cloud migration services",
      "DevOps consulting company",
      "AWS consulting partner",
      "Azure migration services",
      "Kubernetes consulting",
      "cloud cost optimisation",
      "DevOps services Dubai",
    ],
    heroHeading: "Infrastructure that deploys on every merge and never surprises the finance team.",
    heroSubtext:
      "We move applications to AWS, Azure or Google Cloud, automate how they are built and released, and keep the monthly bill under control.",
    overview: [
      "Cloud done badly is just a more expensive server. We plan migrations around your applications, data residency obligations and budget — choosing between lift-and-shift, re-platforming and managed services case by case — and document every resource as code so environments are reproducible.",
      "DevOps is where most of the day-to-day value sits: automated testing and deployment on every change, staging environments that mirror production, monitoring that alerts before customers notice, and backups that have actually been restored in a test.",
    ],
    capabilities: [
      { title: "Cloud migration", description: "Assessment, landing zone, migration waves and cut-over with rollback plans." },
      { title: "CI/CD pipelines", description: "GitHub Actions, GitLab CI or Azure DevOps pipelines with automated tests and approvals." },
      { title: "Containers & Kubernetes", description: "Docker, ECS, AKS, GKE or managed container platforms sized to your workload." },
      { title: "Infrastructure as code", description: "Terraform and Bicep definitions so every environment is versioned and repeatable." },
      { title: "Monitoring & reliability", description: "Logs, metrics, uptime checks and alerting with clear on-call runbooks." },
      { title: "Cloud cost optimisation", description: "Right-sizing, reserved capacity, storage tiering and tagging to cut waste." },
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps", "Grafana", "Vercel", "Cloudflare"],
    process: ["Infrastructure and cost assessment", "Target architecture and landing zone", "Migration waves and automation", "Optimise, monitor and hand over"],
    outcomes: [
      "Deployments in minutes, not release weekends",
      "Reproducible environments defined in code",
      "Lower and predictable monthly cloud spend",
      "Tested backups and documented recovery",
    ],
    faqs: [
      { question: "AWS, Azure or Google Cloud — which is best?", answer: "All three are mature. Azure fits Microsoft-centric organisations, AWS has the broadest service catalogue, and Google Cloud is strong for data and analytics. AWS, Azure and Google Cloud all operate regions in the UAE, which matters if you need data to stay in-country." },
      { question: "Can you reduce our existing cloud bill?", answer: "Usually. Unused resources, oversized instances, unattached storage and missing commitments are common. We start with a cost review and implement savings without changing application behaviour." },
      { question: "Do you provide 24/7 support after migration?", answer: "We offer managed DevOps retainers with monitoring, patching and incident response under an agreed SLA." },
      { question: "Will there be downtime during migration?", answer: "We plan cut-overs to minimise downtime — often to a short maintenance window — with a tested rollback path for every wave." },
    ],
  },
  {
    slug: "managed-it-services",
    category: "Cloud & Infrastructure",
    icon: "server",
    name: "Managed IT & Infrastructure",
    shortDescription: "Microsoft 365 and Google Workspace, networks, endpoints, helpdesk and annual maintenance contracts.",
    metaTitle: "Managed IT Services & IT Infrastructure Support — Microsoft 365, Networks, Helpdesk",
    metaDescription:
      "Managed IT services for SMEs — Microsoft 365 and Google Workspace administration, Azure AD/Entra ID, network setup, endpoint management, helpdesk and AMC support for offices in the UAE, India and beyond.",
    keywords: [
      "managed IT services",
      "IT support company",
      "Microsoft 365 administration",
      "IT AMC services",
      "IT infrastructure setup",
      "managed IT services Dubai",
      "office IT setup UAE",
    ],
    heroHeading: "IT that simply works — for every employee, every device, every day.",
    heroSubtext:
      "Microsoft 365, Google Workspace, networks, devices and helpdesk managed under one agreement, with clear response times and monthly reporting.",
    overview: [
      "For most small and mid-sized businesses, IT is handled by whoever is least busy — until email stops, a laptop is stolen or a former employee still has access to shared drives. We take ownership of the full environment: identities and licences, email and collaboration, devices, network, backups and security baselines.",
      "Support is delivered remotely with scheduled on-site visits where needed, and every month you receive a report on tickets, patch status, licence usage and recommended improvements.",
    ],
    capabilities: [
      { title: "Microsoft 365 & Google Workspace", description: "Tenant setup, migration, licensing, Teams, SharePoint, Exchange and Drive governance." },
      { title: "Identity & access", description: "Entra ID (Azure AD), MFA, conditional access and joiner/leaver processes." },
      { title: "Endpoint management", description: "Intune device enrolment, patching, encryption and remote wipe for laptops and phones." },
      { title: "Network & Wi-Fi", description: "Office networks, firewalls, VPN and Wi-Fi designed, installed and monitored." },
      { title: "Helpdesk & AMC", description: "Ticketed user support with defined response times under an annual maintenance contract." },
      { title: "Backup & continuity", description: "Microsoft 365, server and endpoint backups with tested restores." },
    ],
    technologies: ["Microsoft 365", "Entra ID", "Intune", "Google Workspace", "Windows Server", "Fortinet", "Sophos", "Cisco", "Ubiquiti", "Veeam"],
    process: ["IT environment audit", "Remediation and standardisation", "Onboarding to managed support", "Monthly reporting and reviews"],
    outcomes: [
      "One accountable partner for all office IT",
      "MFA and device security on every account",
      "Clean joiner and leaver processes",
      "Predictable monthly IT cost",
    ],
    faqs: [
      { question: "Do you support offices outside India?", answer: "Yes. Most managed IT work — Microsoft 365, identity, devices and helpdesk — is delivered remotely. For physical network and hardware work in the UAE we coordinate on-site visits." },
      { question: "Can you migrate us from Google Workspace to Microsoft 365, or the other way?", answer: "Yes. We migrate mail, calendars, contacts and files with a planned cut-over and user communication so work continues without interruption." },
      { question: "What is an IT AMC?", answer: "An annual maintenance contract covers ongoing support, preventive maintenance and agreed response times for a fixed annual or monthly fee, instead of paying per incident." },
      { question: "Is managed IT suitable for a 10-person company?", answer: "Yes. Small teams benefit most, because they rarely have in-house IT staff and a single security incident can disrupt the whole business." },
    ],
  },
  {
    slug: "cybersecurity-services",
    category: "Security, Quality & Support",
    icon: "shield-check",
    name: "Cybersecurity & VAPT",
    shortDescription: "Vulnerability assessment and penetration testing, security audits, cloud hardening and compliance readiness.",
    metaTitle: "Cybersecurity Services — VAPT, Penetration Testing, Security Audits",
    metaDescription:
      "Cybersecurity services for web apps, mobile apps, cloud and Microsoft 365 — VAPT, OWASP-based penetration testing, security audits, ISO 27001 readiness and remediation for businesses in the UAE, UK, USA and India.",
    keywords: [
      "VAPT services",
      "penetration testing company",
      "web application security testing",
      "cybersecurity audit",
      "ISO 27001 readiness",
      "penetration testing Dubai",
      "cyber security services UK SMEs",
    ],
    heroHeading: "Find the vulnerabilities before someone else does.",
    heroSubtext:
      "Vulnerability assessment, penetration testing and security hardening across your applications, cloud and Microsoft 365 — with a remediation plan your developers can act on.",
    overview: [
      "Security reviews are often a checkbox exercise that produces a long scanner report and no fixes. We test the way an attacker would — authentication, access control, injection, business-logic flaws, exposed cloud storage and weak identity settings — and rank every finding by real-world risk.",
      "Because we also build software, we don't stop at the report. We work with your developers (or fix it ourselves) and re-test to confirm each issue is closed, giving you evidence for clients, auditors and insurers.",
    ],
    capabilities: [
      { title: "Web & API penetration testing", description: "OWASP Top 10 and OWASP API Security testing with manual exploitation, not just scanners." },
      { title: "Mobile app security testing", description: "Android and iOS testing against the OWASP MASVS standard." },
      { title: "Cloud security review", description: "AWS, Azure and Google Cloud configuration review for exposed data and excessive permissions." },
      { title: "Microsoft 365 hardening", description: "MFA, conditional access, email security (SPF, DKIM, DMARC) and data-loss settings." },
      { title: "Compliance readiness", description: "Gap assessments for ISO 27001, SOC 2 and data-protection laws such as UK GDPR and UAE PDPL." },
      { title: "Remediation & re-testing", description: "Developer-ready fix guidance and a re-test report confirming closure." },
    ],
    technologies: ["Burp Suite", "OWASP ZAP", "Nmap", "Nessus", "MobSF", "Microsoft Defender", "Cloudflare", "Prowler", "ScoutSuite"],
    process: ["Scope and rules of engagement", "Assessment and exploitation", "Risk-ranked report and walkthrough", "Remediation and re-test"],
    outcomes: [
      "A prioritised list of real, exploitable risks",
      "Evidence of testing for clients and auditors",
      "Hardened identity, email and cloud settings",
      "Verified fixes, not just recommendations",
    ],
    faqs: [
      { question: "What is VAPT?", answer: "Vulnerability Assessment and Penetration Testing combines automated scanning to find known weaknesses with manual testing that attempts to exploit them, showing which issues are genuinely dangerous." },
      { question: "How often should we run a penetration test?", answer: "At least annually, and after any major release, infrastructure change or acquisition. Many enterprise clients and insurers now require an annual test report." },
      { question: "Will testing take our website down?", answer: "No. We agree scope, timing and rules of engagement in advance and avoid destructive tests on production unless you explicitly approve them." },
      { question: "Do you help with ISO 27001 certification?", answer: "We provide gap assessments, policy templates and technical controls to prepare for ISO 27001. The certification audit itself is carried out by an accredited certification body." },
    ],
  },
  {
    slug: "qa-software-testing",
    category: "Security, Quality & Support",
    icon: "flask-conical",
    name: "QA & Software Testing",
    shortDescription: "Manual, automated, performance and accessibility testing so releases ship without regressions.",
    metaTitle: "QA & Software Testing Services — Test Automation, Performance, Accessibility",
    metaDescription:
      "Software QA and testing services — Playwright and Cypress test automation, manual and regression testing, performance testing with k6 and JMeter, and WCAG accessibility audits for web and mobile apps.",
    keywords: [
      "software testing services",
      "QA outsourcing company",
      "test automation services",
      "Playwright automation testing",
      "performance testing services",
      "WCAG accessibility testing",
    ],
    heroHeading: "Release on Friday without crossing your fingers.",
    heroSubtext:
      "Manual and automated testing for web and mobile products — functional, regression, performance and accessibility — built into your release pipeline.",
    overview: [
      "Bugs found by customers cost far more than bugs found in testing, both in fixes and in trust. We set up a testing practice that matches your release pace: exploratory and manual testing for new features, automated regression suites for everything that already works, and performance tests before traffic spikes.",
      "Accessibility testing against WCAG 2.2 is included as standard — it matters for users and is increasingly a legal expectation in the UK, US and EU markets.",
    ],
    capabilities: [
      { title: "Test strategy & planning", description: "Risk-based test plans, test cases and acceptance criteria aligned with product owners." },
      { title: "Automated regression", description: "Playwright, Cypress and Appium suites running in CI on every pull request." },
      { title: "Manual & exploratory testing", description: "Cross-browser and real-device testing of new features before release." },
      { title: "Performance & load testing", description: "k6 and JMeter scenarios that find bottlenecks before launch campaigns." },
      { title: "API testing", description: "Contract and integration tests for REST and GraphQL services." },
      { title: "Accessibility audits", description: "WCAG 2.2 AA audits with prioritised fixes for keyboard, screen-reader and contrast issues." },
    ],
    technologies: ["Playwright", "Cypress", "Appium", "Selenium", "k6", "JMeter", "Postman", "BrowserStack", "axe", "GitHub Actions"],
    process: ["Quality audit and test strategy", "Test design and automation build", "CI integration and execution", "Reporting and continuous coverage"],
    outcomes: [
      "Fewer production defects and hotfixes",
      "Faster, more confident release cycles",
      "Performance verified before peak traffic",
      "Accessibility issues caught before users hit them",
    ],
    faqs: [
      { question: "Should we automate all our tests?", answer: "No. Automate stable, repeated regression paths and critical journeys; keep exploratory and usability testing manual. The right mix depends on how often you release." },
      { question: "Can you test an app another company built?", answer: "Yes. We regularly test products built by in-house teams or other vendors and integrate with your existing tools and workflow." },
      { question: "What is WCAG and do we need it?", answer: "The Web Content Accessibility Guidelines define how to make sites usable for people with disabilities. WCAG 2.2 AA is the common target, and accessibility claims and lawsuits are frequent in the US and growing in the UK and EU." },
      { question: "Do you provide dedicated QA engineers?", answer: "Yes, as part of a project or as dedicated testers embedded in your team on a monthly basis." },
    ],
  },
  {
    slug: "legacy-application-modernization",
    category: "Security, Quality & Support",
    icon: "refresh-cw",
    name: "Legacy Application Modernisation",
    shortDescription: "Rebuild or re-platform ageing PHP, .NET, Access and desktop systems into secure, cloud-ready software.",
    metaTitle: "Legacy Application Modernisation Services — Re-platform, Rebuild, Migrate",
    metaDescription:
      "Legacy software modernisation — migrating outdated PHP, classic ASP, .NET Framework, MS Access and desktop applications to modern, secure, cloud-ready web platforms without disrupting operations.",
    keywords: [
      "legacy application modernization",
      "legacy software migration",
      "re-platform legacy application",
      "MS Access to web app",
      ".NET Framework migration",
      "PHP application upgrade",
    ],
    heroHeading: "Keep what your old system does well. Lose everything that holds you back.",
    heroSubtext:
      "We modernise ageing business applications in phases — so operations keep running while the system underneath is rebuilt.",
    overview: [
      "Legacy systems usually hold years of business rules that nobody fully documented. Replacing them in one big switch is risky; leaving them is riskier, because unsupported frameworks stop receiving security patches and the people who understand them leave.",
      "We start by reverse-engineering what the system actually does, then choose the right path module by module — refactor, re-platform or rebuild — running old and new side by side until each part is proven.",
    ],
    capabilities: [
      { title: "System discovery", description: "Code, database and workflow analysis to document hidden business rules." },
      { title: "Modernisation roadmap", description: "Module-by-module plan weighing refactor, re-platform and rebuild options." },
      { title: "Data migration", description: "Cleansing, mapping and validated migration of historical data." },
      { title: "Desktop & Access to web", description: "Turning spreadsheet, Access and desktop tools into secure multi-user web apps." },
      { title: "Framework upgrades", description: "PHP, .NET Framework, AngularJS and other end-of-life stacks moved to supported versions." },
      { title: "Parallel run & cut-over", description: "Side-by-side operation and phased switch-over to protect daily work." },
    ],
    technologies: [".NET 8", "Node.js", "Next.js", "React", "Laravel", "PostgreSQL", "SQL Server", "Docker", "Azure", "AWS"],
    process: ["Discovery and risk assessment", "Roadmap and architecture", "Phased rebuild and data migration", "Parallel run and decommission"],
    outcomes: [
      "Supported, patchable technology",
      "Business rules documented and preserved",
      "Browser and mobile access for every user",
      "Lower maintenance cost and vendor risk",
    ],
    faqs: [
      { question: "Should we rebuild from scratch or modernise gradually?", answer: "For most business-critical systems, a phased approach is safer. Full rebuilds make sense when the existing code is unmaintainable and the system is small enough to replace in one step." },
      { question: "Will we lose our historical data?", answer: "No. Data migration with validation reports is part of every project, and the legacy database is retained read-only until you are satisfied." },
      { question: "Can you work on a system with no documentation?", answer: "Yes. Discovery is designed for exactly that — we document the behaviour from the code, the database and interviews with the people who use it." },
      { question: "How long does modernisation take?", answer: "Small tools take a few weeks. Core systems are delivered in phases over several months, with each phase going live as it is ready." },
    ],
  },
  {
    slug: "application-maintenance-support",
    category: "Security, Quality & Support",
    icon: "life-buoy",
    name: "Application Maintenance & Support",
    shortDescription: "SLA-backed support, monitoring, security patching and continuous improvement for live software.",
    metaTitle: "Application Maintenance & Support Services — SLA-Based Software Support",
    metaDescription:
      "Application maintenance and support for websites, web apps, mobile apps and business systems — monitoring, bug fixing, security updates, hosting management and enhancement retainers under clear SLAs.",
    keywords: [
      "application maintenance services",
      "software support and maintenance",
      "website maintenance services",
      "app support retainer",
      "SLA software support",
    ],
    heroHeading: "Launch is the beginning. We keep it fast, secure and improving.",
    heroSubtext:
      "Support retainers for websites, apps and business systems — whoever built them — with monitoring, defined response times and a monthly improvement budget.",
    overview: [
      "Software degrades without care: dependencies go out of date, certificates expire, integrations change their APIs and small bugs pile up. We take over day-to-day ownership of your live systems — including ones built by other vendors — after a short technical onboarding.",
      "Every retainer combines reactive support under an agreed SLA with proactive work: dependency and security updates, performance tuning and a set number of hours each month for improvements your team requests.",
    ],
    capabilities: [
      { title: "Monitoring & uptime", description: "Uptime, error and performance monitoring with alerting to our support team." },
      { title: "Bug fixing under SLA", description: "Prioritised incidents with defined response and resolution targets." },
      { title: "Security & dependency updates", description: "Framework, plugin and library updates applied and tested on a schedule." },
      { title: "Hosting & domain management", description: "Servers, SSL certificates, DNS, backups and email deliverability handled." },
      { title: "Enhancement hours", description: "A monthly allocation for new features, content changes and UX improvements." },
      { title: "Vendor takeover", description: "Code review, documentation and handover from previous developers." },
    ],
    technologies: ["Next.js", "React", "WordPress", "Laravel", "Node.js", "Flutter", "Sentry", "UptimeRobot", "Cloudflare", "GitHub"],
    process: ["Technical onboarding and audit", "Monitoring and access setup", "SLA support and scheduled updates", "Monthly report and roadmap"],
    outcomes: [
      "Issues detected before customers report them",
      "Up-to-date, patched software",
      "Predictable monthly support cost",
      "Continuous improvement, not just fixes",
    ],
    faqs: [
      { question: "Can you support software another agency built?", answer: "Yes. We start with a code and infrastructure audit, document what we find and then take over support." },
      { question: "What response times do you offer?", answer: "Response targets depend on the plan and severity — critical incidents are prioritised immediately, with lower-severity requests handled within agreed business hours." },
      { question: "Do unused enhancement hours roll over?", answer: "Plans are agreed individually; we recommend planning enhancement work quarterly so the allocation is used on the highest-value improvements." },
      { question: "Do you support WordPress sites?", answer: "Yes — WordPress, custom Next.js and React sites, Laravel and Node.js applications, and Flutter and React Native apps." },
    ],
  },
  {
    slug: "erp-crm-implementation",
    category: "Business Systems",
    icon: "boxes",
    name: "ERP & CRM Implementation",
    shortDescription: "Odoo, Zoho, HubSpot and Salesforce implementation, customisation, migration and training.",
    metaTitle: "ERP & CRM Implementation — Odoo, Zoho, HubSpot, Salesforce",
    metaDescription:
      "ERP and CRM implementation, customisation and data migration for Odoo, Zoho One, HubSpot and Salesforce — configured for VAT, multi-currency and Arabic needs of businesses in the UAE, Saudi Arabia, UK and India.",
    keywords: [
      "ERP implementation services",
      "Odoo implementation",
      "Zoho implementation partner",
      "HubSpot CRM setup",
      "Salesforce customization",
      "ERP implementation UAE",
      "CRM implementation Dubai",
    ],
    heroHeading: "Proven platforms, configured for exactly how you work.",
    heroSubtext:
      "When an established ERP or CRM fits 80% of your needs, we implement it properly — and build the remaining 20% so your team never works around it.",
    overview: [
      "Not every business needs custom software. Odoo, Zoho, HubSpot and Salesforce are mature platforms — but most failed implementations come from rushed configuration, dirty migrated data and no training. We map your processes first, configure the platform around them and only customise where the business case is clear.",
      "For Gulf clients we configure VAT, multi-currency and Arabic invoice layouts; for UK and US clients we align with local tax and accounting integrations. When requirements outgrow the platform, our custom ERP team can extend it or build alongside it.",
    ],
    capabilities: [
      { title: "Process mapping & fit-gap", description: "Documenting how you work today and where the platform fits or needs extending." },
      { title: "Configuration & customisation", description: "Modules, workflows, approvals, reports and custom fields configured to your process." },
      { title: "Data migration", description: "Customers, products, stock, open invoices and history migrated and reconciled." },
      { title: "Integrations", description: "E-commerce, payment gateways, WhatsApp, accounting and logistics connected." },
      { title: "VAT & localisation", description: "UAE and KSA VAT, multi-currency, Arabic documents and regional reporting configured." },
      { title: "Training & adoption", description: "Role-based training, user guides and post-go-live hypercare." },
    ],
    technologies: ["Odoo", "Zoho One", "Zoho CRM", "Zoho Books", "HubSpot", "Salesforce", "Microsoft Dynamics 365", "Python", "Deluge"],
    process: ["Process mapping and fit-gap", "Configuration and migration", "Testing, training and go-live", "Hypercare and optimisation"],
    outcomes: [
      "A platform your team actually adopts",
      "Clean, reconciled data from day one",
      "Fewer manual steps between departments",
      "Room to extend with custom modules later",
    ],
    faqs: [
      { question: "Should we choose Odoo, Zoho or a custom ERP?", answer: "Odoo and Zoho suit most SMEs with standard sales, inventory and accounting processes. Custom ERP makes sense when your operations are your competitive advantage or the platforms need heavy workarounds. We give an honest recommendation after a fit-gap review." },
      { question: "Can you migrate us from Tally or spreadsheets?", answer: "Yes. We migrate masters, opening balances and open transactions with reconciliation reports signed off by your finance team." },
      { question: "Are you an official partner of these platforms?", answer: "We implement and customise these platforms independently. Licences are purchased directly from the vendor in your company's name, so you retain full ownership." },
      { question: "Do you support UAE VAT and Arabic invoices?", answer: "Yes. We configure VAT rates, tax invoices and bilingual English–Arabic document layouts for UAE and Saudi entities." },
    ],
  },
  {
    slug: "it-consulting-digital-transformation",
    category: "Business Systems",
    icon: "compass",
    name: "IT Consulting & Digital Transformation",
    shortDescription: "Technology strategy, architecture reviews, vendor selection and fractional CTO leadership.",
    metaTitle: "IT Consulting & Digital Transformation Services — Fractional CTO, Tech Strategy",
    metaDescription:
      "IT consulting and digital transformation — technology roadmaps, architecture and code reviews, software vendor selection, AI readiness and fractional CTO services for founders and SMEs in the UAE, UK, USA and India.",
    keywords: [
      "IT consulting services",
      "digital transformation consulting",
      "fractional CTO services",
      "technology strategy consulting",
      "AI readiness assessment",
      "IT consultant Dubai",
    ],
    heroHeading: "Make the right technology decision before you spend on it.",
    heroSubtext:
      "Independent technology advice for founders and leadership teams — roadmaps, architecture reviews, vendor selection and hands-on CTO leadership when you need it.",
    overview: [
      "The most expensive technology mistakes happen before a line of code is written: the wrong platform, an over-scoped first version, or a vendor contract that locks you in. We act as your technical side of the table — translating business goals into a prioritised roadmap and pressure-testing proposals from any vendor, including us.",
      "For companies without senior technical leadership, our fractional CTO service provides architecture decisions, hiring support, vendor management and board-level reporting for a fraction of a full-time hire.",
    ],
    capabilities: [
      { title: "Technology roadmap", description: "A 12–24 month plan linking business priorities to systems, budget and sequencing." },
      { title: "Architecture & code review", description: "Independent assessment of scalability, security and maintainability." },
      { title: "Vendor & platform selection", description: "Requirements, shortlists, demos and scoring for software and agency selection." },
      { title: "AI readiness assessment", description: "Where AI can save time or create revenue — and what data and controls are needed first." },
      { title: "Fractional CTO", description: "Part-time senior technology leadership for startups and SMEs." },
      { title: "Process automation audit", description: "Mapping manual workflows and ranking automation opportunities by return." },
    ],
    technologies: ["Architecture reviews", "Cloud cost modelling", "Security baselines", "AI use-case scoring", "Vendor RFPs", "Delivery governance"],
    process: ["Stakeholder interviews", "Current-state assessment", "Options and recommendations", "Roadmap and ongoing advisory"],
    outcomes: [
      "Clear priorities and a costed roadmap",
      "Fewer expensive false starts",
      "Vendor proposals you can evaluate with confidence",
      "Senior technical leadership without a full-time hire",
    ],
    faqs: [
      { question: "What does a fractional CTO do?", answer: "A fractional CTO provides part-time technology leadership: setting architecture direction, managing vendors and developers, planning budgets and representing technology to founders, investors and the board." },
      { question: "Will you recommend your own services?", answer: "Only if they are the best fit. Consulting engagements are scoped independently, and we will recommend platforms, freelancers or other vendors where they serve you better." },
      { question: "How long is a typical consulting engagement?", answer: "Assessments and roadmaps take 2–4 weeks. Fractional CTO and advisory retainers run month to month." },
      { question: "Can you review a quote from another agency?", answer: "Yes. Independent review of scope, estimates, architecture and contract terms before you sign is one of our most requested services." },
    ],
  },
  {
    slug: "dedicated-development-team",
    category: "Software Engineering",
    icon: "users",
    name: "Dedicated Developers & Team Extension",
    shortDescription: "Offshore developers, designers and QA engineers from Kochi working as part of your team, in your time zone.",
    metaTitle: "Hire Dedicated Developers from India — Offshore Team Extension for UAE, UK & USA",
    metaDescription:
      "Hire dedicated developers, designers and QA engineers from our Kochi, India delivery centre — full-time team extension for companies in the UAE, UK, USA, Canada and Australia with time-zone overlap, NDAs and full IP ownership.",
    keywords: [
      "hire dedicated developers India",
      "offshore development team",
      "staff augmentation services",
      "hire React developers India",
      "offshore developers for UK companies",
      "dedicated development team UAE",
      "outsource software development to India",
    ],
    heroHeading: "Senior engineers from India, working as part of your team.",
    heroSubtext:
      "Extend your product team with dedicated developers, designers and QA engineers from our Kochi delivery centre — managed, accountable and aligned to your working hours.",
    overview: [
      "Hiring locally in Dubai, London or New York is slow and expensive. Freelancers are flexible but hard to hold accountable. A dedicated team gives you full-time engineers who join your stand-ups, use your tools and follow your processes — while we handle recruitment, HR, equipment, continuity and quality oversight.",
      "Every engagement includes an NDA, assignment of all intellectual property to you, secure access practices and a named delivery lead. Working hours are aligned for overlap: same-day collaboration with the Gulf, morning overlap with the UK and Europe, and an early-morning/late-evening handover with North America.",
    ],
    capabilities: [
      { title: "Full-stack developers", description: "React, Next.js, Node.js, Python, .NET and Laravel engineers." },
      { title: "Mobile developers", description: "Flutter, React Native, Swift and Kotlin specialists." },
      { title: "AI & data engineers", description: "LLM, RAG, automation and data-pipeline engineers." },
      { title: "UI/UX designers", description: "Product designers working in Figma with your design system." },
      { title: "QA & DevOps engineers", description: "Test automation and CI/CD specialists embedded in your sprints." },
      { title: "Delivery management", description: "A named delivery lead for reporting, continuity and escalation." },
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", ".NET", "Flutter", "React Native", "AWS", "Azure", "Jira", "Slack", "GitHub"],
    process: ["Requirements and role profiles", "Shortlist and interviews", "Onboarding to your tools", "Monthly reviews and scaling"],
    outcomes: [
      "Engineers working in your sprints within weeks",
      "Significantly lower cost than local hiring",
      "Full IP ownership and NDA protection",
      "Scale the team up or down as the roadmap changes",
    ],
    faqs: [
      { question: "How much time-zone overlap will we get?", answer: "India (IST, UTC+5:30) is 1.5 hours ahead of the UAE, so the Gulf gets a near-full shared working day. UK teams get around four to five overlapping hours in their morning. US teams get a planned handover window in their early morning, with work completed overnight." },
      { question: "Who owns the code?", answer: "You do. Our contracts assign all intellectual property created during the engagement to your company, and code lives in your repositories." },
      { question: "Can we interview the developers?", answer: "Yes. You interview and approve every team member before they start." },
      { question: "What is the minimum engagement?", answer: "Engagements are monthly with a short notice period, so you can scale with your roadmap rather than committing to long fixed contracts." },
    ],
  },
];

const OFFERING_CATEGORY: Record<string, ItCategory> = {
  "saas-edtech": "Software Engineering",
  "ai-automation": "AI & Data",
  "internal-platforms": "Business Systems",
  "client-solutions": "Business Systems",
  "mobile-app-development": "Software Engineering",
  "custom-software-development": "Software Engineering",
  "web-app-development": "Software Engineering",
  "ecommerce-development": "Software Engineering",
  "ui-ux-design": "Software Engineering",
  "api-integrations": "Business Systems",
};

export const itCatalog: ItCatalogItem[] = [
  ...techOfferings.map((o) => ({
    slug: o.id,
    name: o.name,
    category: OFFERING_CATEGORY[o.id] ?? "Software Engineering",
    icon: o.icon,
    description: o.description,
    href: o.href ?? `/it-solutions/${o.id}`,
  })),
  ...itServices.map((s) => ({
    slug: s.slug,
    name: s.name,
    category: s.category,
    icon: s.icon,
    description: s.shortDescription,
    href: `/it-solutions/${s.slug}`,
  })),
];

export function getItService(slug: string) {
  return itServices.find((s) => s.slug === slug);
}

export const industrySolutions: { name: string; description: string }[] = [
  { name: "Education & EdTech", description: "LMS platforms, student and fee management, admissions CRM and online exams." },
  { name: "Healthcare & Clinics", description: "Appointment booking, patient records, clinic management and WhatsApp reminders." },
  { name: "Retail & E-commerce", description: "Online stores, POS and inventory sync, loyalty and marketplace integrations." },
  { name: "Real Estate", description: "Property listing portals, broker CRM, lead routing and site-visit scheduling." },
  { name: "Logistics & Trading", description: "Shipment tracking, import–export documentation, warehouse and fleet systems." },
  { name: "Manufacturing", description: "Production planning, BOM and inventory control, quality and maintenance tracking." },
  { name: "Hospitality & Food", description: "Reservations, ordering, kitchen display and multi-outlet reporting." },
  { name: "Professional Services", description: "Client portals, project and time tracking, billing and document automation." },
];

export const engagementModels: { name: string; bestFor: string; description: string }[] = [
  {
    name: "Fixed-scope projects",
    bestFor: "Websites, apps, MVPs and defined system builds",
    description: "An agreed scope, timeline and price, delivered in milestones with a demo at the end of each one.",
  },
  {
    name: "Dedicated teams",
    bestFor: "Product companies and agencies with ongoing roadmaps",
    description: "Full-time engineers, designers and QA working inside your sprints, billed monthly and scalable.",
  },
  {
    name: "Managed retainers",
    bestFor: "Live systems, cloud, security and IT operations",
    description: "SLA-backed support, monitoring and a monthly improvement budget under one accountable agreement.",
  },
];

export const itHubFaqs = [
  {
    question: "What IT services does Versa Digital & IT Solutions offer?",
    answer:
      "Custom software, web and mobile app development, SaaS products, UI/UX design, generative AI and LLM applications, AI automation and agentic AI, chatbots and WhatsApp automation, data analytics and BI, cloud migration and DevOps, managed IT, cybersecurity and VAPT, QA and testing, ERP and CRM implementation, custom ERP/CRM/HRMS, API integrations, legacy modernisation, application support, IT consulting and dedicated development teams.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We deliver from Kochi, India, for clients in the UAE, UK, USA, Saudi Arabia, Qatar, Canada, Australia and Singapore, with working hours aligned to each time zone, NDAs as standard and full IP assignment to the client.",
  },
  {
    question: "How do you price software projects?",
    answer:
      "Defined projects are quoted as fixed-price milestones after a short discovery phase. Ongoing work is billed as monthly dedicated-team or retainer fees. Proposals can be issued in INR, AED, GBP or USD.",
  },
  {
    question: "Who owns the code and designs you create?",
    answer:
      "You do. Our agreements assign all intellectual property created for you to your company, and code is stored in repositories you control.",
  },
  {
    question: "Can you take over a project another vendor started?",
    answer:
      "Yes. We begin with a code and infrastructure audit, document the current state and risks, and then continue development or support with a clear plan.",
  },
];

export const technologyStack: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "Vue"] },
  { group: "Backend", items: ["Node.js", "Python", ".NET", "Laravel", "FastAPI", "GraphQL"] },
  { group: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
  { group: "AI & Data", items: ["Claude", "OpenAI", "Gemini", "LangChain", "pgvector", "Power BI", "BigQuery"] },
  { group: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Vercel"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "Supabase"] },
  { group: "Business Platforms", items: ["Odoo", "Zoho", "HubSpot", "Salesforce", "Microsoft 365", "Shopify", "WooCommerce"] },
];
