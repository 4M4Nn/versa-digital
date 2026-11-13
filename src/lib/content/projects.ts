import type { FaqItem, ProjectCase } from "@/types";

const U = "2026-11-13";

type ProjectInput = Omit<ProjectCase, "body" | "eyebrow" | "updatedAt" | "faqs"> & {
  challenge: string;
  approach: string[];
  outcome: string;
  faqs?: FaqItem[];
};

const modelNote: Record<ProjectCase["deliveryModel"], string> = {
  Subcontract:
    "Delivered as a subcontractor to a larger IT services company that held the end-client contract. Our team worked inside the prime contractor's process and tools, and the client name is withheld under NDA.",
  "White-label":
    "Delivered white-label for a partner agency, which presented the work under its own brand. The end-client name is withheld under NDA.",
  "Direct client":
    "Delivered directly to the client. The client name is withheld at their request.",
  "Dedicated team":
    "Delivered by a dedicated Versa Digital team working full-time inside the client's product organisation. The client name is withheld under NDA.",
};

function project(p: ProjectInput): ProjectCase {
  const { challenge, approach, outcome, faqs, ...rest } = p;
  return {
    ...rest,
    eyebrow: `${p.category} · ${p.industry}`,
    body: [
      "## The challenge",
      challenge,
      "## What we built",
      ...approach.map((a) => `- ${a}`),
      "## Scope delivered",
      ...p.scope.map((s) => `- ${s}`),
      "## Technology",
      p.stack.join(", ") + ".",
      "## Engagement model",
      modelNote[p.deliveryModel],
      "## Outcome",
      outcome,
    ],
    faqs: faqs ?? [],
    updatedAt: U,
  };
}

export const projectCases: ProjectCase[] = [
  project({
    slug: "multi-branch-trading-erp-uae",
    title: "Multi-Branch Trading & Distribution ERP for a UAE Wholesaler",
    metaTitle: "Case Study: Trading & Distribution ERP for a UAE Wholesaler | Versa Digital",
    metaDescription:
      "How we built a multi-branch trading ERP with landed costing, van sales, credit control and UAE VAT for a Gulf wholesale distributor — delivered as a subcontractor.",
    keywords: ["trading ERP UAE case study", "distribution ERP Dubai", "van sales app", "wholesale ERP project"],
    summary:
      "A Gulf wholesale distributor running stock and credit across several branches in spreadsheets moved onto a single trading ERP with import landed costing, van sales apps, credit control and UAE VAT invoicing.",
    category: "ERP",
    industry: "Trading & distribution",
    region: "UAE",
    deliveryModel: "Subcontract",
    stack: ["Odoo 17", "Python", "OWL", "PostgreSQL", "Flutter", "AWS"],
    scope: ["Purchase & import landed cost", "Multi-warehouse inventory", "Customer price lists & credit limits", "Van sales mobile app", "UAE VAT invoicing", "Management dashboards"],
    challenge:
      "Each branch kept its own stock sheet, so the head office couldn't see total inventory or which customers were over their credit limit. Landed costs on imports were calculated manually, which made margins unreliable.",
    approach: [
      "Mapped purchase-to-payment and order-to-cash flows across branches with the prime contractor's functional consultant.",
      "Built custom Odoo modules for landed cost allocation and branch-wise credit control.",
      "Delivered a Flutter van-sales app with offline ordering and collections.",
      "Migrated item masters, customers and opening stock from spreadsheets with reconciliation reports.",
    ],
    outcome:
      "All branches now work from one stock and receivables position, landed costs post automatically on goods receipt, and salespeople take orders and collections on the road without calling the office.",
  }),
  project({
    slug: "manufacturing-erp-food-processing-kerala",
    title: "Manufacturing ERP for a Food Processing Unit in Kerala",
    metaTitle: "Case Study: Manufacturing ERP for a Kerala Food Processor | Versa Digital",
    metaDescription:
      "Custom manufacturing ERP with BOM, batch production, quality checks, batch/expiry tracking and GST e-invoicing for a Kerala food and spice processor.",
    keywords: ["manufacturing ERP Kerala", "food processing ERP", "batch tracking ERP", "spice processing software"],
    summary:
      "A food and spice processor replaced a mix of Tally and paper production registers with a manufacturing ERP covering recipes, batch production, quality checks, batch and expiry traceability, and GST e-invoicing.",
    category: "ERP",
    industry: "Manufacturing",
    region: "India",
    deliveryModel: "Direct client",
    stack: ["ERPNext", "Frappe", "Python", "MariaDB", "Tally integration"],
    scope: ["Recipe / BOM management", "Batch production & yield", "Quality inspection", "Batch & expiry traceability", "GST e-invoice & e-way bill", "Tally accounting sync"],
    challenge:
      "Production records were on paper and inventory in Tally, so tracing a finished batch back to raw-material lots took hours, and yield losses were invisible until month-end.",
    approach: [
      "Configured ERPNext manufacturing with multi-level recipes and batch-wise production entries.",
      "Built a tablet screen for supervisors to record batches, weights and quality results on the floor.",
      "Added GST e-invoice and e-way bill generation from sales invoices.",
      "Kept Tally for statutory accounting with an automated nightly sync.",
    ],
    outcome:
      "Any finished batch can now be traced to its raw-material lots in seconds, and management reviews yield and wastage weekly instead of discovering it at month-end.",
  }),
  project({
    slug: "construction-erp-contracting-company",
    title: "Construction ERP for an MEP Contracting Company",
    metaTitle: "Case Study: Construction & MEP Contracting ERP | Versa Digital",
    metaDescription:
      "Project-based construction ERP with BOQ budgets, site material requests, subcontractor billing with retention and progress claims — built for a Gulf MEP contractor.",
    keywords: ["construction ERP case study", "MEP contractor software", "subcontractor billing ERP", "BOQ ERP"],
    summary:
      "An MEP contractor running multiple sites got a project-centric ERP: BOQ budgets, site material requests, subcontractor billing with retention, client progress claims and a mobile site-progress app.",
    category: "ERP",
    industry: "Construction",
    region: "Saudi Arabia & UAE",
    deliveryModel: "Subcontract",
    stack: ["Next.js", "NestJS", "PostgreSQL", "React Native", "Azure"],
    scope: ["BOQ & cost codes", "Material requests & site transfers", "Subcontractor work orders & retention", "Client progress claims", "Site progress app with photos", "Project P&L dashboard"],
    challenge:
      "Project costs were only consolidated at month-end, so overruns on materials and subcontractors were discovered too late to act on.",
    approach: [
      "Designed a cost-code model shared by purchasing, site stores, labour and subcontractor billing.",
      "Built approval workflows for material requests from site to procurement.",
      "Delivered a React Native app for site engineers to log daily progress with photos.",
      "Worked as a subcontracted build team under a regional system integrator's programme management.",
    ],
    outcome:
      "Project managers now see budget versus actual by cost code daily, and progress claims are prepared from recorded site progress rather than rebuilt in spreadsheets.",
  }),
  project({
    slug: "school-erp-group-of-institutions",
    title: "School ERP & Parent App for a Group of Institutions",
    metaTitle: "Case Study: School ERP and Parent App for a Group of Schools | Versa Digital",
    metaDescription:
      "Admissions, fees, attendance, exams and a parent mobile app with WhatsApp alerts for a multi-campus group of schools — custom school ERP case study.",
    keywords: ["school ERP case study", "school management system India", "parent app development", "fee management system"],
    summary:
      "A group of schools consolidated admissions, fee collection, attendance, exams and parent communication into one ERP with a parent app and WhatsApp notifications across campuses.",
    category: "ERP",
    industry: "Education",
    region: "India",
    deliveryModel: "Direct client",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Flutter", "Razorpay", "WhatsApp Business API"],
    scope: ["Online admissions", "Fee structures & online payment", "Attendance", "Exams & report cards", "Parent & teacher apps", "WhatsApp notifications"],
    challenge:
      "Each campus used different tools, fee follow-ups were manual phone calls, and parents had no single place to see attendance, results or circulars.",
    approach: [
      "Built a central ERP with campus-level configuration for fees, classes and timetables.",
      "Integrated online fee payment with automatic receipts and reminders.",
      "Delivered Flutter apps for parents and teachers.",
      "Sent attendance, fee and exam alerts over WhatsApp.",
    ],
    outcome:
      "Fee follow-up moved from phone calls to automated reminders, and parents across all campuses use one app for attendance, results and payments.",
  }),
  project({
    slug: "clinic-management-system-dental-chain",
    title: "Clinic Management System for a Multi-Location Dental Chain",
    metaTitle: "Case Study: Clinic Management System for a Dental Chain | Versa Digital",
    metaDescription:
      "Appointments, patient records, treatment plans, billing, inventory and WhatsApp reminders across clinic locations — a white-label clinic management build.",
    keywords: ["clinic management system case study", "dental practice software", "clinic ERP UAE", "appointment reminder system"],
    summary:
      "A dental group with several locations moved to a single clinic management system for appointments, patient records, treatment plans, billing, consumables inventory and WhatsApp reminders.",
    category: "ERP",
    industry: "Healthcare",
    region: "UAE",
    deliveryModel: "White-label",
    stack: ["React", "Django", "PostgreSQL", "AWS", "WhatsApp Business API"],
    scope: ["Multi-clinic scheduling", "Patient records & treatment plans", "Billing & insurance", "Consumables inventory", "WhatsApp reminders", "Clinician utilisation reports"],
    challenge:
      "Each clinic used a separate booking tool, so patients couldn't be seen across locations and no-show rates were high.",
    approach: [
      "Built shared patient records and chair-level scheduling across locations.",
      "Added automated WhatsApp confirmations and reminders.",
      "Implemented role-based access and audit logs for patient data.",
      "Delivered under a partner agency's brand, with our team supporting the partner after launch.",
    ],
    outcome:
      "Patients can book at any location from one record, and automated reminders replaced manual confirmation calls at front desks.",
  }),
  project({
    slug: "sales-crm-real-estate-brokerage",
    title: "Lead-Routing CRM for a Real Estate Brokerage",
    metaTitle: "Case Study: Real Estate CRM with Lead Routing & WhatsApp | Versa Digital",
    metaDescription:
      "Custom real estate CRM with portal lead capture, round-robin routing, WhatsApp follow-up, viewing scheduling and commission tracking for a Dubai brokerage.",
    keywords: ["real estate CRM case study", "Dubai brokerage CRM", "lead routing CRM", "WhatsApp CRM integration"],
    summary:
      "A Dubai brokerage replaced shared inboxes with a CRM that captures leads from portals, ads and WhatsApp, routes them to agents in seconds, schedules viewings and tracks commissions.",
    category: "CRM",
    industry: "Real estate",
    region: "UAE",
    deliveryModel: "Direct client",
    stack: ["Next.js", "Supabase", "PostgreSQL", "WhatsApp Business API", "Meta Lead Ads API"],
    scope: ["Portal, ads & website lead capture", "Round-robin and rule-based routing", "WhatsApp templates & logging", "Viewing calendar", "Deal pipeline & commissions", "Agent performance dashboard"],
    challenge: "Leads arrived in several inboxes and were often answered hours later, by which time buyers had spoken to competitors.",
    approach: [
      "Unified all lead sources into one pipeline with instant assignment.",
      "Logged WhatsApp conversations against each lead.",
      "Built a viewing calendar and commission tracking per deal.",
    ],
    outcome: "Every lead is assigned within seconds of arriving, and managers can see response times and conversion by agent and source.",
  }),
  project({
    slug: "hrms-payroll-it-services-company",
    title: "HRMS & Payroll Platform for an IT Services Company",
    metaTitle: "Case Study: HRMS, Attendance & Payroll Platform | Versa Digital",
    metaDescription:
      "Employee records, attendance, leave, timesheets, payroll and self-service app for an IT services company — built by a dedicated Versa Digital team.",
    keywords: ["HRMS development case study", "payroll software development", "timesheet system", "employee self service app"],
    summary:
      "An IT services company replaced spreadsheets and a basic attendance tool with an HRMS covering employee records, attendance, leave, project timesheets, payroll and an employee self-service app.",
    category: "ERP",
    industry: "IT services",
    region: "India",
    deliveryModel: "Dedicated team",
    stack: ["React", "Node.js", "PostgreSQL", "Flutter", "Azure AD SSO"],
    scope: ["Employee master & documents", "Attendance & leave", "Project timesheets", "Payroll with statutory deductions", "Self-service mobile app", "Utilisation reports"],
    challenge: "Timesheets, leave and payroll lived in different spreadsheets, so billing clients and paying staff each took days of reconciliation.",
    approach: [
      "Built timesheets linked to client projects for billing and utilisation.",
      "Automated payroll calculation with statutory deductions.",
      "Delivered single sign-on through the company's Microsoft directory.",
    ],
    outcome: "Payroll and client billing now draw from the same approved timesheets, removing the monthly reconciliation exercise.",
  }),
  project({
    slug: "b2b-ordering-portal-fmcg-distributor",
    title: "B2B Ordering Portal for an FMCG Distributor",
    metaTitle: "Case Study: B2B Ordering Portal Integrated with ERP | Versa Digital",
    metaDescription:
      "Self-service B2B ordering portal for retailers with customer-specific pricing, credit checks and real-time ERP stock sync — built for an FMCG distributor.",
    keywords: ["B2B portal development", "B2B ordering portal case study", "dealer portal ERP integration", "FMCG ordering app"],
    summary:
      "An FMCG distributor gave its retailer customers a self-service ordering portal and app with their own prices, live stock and credit status, syncing orders straight into the ERP.",
    category: "Web & Portals",
    industry: "FMCG distribution",
    region: "India & UAE",
    deliveryModel: "Subcontract",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "ERP REST APIs"],
    scope: ["Retailer login & catalogue", "Customer-specific pricing", "Credit limit checks", "Order sync to ERP", "Order tracking", "Re-order suggestions"],
    challenge: "Orders came in by phone and WhatsApp and were re-keyed into the ERP, causing errors and delays.",
    approach: [
      "Built a portal and PWA reading price lists and stock from the ERP in real time.",
      "Added credit checks before order confirmation.",
      "Worked as a subcontracted delivery team for the distributor's ERP vendor.",
    ],
    outcome: "Retailers place orders themselves at any hour and orders reach the warehouse without manual entry.",
  }),
  project({
    slug: "logistics-shipment-tracking-platform",
    title: "Shipment Tracking & Customer Portal for a Freight Forwarder",
    metaTitle: "Case Study: Freight Forwarding Shipment Tracking Portal | Versa Digital",
    metaDescription:
      "Customer portal for a freight forwarder with shipment milestones, document uploads, quotation requests and carrier tracking integrations.",
    keywords: ["logistics software development", "shipment tracking portal", "freight forwarding software", "logistics customer portal"],
    summary:
      "A freight forwarder launched a customer portal where shippers track shipments by milestone, download documents and request quotations, with carrier tracking pulled in automatically.",
    category: "Web & Portals",
    industry: "Logistics",
    region: "UAE & UK",
    deliveryModel: "White-label",
    stack: ["React", "Python FastAPI", "PostgreSQL", "AWS", "Carrier tracking APIs"],
    scope: ["Shipment milestones", "Document vault", "Quotation requests", "Carrier tracking integration", "Email & WhatsApp alerts"],
    challenge: "Customer service spent much of its day answering 'where is my shipment?' calls and emailing documents.",
    approach: [
      "Integrated carrier tracking feeds and internal milestone updates into one timeline.",
      "Built a secure document vault per shipment.",
      "Delivered white-label for a technology consultancy serving the forwarder.",
    ],
    outcome: "Shippers self-serve status and documents, and customer service focuses on exceptions rather than routine updates.",
  }),
  project({
    slug: "ecommerce-marketplace-erp-integration",
    title: "E-commerce & Marketplace Integration with ERP",
    metaTitle: "Case Study: Shopify, Amazon & Noon Integration with ERP | Versa Digital",
    metaDescription:
      "Order, stock and invoice sync between Shopify, Amazon, Noon and the ERP for a multi-channel retailer — reliable queue-based integration with monitoring.",
    keywords: ["Shopify ERP integration case study", "Amazon Noon integration", "marketplace integration ERP", "multichannel inventory sync"],
    summary:
      "A multi-channel retailer selling on its own store and marketplaces now syncs orders, stock and invoices with its ERP automatically, ending overselling and manual order entry.",
    category: "Web & Portals",
    industry: "Retail & e-commerce",
    region: "UAE & Saudi Arabia",
    deliveryModel: "Direct client",
    stack: ["Node.js", "BullMQ", "Redis", "Shopify API", "Amazon SP-API", "Noon API", "Odoo"],
    scope: ["Order import from all channels", "Central stock sync", "Invoice & VAT posting", "Returns handling", "Failure alerts & retry dashboard"],
    challenge: "Stock was updated on each channel by hand, causing oversells during promotions.",
    approach: [
      "Built a queue-based integration hub with retries and alerting.",
      "Made the ERP the single source of stock truth.",
    ],
    outcome: "Stock updates across channels within minutes and failed syncs are visible and recoverable from a dashboard.",
  }),
  project({
    slug: "field-service-mobile-app",
    title: "Field Service Mobile App for an Equipment Maintenance Company",
    metaTitle: "Case Study: Field Service Management App | Versa Digital",
    metaDescription:
      "Flutter field service app with job dispatch, offline checklists, photos, customer signatures and spare-parts usage synced to the ERP.",
    keywords: ["field service app development", "Flutter app case study", "technician app", "maintenance management app"],
    summary:
      "An equipment maintenance company dispatches jobs to technicians through a mobile app with offline checklists, photos, customer signatures and spare-parts usage flowing back to the ERP.",
    category: "Mobile Apps",
    industry: "Facilities & maintenance",
    region: "UAE",
    deliveryModel: "Subcontract",
    stack: ["Flutter", "Firebase", "Node.js", "PostgreSQL", "ERP APIs"],
    scope: ["Job dispatch & scheduling", "Offline checklists", "Photos & signatures", "Spare-parts consumption", "Service reports PDF"],
    challenge: "Paper job cards were lost or arrived days late, delaying invoicing and hiding parts usage.",
    approach: ["Built an offline-first Flutter app.", "Generated service reports automatically on job completion.", "Delivered under a larger IT vendor's AMC programme."],
    outcome: "Service reports reach customers on job completion and invoicing starts the same day.",
  }),
  project({
    slug: "ai-invoice-document-extraction",
    title: "AI Document Extraction for Accounts Payable",
    metaTitle: "Case Study: AI Invoice Extraction & AP Automation | Versa Digital",
    metaDescription:
      "LLM-powered invoice and document extraction that reads supplier invoices, validates against purchase orders and posts drafts to the ERP for approval.",
    keywords: ["AI invoice processing case study", "document extraction AI", "accounts payable automation", "LLM document processing"],
    summary:
      "A finance team that keyed hundreds of supplier invoices by hand now has an AI pipeline that extracts invoice data, matches it to purchase orders and creates draft bills in the ERP for human approval.",
    category: "AI & Automation",
    industry: "Finance operations",
    region: "UK",
    deliveryModel: "Subcontract",
    stack: ["Python", "LLM APIs", "OCR", "FastAPI", "Azure", "ERP APIs"],
    scope: ["Email inbox ingestion", "Field extraction & validation", "PO / GRN matching", "Exception queue", "Draft bill posting", "Audit trail"],
    challenge: "Invoice entry was slow and error-prone, and month-end close was delayed waiting for data entry.",
    approach: [
      "Combined OCR with an LLM for structured extraction, with confidence scores.",
      "Routed low-confidence and mismatched invoices to a human review queue.",
      "Delivered for a UK consultancy that held the client relationship.",
    ],
    outcome: "Most invoices now arrive in the ERP as draft bills awaiting approval; staff handle exceptions instead of typing every line.",
  }),
  project({
    slug: "whatsapp-ai-agent-customer-support",
    title: "WhatsApp AI Agent for Customer Support & Bookings",
    metaTitle: "Case Study: WhatsApp AI Agent for Support & Bookings | Versa Digital",
    metaDescription:
      "Agentic WhatsApp assistant that answers questions from approved knowledge, checks availability, books appointments and hands over to staff — with full conversation logging.",
    keywords: ["WhatsApp AI agent case study", "AI customer support agent", "agentic AI booking", "WhatsApp chatbot development"],
    summary:
      "A service business deployed a WhatsApp AI agent that answers questions from approved information, checks real availability, books appointments and hands complex conversations to staff.",
    category: "AI & Automation",
    industry: "Services",
    region: "India & UAE",
    deliveryModel: "Direct client",
    stack: ["WhatsApp Business API", "LLM APIs", "RAG", "Node.js", "PostgreSQL"],
    scope: ["Knowledge-grounded answers", "Availability lookup & booking", "Human handover", "Conversation logging", "Admin knowledge editor"],
    challenge: "WhatsApp enquiries piled up outside office hours and were answered the next day.",
    approach: ["Grounded responses in an approved knowledge base with retrieval.", "Restricted the agent to defined tools: availability, booking, handover."],
    outcome: "Enquiries are answered around the clock, and staff pick up only the conversations that need a person.",
  }),
  project({
    slug: "erp-reporting-power-bi-dashboards",
    title: "Management Dashboards on Top of an ERP",
    metaTitle: "Case Study: Power BI Dashboards for ERP Reporting | Versa Digital",
    metaDescription:
      "Data warehouse and Power BI dashboards for sales, margin, inventory ageing and receivables built on ERP data for a multi-company group.",
    keywords: ["ERP dashboard development", "Power BI ERP reporting", "business intelligence case study", "data warehouse ERP"],
    summary:
      "A multi-company group gained daily dashboards for sales, margin, inventory ageing and receivables by moving ERP data into a small warehouse and building Power BI reports on it.",
    category: "AI & Automation",
    industry: "Diversified group",
    region: "UAE & India",
    deliveryModel: "Dedicated team",
    stack: ["PostgreSQL", "dbt", "Python", "Power BI", "Azure"],
    scope: ["ERP data pipelines", "Consolidated multi-company model", "Sales & margin dashboards", "Inventory ageing", "Receivables ageing"],
    challenge: "Group reporting was compiled manually from several company ERPs every month.",
    approach: ["Built nightly pipelines into a consolidated model.", "Delivered role-specific Power BI dashboards."],
    outcome: "Management reviews group performance from daily-refreshed dashboards instead of waiting for month-end packs.",
  }),
  project({
    slug: "legacy-erp-modernisation-dotnet",
    title: "Legacy Desktop ERP Modernisation to the Web",
    metaTitle: "Case Study: Legacy ERP Modernisation to a Web Application | Versa Digital",
    metaDescription:
      "Phased modernisation of a legacy desktop ERP to a modern web application with APIs, preserving business rules and migrating data — delivered as a subcontractor.",
    keywords: ["legacy ERP modernisation", "desktop to web migration", "application modernisation case study", ".NET modernisation"],
    summary:
      "A legacy Windows desktop ERP was modernised module by module into a web application with a clean API layer, while the business kept running on the old system until each module cut over.",
    category: "ERP",
    industry: "Distribution",
    region: "UK",
    deliveryModel: "Subcontract",
    stack: [".NET 8", "React", "SQL Server", "Azure"],
    scope: ["Business-rule extraction", "API layer", "Module-by-module rewrite", "Data migration", "Parallel run & cut-over"],
    challenge: "The original developers had left, the desktop app couldn't be accessed remotely, and every change was risky.",
    approach: ["Documented business rules from code and users.", "Used a strangler pattern so modules moved one at a time.", "Worked as a subcontracted team under a UK IT services firm."],
    outcome: "Users access the system from anywhere through the browser, and changes now ship through automated tests and CI.",
  }),
  project({
    slug: "qa-automation-saas-platform",
    title: "Test Automation for a SaaS Platform",
    metaTitle: "Case Study: QA Test Automation for a SaaS Product | Versa Digital",
    metaDescription:
      "Playwright end-to-end and API regression suites in CI for a SaaS platform — delivered as an independent QA subcontractor.",
    keywords: ["QA automation case study", "Playwright test automation", "SaaS testing outsourcing", "regression testing services"],
    summary:
      "A SaaS product team that relied on manual regression before every release gained Playwright end-to-end and API test suites running in CI on every pull request.",
    category: "QA & Support",
    industry: "SaaS",
    region: "USA",
    deliveryModel: "Subcontract",
    stack: ["Playwright", "TypeScript", "Postman/Newman", "GitHub Actions", "k6"],
    scope: ["Critical-path E2E tests", "API regression suite", "CI integration", "Load testing baseline", "Defect triage"],
    challenge: "Manual regression took days per release and still missed bugs.",
    approach: ["Prioritised critical user journeys for automation first.", "Integrated tests into pull-request checks."],
    outcome: "Regression runs automatically on every change and releases no longer wait for days of manual testing.",
  }),
  project({
    slug: "erp-application-support-amc",
    title: "ERP Application Support (L2/L3) for an IT Vendor's Clients",
    metaTitle: "Case Study: White-Label ERP Support Desk | Versa Digital",
    metaDescription:
      "White-label L2/L3 support for Odoo and ERPNext clients of an IT vendor — ticket handling, bug fixes, minor enhancements and monitoring under SLA.",
    keywords: ["ERP support outsourcing case study", "white label support desk", "Odoo support", "AMC software support"],
    summary:
      "An IT vendor handed its ERP support load to us: we run L2/L3 support for its clients under the vendor's brand, handling tickets, fixes and small enhancements within agreed SLAs.",
    category: "QA & Support",
    industry: "IT services",
    region: "UAE & India",
    deliveryModel: "White-label",
    stack: ["Odoo", "ERPNext", "Freshdesk", "Grafana", "Python"],
    scope: ["Ticket triage & resolution", "Bug fixes", "Minor enhancements", "Server monitoring", "Monthly SLA reports"],
    challenge: "The vendor's developers were pulled off new projects to fix support issues, slowing both.",
    approach: ["Ran a knowledge-transfer phase per client system.", "Operated the support desk under the vendor's brand and email."],
    outcome: "The vendor's own engineers focus on new implementations while clients get consistent support under the same brand.",
  }),
  project({
    slug: "lms-platform-training-academy",
    title: "LMS & Student Portal for a Training Academy",
    metaTitle: "Case Study: LMS and Student Portal Development | Versa Digital",
    metaDescription:
      "Learning management system with courses, live classes, assessments, certificates, payments and admissions CRM for a professional training academy.",
    keywords: ["LMS development case study", "student portal development", "EdTech platform India", "online course platform"],
    summary:
      "A professional training academy launched its own LMS with recorded and live courses, assessments, certificates and online payments, connected to an admissions CRM.",
    category: "Web & Portals",
    industry: "Education",
    region: "India & UAE",
    deliveryModel: "Direct client",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Mux video", "Razorpay", "Zoom API"],
    scope: ["Course catalogue & enrolments", "Video lessons", "Live class scheduling", "Assessments & certificates", "Payments", "Admissions CRM"],
    challenge: "Course content was spread across video links and messaging groups, with enrolments tracked manually.",
    approach: ["Built a branded LMS with secure video.", "Linked enquiries, enrolments and payments in one CRM."],
    outcome: "Students learn, pay and receive certificates in one platform and the academy tracks every enquiry through to enrolment.",
  }),
];

export const projectCategories = ["ERP", "CRM", "Web & Portals", "Mobile Apps", "AI & Automation", "QA & Support"] as const;
