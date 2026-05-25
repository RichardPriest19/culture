/* ============================================================
   10 ORGANISATIONAL CULTURE MODELS  |  culture-app.js
   ============================================================ */

const ACCENTS = {
  blue:  { main:'#1a4fd6', mid:'#2e63e8', lt:'#dce8ff', bg:'#f0f5ff', cls:'blue'  },
  amber: { main:'#b85c00', mid:'#d06a00', lt:'#fde8cc', bg:'#fff8f0', cls:'amber' },
  teal:  { main:'#006b5e', mid:'#008573', lt:'#ccf0ea', bg:'#f0faf8', cls:'teal'  },
};

const MODELS = [

  // ── SECTION 1: UNDERSTAND ──────────────────────────────
  {
    id:1, section:'understand', accent:'blue', icon:'◈',
    name:"Schein's Three Levels of Culture",
    question:"What are the visible and invisible layers of culture in our organisation?",
    summary:"Edgar Schein's foundational model reveals that culture operates at three distinct depths — from visible artefacts on the surface, through stated values in the middle, to invisible basic assumptions at the core. Most change efforts fail by addressing only the surface layers.",
    tags:['Foundations','Diagnosis','Leadership'],
    roles:['HR Directors','OD Consultants','CEOs','Change Leaders'],
    overview:"Edgar Schein, professor at MIT Sloan School of Management, developed this model over decades of research and consulting work, publishing the definitive account in 'Organisational Culture and Leadership' (1985, with many subsequent editions). It remains the most widely cited academic model of organisational culture and is the essential starting point for any serious culture work. Schein argued that most people misunderstand culture by focusing only on its most visible manifestations.",
    problem:"Leaders often try to change culture by changing visible behaviours — dress codes, office layouts, mission statements. These fail because they don't touch the deeper assumptions that actually drive behaviour. Schein's model explains why culture change is hard and where the real leverage is.",
    components:[
      ["Level 1: Artefacts","The visible, tangible elements of culture. Office layout, dress code, rituals, ceremonies, stories, language, published values. Easy to observe but hard to interpret correctly without understanding the deeper levels."],
      ["Level 2: Espoused Values","The stated beliefs, norms, and values — what the organisation says it believes. Strategy documents, mission statements, codes of conduct. These may or may not reflect actual behaviour."],
      ["Level 3: Basic Assumptions","The unconscious, taken-for-granted beliefs that members of the culture no longer question. These are the true drivers of behaviour. They are the hardest to surface and the hardest to change."],
      ["The Alignment Test","Powerful diagnostic: when Artefacts and Espoused Values are inconsistent (people say X but do Y), it reveals the Basic Assumptions that are actually driving the organisation."],
    ],
    process:[
      "Start with Artefacts: observe and list all visible cultural elements without judging them",
      "Identify Espoused Values: review published values, strategy documents, and interview leaders",
      "Surface Basic Assumptions: run workshops asking 'why do we really do this?' repeatedly until you reach bedrock beliefs",
      "Look for misalignments between levels — these are the most revealing cultural diagnostics",
      "Design change interventions that target Basic Assumptions, not just surface Artefacts",
    ],
    when:["Diagnosing why culture change efforts have failed","Before a major merger or acquisition","Leadership development programmes on culture","Onboarding new senior leaders","Investigating why stated values and actual behaviours diverge"],
    pitfalls:["Assuming that changing Artefacts will change culture — it rarely does on its own","Skipping the Basic Assumptions level because it is hard to surface","Treating the model as a one-time diagnostic rather than an ongoing lens","Not involving people at all levels — frontline staff often have clearer sight of Basic Assumptions than leaders"],
    software:["Miro (culture mapping workshops)","Mentimeter (anonymous assumption surfacing)","Qualtrics (culture surveys)","Notion (culture documentation)"],
  },

  {
    id:2, section:'understand', accent:'blue', icon:'◎',
    name:"The Cultural Web",
    question:"What six elements are holding our current culture in place?",
    summary:"Gerry Johnson and Kevan Scholes's model identifies the six interconnected elements that together define an organisation's cultural paradigm — stories, rituals, symbols, power structures, control systems, and organisational structure — showing exactly what must shift for culture to change.",
    tags:['Diagnosis','Change Planning','Strategy'],
    roles:['Strategy Teams','HR Directors','Consultants','Leadership Teams'],
    overview:"The Cultural Web was developed by Gerry Johnson and Kevan Scholes and first published in their seminal strategy textbook 'Exploring Corporate Strategy' (1992). It emerged from research into why strategic change so often fails despite clear logical rationale. Johnson and Scholes found that six deeply embedded cultural elements form a web that holds the current 'paradigm' (the accepted way of doing things) firmly in place — and any serious change effort must address all six, not just one or two.",
    problem:"Most change programmes focus on org structure and communications while leaving the other five cultural elements untouched. The Cultural Web explains why change doesn't stick — the stories, rituals, and power structures continue to reinforce the old paradigm even as the new strategy is being communicated.",
    components:[
      ["Stories","The narratives that members of the organisation tell each other and outsiders. They encode what is valued and what is punished. Who are the heroes? What failures are remembered?"],
      ["Rituals and Routines","The daily behaviours and actions that signal what is really important. How do meetings run? How is performance reviewed? What gets celebrated?"],
      ["Symbols","The visual and physical representations of the organisation. Office layout, car parking, dress code, language, titles. Who gets the corner office?"],
      ["Power Structures","Who really has power and influence? Formal authority rarely tells the full story. Identify the informal power brokers."],
      ["Control Systems","What gets measured and rewarded? Financial controls, quality systems, performance management. 'What gets measured gets done.'"],
      ["Organisational Structure","Both formal (org chart) and informal (how decisions actually get made). Hierarchical? Flat? Siloed?"],
      ["The Paradigm","The core cultural assumptions at the centre of the web — the summary of 'the way things are done around here'. All six elements reinforce it."],
    ],
    process:[
      "Map the current Cultural Web: for each of the six elements, gather data through interviews, observation, and review of documents",
      "Identify what the current Paradigm is — what story does the web tell?",
      "Map the desired Cultural Web: what needs to be true in each element to support the new strategy?",
      "Identify the gaps between current and desired state in each element",
      "Design specific interventions for each element — all six must shift together",
    ],
    when:["Strategic change planning","Post-merger culture integration","When a new CEO is diagnosing the organisation","Culture transformation programme design","When strategy keeps failing to stick despite good planning"],
    pitfalls:["Addressing only one or two elements and expecting full culture change","Mapping the Cultural Web in a leadership workshop only — involve people across all levels","Treating it as a one-time exercise — culture shifts slowly and monitoring all six elements is an ongoing task","Underestimating the power of Stories — they are often the most powerful and most neglected element"],
    software:["Miro (web mapping)","Mural","FigJam","Notion","PowerPoint (stakeholder presentations)"],
  },

  {
    id:3, section:'understand', accent:'blue', icon:'◇',
    name:"Hofstede's Cultural Dimensions",
    question:"How do national and organisational cultures differ across six measurable dimensions?",
    summary:"Geert Hofstede's landmark research across 70+ countries identified six dimensions on which cultures reliably vary — from Power Distance to Uncertainty Avoidance to Long-Term Orientation — giving leaders a data-driven tool for navigating cross-cultural differences.",
    tags:['Cross-Cultural','Global Teams','Research-Based'],
    roles:['Global HR Leaders','International Managers','Talent Teams','M&A Teams'],
    overview:"Geert Hofstede conducted one of the largest cross-cultural studies ever undertaken, analysing survey data from IBM employees in over 70 countries during the 1960s and 1970s. Published in 'Culture's Consequences' (1980), his work identified four initial dimensions (later expanded to six) that reliably distinguish national cultures. The model has been validated, extended, and replicated dozens of times and is the most cited framework in cross-cultural management research.",
    problem:"When global teams fail, when international expansions underperform, when cross-cultural mergers destroy value, the root cause is usually cultural misunderstanding. Hofstede's dimensions make cultural differences visible and measurable — replacing vague 'cultural fit' concerns with specific, actionable insights.",
    components:[
      ["Power Distance Index (PDI)","The degree to which less powerful members of society accept that power is distributed unequally. High PDI: hierarchical, top-down. Low PDI: flat, consultative. Impacts: how feedback is given, how decisions are made, how leaders should communicate."],
      ["Individualism vs Collectivism (IDV)","High individualism: people prioritise personal goals and identity. High collectivism: group identity and loyalty are primary. Impacts: incentive design, team structures, communication styles."],
      ["Masculinity vs Femininity (MAS)","High masculinity: competition, achievement, and success are dominant values. High femininity: cooperation, quality of life, and care are dominant. Impacts: leadership style, work-life balance expectations, conflict resolution."],
      ["Uncertainty Avoidance Index (UAI)","The degree to which people feel uncomfortable with ambiguity and uncertainty. High UAI: rules, structure, and certainty are valued. Low UAI: flexibility and risk-taking are accepted. Impacts: process design, risk appetite, change management."],
      ["Long-Term vs Short-Term Orientation (LTO)","Long-term: focus on future rewards, perseverance, thrift. Short-term: focus on present, tradition, social norms. Impacts: investment horizon, strategic planning cycles."],
      ["Indulgence vs Restraint (IVR)","Indulgence: free gratification of basic desires is accepted. Restraint: strict social norms suppress gratification. Impacts: work culture, employee wellbeing, social norms."],
    ],
    process:[
      "Use Hofstede Insights' free country comparison tool to assess the dimensions of the cultures your organisation spans",
      "Identify the dimensions with the largest gaps between the cultures you are bridging",
      "For each significant gap, explore the practical implications for leadership, communication, and process",
      "Design specific adaptations to management practices for each cultural context",
      "Train global managers on the dimensions most relevant to their cross-cultural relationships",
    ],
    when:["Planning a market entry into an unfamiliar cultural context","Designing global team structures and processes","M&A due diligence on cultural compatibility","Leadership development for global managers","Investigating cross-cultural team performance issues"],
    pitfalls:["Treating Hofstede's scores as stereotypes about individuals — they describe population-level tendencies, not individual traits","Using only the original four dimensions and ignoring the later additions","Not accounting for generational and industry-level variation within national cultures","Applying national culture data directly to a specific organisation without testing it"],
    software:["Hofstede Insights Country Comparison Tool (free)","Globesmart (Aperian)","Culture Wizard","Tableau (custom culture dashboards)"],
  },

  // ── SECTION 2: CLASSIFY ────────────────────────────────
  {
    id:4, section:'classify', accent:'amber', icon:'▦',
    name:"Competing Values Framework",
    question:"What is our dominant cultural orientation — and is it aligned with our strategy?",
    summary:"Robert Quinn and John Rohrbaugh's research-validated framework that maps every organisational culture across two axes — internal vs external focus and flexibility vs stability — creating four distinct culture types: Collaborate, Create, Control, and Compete.",
    tags:['Culture Types','Strategy Alignment','Assessment'],
    roles:['CEOs','HR Directors','Strategy Teams','OD Practitioners'],
    overview:"The Competing Values Framework (CVF) was developed by Robert Quinn and John Rohrbaugh at the University of Michigan through research into organisational effectiveness criteria. Published in 1983, it has become one of the most widely researched and applied frameworks in organisational culture. Its strength is that it is empirically derived (from research, not theory) and provides both a diagnostic tool (the OCAI assessment) and a strategic alignment tool — connecting culture type directly to effectiveness under different strategic conditions.",
    problem:"Most organisations don't have a clear understanding of what type of culture they actually have, as opposed to the culture they aspire to. The CVF provides an evidence-based diagnostic that creates a shared, honest baseline — replacing generic 'we want a great culture' with a specific, measurable cultural profile.",
    components:[
      ["Collaborate (Clan Culture)","Focus: internal + flexible. Values: teamwork, participation, employee development, consensus. Leader type: mentor, facilitator. Effectiveness through: cohesion and morale. Risk: too internally focused, slow to respond to market."],
      ["Create (Adhocracy Culture)","Focus: external + flexible. Values: innovation, entrepreneurship, agility, risk-taking. Leader type: innovator, entrepreneur. Effectiveness through: breakthrough products and services. Risk: lack of discipline and follow-through."],
      ["Control (Hierarchy Culture)","Focus: internal + stability. Values: process, efficiency, consistency, predictability. Leader type: coordinator, monitor. Effectiveness through: reliable, low-cost delivery. Risk: too rigid, slow to adapt."],
      ["Compete (Market Culture)","Focus: external + stability. Values: results, customer focus, competition, achievement. Leader type: hard driver, competitor. Effectiveness through: market share and revenue. Risk: burns out people, short-term focus."],
      ["Balance","All organisations have elements of all four. The CVF shows the dominant profile. Effective organisations can flex between types as context demands."],
    ],
    process:[
      "Run the OCAI (Organisational Culture Assessment Instrument) survey across the organisation",
      "Plot the current culture profile on the CVF quadrant",
      "Run the same survey asking about the preferred future culture",
      "Identify the gap between current and preferred profile",
      "Assess alignment: does the current or preferred culture support the business strategy?",
      "Design change interventions to shift the balance toward the preferred quadrant",
    ],
    when:["Culture assessment before a strategic shift","Post-merger culture integration planning","Diagnosing performance issues rooted in cultural misalignment","Leadership team effectiveness workshops","Annual people strategy planning"],
    pitfalls:["Treating one culture type as 'best' — all four are effective in the right strategic context","Conducting only a leadership survey and assuming it represents the whole organisation","Not connecting the cultural assessment to strategic imperatives","Trying to shift all four dimensions simultaneously — prioritise one or two shifts"],
    software:["OCAI Online (official CVF assessment tool)","Qualtrics","Culture Amp","Glint","Notion (results synthesis)"],
  },

  {
    id:5, section:'classify', accent:'amber', icon:'◯',
    name:"Handy's Four Culture Types",
    question:"Is our culture shaped by power, rules, tasks, or individuals?",
    summary:"Charles Handy's accessible four-type model — Power Culture, Role Culture, Task Culture, and Person Culture — maps organisational cultures using Greek god metaphors, making culture conversations accessible to non-specialists and giving leaders a clear language for diagnosis and change.",
    tags:['Culture Typology','Leadership','Diagnosis'],
    roles:['Line Managers','HR Business Partners','Leadership Teams','MBA Students'],
    overview:"Charles Handy introduced his four culture types in 'Gods of Management' (1978) and later 'Understanding Organisations' (1976). Handy used Greek gods as metaphors for each type — Zeus (Power), Apollo (Role), Athena (Task), and Dionysus (Person) — making the framework unusually accessible and memorable. Although less data-driven than Quinn's CVF, Handy's framework is widely used in leadership development and management education because its metaphors make culture tangible for non-specialists.",
    problem:"Culture conversations are often abstract and hard to engage with. Handy's model gives leaders a concrete, memorable vocabulary to describe and discuss the culture they observe — making culture a practical management conversation rather than an HR abstraction.",
    components:[
      ["Power Culture (Zeus — The Spider's Web)","Power radiates from a central figure or small elite. Decisions are fast. Rules are secondary to relationships with the centre. Strength: speed and decisive action. Weakness: dependent on the quality of the central leader; can be exploitative."],
      ["Role Culture (Apollo — The Temple)","Power comes from position and formal authority. Rules, procedures, and job descriptions define everything. Strength: consistency, reliability, scalability. Weakness: slow to adapt, stifles initiative, frustrating for talented individuals."],
      ["Task Culture (Athena — The Net)","Power comes from expertise and what you know, not who you are. Teams form around problems and disband when solved. Strength: collaborative, flexible, good for innovation. Weakness: hard to control costs, inefficient at scale."],
      ["Person Culture (Dionysus — The Cluster)","The individual is the point. The organisation exists to serve the people within it. Common in professional partnerships (law firms, consultancies). Strength: retains top talent, high individual motivation. Weakness: very difficult to manage, low organisational loyalty."],
    ],
    process:[
      "Discuss each culture type with the leadership team — which metaphor best describes the current culture?",
      "Gather input from multiple levels of the organisation to test the leadership team's perception",
      "Identify whether the current culture type suits the organisation's current strategic and operational needs",
      "Explore whether different parts of the organisation have different culture types (common in large organisations)",
      "Design leadership and management interventions appropriate to the desired culture type",
    ],
    when:["Leadership development and management training programmes","Diagnosing why a particular management approach isn't working","Helping new managers understand the environment they are operating in","Team effectiveness workshops","Post-reorganisation culture analysis"],
    pitfalls:["Oversimplifying — most organisations blend culture types across different functions and levels","Using Handy's framework as the sole diagnostic without quantitative data","Assuming the 'right' culture type is Task Culture — all four are appropriate in different contexts","Not acknowledging that culture types often need to shift as an organisation scales"],
    software:["Miro (group classification workshops)","Mentimeter (voting on culture types)","Any whiteboard or flipchart","Notion","Survey tools for gathering broad input"],
  },

  {
    id:6, section:'classify', accent:'amber', icon:'◆',
    name:"Deal and Kennedy's Cultural Model",
    question:"How do risk and speed of feedback combine to create our cultural character?",
    summary:"Terrence Deal and Allan Kennedy's 1982 framework identifies four culture types based on two axes — the degree of risk in decisions and the speed of feedback on results — producing a model that links cultural type directly to industry dynamics and market conditions.",
    tags:['Culture Typology','Industry Context','Risk'],
    roles:['Business Leaders','Strategy Teams','HR Directors','Consultants'],
    overview:"Terrence Deal and Allan Kennedy published 'Corporate Cultures: The Rites and Rituals of Corporate Life' in 1982, one of the first popular business books to argue that culture was a manageable strategic asset. Their framework was developed from research into successful companies across multiple industries and produced one of the first empirically grounded culture typologies. The model is valuable because it explicitly connects culture to the external business environment — particularly the level of risk and speed of market feedback.",
    problem:"Many culture frameworks ignore the external environment, implying a 'best' culture exists. Deal and Kennedy's model shows that different industries and markets naturally produce and require different cultures — helping leaders understand whether their culture is fit for their specific competitive environment.",
    components:[
      ["Tough-Guy, Macho Culture (High Risk, Fast Feedback)","Common in: financial trading, entertainment, sport, advertising, construction. Values: individualism, competition, quick results. Heroes are big risk-takers who succeed or fail visibly and fast. Risk: short-term focus, high burnout, poor teamwork."],
      ["Work Hard / Play Hard Culture (Low Risk, Fast Feedback)","Common in: sales organisations, consumer goods, retail, restaurant chains. Values: volume of activity, persistence, customer focus, team celebration. Risk: quantity over quality, superficiality."],
      ["Bet the Company Culture (High Risk, Slow Feedback)","Common in: aerospace, pharmaceutical R&D, oil exploration, capital projects. Values: long-term thinking, thoroughness, technical expertise. Major decisions take years to validate. Risk: slow to adapt, can miss market shifts."],
      ["Process Culture (Low Risk, Slow Feedback)","Common in: government, utilities, heavily regulated industries, large bureaucracies. Values: technical perfection, consistency, protection from error. Risk: loses sight of outcomes, becomes obsessed with process for its own sake."],
    ],
    process:[
      "Assess your industry context: how high-risk are your major decisions? How quickly does the market give feedback?",
      "Identify your current culture type from the four quadrants",
      "Assess whether the culture type is appropriate for your strategic context",
      "Identify specific cultural artefacts (rituals, heroes, stories) that reinforce the current type",
      "Design interventions to reinforce beneficial aspects and mitigate the specific risks of your type",
    ],
    when:["Industry-level culture benchmarking","Understanding why a culture feels mismatched to business needs","M&A culture due diligence across industries","Strategy reviews where cultural enablers are being assessed","Leadership development in context of industry dynamics"],
    pitfalls:["Treating the four types as fixed and immutable — industries evolve and culture must evolve with them","Using this framework alone without supplementary diagnostic tools","Confusing industry-level tendencies with the actual culture of a specific organisation","Neglecting that most large organisations span multiple culture types across divisions"],
    software:["Miro","PowerPoint","Culture Amp (supplementary survey data)","Notion","Any facilitation tool for workshop discussion"],
  },

  {
    id:7, section:'classify', accent:'amber', icon:'★',
    name:"Denison Organisational Culture Model",
    question:"How do our culture traits link directly to measurable business performance?",
    summary:"Daniel Denison's research-backed model identifies four culture traits — Mission, Adaptability, Involvement, and Consistency — and demonstrates through 25 years of data that each trait directly predicts specific business outcomes including profitability, growth, and employee engagement.",
    tags:['Performance Link','Research-Based','Measurement'],
    roles:['CEOs','HR Directors','Strategy Teams','Finance Leaders'],
    overview:"Daniel Denison developed his model at the University of Michigan over decades of research, first publishing it in 'Corporate Culture and Organisational Effectiveness' (1990). What distinguishes the Denison model from other culture frameworks is its explicit, data-validated link between specific culture traits and measurable business outcomes. Denison's research database, built from assessments of thousands of organisations, shows precisely which culture traits predict sales growth, market share, quality, employee satisfaction, and overall return on investment.",
    problem:"Culture sceptics in the C-suite often ask: 'How does culture relate to the numbers?' Denison's model provides a direct answer — specific culture traits have statistically demonstrable relationships to specific business outcomes, making the ROI of culture investment concrete and defensible.",
    components:[
      ["Mission (Stability + External Focus)","Clear sense of purpose and long-term direction. Sub-traits: Strategic Direction, Goals and Objectives, Vision. Links to: profitability, return on assets, investment returns."],
      ["Consistency (Stability + Internal Focus)","Shared values and strong organisational identity creating coordination and integration. Sub-traits: Core Values, Agreement, Coordination and Integration. Links to: quality, cycle time reduction, error reduction."],
      ["Involvement (Flexibility + Internal Focus)","Building human capability, ownership, and commitment at all levels. Sub-traits: Empowerment, Team Orientation, Capability Development. Links to: employee satisfaction, engagement, innovation."],
      ["Adaptability (Flexibility + External Focus)","Translating customer and market demands into action. Sub-traits: Creating Change, Customer Focus, Organisational Learning. Links to: sales growth, market share, new product development."],
    ],
    process:[
      "Run the Denison Organisational Culture Survey across the organisation",
      "Review the 'circumplex' — the visual output showing scores on all four traits",
      "Identify the weakest traits relative to your strategic priorities",
      "Use Denison's benchmark database to compare your scores to high-performing organisations in your industry",
      "Design targeted culture interventions for the weakest traits",
      "Re-survey at 12–18 months to measure change",
    ],
    when:["Making the business case for culture investment to the board","Linking culture improvement to specific financial and operational KPIs","Benchmarking organisational culture against industry peers","Annual people strategy and culture health reviews","Post-merger integration culture alignment"],
    pitfalls:["Running the survey without leadership commitment to act on the results","Treating the four traits as equally important regardless of strategic context — prioritise based on strategy","Not benchmarking against the Denison database — scores are only meaningful relative to norms","Expecting quick results — culture shifts take 2–4 years to show up in financial performance data"],
    software:["Denison Consulting (official survey and benchmarking tool)","Culture Amp","Qualtrics","Glint","Power BI (results dashboards)"],
  },

  // ── SECTION 3: CHANGE ──────────────────────────────────
  {
    id:8, section:'change', accent:'teal', icon:'↺',
    name:"Lewin's Change Model",
    question:"How do we move our organisation from its current culture to a new one without losing stability?",
    summary:"Kurt Lewin's elegant three-stage model — Unfreeze, Change, Refreeze — provides the foundational logic for all planned culture change: first disrupt the status quo, then introduce new behaviours and values, then lock the new culture in place before the old patterns reassert themselves.",
    tags:['Change Management','Culture Shift','Foundations'],
    roles:['Change Leaders','CEOs','HR Directors','Transformation Teams'],
    overview:"Kurt Lewin, a pioneering social psychologist, developed his change model in the 1940s as part of broader research into group dynamics and social change. Published posthumously in 'Field Theory in Social Science' (1951), the model is deliberately simple — Lewin believed that complex social phenomena could be understood through elegant, minimal frameworks. Despite its age, the three-stage model remains one of the most practically applied change management frameworks because its core logic — you must first unsettle the existing equilibrium before change can take root — is universally valid.",
    problem:"Most culture change efforts fail not because the new culture was wrong but because the old culture was never properly unfrozen. Leaders announce the new direction and begin training on new behaviours while the fundamental assumptions, incentive systems, and power structures of the old culture remain fully intact. Lewin's model explains why this fails and what to do instead.",
    components:[
      ["Stage 1: Unfreeze","Create the motivation and readiness to change. Disrupt the current equilibrium. Methods: communicate a compelling case for change, create psychological safety to admit problems, surface the costs of the status quo, challenge current assumptions. This stage is most often skipped or rushed — and it is the most important."],
      ["Stage 2: Change (Transition)","The actual movement from old behaviours and values to new ones. Provide new knowledge, new models, new role models. Support experimentation with new behaviours. Manage the anxiety and uncertainty of the transition state. This is the longest and most difficult stage."],
      ["Stage 3: Refreeze","Lock the new culture in place before old patterns reassert themselves. Methods: update reward and recognition systems to reinforce new behaviours, embed new culture in structures and processes, celebrate visible successes, tell new stories. Without Refreezing, the organisation will drift back."],
      ["Driving and Restraining Forces","Lewin's Force Field Analysis: identify the forces pushing for change (driving forces) and those resisting it (restraining forces). Successful change requires either strengthening driving forces or weakening restraining forces — or ideally both."],
    ],
    process:[
      "Conduct a Force Field Analysis: what is driving the need for change? What is resisting it?",
      "Design the Unfreeze phase: what needs to happen to make the organisation ready and willing to change?",
      "Design the Change phase: what specific behaviours, beliefs, and systems need to shift? What support will people need?",
      "Design the Refreeze phase: which structures, processes, incentives, and stories will lock the new culture in place?",
      "Sequence interventions across all three stages and assign ownership",
    ],
    when:["Planning a major culture transformation programme","Post-merger integration planning","Responding to an organisational crisis that requires cultural reset","Designing leadership development that creates lasting behaviour change","Any planned change programme where sustainability of change is a concern"],
    pitfalls:["Skipping Unfreeze — the most common and most costly mistake","Refreezing prematurely before the new behaviours are genuinely embedded","Not conducting Force Field Analysis before beginning the change","Underestimating how long the Change (transition) stage takes — typically 18–36 months for deep culture change","Treating Lewin as a simple checklist rather than a dynamic framework requiring ongoing adjustment"],
    software:["Miro (Force Field Analysis templates)","Change management platforms: Prosci/ADKAR tools","Microsoft Planner / Asana (change programme tracking)","Notion (change documentation)","Viva Insights (Microsoft) for monitoring behaviour change"],
  },

  {
    id:9, section:'change', accent:'teal', icon:'◉',
    name:"Kotter's 8-Step Change Model",
    question:"What eight steps must we follow to create lasting, large-scale culture change?",
    summary:"John Kotter's research-based, sequenced framework for large-scale change — from creating urgency to anchoring change in culture — built from analysis of over 100 major change efforts, revealing the eight specific failure points that cause most change initiatives to collapse.",
    tags:['Change Leadership','Large-Scale Change','Sequencing'],
    roles:['CEOs','Senior Leadership','Change Programme Directors','HR Leaders'],
    overview:"John Kotter, Professor at Harvard Business School, developed his 8-step model from research into over 100 organisations attempting major transformations. Published in the Harvard Business Review in 1995 and expanded in the book 'Leading Change' (1996), the model identified the eight most common mistakes that cause change to fail — and sequenced eight steps to avoid them. It became one of the most widely implemented change management frameworks in the world and was updated in 'Accelerate' (2014) to address the need for organisations to change faster.",
    problem:"Large-scale culture change fails in predictable, avoidable ways. Kotter's research identified the specific sequences and conditions that most organisations get wrong. The 8-step model is not a theory — it is an empirically derived sequence of the critical success factors for major organisational change.",
    components:[
      ["Step 1: Create Urgency","Establish a compelling case that change is necessary now. Without genuine urgency felt by a critical mass of leaders and employees, change stalls. The urgency must be real — manufactured urgency is quickly seen through."],
      ["Step 2: Build a Guiding Coalition","Assemble a powerful, cross-functional group committed to leading the change. This is not the same as the existing leadership team. Requires people with authority, expertise, credibility, and leadership capacity."],
      ["Step 3: Form a Strategic Vision","Create a clear, compelling vision of the future state. Without a vivid, credible vision, change efforts dissolve into confusing and incompatible individual initiatives."],
      ["Step 4: Enlist a Volunteer Army","Communicate the vision to as many people as possible. Address concerns honestly. Enable people to act on the vision by providing context and removing ambiguity."],
      ["Step 5: Enable Action by Removing Barriers","Identify and remove obstacles: structures, systems, skills gaps, and managers who undermine the change. Empower people to act."],
      ["Step 6: Generate Short-Term Wins","Plan for and create visible, unambiguous wins within the first 12–18 months. These prove the change is working and silence the sceptics."],
      ["Step 7: Sustain Acceleration","Consolidate gains and produce more change. Use increasing credibility to tackle bigger problems. Keep the urgency high to prevent complacency."],
      ["Step 8: Institute Change","Anchor new approaches in the culture. Show how new behaviours and attitudes have improved performance. Articulate the connections between new behaviours and success until they replace the old norms."],
    ],
    process:[
      "Assess readiness: do you have genuine urgency and a committed coalition before proceeding?",
      "Do not skip steps or rush through them — Kotter's research shows that skipping steps creates problems that require going back anyway",
      "Assign clear ownership for each step",
      "Plan for short-term wins from Day 1 — identify specific visible proof points that will be visible within 6–12 months",
      "Build a communication strategy that runs throughout all 8 steps",
    ],
    when:["Major strategic transformation programmes","Post-merger integration driving cultural alignment","Responding to an existential threat requiring rapid cultural shift","Digital transformation where cultural change is a prerequisite","Any change programme lasting 18 months or more"],
    pitfalls:["Skipping Step 1 (urgency) and Step 2 (coalition) — these are the most commonly skipped and most critical","Treating it as a linear checklist — later steps often need revisiting as earlier ones evolve","Declaring victory too early (between Steps 6 and 7) — the most common point of failure","Underestimating the importance of Step 8 — without anchoring, all gains unravel within 3–5 years"],
    software:["Microsoft Project / Monday.com (programme tracking)","Prosci change management tools","Slack / Microsoft Teams (coalition communication)","Culture Amp (culture measurement at each stage)","Tableau / Power BI (short-term wins dashboards)"],
  },

  {
    id:10, section:'change', accent:'teal', icon:'⬡',
    name:"Spiral Dynamics",
    question:"Through what developmental stages does an organisation's value system evolve?",
    summary:"Clare Graves's research, developed by Don Beck and Chris Cowan into Spiral Dynamics, maps how individual and collective value systems evolve through predictable developmental stages — offering leaders a framework for understanding why people at different 'levels' respond so differently to the same cultural change initiative.",
    tags:['Values Evolution','Developmental','Leadership'],
    roles:['Executive Leaders','OD Practitioners','Culture Consultants','Leadership Coaches'],
    overview:"Spiral Dynamics is based on the research of Professor Clare Graves, who from the 1950s to the 1970s studied how human values and world views evolve in response to changing life conditions. Don Beck and Chris Cowan synthesised Graves's work into the Spiral Dynamics model, published in 1996. It has been applied to organisational culture by leaders including Nelson Mandela's post-apartheid South Africa transition. Ken Wilber later integrated it into Integral Theory. While more complex than most culture frameworks, it is uniquely powerful for understanding why culture change meets such varied and seemingly irrational resistance.",
    problem:"Leaders often assume everyone experiences a culture change in the same way. Spiral Dynamics reveals that people operating from different value systems (or 'vmemes') are literally perceiving the organisation and its change through different psychological lenses — which is why the same communication lands completely differently with different people.",
    components:[
      ["Beige (Survival)","Basic survival drives. Rare in modern organisations except in extreme crisis conditions."],
      ["Purple (Tribal/Safety)","Tribal belonging, tradition, loyalty to the group. Common in family businesses and communities. Change is threatening to the tribe's safety."],
      ["Red (Power/Action)","Power, conquest, immediate gratification, heroism. Common in start-ups and aggressive sales cultures. Responds to strength and decisiveness."],
      ["Blue (Order/Purpose)","Rules, structure, right and wrong, discipline, duty. Common in government, military, traditional corporations. Change must appeal to duty and correctness."],
      ["Orange (Achievement)","Success, results, optimisation, science, meritocracy. Dominant in most modern businesses. Responds to evidence, incentives, and rational argument."],
      ["Green (Community)","Belonging, consensus, human development, sustainability, equality. Growing in progressive organisations. Change must be participative and values-driven."],
      ["Yellow (Systemic/Flex)","Systems thinking, integration of multiple perspectives, functional flexibility. Rare but growing in complexity-aware organisations."],
      ["Turquoise (Holistic)","Holistic, global consciousness. Very rare. Represents the integration of all previous systems."],
    ],
    process:[
      "Assess the dominant value systems operating across different levels and functions of the organisation",
      "Map the cultural change initiative: which vmeme is it designed for? Does it speak to the vmemes actually present?",
      "Design multiple communication strategies for the same change, tailored to the dominant vmeme of each audience",
      "Identify whether the change requires a vmeme transition (e.g. from Blue to Orange) — these are fundamentally harder and slower than same-vmeme improvements",
      "Use Spiral Dynamics to coach leaders on adapting their style to different value systems",
    ],
    when:["Diagnosing why culture change communications are failing with specific groups","Designing change communications for a highly diverse organisation","Executive coaching on adaptive leadership style","Post-merger integration where two very different value systems are colliding","Long-term organisational development strategy"],
    pitfalls:["Using Spiral Dynamics to label or judge people rather than understand them","Assuming higher stages are 'better' — each stage is the right adaptive response to specific life conditions","Applying the model without trained facilitation — it is complex and easily misapplied","Treating vmemes as fixed — people and organisations operate across multiple stages simultaneously"],
    software:["No dedicated software — primarily used in facilitated workshops","Miro (spiral mapping)","Integral Life Practice tools","Notion","Executive coaching platforms"],
  },
];

// ── HELPERS ─────────────────────────────────────────────
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

// ── PROGRESS BAR ────────────────────────────────────────
function initProgress() {
  const bar = $('#topBar');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    bar.style.width = (window.scrollY / (h.scrollHeight - h.clientHeight) * 100) + '%';
  }, { passive: true });
}

// ── NAV ──────────────────────────────────────────────────
function initNav() {
  const nav     = $('#nav');
  const toTop   = $('#toTop');
  const burger  = $('#burger');
  const mob     = $('#mobMenu');
  const links   = $$('.nav-link[data-s]');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    toTop.classList.toggle('show', y > 700);

    // Nav accent colour by section
    const classify = $('#sec-classify');
    const change   = $('#sec-change');
    nav.classList.toggle('at-classify', classify && y >= classify.offsetTop - 80);
    nav.classList.toggle('at-change',   change   && y >= change.offsetTop   - 80);

    // Active link
    let cur = '';
    $$('.section[id], #overview').forEach(s => {
      if (s.offsetTop - 100 <= y) cur = s.id;
    });
    links.forEach(l => l.classList.toggle('active', l.dataset.s === cur));
  }, { passive: true });

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mob.classList.toggle('open');
  });
  $$('.mob-link').forEach(l => l.addEventListener('click', () => {
    burger.classList.remove('open');
    mob.classList.remove('open');
  }));
}

// ── HERO CARDS ───────────────────────────────────────────
function buildHeroCards() {
  const grid = $('#heroCards');
  if (!grid) return;
  const picks = [1, 4, 8, 9, 3, 7];
  picks.forEach(id => {
    const m = MODELS.find(x => x.id === id);
    if (!m) return;
    const a = ACCENTS[m.accent];
    const card = document.createElement('div');
    card.className = 'hgc';
    card.innerHTML = `<div class="hgc-num" style="color:${a.main}">Model 0${m.id}</div><div class="hgc-name">${m.name}</div>`;
    card.addEventListener('click', () => openModal(m.id));
    grid.appendChild(card);
  });
}

// ── MODEL CARDS ──────────────────────────────────────────
function buildCards() {
  const map = { understand:'grid-understand', classify:'grid-classify', change:'grid-change' };
  MODELS.forEach((m, i) => {
    const grid = $('#' + map[m.section]);
    if (!grid) return;
    const a = ACCENTS[m.accent];
    const section = grid.closest('.section');

    const card = document.createElement('div');
    card.className = 'model-card';
    card.style.transition = `opacity .5s ${i % 4 * 80}ms, transform .5s ${i % 4 * 80}ms, box-shadow .25s, border-color .25s`;

    card.innerHTML = `
      <div class="card-stripe"></div>
      <div class="card-body">
        <div class="card-top">
          <span class="card-num">Model 0${m.id}</span>
          <span class="card-icon">${m.icon}</span>
        </div>
        <div class="card-name">${m.name}</div>
        <div class="card-question">${m.question}</div>
        <p class="card-summary">${m.summary}</p>
        <div class="card-tags">${m.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
        <div class="card-footer">
          <span class="card-roles">${m.roles.slice(0,2).join(' · ')}</span>
          <button class="card-btn" data-id="${m.id}">Full Model</button>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(m.id));
    grid.appendChild(card);
  });
}

// ── INTERSECTION OBSERVER ────────────────────────────────
function initObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  $$('.model-card').forEach(c => obs.observe(c));
}

// ── OVERVIEW GRID ────────────────────────────────────────
function buildOverview() {
  const grid = $('#ovGrid');
  if (!grid) return;
  const colors = { understand:ACCENTS.blue.main, classify:ACCENTS.amber.main, change:ACCENTS.teal.main };
  MODELS.forEach(m => {
    const c = colors[m.section];
    const cell = document.createElement('div');
    cell.className = 'ov-cell';
    cell.innerHTML = `
      <div class="ov-bar" style="background:${c}"></div>
      <div>
        <div class="ov-n" style="color:${c}55">0${m.id} — ${m.section.toUpperCase()}</div>
        <div class="ov-name">${m.name}</div>
        <div class="ov-q">${m.question}</div>
      </div>
    `;
    cell.addEventListener('click', () => openModal(m.id));
    grid.appendChild(cell);
  });
}

// ── MODAL ────────────────────────────────────────────────
function openModal(id) {
  const m = MODELS.find(x => x.id === id);
  if (!m) return;
  const a = ACCENTS[m.accent];

  $('#modalContent').innerHTML = `
    <div class="mc-stripe" style="background:${a.main}"></div>
    <div class="mc-head">
      <div class="mc-eyebrow" style="color:${a.main}">Model 0${m.id} — ${m.section.charAt(0).toUpperCase()+m.section.slice(1)} Culture</div>
      <div class="mc-title">${m.name}</div>
      <div class="mc-q">${m.question}</div>
      <div class="mc-tags">${m.tags.map(t => `<span class="mc-tag" style="color:${a.main};border-color:${a.main}44;background:${a.main}0d">${t}</span>`).join('')}</div>
    </div>
    <div>
      <div class="mc-label" style="color:${a.main}">Overview</div>
      <p class="mc-text">${m.overview}</p>

      <div class="mc-label" style="color:${a.main}">The Problem It Solves</div>
      <p class="mc-text">${m.problem}</p>

      <div class="mc-label" style="color:${a.main}">Core Components</div>
      <table class="mc-table">
        <thead><tr>
          <th style="color:${a.main}">Component</th>
          <th style="color:${a.main}">Description</th>
        </tr></thead>
        <tbody>${m.components.map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</tbody>
      </table>

      <div class="mc-label" style="color:${a.main}">How to Apply It</div>
      <ul class="mc-list">${m.process.map(p => `<li>${p}</li>`).join('')}</ul>

      <div class="mc-label" style="color:${a.main}">When to Use It</div>
      <ul class="mc-list">${m.when.map(w => `<li>${w}</li>`).join('')}</ul>

      <div class="mc-label" style="color:${a.main}">Common Pitfalls</div>
      <ul class="mc-list">${m.pitfalls.map(p => `<li>${p}</li>`).join('')}</ul>

      <div class="mc-label" style="color:${a.main}">Who Uses It</div>
      <div class="mc-pills" style="margin-bottom:1.5rem">${m.roles.map(r => `<span class="mc-pill" style="border-top:2px solid ${a.main}">${r}</span>`).join('')}</div>

      <div class="mc-label" style="color:${a.main}">Tools and Software</div>
      <div class="mc-pills">${m.software.map(s => `<span class="mc-pill">${s}</span>`).join('')}</div>
    </div>
  `;

  $('#modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  $('#modalPanel').scrollTop = 0;
}

function closeModal() {
  $('#modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', e => { if (e.target === $('#modalOverlay')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ── BACK TOP ─────────────────────────────────────────────
function initBackTop() {
  $('#toTop').addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

// ── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initProgress();
  initNav();
  buildHeroCards();
  buildCards();
  buildOverview();
  initModal();
  initBackTop();
  requestAnimationFrame(() => requestAnimationFrame(initObserver));
});
