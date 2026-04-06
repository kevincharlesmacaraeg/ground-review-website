/**
 * Ground Review — RFP 26-039AS
 * Auto-builds all 9 sheet tabs with headers and pre-filled content.
 *
 * HOW TO USE:
 *  1. Go to sheets.google.com → create a new blank spreadsheet
 *  2. Extensions → Apps Script
 *  3. Delete any existing code, paste this entire file
 *  4. Click Run (▶) — approve permissions when prompted
 *  5. Go back to the sheet — all tabs will be populated
 *  6. File → Share → "Anyone with the link" → Viewer
 *  7. Copy the Sheet ID from the URL and paste into index.html
 */

function buildSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // ── helpers ──────────────────────────────────────────────────
  function getOrCreate(name) {
    return ss.getSheetByName(name) || ss.insertSheet(name);
  }
  function write(sheet, data) {
    sheet.clearContents();
    if (!data.length) return;
    const range = sheet.getRange(1, 1, data.length, data[0].length);
    range.setValues(data);
    // Bold the header row
    sheet.getRange(1, 1, 1, data[0].length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, data[0].length);
  }

  // ── 1. config ─────────────────────────────────────────────────
  write(getOrCreate('config'), [
    ['key', 'value'],
    ['cover_eyebrow',    'RFP No. 26-039AS &nbsp;/&nbsp; City of Corona Economic Development'],
    ['cover_sub',        'Programming &amp; Operating Services'],
    ['cover_statement',  '"The art of shaping the space in-between — where community, culture, and commerce converge."'],
    ['submitted_by',     'Ground Review, LLC\\nIrvine, CA 92614'],
    ['submitted_to',     'City of Corona\\nEconomic Development Dept.'],
    ['proposal_date',    'April 14, 2026'],
    ['contact',          'hello@groundreview.com\\n17322 Murphy Ave, Irvine CA'],
    ['firm_intro',       'Ground Review is a California-licensed real estate brokerage, design, and development practice with a singular focus: creating mixed-use environments where community, culture, and commerce thrive together.'],
    ['team_intro',       "A lean, experienced team with deep roots in Southern California's experiential real estate landscape. Each member brings direct, hands-on expertise in the specific disciplines The Hub. requires."],
    ['workplan_intro',   'Ground Review understands The Hub. as more than a venue — it is an urban living room for Downtown Corona. Our approach activates the space with intention: programming that serves residents, drives foot traffic for tenants, and establishes The Hub. as a regional destination.'],
    ['value_intro',      "Ground Review proposes a hybrid compensation model that aligns our incentives with The Hub.'s success — protecting the City's downside while rewarding performance through shared upside."],
    ['commitment_intro', "The Hub. is not a contract. It's a community. Ground Review exists precisely to build places like this — and we are committed to making it one of the most vibrant destinations in the Inland Empire."],
    ['lab_title',        'LAB Holding, LLC — Director of Real Estate &amp; Finance'],
    ['lab_body',         'Before founding Ground Review, Principal Roman Ciuni served as Director of Real Estate and Finance at LAB Holding, LLC — one of Southern California\'s most celebrated creators of experiential mixed-use environments. He was responsible for the acquisition, development, leasing, and programming of landmark properties, each of which mirrors the scope of The Hub. programming challenge.'],
    ['fee_note',         "Ground Review's detailed Labor Hour Estimate and Fee Proposal — including hourly rate schedule by classification, task-level labor hour breakdown, and total Maximum Not-to-Exceed fee — is submitted as a separate document per RFP Section V.9, uploaded to PlanetBids as the Cost File. All rates include printing, mileage, telephone, mailing, and incidental expenses. No additional charges will be assessed."],
    ['closing_headline', 'Ready to shape the space<br><em style="color:var(--sand);">in-between.</em>'],
    ['closing_body',     'Ground Review formally acknowledges receipt of all addenda and confirms this proposal remains valid for 90 days from the submission date. All certifications, insurance requirements, non-collusion declarations, and required forms are submitted as part of this proposal package via PlanetBids.'],
    ['signature_name',   'Roman Ciuni'],
    ['signature_title',  'Principal · Ground Review, LLC'],
    ['footer_tagline',   'The Art of Shaping the Space In-Between'],
    ['footer_contact',   'hello@groundreview.com<br>17322 Murphy Avenue<br>Irvine, CA 92614<br><a href="https://www.groundreview.com">www.groundreview.com</a>'],
  ]);

  // ── 2. stats ──────────────────────────────────────────────────
  write(getOrCreate('stats'), [
    ['value', 'label'],
    ['20+', 'Years Combined\\nReal Estate Leadership'],
    ['3',   'Iconic SoCal\\nMixed-Use Activations'],
    ['10+', 'Tenant Placements\\nAcross Orange County'],
    ['1',   'Michelin Star Tenant\\nSecured & Placed'],
  ]);

  // ── 3. firm ───────────────────────────────────────────────────
  write(getOrCreate('firm'), [
    ['label', 'value', 'body', 'wide'],
    ['Firm Name',         'Ground Review, LLC',           'California-licensed commercial real estate brokerage, design, and community development practice.', ''],
    ['Principal Office',  'Irvine, California',           '17322 Murphy Avenue, Irvine, CA 92614\\nhello@groundreview.com', ''],
    ['Organization Type', 'Limited Liability Company',    'California-licensed. Active in good standing. No pending litigation, bankruptcy, or planned closures.', ''],
    ['Core Capabilities', 'Full-Service Practice',        'Placemaking · Tenant Curation · Programming & Events · Brokerage · Design Development · Land Acquisition · Marketing & Branding', ''],
    ['Mission', '"A disciplined and studied approach to land development that is both culturally and fiscally productive — enriching lives and creating better places through thoughtful design, development, and tenant curation."', '', 'TRUE'],
  ]);

  // ── 4. projects ───────────────────────────────────────────────
  write(getOrCreate('projects'), [
    ['name', 'location', 'tag1', 'tag2', 'tag3', 'tag4', 'body', 'relevance'],
    [
      'City Center Motel',
      'Long Beach, California',
      'Tenant Curation', 'F&B', 'Mixed-Use', 'Community Destination',
      'Paloma Communities engaged Ground Review to identify a best-in-class restauranteur for the redevelopment of the historic City Center Motel in downtown Long Beach. Ground Review curated and secured Chef Phil Pretty — owner of Heritage LB — to develop a multi-concept culinary destination: <em>OR Bagels</em> (walk-up gourmet deli + coffee) and <em>Olive and Rose</em> (neo-bistro, seasonal tasting menu). Chef Pretty subsequently earned Long Beach\'s first Michelin star, validating Ground Review\'s curatorial instincts.',
      'Directly relevant: tenant curation for a mixed-use destination, collaboration with a property owner, and elevating a community corridor through food + culture — identical to The Hub. mandate.',
    ],
    [
      'Smoke & Fire / Villains Brewery',
      'Anaheim & Long Beach, California',
      'Multi-Location', 'Brewery + Distillery', 'Placemaking', 'Packing District',
      'Ground Review secured three landmark locations for the Smoke &amp; Fire group across Southern California, including the 13,000 sf Villains Brewery campus in the Anaheim Packing District — featuring a brewhouse, shipping container beer garden, swimming pool, and cocktail bar. Each location required complex lease negotiations, placemaking vision, and community activation strategy.',
      "Directly relevant: activating large-format, multi-use outdoor spaces in downtown settings — comparable to The Hub.'s Backyard/patio and event-capable open areas.",
    ],
    [
      'Rye Goods Bakery',
      'Newport Beach, Laguna Beach & Tustin, CA',
      'Multi-Site Rollout', 'Site Selection', 'Design & Execution', 'OC Markets',
      "Ground Review supported Rye Goods' expansion into three of Orange County's most sought-after locales — Lido Marina Village (Newport Beach), Downtown Laguna Beach, and a central baking facility in Tustin. Services included site identification, design advisory, and full construction and opening process management.",
      "Relevant to GR's ability to manage multiple tenant relationships simultaneously, support vendor logistics, and execute programming across distinct community environments.",
    ],
  ]);

  // ── 5. team ───────────────────────────────────────────────────
  write(getOrCreate('team'), [
    ['initials','name','title','bio','cred1','cred2','cred3','cred4','cred5','participation_label','participation_pct','role_tag'],
    [
      'RC', 'Roman Ciuni', 'Finance + Real Estate · Principal',
      'Roman leads real estate, financing, business development, and brokerage for Ground Review. With 20+ years in commercial real estate — including CBRE, Marcus & Millichap, NAI Capital, and LAB Holding as Director of Real Estate — he brings unmatched experience in mixed-use project acquisition, development, and community activation. He was directly responsible for the LAB Anti-Mall, Anaheim Packing District, and The Camp.',
      'B.A. Music Performance, University of Southern California',
      'Director of Real Estate & Finance, LAB Holding LLC (2015–)',
      'Former broker: CBRE, Marcus & Millichap, NAI Capital',
      'Specialist in experiential retail & mixed-use development',
      'Irvine, CA (30 min from Corona)',
      'Participation Level — Primary (Oversight, Strategy, City Liaison)',
      '90', 'Primary · Project Lead',
    ],
    [
      'JH', 'Jason House', 'Leasing + Retail Strategy',
      'Jason leads leasing, tenant relations, and experiential retail strategy, bringing a social-cultural lens to project development. He directly leased the LAB Anti-Mall, The Camp, and the Anaheim Packing District. He co-founded Project Potential, a social enterprise in rural India focused on community development — experience that directly informs his approach to inclusive, community-driven programming and vendor curation.',
      'Finance & Social Business, Wharton School, U. of Pennsylvania',
      'Direct leasing lead: LAB Anti-Mall, The Camp, Anaheim Packing District',
      'Founder, Project Potential (community enterprise, India)',
      'Specializes in social-cultural placemaking + tenant fit',
      'Laguna Beach, CA',
      'Participation Level — Primary (Vendor Curation, Programming, Markets)',
      '85', 'Primary · Leasing + Curation',
    ],
  ]);

  // ── 6. workplan ───────────────────────────────────────────────
  write(getOrCreate('workplan'), [
    ['num','title','subtitle','duration','description','d1_title','d1_desc','d2_title','d2_desc','d3_title','d3_desc','d4_title','d4_desc'],
    [
      '01','Discovery & Immersion','Weeks 1–4 · Roman Ciuni (lead) + Full Team','Weeks 1–4',
      "Before programming, we listen. Ground Review will conduct structured discovery to understand Corona's demographic profile, The Hub.'s existing tenant needs, the surrounding downtown business ecosystem, and community aspirations — informing every subsequent decision.",
      'Community Audit','Demographic & cultural landscape assessment for Downtown Corona',
      'Tenant Interviews','One-on-one sessions with all Hub. tenants to understand traffic patterns & needs',
      'Site Assessment','Backyard capacity mapping, flow analysis, permit landscape review',
      'Competitive Review','Regional event programming analysis — what\'s missing in the market',
    ],
    [
      '02','Programming Architecture','Weeks 3–8 · Jason House (lead) + Roman Ciuni','Weeks 3–8',
      'Drawing from discovery findings, we develop a full annual programming calendar — structured around weekly activations, monthly events, and signature seasonal moments. Every event tier is designed to serve a distinct audience while building cumulative destination identity.',
      'Annual Calendar','52-week programming plan: weekly, monthly, seasonal + signature events',
      'Weekly Activations','Live music, DJ nights, trivia, fitness, community mixers — recurring rhythms',
      'Monthly Markets','Artisan, vintage, makers, cultural celebrations, food festivals',
      'Signature Events','Concert series, holiday festivals, art walks, movie nights, farmers market',
    ],
    [
      '03','Vendor & Sponsor Activation','Weeks 6–12 · Jason House (lead)','Weeks 6–12',
      "Ground Review's vendor network and sponsorship development capabilities transform programming from cost centers into revenue opportunities. We identify, negotiate, and manage vendor agreements — and develop tiered corporate sponsorship packages aligned to The Hub.'s identity.",
      'Vendor Roster','Curated food truck, pop-up, and artisan vendor network (screened for fit)',
      'Sponsorship Packages','Title, presenting, and supporting sponsor tiers with clear ROI metrics',
      'Farmers Market','Vendor recruitment, agricultural coordination, regulatory compliance',
      'Revenue Model','Ticketing, vendor fees, and sponsorship revenue tracking systems',
    ],
    [
      '04','Launch & Ongoing Operations','Month 3 → Contract Duration · Full Team','Month 3 → Ongoing',
      'Execution with consistency. Ground Review manages all operational dimensions: permit coordination, event staffing, vendor logistics, security, compliance, social media, marketing collateral, and attendance tracking — so The Hub. runs like a well-programmed machine.',
      'Operations Management','Permit coordination, compliance, staffing, vendor oversight',
      'Marketing Execution','Social media management, digital + print collateral, City co-marketing',
      'Attendance Tracking','Foot traffic metrics, social engagement reporting, tenant impact',
      'City Communication','Monthly reporting, open-book financials, and proactive updates',
    ],
    [
      '05','Reporting & Continuous Improvement','Quarterly · Roman Ciuni (lead)','Quarterly, Ongoing',
      'Ground Review believes in full transparency and data-driven iteration. Quarterly performance reviews against City-established metrics will be presented to the City\'s Representative — with honest assessment and a forward-looking programming adjustment plan.',
      'Quarterly Reports','Attendance, revenue, sponsorship, social growth, tenant impact analysis',
      'Budget Reconciliation','Detailed cost/revenue accounting against approved budget',
      'Annual Reset','Full programming calendar review + next-year planning with City',
      'Performance Metrics',"Aligned to City's Vendor Performance Evaluation Form criteria",
    ],
  ]);

  // ── 7. timeline ───────────────────────────────────────────────
  write(getOrCreate('timeline'), [
    ['milestone', 'deliverable', 'lead'],
    ['Week 1–2',   'Kickoff meeting with City · Site walkthrough · Tenant interviews begin',              'Roman Ciuni'],
    ['Week 3–4',   'Community audit complete · Competitive analysis delivered',                           'Full Team'],
    ['Week 5–6',   'Draft annual programming calendar submitted to City for review',                      'Jason House'],
    ['Week 7–8',   'Vendor outreach begins · Sponsorship packages developed',                             'Jason House'],
    ['Week 9–10',  'First event pilot executed · Farmers market vendor recruitment underway',             'Jason House'],
    ['Week 11–12', 'Marketing plan + social media launch · Full operational calendar confirmed',          'Full Team'],
    ['Month 3+',   'Full weekly programming cadence active · Monthly reporting to City begins',           'Roman Ciuni'],
    ['Quarterly',  'Performance review vs. metrics · Programming adjustments',                            'Roman Ciuni'],
  ]);

  // ── 8. metrics ────────────────────────────────────────────────
  write(getOrCreate('metrics'), [
    ['icon', 'title', 'description'],
    ['📊', 'Attendance Numbers',    'Monthly foot traffic tracking by event type, with quarterly trend analysis and year-over-year comparison.'],
    ['📅', 'Annual Events',         'Committed to a minimum number of weekly activations, monthly events, and signature seasonal programming annually.'],
    ['💼', 'Sponsorship Revenue',   'Total corporate and community sponsorship dollars secured, tracked transparently against annual targets.'],
    ['🛒', 'Vendor Participation',  'Number of vendors engaged across markets, pop-ups, and food truck programming — with quality screening maintained.'],
    ['📈', 'Tenant Sales Impact',   'Event-correlated sales lift tracking for Hub. tenants where measurable — collaborative reporting with tenant operators.'],
    ['🤝', 'Community Engagement',  'Qualitative and survey-based community satisfaction metrics, cultural diversity of programming, and neighborhood participation.'],
    ['📱', 'Social Media Growth',   'Monthly follower growth, engagement rate, and reach — tracked across platforms with documented benchmarks.'],
    ['💰', 'Net Revenue Performance','Full financial transparency: gross revenue, expenses, and net performance reported monthly and reconciled quarterly.'],
  ]);

  // ── 9. pillars ────────────────────────────────────────────────
  write(getOrCreate('pillars'), [
    ['num', 'title', 'body'],
    ['01', 'Culturally Grounded Programming', "Every event we produce considers Corona's diverse community — multi-generational, multicultural, family-forward. We don't program for demographics. We program for people."],
    ['02', 'Tenant-First Mentality',          "The Hub.'s tenants are our partners, not our competition. Every programming decision is made with their success in mind — driving foot traffic, increasing dwell time, and building loyal repeat visitors."],
    ['03', 'Full Financial Transparency',     'Open books, monthly. Ground Review believes the City should have complete visibility into every dollar earned and spent. Accountability is not a requirement — it\'s how we operate.'],
  ]);

  // ── rename default Sheet1 if it still exists ─────────────────
  const sheet1 = ss.getSheetByName('Sheet1');
  if (sheet1) ss.deleteSheet(sheet1);

  // ── done ──────────────────────────────────────────────────────
  SpreadsheetApp.getUi().alert(
    '✅ Sheet built!\n\n' +
    '1. File → Share → "Anyone with the link" → Viewer\n' +
    '2. Copy the Sheet ID from the URL\n' +
    '3. Paste it into index.html where it says YOUR_SHEET_ID_HERE'
  );
}
