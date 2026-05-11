// Single source of truth for site copy. Edit here, commit, push, Cloudflare rebuilds.

export const profile = {
  name: "Hamid Khan",
  title: "GTM Engineer | Account Executive | AI Outbound Systems Builder",
  location: "Lahore, Pakistan",
  email: "hamid.m.khann@gmail.com",
  linkedin: "https://www.linkedin.com/in/hamid-m-khan/",
  github: "https://github.com/HamidKhan96",
  cvPath: "/cv.pdf",
  availability: "Open to remote and hybrid GTM, SDR, AE, and GTM Engineering roles",
};

export const hero = {
  eyebrow: "Sales operator. Pipeline builder.",
  headline: "GTM Engineer & Account Executive building AI-powered outbound systems.",
  subhead:
    "Three years selling B2B tech. I run the full cycle and build the pipeline infrastructure underneath it. ICP research, AI personalization, CRM hygiene, executive outreach.",
  primaryCta: { label: "See proof of work", href: "#case-studies" },
  secondaryCta: { label: "Download CV", href: "/cv.pdf" },
  tertiaryLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hamid-m-khan/" },
    { label: "Email", href: "mailto:hamid.m.khann@gmail.com" },
  ],
};

export const metrics = [
  { value: "3+", label: "Years B2B tech sales" },
  { value: "Full cycle", label: "SDR to AE motion" },
  { value: "Exec proxy", label: "CEO and founder LinkedIn outreach" },
  { value: "6+", label: "Outbound systems built" },
  { value: "ABM", label: "CRM hygiene and segmentation" },
  { value: "AI native", label: "Workflows on Claude, n8n, Sheets" },
];

export const about = {
  heading: "From mechanical engineering to GTM systems.",
  paragraphs: [
    "I started in mechanical engineering. Bronze medalist at University of Central Punjab. Spent two years on a factory floor running a 30 person team and building Excel dashboards that ran live production data.",
    "Then I moved into B2B tech sales and stayed. SDR at Devsinc selling custom software and team augmentation into US enterprise. Promoted into an associate AE role joining live discovery and closing calls. Picked up a contract at Bydrec running nearshore LATAM staffing for US clients. Now Account Executive and GTM Engineer at MUST Company in Singapore, owning the outbound motion for AI, web, and mobile development services.",
    "The engineering background never left. I do not just use Apollo and HubSpot. I build the systems around them. AI personalization workflows, executive LinkedIn proxy playbooks, Google Sheets CRMs with follow up automation, ICP research frameworks. The point is repeatability. A salesperson should not be the bottleneck of their own pipeline.",
  ],
  bullets: [
    "Full cycle B2B tech sales across US, LATAM, and APAC markets",
    "Executive proxy outreach for CEOs and founders, voice matched",
    "Outbound systems built on Claude, n8n, Apollo, Sales Navigator, Sheets",
    "CRM customization, segmentation, dashboards, and pipeline reporting",
  ],
};

export const systems = [
  {
    slug: "ai-outbound-campaigns",
    title: "AI Outbound Campaign Systems",
    blurb:
      "End to end workflow for ICP research, prospect enrichment, AI personalized first touches, multi step follow ups, reply tracking, and CRM sync.",
    tools: ["Claude", "Apollo", "Sales Navigator", "n8n", "Google Sheets"],
  },
  {
    slug: "executive-linkedin-voice",
    title: "Executive LinkedIn Voice-Matching Playbook",
    blurb:
      "Framework for writing on behalf of CEOs and founders without breaking voice, tone, or credibility. Used across four LinkedIn accounts.",
    tools: ["Claude", "LinkedIn", "Playwright", "Prompt library"],
  },
  {
    slug: "sheets-crm-followup",
    title: "Google Sheets CRM + Follow-Up Automation",
    blurb:
      "Lightweight CRM with stage tracking, next action dates, and AI assisted follow up drafts. Built for daily outreach discipline, not enterprise reporting.",
    tools: ["Google Sheets", "Apps Script", "Claude", "Gmail API"],
  },
  {
    slug: "healthcare-icp-research",
    title: "Healthcare ICP Research Framework",
    blurb:
      "Repeatable research process for identifying healthcare decision makers, regulatory triggers, and buying signals across hospital systems and HealthTech vendors.",
    tools: ["Apollo", "ZoomInfo", "LinkedIn", "Public filings"],
  },
  {
    slug: "podcast-guest-sourcing",
    title: "Podcast Guest Sourcing System",
    blurb:
      "Workflow for identifying, qualifying, inviting, and tracking senior podcast guests. Treats guest booking like a pipeline, not a favor request.",
    tools: ["Apollo", "LinkedIn", "Calendly", "Notion"],
  },
  {
    slug: "crm-hygiene-segmentation",
    title: "CRM Hygiene + Segmentation Toolkit",
    blurb:
      "System for keeping a CRM usable. Deduplication, account prioritization, tagging conventions, list maintenance, and pipeline reports that actually reflect reality.",
    tools: ["Salesforce", "HubSpot", "Sheets", "OpenRefine"],
  },
];

export const caseStudies = [
  {
    id: "executive-linkedin-proxy",
    label: "Case Study 01",
    title: "Executive LinkedIn proxy outreach.",
    summary:
      "Running outbound from CEO and founder accounts without losing their voice or breaking trust with their network.",
    problem:
      "Founders and CEOs have warm networks but no time. Generic ghostwritten messages get flagged within two touches. Connection acceptance and reply rates collapse fast when the voice drifts.",
    system: [
      "Voice audit on the executive: ten samples of their writing, tone fingerprint extracted",
      "Prompt library tuned to that fingerprint, refreshed monthly with new examples",
      "Manual review gate on every first touch, AI draft second touch, human send",
      "Connection acceptance and reply tracking in a Sheet, weekly cohort reporting",
    ],
    outcome:
      "Sustained high connection acceptance on executive accounts across multiple campaigns. Reply quality stayed founder grade. No flagged or restricted accounts.",
    tools: ["Claude", "LinkedIn Sales Navigator", "Playwright", "Sheets"],
    proves:
      "I can run outreach as someone else without making them sound like a chatbot. That is a rare and protected skill.",
  },
  {
    id: "ai-outbound-pipeline",
    label: "Case Study 02",
    title: "AI outbound pipeline for B2B tech services.",
    summary:
      "Scalable outbound for custom software and AI development services into CTOs, founders, and engineering leaders.",
    problem:
      "Manual outbound caps at ~50 personalized touches a day. Generic templates get sub one percent reply rates. The gap between volume and personalization is where most outbound dies.",
    system: [
      "ICP defined by tech stack, hiring signals, and recent funding events",
      "Apollo and Sales Navigator pull, deduped against existing CRM",
      "Per prospect research summary generated from LinkedIn, company site, recent news",
      "Claude generates first touch using a prompt locked to my voice and the prospect's specific context",
      "Multi step sequence handles non responders, scheduled in Sheets, sent through Gmail",
      "Replies and meetings logged back to CRM with attribution tags",
    ],
    outcome:
      "Outbound volume increased without losing personalization quality. Pipeline contribution sustained across multiple weeks. Reply rates above template benchmark.",
    tools: ["Claude", "Apollo", "Sales Navigator", "n8n", "Sheets", "Gmail"],
    proves:
      "I treat outbound like a system, not a hustle. AI is wired in where it earns its keep, not sprayed across the workflow.",
  },
  {
    id: "sheets-crm-followup",
    label: "Case Study 03",
    title: "Google Sheets CRM + follow-up system.",
    summary:
      "A lightweight pipeline tracker for AEs who need follow up discipline without buying another tool.",
    problem:
      "Most AEs do not lose deals because they cannot close. They lose deals because they forget to follow up on day 4, day 11, day 30. The cost of a forgotten follow up is invisible on the dashboard.",
    system: [
      "Sheet schema: deal stage, last touch, next action date, channel, owner, notes",
      "Apps Script trigger flags rows where next action date is today",
      "Each morning, a Claude draft is generated for every flagged row using the prospect's history",
      "Drafts land as Gmail drafts and LinkedIn message text, never auto sent",
      "Sent rows get next action date auto incremented per playbook cadence",
    ],
    outcome:
      "Daily follow up discipline became a 30 minute habit instead of a 3 hour scramble. Zero missed scheduled touches across active deals. CRM and Sheet stayed in sync.",
    tools: ["Google Sheets", "Apps Script", "Claude", "Gmail API"],
    proves:
      "I build the system I want to operate inside. Discipline beats motivation, but only if the discipline is cheap to execute.",
  },
  {
    id: "healthcare-icp-abm",
    label: "Case Study 04",
    title: "Healthcare ICP research and ABM execution.",
    summary:
      "Account based outbound into hospital systems and HealthTech vendors for a custom software services seller.",
    problem:
      "Healthcare is regulated, slow, and skeptical. Generic outbound burns the brand. The right contact at the wrong moment is worse than no outbound at all.",
    system: [
      "ICP defined by hospital size, EHR system, recent RFP activity, and digital health hiring",
      "Decision maker mapping: clinical, IT, finance, procurement, and physician champions",
      "Trigger events tracked: new CIO, RFP issued, funded HealthTech round, regulatory shift",
      "Outbound timed to triggers, not calendars",
      "Messaging keeps compliance and outcomes language, not tech-first pitching",
    ],
    outcome:
      "Healthcare conversations opened that did not exist before. Pipeline qualified on real triggers, not list spray. Brand respected by the buyer side.",
    tools: ["Apollo", "ZoomInfo", "LinkedIn", "Public hospital filings"],
    proves:
      "I research the buyer before I pitch the seller. ABM works when the timing earns the message.",
  },
];

export const skillsGroups = [
  {
    name: "Sales & GTM",
    items: [
      "Account Based Marketing",
      "Outbound prospecting",
      "Inbound qualification",
      "BANT qualification",
      "Executive outreach",
      "Cold calling",
      "Discovery calls",
      "Pipeline management",
      "Negotiation",
      "Account research",
    ],
  },
  {
    name: "AI & Automation",
    items: [
      "AI assisted personalization",
      "Prompt workflows",
      "Email sequence generation",
      "Lead enrichment workflows",
      "Google Sheets automation",
      "Follow up systems",
      "n8n workflows",
      "Claude Code",
    ],
  },
  {
    name: "CRM & RevOps",
    items: [
      "Salesforce",
      "HubSpot",
      "CRM hygiene",
      "Segmentation",
      "Deduplication",
      "Pipeline reporting",
      "Dashboards",
      "List management",
    ],
  },
  {
    name: "Tools",
    items: [
      "LinkedIn Sales Navigator",
      "Apollo",
      "ZoomInfo",
      "HubSpot",
      "Salesforce",
      "Google Workspace",
      "Microsoft Office",
      "Gmail API",
      "Apps Script",
    ],
  },
];

export const experience = [
  {
    company: "MUST Company",
    role: "Account Executive | GTM Engineer",
    region: "Singapore, Remote",
    highlights: [
      "Owns the outbound motion for AI, web, and mobile development services",
      "Engages CTOs, founders, and engineering leaders through discovery, proposal, and close",
      "Built an automated outbound stack: ICP sourcing, enrichment, multi step email and LinkedIn sequences",
      "Closes new business by mapping client technical needs to MUST engineering team configurations",
    ],
  },
  {
    company: "Bydrec, Inc.",
    role: "Account Executive | Sales Development Representative",
    region: "United States, Remote, Contract",
    highlights: [
      "Sourced, engaged, and qualified nearshore IT talent needs for US-based clients across LATAM",
      "Owned the full outbound cycle: prospecting, discovery, pitching, and meeting coordination",
      "Worked directly with CTOs, COOs, engineering managers, and founders on staffing model fit",
      "Coordinated with internal delivery and recruitment teams to align client needs with developer placements",
    ],
  },
  {
    company: "Devsinc",
    role: "SDR | Associate Account Executive",
    region: "United States, Remote",
    highlights: [
      "Joined live discovery and closing calls with senior AEs and the VP of Sales on mid to large deals",
      "Pitched custom software development, staff augmentation, and AI solutions across enterprise targets",
      "Led a 2 person SDR team generating qualified leads through outbound and inbound channels",
      "Researched healthcare, SaaS, and e-commerce enterprise accounts for BANT qualified handoffs",
      "Customized CRM workflows to streamline lead tracking, reporting, and AE handoff hygiene",
    ],
  },
  {
    company: "Roshan Packages",
    role: "Production Engineer",
    region: "Lahore, Pakistan",
    highlights: [
      "Led a 30 person team of engineers, sub engineers, and operators on the production floor",
      "Built a live Excel dashboard for daily, monthly, and yearly production tracking",
      "Applied Six Sigma to reduce defects and improve throughput",
      "Increased legacy corrugator speed by 50 percent, producing a 50 percent daily output gain",
    ],
  },
  {
    company: "National Centre of Robotics and Automation",
    role: "Design Engineer",
    region: "Lahore, Pakistan",
    highlights: [
      "Researched in the Human Centered Robotic Lab on assistive exoskeleton design",
      "Used SolidWorks to design, test, and iterate the exoskeleton frame",
      "Co-authored a published international paper on the final design",
    ],
  },
];

export const resources = [
  {
    title: "CV",
    description: "Full one page CV in PDF.",
    href: "/cv.pdf",
    cta: "Download PDF",
    available: true,
  },
  {
    title: "LinkedIn",
    description: "Primary professional channel. Activity, posts, and DMs.",
    href: "https://www.linkedin.com/in/hamid-m-khan/",
    cta: "Open profile",
    available: true,
  },
  {
    title: "GitHub",
    description: "Source for this site and related GTM tooling.",
    href: "https://github.com/HamidKhan96",
    cta: "View repos",
    available: true,
  },
  {
    title: "30 / 60 day plan",
    description: "Sample first three months for a new SDR or AE role.",
    href: "mailto:hamid.m.khann@gmail.com?subject=30/60%20day%20plan%20request",
    cta: "Request a copy",
    available: false,
  },
  {
    title: "Outreach playbooks",
    description: "ICP, voice, sequence, and trigger frameworks I run with.",
    href: "mailto:hamid.m.khann@gmail.com?subject=Outreach%20playbooks%20request",
    cta: "Request a copy",
    available: false,
  },
  {
    title: "GTM systems",
    description: "Sanitized diagrams of the outbound, CRM, and follow up stacks.",
    href: "mailto:hamid.m.khann@gmail.com?subject=GTM%20systems%20request",
    cta: "Request a copy",
    available: false,
  },
];

export const contact = {
  heading: "Open to GTM, SDR, AE, and GTM Engineer roles.",
  subhead:
    "Remote first. Comfortable across US, EU, and APAC time zones. Best reached on email or LinkedIn.",
  email: "hamid.m.khann@gmail.com",
  linkedin: "https://www.linkedin.com/in/hamid-m-khan/",
  location: "Lahore, Pakistan",
  availability: "Open to remote, hybrid, and contract",
};

export const seo = {
  title: "Hamid Khan — GTM Engineer & Account Executive",
  description:
    "Hamid Khan is a GTM Engineer and Account Executive building AI-powered outbound systems for B2B tech sales. Full-cycle SDR to AE experience, executive LinkedIn proxy, and CRM systems.",
  ogImage: "/og-image.svg",
  url: "https://hamidkhan.pages.dev",
  twitter: "",
};
