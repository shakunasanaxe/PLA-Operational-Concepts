/* Glossary content. Definitions are paraphrased from the sources named on each entry.
   Fields: id, term, zh, py, theme, short, def (array of paragraphs), why, practice {t, s}, related, src, dia
   dia is the name of a diagram in diagrams.js, optionally with an argument: ['izNodes', 'info'] */
window.SOURCES = {
  rand: { short: 'RAND', title: 'Burke, Gunness, Cooper and Cozad, People’s Liberation Army Operational Concepts, RAND Research Report RR-A394-1 (2020)' },
  cna: { short: 'CNA', title: 'David M. Finkelstein, The PLA’s New Joint Doctrine: The Capstone of the New Era Operations Regulations System, CNA Occasional Paper (September 2021)' },
  sms: { short: 'Strategy 2020', title: 'Science of Military Strategy, 2020 edition (Zhanlüexue), CASI translation (January 2022)' },
  bjorge: { short: 'Huai Hai', title: 'Gary J. Bjorge, Moving the Enemy: Operational Art in the Chinese PLA’s Huai Hai Campaign, Leavenworth Paper No. 22, Combat Studies Institute Press' },
  wtc: { short: 'Takshashila WTC', title: 'Anushka Saxena, Assessing Operations and ‘Jointness’ in the PLA Western Theater Command, Takshashila Discussion Document 2024-07 (May 2024)' },
  plaaf: { short: 'CASI PLAAF', title: 'Xiaoke Qi and Kenneth W. Allen, The Image that the PLAAF Drew for Itself in 2025, China Aerospace Studies Institute (November 2026)' },
};

window.THEMES = [
  { id: 'guidance', name: 'Strategic guidance', blurb: 'The Party’s instructions on what kind of war the PLA must prepare for.' },
  { id: 'stages', name: 'Modernisation', blurb: 'Mechanisation, informatisation and intelligentisation, and how they relate.' },
  { id: 'fight', name: 'How the PLA fights', blurb: 'The operational concepts that turn guidance into campaigns.' },
  { id: 'heritage', name: 'Operational art', blurb: 'Older ideas about manoeuvre and annihilation that still shape the vocabulary.' },
  { id: 'doctrine', name: 'Doctrine and documents', blurb: 'How the PLA writes down and layers its thinking.' },
];

window.CONCEPTS = [
  /* ================================================================ strategic guidance */
  { id: 'peoples-war', term: 'People’s War', zh: '人民战争', py: 'rénmín zhànzhēng', theme: 'guidance',
    short: 'Mao’s founding concept: absorb an invader in a long war of mass mobilisation and guerrilla methods, then counter-attack.',
    def: ['People’s War guided the PLA from the founding of the PRC into the early 1980s. Mao told the army to prepare for war that was early, large and possibly nuclear, and to meet an invader with active defence in the form of guerrilla warfare that wore the enemy down and set the conditions for a counter-offensive.',
      'From the mid to late 1970s the idea was adjusted to People’s War under Modern Conditions. The emphasis moved to winning early battles nearer the borders, so that a transition to offensive operations could be quicker, and to relying on China’s new nuclear capability to deter a more powerful opponent.'],
    why: 'The phrase survives in political speech long after the doctrine moved on, so it is worth knowing which sense a Chinese text intends.',
    related: ['active-defence', 'lure-in-deep', 'strategic-guidelines', 'local-war'], src: ['rand'], dia: 'guidelines' },

  { id: 'active-defence', term: 'Active defence', zh: '积极防御', py: 'jījí fángyù', theme: 'guidance',
    short: 'The PLA’s long-standing strategy: defensive in its strategic aim, but often offensive in how campaigns and battles are fought.',
    def: ['Active defence traces back to Mao’s military writings, in which the Red Army tired an invader by trading space for time. Deng Xiaoping’s version pushed the defensive perimeter away from the coastal economic centres, and from Jiang Zemin to Xi Jinping it has grown into a mix of offensive, defensive and deterrent concepts reaching further from China’s periphery and into space and cyberspace.',
      'The key point for a reader is the split between levels of war. The strategy is defensive at the strategic level, since Chinese texts stress resisting aggression and defending sovereignty, but it is often offensive at the operational and tactical levels. The 2020 strategy textbook adds that deterrence, for China, is a means within active defence and not a strategy of its own.'],
    why: 'It explains how Chinese sources can describe a posture as defensive while the campaign plans beneath it are offensive.',
    practice: [{ t: 'The Western Theatre paper notes US Army analysis suggesting the PLA would use its combined arms divisions in both defensive operations (positional, mobile, withdrawal) and offensive ones (envelopment, penetration, firepower attack, ambush, raid), which together make up active defence on the ground.', s: 'wtc' }],
    related: ['peoples-war', 'strategic-guidelines', 'strategic-deterrence', 'lure-in-deep'], src: ['rand', 'sms'], dia: 'activeDefence' },

  { id: 'strategic-guidelines', term: 'Military strategic guidelines', zh: '军事战略方针', py: 'jūnshì zhànlüè fāngzhēn', theme: 'guidance',
    short: 'The CMC’s statement of military strategy, reissued whenever the threat picture or the character of war is judged to have changed.',
    def: ['The Central Military Commission issues the guidelines on the basis of direction from the Party leadership. They set out the military strategy and steer both force construction and operations. Each major revision has named a new kind of war to prepare for: People’s War, then local wars under modern conditions (1985), under high-tech conditions (1993), under informatised conditions (2004), and informatised local wars (2015).',
      'The guidelines sit above doctrine in the hierarchy of thought and below the Party’s guiding theory. Doctrine manuals are then rewritten to carry each guideline into practice, and the fifth generation of operational manuals was developed but, according to the RAND table, not formally issued.'],
    related: ['informatised-local-wars', 'local-war', 'military-thought', 'peoples-war'], src: ['rand'], dia: 'guidelines' },

  { id: 'local-war', term: 'Local war', zh: '局部战争', py: 'júbù zhànzhēng', theme: 'guidance',
    short: 'A limited war fought for limited political aims with controlled force, set against the total wars of the past.',
    def: ['From 1985 Deng directed the military to prepare for local war, stressing speed, mobility and lethality over the attrition and protraction of People’s War. In the 2013 strategy text, total wars aimed to defeat an enemy’s capacity to fight and to take its territory and economy, while local wars use force in a controlled way to reach a limited strategic goal.',
      'PLA strategists also assume that such wars are in theory more controllable and less escalatory, because political objectives are limited and because precision strike, better surveillance and non-contact attack allow the scope of violence to be managed.'],
    related: ['war-control', 'informatised-local-wars', 'strategic-guidelines', 'combat-war-space'], src: ['rand'], dia: 'guidelines' },

  { id: 'informatised-local-wars', term: 'Informatised local wars', zh: '信息化局部战争', py: 'xìnxīhuà júbù zhànzhēng', theme: 'guidance',
    short: 'The 2015 guideline: win limited wars in which information is the central means of fighting, not just a condition to cope with.',
    def: ['In 2015 Xi Jinping directed the PLA to win informatised local wars. The wording replaced the 2004 formula of local wars under informatised conditions, and the change matters: information stops being a condition that has to be contended with and becomes the instrument for prosecuting and winning the war.',
      'The 2015 defence white paper says such wars require information dominance in the cyber, space and electromagnetic domains and the application of advanced information technology across all operational and support activity, which is wider than information warfare alone. The guidance of the same year also stressed maritime operations.'],
    related: ['informatisation', 'information-dominance', 'system-of-systems', 'strategic-guidelines'], src: ['rand'], dia: 'guidelines' },

  { id: 'strategic-deterrence', term: 'Strategic deterrence', zh: '战略威慑', py: 'zhànlüè wēishè', theme: 'guidance',
    short: 'Using demonstrated capability, resolve and flexible military action to stop a war or a crisis from escalating, as a means inside active defence.',
    def: ['The 2020 strategy textbook calls strategic deterrence an important means of containing war and keeping the peace, and sets the construction of a deterrence system with Chinese characteristics as a task for strategic guidance. It contrasts the Chinese view with the American one. For the United States deterrence is a strategy in its own right, resting on nuclear forces, while for China the core of strategic thinking remains active defence and deterrence is only a means.',
      'The text also says that the initiative China seeks through deterrence is an initiative within an overall defensive posture, and that it does not carry the pre-emptive logic it attributes to American doctrine.'],
    practice: { t: 'The air force’s 2025 official reporting shows the logic at work: English-language coverage leaned on high-tech equipment to project deterrence, while saying little about structure, strength or deployment.', s: 'plaaf' },
    related: ['active-defence', 'war-control'], src: ['sms', 'plaaf'] },

  { id: 'war-control', term: 'War control', zh: '战争控制', py: 'zhànzhēng kòngzhì', theme: 'guidance',
    short: 'Managing the pace, scope and escalation of a conflict so that force serves limited political goals.',
    def: ['War control is one of the core strategic command tasks that PLA writers describe, and the literature has treated it as a theme since the early 2000s. It lives in a tension: escalating by striking strategic targets may help seize the initiative, yet it puts the objectives of the war and the longer-term development of the state at risk.',
      'Chinese strategists have concluded that the surest route to controlling escalation and to campaign success is information dominance, understood in the widest sense. Limited, selective targeting that disrupts just enough of an adversary’s operations to reach a limited political goal belongs to the same thought.'],
    related: ['information-dominance', 'local-war', 'system-destruction', 'strategic-deterrence'], src: ['rand'] },

  /* ================================================================ modernisation */
  { id: 'mechanisation', term: 'Mechanisation', zh: '机械化', py: 'jīxièhuà', theme: 'stages',
    short: 'The first of the three modernisation tasks: powered platforms, firepower, mobility and protection as the base of the force.',
    def: ['Mechanisation is the foundation layer of the PLA’s modernisation. It means equipping and organising the force around motorised, armoured and powered platforms, and it gives the later stages something to connect. The 2020 strategy text says it lays the foundation for informatisation, and that the later stages lead and pull the earlier ones forward.',
      'The Party’s 2017 congress report set 2020 as the date by which mechanisation would be basically achieved, with informatisation advancing in parallel. At the same time PLA strategists tell planners to drop the stereotypes of mechanised warfare when thinking about informatised and intelligent war.'],
    practice: [{ t: 'In the Western Theatre, cross-service air defence integration is described as letting the air force lend long-range expertise to the more mechanised ground forces, while the army contributes its handling of low-level targets.', s: 'wtc' }, { t: 'In May 2021 a combined arms battalion of the Xinjiang Military District took delivery of self-propelled mortars on a four-wheeled off-road vehicle. The paper reads the shift from self-propelled howitzers as a choice for mobility and ease of operation in hypoxic plateau conditions, accepting some loss of firepower.', s: 'wtc' }],
    related: ['informatisation', 'intelligentisation', 'three-izations'], src: ['sms', 'wtc'], dia: ['izNodes', 'mech'] },

  { id: 'informatisation', term: 'Informatisation', zh: '信息化', py: 'xìnxīhuà', theme: 'stages',
    short: 'Using information technology as an adhesive that turns separate services, platforms and support arms into one networked warfighting system.',
    def: ['Informatised warfare is not a simple sum of units fighting side by side. A PLA Daily commentary from December 2019 calls it a comprehensive confrontation of systems against systems, and the Western Theatre paper reads this as information technology acting as an adhesive force that converts services, platforms and support arms into a single system.',
      'The strength of such a system comes from drawing battlefield intelligence from many sources, such as space, unmanned underwater systems and ground control, and from using electromagnetic and other information-based methods in ways that blur the lines between land, air, sea and cyber domains. In the 2020 strategy text informatisation plays a connecting role between mechanisation and intelligence.'],
    practice: [{ t: 'The Type 99A tank, issued to the Xinjiang Military District’s combined arms divisions from February 2021, is described as an informatised tank: it calculates firing parameters, collects data on enemy positions and terrain, and shares them with other tanks so that formations can fight jointly. The lighter Type 15 was commissioned alongside it.', s: 'wtc' }],
    related: ['mechanisation', 'intelligentisation', 'system-of-systems', 'informatised-local-wars', 'information-dominance'], src: ['wtc', 'sms', 'rand'], dia: ['izNodes', 'info'] },

  { id: 'intelligentisation', term: 'Intelligentisation', zh: '智能化', py: 'zhìnénghuà', theme: 'stages',
    short: 'The emerging third stage: AI-enabled weapons, unmanned systems and machine support for decisions, with people moving from doing to setting rules.',
    def: ['The 2019 defence white paper said that war is evolving toward informatised warfare and that intelligent warfare is on the horizon. The PLA’s goal is a force that combines intelligent weapons, meaning AI-enabled systems, with intelligent forces, meaning people who support the decisions of those weapons while taking minimal action themselves.',
      'A commentary on people.cn in January 2021 describes three stages: human-led with unmanned support, unmanned-led with human support, and rules set by humans with actions taken without them. The 2020 strategy text adds that as unmanned systems grow in use, theories of war, methods of combat and military organisation will have to change, and that military intelligence is still in its infancy.'],
    why: 'The three-stage ladder is a useful test of what a Chinese source means when it says intelligent: how much of the decision loop does it hand to the machine?',
    practice: [{ t: 'Reporting cited in the paper has an air force unit in the Western Theatre testing the GJ-2 armed reconnaissance drone to search, detect, identify, locate and attack several targets in one sortie, with remote operators in control. Success is still measured by how well operators handle the drone, which fits the first stage of the ladder.', s: 'wtc' }, { t: 'Border defence companies in Xinjiang have been testing an integrated individual soldier system since August 2022, with a helmet, night vision and a portable computer that tells each soldier where teammates are and what their mission is. Reports link it to informatisation and intelligence capabilities.', s: 'wtc' }],
    related: ['informatisation', 'three-izations', 'kill-chain', 'tcw'], src: ['wtc', 'sms'], dia: 'izStages' },

  { id: 'three-izations', term: 'Integrated development of the three -isations', zh: '机械化信息化智能化融合发展', py: 'jīxièhuà xìnxīhuà zhìnénghuà rónghé fāzhǎn', theme: 'stages',
    short: 'Pursuing mechanisation, informatisation and intelligentisation together, so that each multiplies the others.',
    def: ['The 2020 strategy text asks for the three to be developed as a whole. Informatisation is to drive mechanisation, and intelligence is to lead informatisation, producing combinations of high, medium and low technology and the coordinated growth of new and traditional arms.',
      'The text describes the three as progressive, mutually dependent and interpenetrating. The earlier stage lays the foundation for the later one, the later one leads the development of the earlier one, and together they produce superimposition, aggregation and multiplier effects on combat effectiveness.'],
    related: ['mechanisation', 'informatisation', 'intelligentisation'], src: ['sms'], dia: 'izStack' },

  /* ================================================================ how the PLA fights */
  { id: 'integrated-joint-operations', term: 'Integrated joint operations', zh: '一体化联合作战', py: 'yītǐhuà liánhé zuòzhàn', theme: 'fight',
    short: 'Operations in which services and arms are tied together by a network and fused under one command, rather than merely coordinated.',
    def: ['The term appeared in the 2004 defence white paper, and by 2010 the white paper called integrated joint operations the basic form of operations. The 2013 Science of Military Strategy defines them as operations based on a networked military information system, using information-based weapons and matching methods, across land, sea, air, space and cyberspace.',
      'PLA materials tie the concept to informatised warfare. Its premise is that new information technology lets command systems integrate more tightly, instead of only coordinating the operations of several services in several domains. The 2020 Joint Operations Guidelines focus on this form.'],
    practice: [{ t: 'In the Western Theatre, air defence battalions attached to an army air defence brigade have started to integrate into the chain of command of an air force base, which is one visible step from coordination toward integration.', s: 'wtc' }, { t: 'The theatre’s earliest recorded jointness roadmap dates from a February 2016 meeting of over a hundred officers. It called for a small but refined joint operations command centre, support teams for surveying, navigation and information services, and situational awareness for air superiority.', s: 'wtc' }],
    related: ['mdijo', 'joint-guidelines', 'basic-form', 'information-dominance'], src: ['cna', 'rand', 'wtc'], dia: 'joint' },

  { id: 'mdijo', term: 'Multi-domain integrated joint operations', zh: '多域一体化联合作战', py: 'duōyù yītǐhuà liánhé zuòzhàn', theme: 'fight',
    short: 'A textbook name for integrated joint operations across all domains; its official standing is not settled.',
    def: ['The 2020 edition of the National Defense University’s strategy textbook says that multi-domain integrated joint operations should be taken as the basic form of operations. The added qualifier does not appear in the official announcements of the 2020 Joint Operations Guidelines, which came afterwards, and the CNA paper treats this as an open question about whether the term is official.',
      'The Western Theatre paper uses MDIJO as its organising frame. It treats the concept as having two requirements: that the services and support arms fuse their expertise and platforms into a joint combat force, and that they do so through a seamlessly linked networked information system. Jointness, interoperability and integration are the three pillars it tests.'],
    practice: [{ t: 'The air force’s 2025 reporting describes an aviation brigade in the Southern Theatre integrating with surface-to-air missile and radar units to test multi-domain interoperability.', s: 'plaaf' }, { t: 'The paper reads the theatre’s road to MDIJO as three strands: combat training and readiness exercises, familiarity with terrain and altitude, and air superiority with transport. Exercises follow a common format of a stated task, a mid-exercise surprise, and a pass or fail score on command relay and task performance.', s: 'wtc' }, { t: 'In an August 2018 live-fire exercise in the Tianshan Mountains, a Xinjiang Military District anti-aircraft unit failed the surprise attack test. Many positions were judged destroyed when simulated aircraft attacked at varying altitudes, which showed up weaknesses in the link between command and ground air defence units.', s: 'wtc' }],
    related: ['integrated-joint-operations', 'joint-guidelines', 'basic-form'], src: ['sms', 'cna', 'wtc', 'plaaf'], dia: 'joint' },

  { id: 'joint-guidelines', term: 'Guidelines on Joint Operations (Trial)', zh: '联合作战纲要（试行）', py: 'liánhé zuòzhàn gāngyào (shìxíng)', theme: 'doctrine',
    short: 'The CMC’s 2020 joint doctrine, the first update in about twenty years; the text is controlled and not public.',
    def: ['The Central Military Commission issued the document, announced by Xinhua on 13 November 2020 and officially adopted a few days earlier. It is the capstone of the new operations regulations system, and it was issued after the organisational reforms that created the Joint Staff Department and the five theatre commands.',
      'Because the document itself is not public, what is known comes from official media, a handful of sanctioned interviews and inference. The CNA paper places it in the second basket of the PLA’s third big reform campaign, the one concerned with policy, doctrine, personnel and governance, which PLA commentators regard as the toughest.'],
    related: ['integrated-joint-operations', 'operations-regulations', 'basic-form'], src: ['cna'], dia: 'thought' },

  { id: 'basic-form', term: 'Basic form of operations', zh: '基本作战形式', py: 'jīběn zuòzhàn xíngshì', theme: 'doctrine',
    short: 'The one dominant way of fighting that a given era of warfare is judged to demand.',
    def: ['PLA military science holds that there can be only one basic form of operations in any given era, and that planners’ most important job is to identify it so that the force can be adjusted to fit. The 2010 white paper named integrated joint operations as the basic form, which tells readers that by then the PLA had concluded this was the form it most needed to train for.',
      'The 2020 strategy text repeats the rule that generally only one basic form can be prescribed for a period, and names multi-domain integrated joint operations.'],
    related: ['integrated-joint-operations', 'mdijo', 'joint-guidelines'], src: ['cna', 'sms'] },

  { id: 'information-dominance', term: 'Information dominance', zh: '制信息权', py: 'zhì xìnxī quán', theme: 'fight',
    short: 'Seizing and keeping the freedom and initiative to use information in battle while denying the same to the opponent.',
    def: ['PLA literature since the 1990s stresses information dominance as a precondition for winning. Chinese analysts point to the Gulf War, Kosovo and Iraq as wars in which control over information meant control of the initiative. The 2013 strategy text defines it as seizing and preserving that freedom while at the same time depriving the opponent of it.',
      'In campaign design this means collecting, processing and transmitting information while attacking the enemy’s ability to do the same. The usual pattern is to win information dominance at the outset and then use it to deliver long-range precision strikes on the opponent’s critical command, information and logistics nodes.'],
    practice: [{ t: 'Air force brigades in the Western Theatre have trained to clear the electromagnetic fog, meaning radar interference that makes the enemy aircraft signal disappear. In July 2022 a new variant of the FH-95 drone, built for electromagnetic jamming and armed reconnaissance, was first tested by the Xinjiang Military District.', s: 'wtc' }],
    related: ['three-superiorities', 'network-warfare', 'war-control', 'system-destruction'], src: ['rand'], dia: 'superiorities' },

  { id: 'three-superiorities', term: 'Three superiorities', zh: '制信息权、制空权、制海权', py: 'zhì xìnxī quán, zhì kōng quán, zhì hǎi quán', theme: 'fight',
    short: 'Superiority in the information, air and maritime domains, with information first.',
    def: ['PLA campaign thinking treats three domains as the ones in which superiority has to be won: information, air and maritime. Information comes first and matters most, because it protects the force’s own capabilities and coordinates the intelligence, surveillance and reconnaissance that make offensive firepower efficient.',
      'Researchers accept that comprehensive superiority across a whole campaign is the ideal and that episodic dominance in key domains during critical phases is the more likely condition. The lynchpin in either case is timely, high-fidelity information.'],
    practice: [{ t: 'The paper treats air superiority as the theatre’s central challenge. Citing Belfer Center orders of battle for 2020, it counts 157 Chinese fighters in the Western Theatre against 250 Indian ones, and more than 50 Chinese strike and reconnaissance drones against four Indian Herons. Four air defence brigades sit with the two military districts and the two group armies.', s: 'wtc' }],
    related: ['information-dominance', 'kill-chain', 'combat-war-space'], src: ['rand'], dia: 'superiorities' },

  { id: 'network-warfare', term: 'Network warfare', zh: '网络战', py: 'wǎngluò zhàn', theme: 'fight',
    short: 'Attacking an enemy’s networks to disable its command system, and defending one’s own.',
    def: ['The 2013 strategy text says the side holding network warfare superiority can cause dysfunction in the adversary’s command system, loss of control over operations and failure of weapons, and so seize the initiative. Campaign design stresses detecting, identifying and attacking enemy networks, with leadership, command nodes, sensors and information hubs as the principal targets.',
      'Attacks may be kinetic or non-kinetic. The same text expects commanders to plan carefully for protecting their own networks, in both the physical domain (people, equipment, facilities) and the non-physical one (cyber, electromagnetic and information), because the Chinese side knows its own systems are vulnerable in the same way.'],
    related: ['information-dominance', 'system-destruction', 'system-confrontation'], src: ['rand'], dia: 'sdw' },

  { id: 'system-of-systems', term: 'System-of-systems operations', zh: '体系作战', py: 'tǐxì zuòzhàn', theme: 'fight',
    short: 'Fighting as a whole network of linked forces, so that the contest is between operational systems and not between individual platforms.',
    def: ['Hu Jintao is credited with directing the PLA in 2005 to master system-of-systems operations, which rely on joint units with integrated command networks so that key nodes in an advanced adversary’s combat networks can be struck. The usual full phrase is information-system-based system-of-systems operations, which Chinese authors call the basic form of war in the information age.',
      'The idea shapes more than tactics. It has pervaded how the PLA trains, organises and equips: the aim is to build a system of systems that coordinates activity across the military, within and between theatres, arms and services.'],
    practice: { t: 'In April 2025 the air force’s YY-20 tanker supported a system-of-systems formation of J-20, J-10C and KJ-500 aircraft on its first movement to Africa, for the Eagles of Civilization exercise in Egypt.', s: 'plaaf' },
    related: ['operational-system', 'system-confrontation', 'system-destruction', 'informatisation'], src: ['rand', 'plaaf'], dia: 'sos' },

  { id: 'operational-system', term: 'Operational system', zh: '作战体系', py: 'zuòzhàn tǐxì', theme: 'fight',
    short: 'The linkage of organisations, processes and networks that lets all services fight jointly across all domains, made of five component systems.',
    def: ['In the RAND account, drawing on Academy of Military Science writing, the operational system is the central warfighting system of the PLA’s concept. It is a linkage of organisations, functional processes and networks that enables integrated joint service warfighting in every domain.',
      'It has five components: the command system, the firepower strike system, the information confrontation system, the reconnaissance and intelligence system, and the support system. It is also the thing an opponent is expected to try to paralyse.'],
    practice: [{ t: 'The support system is visible in the theatre’s dispatch centres. Seven provinces have one, coordinating rail transport of personnel and equipment, with a 2020 mechanism standardising loading across railway companies. A Y-20 flew winter gear to border troops within seven hours in 2021, and a November 2020 drill used drones to resupply a mountain base cut off by enemy fire.', s: 'wtc' }],
    related: ['system-of-systems', 'system-destruction', 'tcw'], src: ['rand'], dia: 'sos' },

  { id: 'system-confrontation', term: 'System confrontation', zh: '体系对抗', py: 'tǐxì duìkàng', theme: 'fight',
    short: 'The view that modern war is a clash between opposing operational systems, in physical, space, cyber, electromagnetic and cognitive domains.',
    def: ['Since about 2005 the PLA has developed an integrated approach to system confrontation, which RAND describes as akin to but broader than American network-centric warfare. The contest is waged in the traditional domains of land, sea and air and also in outer space and the non-physical cognitive, cyber and electromagnetic domains.',
      'The 2020 strategy text gives practical advice that follows from it. Protect and harden your own combat system so that the enemy cannot destroy it, and study the strengths, weaknesses and nodes of the enemy’s system so as to break the nodes and paralyse the whole. The text adds that if the space information guarantee is lost, the battlefield will collapse and the war system will be paralysed.'],
    practice: [{ t: 'In the Western Theatre paper’s account of systems warfare, success rests on coordinating command and control, reconnaissance and intelligence, firepower, electronic and cyber warfare, engineering and battlefield management. Anti-aircraft artillery and ground-to-air missile units are called part of the backbone of the theatre’s integrated capability.', s: 'wtc' }],
    related: ['system-of-systems', 'system-destruction', 'operational-system'], src: ['rand', 'sms'], dia: 'sdw' },

  { id: 'system-destruction', term: 'System destruction warfare', zh: '体系破击战', py: 'tǐxì pòjī zhàn', theme: 'fight',
    short: 'Paralysing the functions of an enemy’s operational system by striking its key nodes, rather than annihilating its forces.',
    def: ['The 2013 strategy text argues that victory can be won without massively annihilating the enemy’s vital strengths, by controlling and paralysing its systems until it loses the capacity for integrated resistance. The targets are the centres of gravity of the enemy system, in particular leadership institutions, command and control centres and information hubs.',
      'Paralysis can come from kinetic or non-kinetic attack. The 2020 strategy text pairs soft kill with hard destruction and system destruction with precision strike. RAND sees the concept as a way for China to pursue political objectives while keeping control over the scope and scale of a conflict.'],
    related: ['key-point-strikes', 'tcw', 'network-warfare', 'war-control', 'system-confrontation'], src: ['rand', 'sms'], dia: 'sdw' },

  { id: 'key-point-strikes', term: 'Integrated operations, key-point strikes', zh: '整体作战、重点打击', py: 'zhěngtǐ zuòzhàn, zhòngdiǎn dǎjī', theme: 'fight',
    short: 'Concentrating the force’s combined strength on the few targets that hold up the enemy’s operational system.',
    def: ['PLA literature calls this a basic campaign guiding concept. It brings together military and non-military elements and concentrates campaign strength by time and space, so that it can be aimed at targets vital to sustaining and supporting the enemy’s operational system.',
      'The intended result is paralysis of that system and campaign victory. Awareness, precision and flexibility are named as its core characteristics, and the concept is the practical complement of system destruction warfare.'],
    related: ['system-destruction', 'tcw', 'concentrate-force'], src: ['rand'], dia: 'sdw' },

  { id: 'tcw', term: 'Target-centric warfare', zh: '目标中心战', py: 'mùbiāo zhōngxīn zhàn', theme: 'fight',
    short: 'Attacking critical points in the enemy’s operational system for decisive effect with limited collateral damage, run through a joint information system.',
    def: ['RAND treats target-centric warfare (TCW) as the concept that gives system destruction warfare an operational form. PLA writing uses several near-synonyms, including key target warfare, and all of them stress finding the enemy system’s key vulnerabilities and hitting them with speed, precision and intensity. It is described as a system in itself, with five subsystems: information support, early warning and reconnaissance, real-time command and control, integrated offensive and defensive force, and integrated support.',
      'The PLA began testing it in 2009 in the old Jinan Military Region, now part of the Central Theatre. Exercises from 2010 to 2012 trained commanders to grade targets, set damage criteria, calculate strike missions and pass them to fire units. RAND notes that the approach removes the Army from a privileged place, pushes decisions down to lower levels, and asks the PLA to know the specific role and value of each target, which is a demanding task.'],
    related: ['system-destruction', 'key-point-strikes', 'six-centres', 'kill-chain', 'combat-power'], src: ['rand'], dia: 'tcw' },

  { id: 'kill-chain', term: 'The reconnaissance–control–attack–evaluation cycle', zh: '侦控打评', py: 'zhēn kòng dǎ píng', theme: 'fight',
    short: 'The PLA’s way of describing the find-decide-strike-assess loop, which it wants to run faster than the opponent can.',
    def: ['RAND reports that guidance to PLA commanders will stress accelerating the reconnaissance, control, attack and evaluation cycle. Intelligence must be timely, because information past its useful time has no value and may even mislead, and commanders are expected to minimise the sensor-to-launcher interval so that strikes are fast and efficient.',
      'Speed is meant to come without losing precision, by integrating command functions over networks so that decision-makers see combat data quickly, run precise calculations and assess results in near real time. In Western writing the same loop is usually called the kill chain, and it is the logic behind both sides’ efforts to shorten their own and break the other’s. There is no single canonical Chinese equivalent of the English phrase in these sources, so the four-part formulation here is the closest common label.'],
    practice: [{ t: 'The air force’s 2025 reporting says radar units are being trained for high mobility, because radars are expected to be primary early targets. Moving positions masks their signals and delays the enemy’s kill chain.', s: 'plaaf' }, { t: 'A snowfield exercise reported in 2024 shows the loop at altitude. Engineers use the ice and snow to hide movement, a communications team sets up a command platform, drones detect targets and send their positions in real time, and artillery rehearses precision strikes at extreme range.', s: 'wtc' }],
    related: ['tcw', 'information-dominance', 'six-centres', 'intelligentisation'], src: ['rand', 'plaaf'], dia: 'killchain' },

  { id: 'noncontact', term: 'Non-contact warfare', zh: '非接触作战', py: 'fēijiēchù zuòzhàn', theme: 'fight',
    short: 'Striking important targets from long range with precision forces, with space systems as the main enabler.',
    def: ['Chinese writing defines non-contact warfare as employing long-range precision strike forces, with space combat systems as the principal agent, to attack an adversary’s important targets in a highly concentrated and precise sudden assault. It is linked to the saying that the precise controls the imprecise.',
      'PLA strategists also stress intensity: strikes across the full depth of the target area at once, leaving no room or time to adapt, and then continued strikes on any function the enemy restores.'],
    related: ['system-destruction', 'tcw', 'three-three'], src: ['rand'] },

  { id: 'three-three', term: 'Three attacks, three defences', zh: '三打三防', py: 'sān dǎ sān fáng', theme: 'fight',
    short: 'The 1990s principle of attacking stealth aircraft, cruise missiles and armed helicopters while defending against precision strike, electronic warfare and reconnaissance.',
    def: ['The principle came with the 1993 guideline on local wars under modern, high-tech conditions. Jiang Zemin and his strategists had watched the first Gulf War and judged that networked precision strike was a revolution in military affairs for which China was ill-prepared, especially in a possible conflict with the United States over Taiwan.',
      'The threat analysis drove research and acquisition of more advanced weapons, with priority for the Second Artillery, the air force and the navy, and it pushed defensive perimeters outward beyond the coast.'],
    related: ['strategic-guidelines', 'noncontact', 'information-dominance'], src: ['rand'], dia: 'threeThree' },

  { id: 'combat-war-space', term: 'Combat space and war space', zh: '', py: '', theme: 'fight',
    short: 'The area of physical fighting is shrinking while the wider contest, including non-physical domains, is expanding.',
    def: ['In Chinese military writing the combat space is the geographic area where actual physical conflict occurs. The war space is wider and includes physical and non-physical domains: political, economic, diplomatic and informational spheres as well. Strategists describe the combat space as smaller than before and the war space as larger, because of new technology.',
      'PLA authors also describe a move from multidimensional war, on land, air and sea, to full-dimensional war that adds space and cyber, and they speak of a shift from tangible to intangible space. This is part of the reasoning behind concentrating space, cyber and information capabilities in the former Strategic Support Force and its successors.'],
    why: 'It is the vocabulary behind the claim that fighting will be limited while the contest around it is not.',
    related: ['local-war', 'cognitive-warfares', 'three-superiorities'], src: ['rand'], dia: 'spaces' },

  { id: 'cognitive-warfares', term: 'Three Warfares and the cognitive space', zh: '三战', py: 'sān zhàn', theme: 'fight',
    short: 'Public opinion, psychological and legal warfare, used to shape the minds and the legitimacy around a conflict.',
    def: ['PLA authors describe the cognitive space as increasingly important in multidimensional war, and they name three instruments for it: public opinion warfare, psychological warfare and legal warfare. The aim is to control opinion, organise psychological offence and defence, engage in legal struggle and win popular support, while dividing the enemy and weakening its will.',
      'The 2013 strategy text says seizing the diplomatic initiative can support the whole of operations, and that propaganda can reinforce stratagems such as a feint in the east and an attack in the west. Campaign activity has to be synchronised with these lines of effort and with the Central Military Commission, the Party’s information organs and the foreign ministry.'],
    related: ['combat-war-space', 'war-control', 'information-dominance'], src: ['rand'], dia: 'threeWars' },

  { id: 'six-centres', term: 'One command, six centres', zh: '', py: '', theme: 'fight',
    short: 'A command model in which a joint operations command is supported by six functional centres staffed from all the services.',
    def: ['In RAND’s account of the target-centric warfare experiments, the command organisation follows a one-command, six-centres model. The command is the joint operations command. The six centres handle operational command and control, intelligence information, network communications, action coordination, political work and integrated support.',
      'The action coordination centre has sub-centres for firepower strikes, air defence, ground operations, information operations and special operations. Command is described as mission-based and in three levels: supreme command (strategic), joint operational command (operational) and mission units (tactical).'],
    practice: [{ t: 'The Western Theatre’s joint operations command centre has been called the smartest brain in a PLA Daily report, strategising and simulating battlefield performance in the manner of a wargaming think tank.', s: 'wtc' }, { t: 'The theatre’s joint operations command centre is said to draw on staff from all four services, most of them aged 35 or under. Since 2018 its joint staff has run a four-capabilities training programme, built on a handbook of knowledge for joint operational command that has been compulsory reading since 2016.', s: 'wtc' }],
    related: ['tcw', 'combat-power', 'integrated-joint-operations'], src: ['rand', 'wtc'], dia: 'sixCentres' },

  { id: 'combat-power', term: 'Combat power generation and new-type forces', zh: '战斗力生成模式', py: 'zhàndòulì shēngchéng móshì', theme: 'fight',
    short: 'Building tailored force packages for each task and phase, using units that can work in new roles.',
    def: ['The combat power generation model is closely tied to target-centric warfare. Because modern combat is fast and conditions change, the PLA wants to configure force packages around the target, the type of operation and the mission, with new-type operational forces that use traditional branches such as infantry in new roles beside special operations, airborne, information, electromagnetic and air capabilities.',
      'It also means shortening the command chain, streamlining command processes and building command patterns that are distributed. That asks for trust, transparency and integration that RAND judges to be a significant departure from past PLA command practice.'],
    practice: [{ t: 'Under the Western Theatre’s two group armies, combined arms brigades are classed by their main weapons: light (air assault, mountain, motorised), medium (wheeled) and heavy (tracked). The military districts also hold combined arms divisions, the theatre’s only division-level units, with more artillery than a brigade and nearly twice the personnel.', s: 'wtc' }],
    related: ['tcw', 'six-centres', 'integrated-joint-operations'], src: ['rand'] },

  { id: 'joint-campaigns', term: 'Joint campaigns and service campaigns', zh: '联合战役、军种战役', py: 'liánhé zhànyì, jūnzhǒng zhànyì', theme: 'doctrine',
    short: 'Campaigns run by forces of several services, as distinct from a single service’s own campaign.',
    def: ['PLA literature of the 1990s recognised joint capabilities as essential and began to separate joint campaign types from service campaigns. The PLA has campaigns for air, sea and land operations in an emergency on China’s periphery, campaigns for a conflict over Taiwan and campaigns for maritime claims.',
      'Chinese military theory from the 1990s holds that joint operations are the basic form of war, and the 2013 strategy text states an ambition to break through the hierarchical differences between strategic, operational and tactical levels by pursuing integration at every level of command.'],
    related: ['integrated-joint-operations', 'basic-form', 'joint-guidelines'], src: ['rand'] },

  /* ================================================================ operational art */
  { id: 'moving-the-enemy', term: 'Moving the enemy', zh: '调动敌人', py: 'diàodòng dírén', theme: 'heritage',
    short: 'Shaping the battlefield by threatening what the enemy values, so that he shifts forces away from where the main effort will fall.',
    def: ['Gary Bjorge reads the Huai Hai campaign of 1948–49 through this idea. He notes that Sunzi wrote of moving the enemy by attacking what is important to him, and that this was at the heart of the Central Military Commission’s shaping operation.',
      'In the example he describes, the CMC wanted one field army to drop its line of communication and push deep into enemy territory. The purpose was to put the greatest pressure on the Nationalists and compel them to redeploy forces away from the effort to save an encircled army, so that the main battle could be fought on favourable terms.'],
    why: 'It is a useful key to Chinese operational art generally: the decisive move is often the one that makes the opponent reposition, and not the direct clash.',
    related: ['annihilation', 'concentrate-force', 'lure-in-deep'], src: ['bjorge'], dia: 'moving' },

  { id: 'annihilation', term: 'Battle of annihilation', zh: '歼灭战', py: 'jiānmiè zhàn', theme: 'heritage',
    short: 'Surrounding an enemy force and destroying it whole, in sequence, as the building block of a campaign.',
    def: ['Chinese histories of Huai Hai divide the campaign into three sequential phases, each centred on a battle of annihilation against a surrounded pocket of Nationalist forces. The first destroyed the Seventh Army, the second the Twelfth Army, and the third primarily the Second, Thirteenth and Sixteenth Armies.',
      'The model contrasts with the later emphasis on paralysing a system without destroying its parts. It remains part of the vocabulary and the historical memory on which PLA operational thinking draws.'],
    related: ['concentrate-force', 'moving-the-enemy', 'system-destruction'], src: ['bjorge'] },

  { id: 'concentrate-force', term: 'Concentrating a superior force', zh: '集中优势兵力', py: 'jízhōng yōushì bīnglì', theme: 'heritage',
    short: 'Massing superior strength at the decisive point to destroy enemy forces one by one.',
    def: ['Mao’s formulation, which Bjorge cites for Huai Hai, is to concentrate a superior force and destroy the enemy forces one by one. It is the ground-war counterpart of moving the enemy: first reposition the opponent, then bring superior strength to bear on a part of him.',
      'The same instinct shows in the modern idea of integrated operations with key-point strikes, which concentrates campaign strength by time and space on the targets that matter most, though the unit of concentration is now a network of effects and not only infantry and artillery.'],
    related: ['annihilation', 'moving-the-enemy', 'key-point-strikes'], src: ['bjorge', 'rand'] },

  { id: 'lure-in-deep', term: 'Luring the enemy in deep', zh: '诱敌深入', py: 'yòu dí shēnrù', theme: 'heritage',
    short: 'Trading space for time so that an invader overextends before the counter-attack.',
    def: ['The 1964 version of the strategic guideline made luring the enemy in deep the key form of active defence. It rests on Mao’s idea of wearing out an invader by using guerrilla tactics and surrendering ground until his lines are stretched.',
      'By the 1970s the PLA was moving toward winning early battles closer to the border, and under Deng the defensive perimeter was pushed outward. The phrase is now mostly historical, but it explains the original logic of active defence.'],
    related: ['peoples-war', 'active-defence', 'moving-the-enemy'], src: ['rand'], dia: 'guidelines' },

  /* ================================================================ doctrine */
  { id: 'military-thought', term: 'Hierarchy of military thought', zh: '军事理论、战略方针、作战条令', py: '', theme: 'doctrine',
    short: 'Party guiding theory at the top, strategic guidelines below, and operational concepts and doctrine beneath them.',
    def: ['RAND’s account of the PLA’s intellectual structure begins with the Party’s military guiding theory, which takes in Marx and the successive paramount leaders and is updated whenever the leadership changes. It drives the military strategic guidelines issued by the Central Military Commission, which in turn drive operational concepts and doctrine that link the guiding principles to the ways and means of accomplishing missions.',
      'The practical lesson is that a PLA operational concept cannot be read as a freestanding military idea. Each one is expected to reinforce Party authority and to fit the current guideline.'],
    related: ['strategic-guidelines', 'operations-regulations', 'joint-guidelines'], src: ['rand'], dia: 'thought' },

  { id: 'operations-regulations', term: 'Operations regulations and gangyao', zh: '作战条令、纲要', py: 'zuòzhàn tiáolìng, gāngyào', theme: 'doctrine',
    short: 'The PLA has no single word for doctrine: it speaks of regulations, methods and laws, and uses the gangyao for high-level guidance.',
    def: ['The CNA paper notes that the PLA does not have one term for doctrine. It speaks instead of operations regulations (作战条令), operational methods (作战方法, often shortened to 战法) and operations laws (作战法规).',
      'The word gangyao (纲要), as in the 2020 joint operations document, can be rendered as essentials, guidelines, outline or compendium. Gangyao give authoritative high-level guidance and foundational concepts, and they are meant to be studied and implemented. They are not confined to the military: China’s first national security strategy, adopted in 2015, was also issued as one.'],
    related: ['joint-guidelines', 'military-thought', 'basic-form'], src: ['cna'], dia: 'thought' },
];


/* Examples from the Western Theatre that sit across several entries, for the dedicated page */
window.WTC_EXTRA = [
  { h: 'Terrain and altitude', t: 'The paper treats familiarity with terrain as a pillar of the theatre’s jointness. Examples include a radar station at about 4,000 metres that finally got a tap water pipeline, border detachments clearing snow ridges, and army command posts hidden near snow lines above 4,000 metres since 2018, which change location every few months.', c: ['mdijo', 'combat-power'] },
  { h: 'Training under inspection', t: 'Reports on exercises include failures as well as successes. A March 2018 air force brigade exercise found that randomly chosen soldiers gave unclear commands and lacked understanding of principles, and inspection since then has started with headquarters officers and worked down to company and platoon leaders.', c: ['mdijo'] },
  { h: 'Transport and military-civil cooperation', t: 'Dispatch centres in seven provinces manage rail movement across altitudes, including oxygen-equipped passenger cars and a military representative office at Golmud. In December 2023 they issued measures for sharing loading and reinforcement plans, as part of a move from single-rail support toward rail, road, water and air.', c: ['operational-system'] },
  { h: 'Last-mile supply by drone', t: 'A November 2020 drill by the Army and Tibet Military District logistics departments had a drone unit deliver hot food, water and medicine to a mountain base, on the premise that manned ground transport was blocked by enemy fire. Operators judged terrain, wind speed and temperature to land the drones safely.', c: ['intelligentisation'] },
];
