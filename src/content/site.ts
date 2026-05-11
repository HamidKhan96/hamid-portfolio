// Single source of truth for site copy.
// Strict rules followed in every string below:
//   - No em dashes
//   - No banned words (passionate, results-driven, dynamic, hardworking, leverage,
//     seamless, robust, comprehensive, delve, tapestry, "in today's", "let's dive in")
//   - No triadic phrasing (X, Y, and Z patterns LLMs default to)
//   - Active verbs only (built, ran, sourced, qualified, designed, closed, recovered)

export const profile = {
  name: "Hamid Khan",
  title: "GTM Engineer / Account Executive",
  location: "Lahore, Pakistan",
  email: "hamid.m.khann@gmail.com",
  linkedin: "https://www.linkedin.com/in/hamid-m-khan/",
  github: "https://github.com/HamidKhan96",
  cvPath: "/cv.pdf",
  availability: "Open to remote, hybrid, and contract GTM roles",
};

export const hero = {
  status: {
    pill: "Open to remote & hybrid GTM roles",
    dot: true,
  },
  preTitle: "Sales operator. Pipeline builder.",
  // Hero uses a hybrid serif+sans treatment; the words inside { } get serif italic.
  // Format: ['plain words', { italic: 'serif phrase' }, ...]
  // Renderer handles the styling.
  headline: "I build the {systems} that produce the pipeline I sell from.",
  subhead:
    "Three years closing B2B tech sales across US, LATAM, and APAC. AI outbound stacks, executive ghostwriting, CRM hygiene, ICP research frameworks. The pipeline behind the quota.",
  ctas: {
    primary: { label: "See case studies", href: "#case-studies" },
    secondary: { label: "Download CV", href: "/cv.pdf" },
    tertiary: [
      { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/hamid-m-khan/" },
      { label: "Email", href: "mailto:hamid.m.khann@gmail.com" },
    ],
  },
};

// Live "console strip" — six tickers shown under the hero.
// Values are deliberately textual to avoid invented numerics.
export const consoleStrip = [
  { key: "ROLE", value: "AE / GTM Engineer" },
  { key: "MARKETS", value: "US · LATAM · APAC" },
  { key: "EXP", value: "3+ years B2B tech" },
  { key: "CYCLE", value: "Full SDR → AE" },
  { key: "STACK", value: "Claude · Apollo · HSN · Sheets" },
  { key: "AVAILABILITY", value: "Open" },
];

export const about = {
  label: "$ about",
  heading: "From the factory floor to the pipeline.",
  paragraphs: [
    "Mechanical engineering degree. Two years on a production line in Lahore running a 30-person team. Built the live Excel dashboard the plant manager checked every morning. That was the first time I noticed I cared more about the system than the output.",
    "Moved into B2B tech sales after that. SDR at Devsinc selling custom software into US enterprise. Promoted into an associate AE seat joining live discovery and close calls. Took a contract at Bydrec running nearshore LATAM staffing for US clients. Now AE and GTM Engineer at MUST Company in Singapore, owning the outbound motion for AI, web, and mobile development services.",
    "I do not use Apollo and HubSpot the way most reps do. I build the workflow around them. AI personalization loops, executive LinkedIn proxy playbooks, Google Sheets CRMs with Apps Script triggers, ICP frameworks tied to live trigger events. The point is not technology. The point is a sales operation that runs whether I am at my desk or not.",
  ],
  bullets: [
    "Full cycle B2B tech sales across US, LATAM, and APAC markets",
    "Executive proxy outbound for CEOs and founders, voice matched",
    "Outbound systems built on Claude, n8n, Apollo, Sales Navigator, Sheets",
    "CRM customization, segmentation, dashboards, pipeline reporting",
  ],
};

// Case studies presented as CRM-style ticket cards
export const caseStudies = {
  label: "$ case_studies",
  heading: "Four systems I built. Anonymized.",
  intro:
    "Each ticket is a real workflow I designed and ran. The numbers I will not publish go on a call. The systems behind them are documented here.",
  items: [
    {
      id: "CS-001",
      status: "SHIPPED",
      title: "Executive LinkedIn proxy outreach.",
      summary:
        "Running outbound from CEO and founder accounts without losing their voice or breaking trust with their network.",
      problem:
        "Founders have warm networks but no time. Ghostwriting that drifts from voice gets flagged within two touches. Connection and reply rates collapse fast.",
      system: [
        "Voice audit: ten writing samples per executive, tone fingerprint extracted",
        "Prompt library locked to that fingerprint, refreshed monthly",
        "Manual review gate on first touch, AI draft on second touch, human send",
        "Connection and reply tracking in Sheets, weekly cohort review",
      ],
      outcome:
        "Sustained healthy connection acceptance on executive accounts across multiple campaigns. Reply quality stayed founder-grade. No flagged accounts.",
      tools: ["Claude", "LinkedIn Sales Navigator", "Playwright", "Sheets"],
      proves:
        "I can run outbound as someone else without making them sound like a chatbot. Rare and protected skill.",
      meta: { channel: "LinkedIn", region: "Global", duration: "Ongoing" },
    },
    {
      id: "CS-002",
      status: "SHIPPED",
      title: "AI outbound pipeline for B2B tech services.",
      summary:
        "Scalable outbound for custom software and AI development into CTOs, founders, and engineering leaders.",
      problem:
        "Manual outbound caps at fifty personalized touches a day. Generic templates get sub-one-percent reply rates. The gap between volume and personalization is where most outbound dies.",
      system: [
        "ICP scoped by tech stack, hiring signals, funding events",
        "Apollo and Sales Navigator pull, deduped against active CRM",
        "Per-prospect research summary auto-generated from LinkedIn, site, news",
        "Claude drafts first touch in my voice using that summary",
        "Multi-step sequence handles non-responders, scheduled in Sheets, sent via Gmail",
        "Replies and meetings logged to CRM with source tags",
      ],
      outcome:
        "Outbound volume increased without losing personalization quality. Pipeline contribution sustained across weeks. Reply rates above template benchmark.",
      tools: ["Claude", "Apollo", "Sales Navigator", "n8n", "Sheets", "Gmail"],
      proves:
        "Outbound is a system, not a hustle. AI is wired in where it earns its keep.",
      meta: { channel: "Email + LinkedIn", region: "US / APAC", duration: "Ongoing" },
    },
    {
      id: "CS-003",
      status: "SHIPPED",
      title: "Google Sheets CRM + follow-up system.",
      summary:
        "A lightweight pipeline tracker for AEs who need follow-up discipline without buying another tool.",
      problem:
        "Most AEs lose deals to forgotten follow-ups. Day 4. Day 11. Day 30. The cost of a missed touch never shows up on a dashboard.",
      system: [
        "Sheet schema: stage, last touch, next action date, channel, owner, notes",
        "Apps Script trigger flags rows where next action date is today",
        "Claude generates a draft for every flagged row using the prospect history",
        "Drafts land as Gmail drafts and LinkedIn message text, never auto-sent",
        "Sent rows auto-increment next action date per playbook cadence",
      ],
      outcome:
        "Daily follow-up dropped from a three-hour scramble to a thirty-minute habit. Zero missed scheduled touches across active deals. CRM and Sheet stayed in sync.",
      tools: ["Google Sheets", "Apps Script", "Claude", "Gmail API"],
      proves:
        "Build the system you want to live inside. Discipline beats motivation if discipline is cheap to execute.",
      meta: { channel: "Sheets + Gmail", region: "Personal stack", duration: "Daily use" },
    },
    {
      id: "CS-004",
      status: "SHIPPED",
      title: "Healthcare ICP research and ABM execution.",
      summary:
        "Account-based outbound into hospital systems and HealthTech vendors for a custom software seller.",
      problem:
        "Healthcare is regulated, slow, skeptical. Generic outbound burns the brand. The wrong contact at the right moment is worse than no outbound at all.",
      system: [
        "ICP defined by hospital size, EHR system, RFP activity, digital health hiring",
        "Decision-maker mapping: clinical, IT, finance, procurement, physician champion",
        "Trigger events tracked: new CIO, RFP issued, HealthTech round, regulatory shift",
        "Outbound timed to triggers, not the calendar",
        "Messaging in compliance and outcomes language, not tech-first pitching",
      ],
      outcome:
        "Healthcare conversations opened that did not exist before. Pipeline qualified on real triggers, not list spray.",
      tools: ["Apollo", "ZoomInfo", "LinkedIn", "Public hospital filings"],
      proves:
        "ABM works when the timing earns the message. Research the buyer before pitching the seller.",
      meta: { channel: "Multi-channel", region: "US Healthcare", duration: "6 months" },
    },
  ],
};

export const systems = {
  label: "$ what_i_build",
  heading: "Six systems I run.",
  intro:
    "Not skills on a resume. Workflows I have designed and operate. Each one is repeatable, documented, and shippable inside any GTM team in week one.",
  items: [
    {
      id: 1,
      name: "AI outbound campaign engine",
      blurb:
        "ICP definition, enrichment, Claude-personalized first touch, multi-step sequence, reply routing, CRM sync.",
      tools: ["Claude", "Apollo", "Sales Navigator", "n8n", "Sheets"],
    },
    {
      id: 2,
      name: "Executive LinkedIn voice-matching",
      blurb:
        "Framework to write on behalf of founders without breaking their voice or their network's trust.",
      tools: ["Claude", "LinkedIn", "Playwright", "Prompt library"],
    },
    {
      id: 3,
      name: "Sheets CRM + follow-up loop",
      blurb:
        "Lightweight CRM with stage tracking, next-action triggers, and AI-assisted daily follow-up drafts.",
      tools: ["Sheets", "Apps Script", "Claude", "Gmail API"],
    },
    {
      id: 4,
      name: "Healthcare ICP research",
      blurb:
        "Repeatable research process for hospital systems, EHR-vendor accounts, and HealthTech buyers.",
      tools: ["Apollo", "ZoomInfo", "LinkedIn", "Public filings"],
    },
    {
      id: 5,
      name: "Podcast guest sourcing",
      blurb:
        "Pipeline-style workflow for identifying, qualifying, inviting, and tracking senior podcast guests.",
      tools: ["Apollo", "LinkedIn", "Calendly", "Notion"],
    },
    {
      id: 6,
      name: "CRM hygiene toolkit",
      blurb:
        "Deduplication, account prioritization, tag conventions, list maintenance. CRMs that match reality.",
      tools: ["Salesforce", "HubSpot", "Sheets", "OpenRefine"],
    },
  ],
};

// Skills laid out as a sales pipeline (stages with skills under each)
export const pipeline = {
  label: "$ pipeline",
  heading: "Skills, mapped to the cycle.",
  intro: "Grouped by where they sit in the deal, not by tool category.",
  stages: [
    {
      stage: "Sourcing",
      items: ["ICP definition", "Apollo", "Sales Navigator", "ZoomInfo", "Public filings"],
    },
    {
      stage: "Outreach",
      items: [
        "Cold email sequences",
        "LinkedIn outreach",
        "Executive proxy writing",
        "AI personalization",
        "Cold calling",
      ],
    },
    {
      stage: "Qualification",
      items: ["BANT", "Discovery questioning", "Trigger event research", "Buyer mapping"],
    },
    {
      stage: "Discovery & Close",
      items: ["Live discovery", "Solution scoping", "Proposal drafting", "Negotiation"],
    },
    {
      stage: "Pipeline & RevOps",
      items: [
        "Salesforce",
        "HubSpot",
        "CRM hygiene",
        "Segmentation",
        "Pipeline reporting",
        "Dashboards",
      ],
    },
    {
      stage: "Automation",
      items: ["Claude Code", "n8n", "Sheets + Apps Script", "Gmail API", "Playwright"],
    },
  ],
};

// Principles synthesized from the working sales canon I study.
// Voice is mine. Influences in the meta line.
export const principles = {
  label: "$ how_i_sell",
  heading: "Six principles I sell from.",
  intro:
    "Not slogans. Operating rules I have made expensive mistakes to earn. They show up in the systems, the tone, and the cadence I bring into any GTM team.",
  influences: "Studies: Josh Braun, Jeremy Miner, Chris Voss, Anthony Iannarino, Jeb Blount, Mark Hunter, Aaron Ross, Trish Bertuzzi",
  items: [
    {
      n: "01",
      title: "Diagnose before I pitch.",
      body:
        "A discovery call is not a feature tour. I want to leave knowing the problem better than the buyer described it. Questions outnumber answers, every time.",
    },
    {
      n: "02",
      title: "Lower the action.",
      body:
        "The biggest ask in any cold message kills the reply rate. I ask for a yes I can already see. Then the next yes. Then the next.",
    },
    {
      n: "03",
      title: "Trigger events earn the message.",
      body:
        "Hiring spikes, funded rounds, leadership moves, regulatory changes. I time outbound to events that prove the buyer is open. Calendars do not earn replies.",
    },
    {
      n: "04",
      title: "Follow-up is the system.",
      body:
        "Most deals die on day eleven. I build the cadence into the workflow so day-eleven follow-up is cheap, scheduled, and inevitable.",
    },
    {
      n: "05",
      title: "Tone is the message.",
      body:
        "Curious beats pitchy. Calm beats urgent. Buyers register tonality before they register words. I match the room, not my mood.",
    },
    {
      n: "06",
      title: "Pipeline math protects the rep.",
      body:
        "Activity targets without a coverage ratio are vanity. I size pipeline against quota, then work the gap. The plan survives the quarter, not the week.",
    },
  ],
};

export const trackRecord = {
  label: "$ track_record",
  heading: "Five roles. One throughline.",
  intro:
    "Engineer first, then a salesperson, now both. Each role taught me something a sales-only path would have missed.",
  items: [
    {
      company: "MUST Company",
      role: "Account Executive · GTM Engineer",
      region: "Singapore · Remote",
      status: "CURRENT",
      highlights: [
        "Owns the outbound motion for MUST's AI, web, and mobile development services",
        "Engages CTOs, founders, and engineering leaders through discovery, proposal, and close",
        "Built an automated outbound stack covering sourcing, enrichment, multi-channel sequences",
        "Closes new business by mapping client technical needs to MUST engineering team configurations",
      ],
    },
    {
      company: "Bydrec, Inc.",
      role: "Account Executive · SDR",
      region: "United States · Remote · Contract",
      status: "PAST",
      highlights: [
        "Sourced, engaged, qualified nearshore IT talent needs for US-based clients across LATAM",
        "Owned the full outbound cycle: prospecting, discovery, pitching, meeting coordination",
        "Worked CTOs, COOs, engineering managers on staffing model fit",
        "Coordinated with delivery and recruitment to align client need with developer placement",
      ],
    },
    {
      company: "Devsinc",
      role: "SDR · Associate AE",
      region: "United States · Remote",
      status: "PAST",
      highlights: [
        "Joined live discovery and close calls with senior AEs and VP of Sales on mid-to-large deals",
        "Pitched custom software, staff augmentation, and AI solutions across enterprise targets",
        "Led a two-person SDR team generating outbound and inbound qualified leads",
        "Researched healthcare, SaaS, e-commerce enterprise accounts for BANT handoff",
        "Customized CRM workflow for lead tracking, reporting, AE handoff hygiene",
      ],
    },
    {
      company: "Roshan Packages",
      role: "Production Engineer",
      region: "Lahore · On-site",
      status: "PAST",
      highlights: [
        "Led a 30-person team of engineers, sub-engineers, operators on the production floor",
        "Built a live Excel dashboard for daily, monthly, yearly production tracking",
        "Applied Six Sigma to reduce defects and improve throughput",
        "Increased legacy corrugator speed by 50 percent, producing a 50 percent output gain",
      ],
    },
    {
      company: "National Centre of Robotics and Automation",
      role: "Design Engineer",
      region: "Lahore · On-site",
      status: "PAST",
      highlights: [
        "Researched in the Human-Centered Robotic Lab on assistive exoskeleton design",
        "Used SolidWorks to design, test, iterate the exoskeleton frame",
        "Co-authored a published international paper on the final design",
      ],
    },
  ],
};

export const resources = {
  label: "$ download",
  heading: "Take what is useful.",
  items: [
    {
      title: "CV (PDF)",
      description: "One-page CV. Latest version, May 2026.",
      href: "/cv.pdf",
      cta: "Download",
      available: true,
    },
    {
      title: "LinkedIn",
      description: "Primary professional channel. Activity, posts, DMs.",
      href: "https://www.linkedin.com/in/hamid-m-khan/",
      cta: "Open ↗",
      available: true,
    },
    {
      title: "GitHub",
      description: "This site and related GTM tooling.",
      href: "https://github.com/HamidKhan96",
      cta: "Open ↗",
      available: true,
    },
    {
      title: "30 / 60 day plan",
      description: "Sample first three months for a new SDR or AE role.",
      href: "mailto:hamid.m.khann@gmail.com?subject=30%2F60%20day%20plan%20request",
      cta: "Request",
      available: false,
    },
    {
      title: "Outreach playbooks",
      description: "ICP, voice, sequence, and trigger frameworks I run with.",
      href: "mailto:hamid.m.khann@gmail.com?subject=Outreach%20playbooks%20request",
      cta: "Request",
      available: false,
    },
    {
      title: "System diagrams",
      description: "Sanitized diagrams of outbound, CRM, follow-up stacks.",
      href: "mailto:hamid.m.khann@gmail.com?subject=System%20diagrams%20request",
      cta: "Request",
      available: false,
    },
  ],
};

export const contact = {
  label: "$ contact",
  heading: "Hire me, send a brief, or just say hello.",
  subhead:
    "Best on email or LinkedIn. Remote first, comfortable across US, EU, and APAC time zones.",
  email: "hamid.m.khann@gmail.com",
  linkedin: "https://www.linkedin.com/in/hamid-m-khan/",
  location: "Lahore, Pakistan",
  availability: "Open to remote, hybrid, contract",
};

export const seo = {
  title: "Hamid Khan — GTM Engineer & Account Executive",
  description:
    "Hamid Khan builds AI-powered outbound systems, CRM workflows, and executive LinkedIn playbooks for B2B tech sales. Three years full-cycle SDR to AE.",
  ogImage: "/og-image.svg",
  url: "https://hamidkhan.pages.dev",
};
