import { readable } from 'svelte/store'

export const capabilityList = readable({
  en: {
  '1-01': {
    category: 'Adaptability',
    description: 'The ability to identify changes in the environment and recognizing the resulting opportunities and new requirements.',
    title: 'Sensing External Changes and Emerging Business Opportunities',
    dimension: 'Strategy & Purpose'
  },
  '1-02': {
    category: 'Adaptability',
    description: 'The ability to address and capturing value from changes and emerging opportunities in the environment.',
    title: 'Seizing External Changes and Emerging Business Opportunities',
    dimension: 'Strategy & Purpose'
  },
  '1-03': {
    category: 'Adaptability',
    description: 'The ability to quickly realigning corporate strategy in order to react to business opportunities.',
    title: 'Responsiveness to External Changes and Emerging Business Opportunities',
    dimension: 'Strategy & Purpose'
  },
  '1-04': {
    category: 'Adaptability',
    description: 'The ability to proactively and quickly adjust the business model.',
    title: 'Business Model Adaptiveness',
    dimension: 'Strategy & Purpose'
  },
  '1-05': {
    category: 'Adaptability',
    description: 'The ability to reallocate and utilize resources fluidly.',
    title: 'Resource Fluidity',
    dimension: 'Strategy & Purpose'
  },
  '1-06': {
    category: 'Knowledge Management',
    description: 'The ability to identify valuable external knowledge and integrate it into the organizations knowledge base.',
    title: 'Absorptive Capacity',
    dimension: 'Strategy & Purpose'
  },
  '1-07': {
    category: 'Adaptability',
    description: 'The ability to adapt to a variety of business contexts simultaneously.',
    title: 'Multiple Adaptiveness',
    dimension: 'Strategy & Purpose'
  },
  '1-08': {
    category: 'Innovation',
    description: 'The ability to redefine multiple aspects of the organizations business model.',
    title: 'Strategic Innovativeness',
    dimension: 'Strategy & Purpose'
  },
  '1-09': {
    category: 'Innovation',
    description: 'The ability to create an appropriate environment that supports experimentation.',
    title: 'Supporting Organization-wide Experimentation',
    dimension: 'Strategy & Purpose'
  },
  '1-10': {
    category: 'Adaptability',
    description: 'The ability to become acutely aware of what\'s changing, and examine how those changes might affect your company\'s current success on a regular basis.',
    title: 'Conquer Denial',
    dimension: 'Strategy & Purpose'
  },
  '1-11': {
    category: 'Collaboration',
    description: 'The ability to build collaborative partnerships with external parties to leverage assets, knowledge, and competencies.',
    title: 'Establishing Collaborative and Long-Lasting Partnerships',
    dimension: 'Strategy & Purpose'
  },
  '1-12': {
    category: 'Collaboration',
    description: 'The ability to quickly identify appropriate partners or modify existing partnerships.',
    title: 'Rapid Partnership Identification and Formation',
    dimension: 'Strategy & Purpose'
  },
  '1-13': {
    category: 'Collaboration',
    description: 'The ability to emphasize and establish trust-based collaborations with different stakeholders within and outside the organization',
    title: 'Fostering Internal and External Collaboration',
    dimension: 'Strategy & Purpose'
  },
  '1-14': {
    category: 'Communication',
    description: 'The ability to coordinate the participants in a network through communication.',
    title: 'Network Communication',
    dimension: 'Strategy & Purpose'
  },
  '1-15': {
    category: 'Collaboration',
    description: 'The ability to involve and engage partners into the process of developing products',
    title: 'Involvement of Partners in the Product Development Process',
    dimension: 'Strategy & Purpose'
  },
  '1-16': {
    category: 'Organizational and Management Structures',
    description: 'The ability to set long-term objectives (3 to 5 years) for employees',
    title: 'Setting Long-Term Strategic Objectives for Employees',
    dimension: 'Strategy & Purpose'
  },
  '1-17': {
    category: 'Organizational and Management Structures',
    description: 'The ability to set specific short-term objectives for employees',
    title: 'Setting Specific Short-Term Objectives for Employees',
    dimension: 'Strategy & Purpose'
  },
  '1-18': {
    category: 'Knowledge Management',
    description: 'The ability to provide employees with ongoing learning and training opportunities, to encourage constant development and learning.',
    title: 'Emphasizing Learning for Organizational Excellence',
    dimension: 'Strategy & Purpose'
  },
  '1-19': {
    category: 'Organizational and Management Structures',
    description: 'The ability to effectively align organizational structures by defining a valuable common agenda for success.',
    title: 'Integration and Alignment of Organizational Components',
    dimension: 'Strategy & Purpose'
  },
  '1-20': {
    category: 'Knowledge Management',
    description: 'The ability to generate a competitive advantage towards competitors by investing in knowledge development and knowledge distribution',
    title: 'Investing in Knowledge as a Competitive Advantage',
    dimension: 'Strategy & Purpose'
  },
  '1-21': {
    category: 'Knowledge Management',
    description: 'The ability to be open to gathering new information, ideas and skills from a multitude of different sources',
    title: 'Strategic Openess',
    dimension: 'Strategy & Purpose'
  },
  '1-22': {
    category: 'Communication',
    description: 'The ability to challenge current assumptions and think about future opportunities through open dialogue around strategic issues.',
    title: 'Strategic Reframing',
    dimension: 'Strategy & Purpose'
  },
  '2-01': {
    category: 'Organizational and Management Structures',
    description: 'The ability to decentralize power and encourage teams to self-organize.',
    title: 'Decentralized Authority and Control',
    dimension: 'Structure'
  },
  '2-02': {
    category: 'Organizational and Management Structures',
    description: 'The ability to balance the power between a person in a position of authority and a person in a subordinate position through fewer titles, levels, status dimensions, etc.',
    title: 'Few Power Differentials',
    dimension: 'Structure'
  },
  '2-03': {
    category: 'Organizational and Management Structures',
    description: 'The ability to implement an organizational structure with a wide span of control but only a small number of hierarchical levels.',
    title: 'Flat Organizational Structure',
    dimension: 'Structure'
  },
  '2-04': {
    category: 'Organizational and Management Structures',
    description: 'The ability to implement an organizational structure in which a single manager or supervisor oversees a large number of subordinates',
    title: 'Wide Span of Control',
    dimension: 'Structure'
  },
  '2-05': {
    category: 'Organizational and Management Structures',
    description: 'The ability to create a structure with low complexity and uncomplex relationships between structure elements.',
    title: 'Low Complexity of Structure',
    dimension: 'Structure'
  },
  '2-06': {
    category: 'Organizational and Management Structures',
    description: 'The ability to build a system of autonomous networks of teams with a shared purpose and which are aligned towards the organizational vision',
    title: 'Network of Teams',
    dimension: 'Structure'
  },
  '2-07': {
    category: 'Organizational and Management Structures',
    description: 'The ability to form effective multidisciplinary teams with people from various functional backgrounds',
    title: 'Cross-Functional Teams Approach',
    dimension: 'Structure'
  },
  '2-08': {
    category: 'Communication',
    description: 'The ability to set and track key performance indicators (KPIs) within a team in terms of team efficiency, team performance, team satisfaction etc.',
    title: 'Team-Based Goals and Measures',
    dimension: 'Structure'
  },
  '2-09': {
    category: 'Communication',
    description: 'The ability to align and have consistent goals and incentives throughout all organization levels',
    title: 'Alignment of Goals & Incentives',
    dimension: 'Structure'
  },
  '2-10': {
    category: 'Knowledge Management',
    description: 'The ability to create an organzational structure that supports retention, simple access and transfer of knowledge within the organization',
    title: 'Structurally Supporting Decentralized Knowledge Management',
    dimension: 'Structure'
  },
  '2-11': {
    category: 'Knowledge Management',
    description: 'The ability to create an organizational structure that facilitates organizational learning.',
    title: 'Structurally Supportings Organizational Learning',
    dimension: 'Structure'
  },
  '2-12': {
    category: 'Innovation',
    description: 'The ability to create an organizational structure that provides the employees with the necessary support and guideance to experiment and innovate.',
    title: 'Structurally Supporting Experimentation and Innovation',
    dimension: 'Structure'
  },
  '2-13': {
    category: 'Adaptability',
    description: 'The ability to adjust the organizational structure in response to environmental changes.',
    title: 'Organizational Struture Reconfigurability',
    dimension: 'Structure'
  },
  '2-14': {
    category: 'Adaptability',
    description: 'The ability to change roles fluidly alongside the organization\'s evolution, allowing workers to expand and share jobs.',
    title: 'Fluid Role Definitions',
    dimension: 'Structure'
  },
  '2-15': {
    category: 'Adaptability',
    description: 'The ability to implement few and flexible rules and procedures, e.g., to standardize decision-making and work performance.',
    title: 'Formalization Flexibility',
    dimension: 'Structure'
  },
  '2-16': {
    category: 'Communication',
    description: 'The ability to minimize silo-based thinking within the company by eliminating organizational walls',
    title: 'Supporting Organizational Connectivity',
    dimension: 'Structure'
  },
  '2-17': {
    category: 'Adaptability',
    description: 'The ability to build an organizational structure that can be flexibly adapt if responsibilities change within the organization',
    title: 'Responsibilities Flexibility',
    dimension: 'Structure'
  },
  '2-18': {
    category: 'Adaptability',
    description: 'The ability to rearrange and recombine resources as the company grows and markets and technologies evolve.',
    title: 'Ensuring Resource Reconfiguration',
    dimension: 'Structure'
  },
  '3-01': {
    category: 'Innovation',
    description: 'The ability to establish work practices that define guidelines without overly restrictive boundaries.',
    title: 'Establishing Flexible Work Practices',
    dimension: "Process"
  },
  '3-02': {
    category: 'Adaptability',
    description: 'The ability to produce different types of products and achieve multiple objectives with the same facilities.',
    title: 'Operational Flexibility',
    dimension: "Process"
  },
  '3-03': {
    category: 'Adaptability',
    description: 'The ability to quickly and easily adapt as well as adjust processes in response to changing circumstances and environments.',
    title: 'Process Adaptivity',
    dimension: "Process"
  },
  '3-04': {
    category: 'Innovation',
    description: 'The ability to efficiently use resources by reducing wastes and non-value activities',
    title: 'Establishing an Innovation Process',
    dimension: "Process"
  },
  '3-05': {
    category: 'Efficiency',
    description: 'The ability to efficiently use resources by reducing wastes and non-value activities',
    title: 'Establishing Leanness of Operations ',
    dimension: "Process"
  },
  '3-06': {
    category: 'Efficiency',
    description: 'The ability to establish quickness in the operations within an organization.',
    title: 'Fast Operations Time',
    dimension: "Process"
  },
  '3-07': {
    category: 'Knowledge Management',
    description: 'The ability to adapt processes to centralize and manage knowledge within the organization and make it accessible to all employees.',
    title: 'Integrative Knowledge Management',
    dimension: "Process"
  },
  '3-08': {
    category: 'Knowledge Management',
    description: 'The ability to process knowledge sharing between individuals.',
    title: 'Ease of Knowledge Distribution',
    dimension: "Process"
  },
  '3-09': {
    category: 'Knowledge Management',
    description: 'The ability to adapt process in a way which allows transparent information flows amongst stakeholders, which allows informed decision-making.',
    title: 'Transparent Information Flow',
    dimension: "Process"
  },
  '3-10': {
    category: 'Knowledge Management',
    description: 'The ability to swiftly and easily obtain consistent and correct information.',
    title: 'Speed and Accuracy of Access to Information',
    dimension: "Process"
  },
  '3-11': {
    category: 'Organizational and Management Structures',
    description: 'The ability to operate with a limited number of unwritten rules and procedures.',
    title: 'Establishing only Neccessary Rules and Procedures',
    dimension: "Process"
  },
  '3-12': {
    category: 'Efficiency',
    description: 'The ability to concurrently execute different activities.',
    title: 'Operational Concurrency',
    dimension: "Process"
  },
  '3-13': {
    category: 'Efficiency',
    description: 'The ability to adapt decision processes in a way which allows for quick execution of decisions.',
    title: 'Facilitate Rapid Decision-Making Process',
    dimension: "Process"
  },
  '3-14': {
    category: 'Efficiency',
    description: 'The ability to identifiy points for optimization by assembling and disassembling systems and processes.',
    title: 'Operational Modularization',
    dimension: "Process"
  },
  '3-15': {
    category: 'Innovation',
    description: 'The ability to identify potential areas for improvement through frequent reflection.',
    title: 'Identifiying Continuous Feedback Loops',
    dimension: "Process"
  },
  '3-16': {
    category: 'Knowledge Management',
    description: 'The ability to adapt processes for organization-wide learning by enabling the creating, transferring, and retaining of knowledge and experience.',
    title: 'Establishing an Organizational Learning Process',
    dimension: "Process"
  },
  '3-17': {
    category: 'Efficiency',
    description: 'The ability to simplify processes by looking for new ideas externally or coming up with new inventions.',
    title: 'Invent and Simplify',
    dimension: "Process"
  },
  '4-01': {
    category: 'Efficiency',
    description: 'The ability to apply technology, IT applications, components and services effectively within the organization.',
    title: 'Effective IT Exploitation',
    dimension: "IT"
  },
  '4-02': {
    category: 'Innovation',
    description: 'The ability to encourage and drive technology-driven innovations.',
    title: 'Fostering of Technology-Driven Innovation',
    dimension: "IT"
  },
  '4-03': {
    category: 'Efficiency',
    description: 'The ability to leverage technology to differentiate and create a competitive advantage.',
    title: 'Applying Technology as a Differentiatior',
    dimension: "IT"
  },
  '4-04': {
    category: 'CI-CD',
    description: 'The ability to quickly and smoothly adapt or integrate current technologies with new or different technologies.',
    title: 'Technological Change Readiness',
    dimension: "IT"
  },
  '4-05': {
    category: 'Organizational and Management Structures',
    description: 'The ability to be open to and experiment with new management practices.',
    title: 'Openness to IT Management Practice Exploration',
    dimension: "IT"
  },
  '4-06': {
    category: 'Communication',
    description: 'The ability to efficiently integrate components in the IT infrastructure and share information in business processes among different teams.',
    title: 'IT Integration',
    dimension: "IT"
  },
  '4-07': {
    category: 'Adaptability',
    description: 'The ability to flexibly recombine the IT infrastructure with minimal penalty to current cost, effort, time or performance.',
    title: 'IT Flexibility',
    dimension: "IT"
  },
  '4-08': {
    category: 'CI-CD',
    description: 'The ability that facilitates IT-enabled business process integration through data and system communications.',
    title: 'IT Process Integration',
    dimension: "IT"
  },
  '4-09': {
    category: 'Knowledge Management',
    description: 'The ability to execute IT-enabled knowledge management.',
    title: 'IT Knowledge Management',
    dimension: "IT"
  },
  '4-10': {
    category: 'Adaptability',
    description: 'The ability to be aware of new technology and technological changes.',
    title: 'Technological Awareness',
    dimension: "IT"
  },
  '4-11': {
    category: 'Knowledge Management',
    description: 'The ability of employees to learn how to work with new introduced technology.',
    title: 'Technological Competence',
    dimension: "IT"
  },
  '4-12': {
    category: 'CI-CD',
    description: 'The ability to ensure the frequent integration and merging of coded software.',
    title: 'Continuous Integration IT Competency',
    dimension: "IT"
  },
  '4-13': {
    category: 'CI-CD',
    description: 'The ability to ensure coded software is always at a production-ready state after successfully passing automted tests and quality checks.',
    title: 'Continuous Delivery IT Competency',
    dimension: "IT"
  },
  '4-14': {
    category: 'CI-CD',
    description: 'The ability to automatically and steadily deploy coded software to customer environments.',
    title: 'Continuous Deployment IT Competency',
    dimension: "IT"
  },
  '4-15': {
    category: 'Communication',
    description: 'The ability to collaborate across development and IT operations teams so that they jointly communicate and work on pain points, updates, and solutions.',
    title: 'Development and IT Operations Collaboration',
    dimension: "IT"
  },
  '5-01': {
    category: 'Efficiency',
    description: 'The ability to reflect as a team on how to become more effective on regular intervals and cosequently adjust behvaior accordingly.',
    title: 'Focusing on Team-Reflection',
    dimension: "People"
  },
  '5-02': {
    category: 'Innovation',
    description: 'The ability to develop and learn new skills and competencies quickly and with ease.',
    title: 'Speed of Developing New Skills and Competencies',
    dimension: "People"
  },
  '5-03': {
    category: 'Innovation',
    description: 'The ability to constantly learn from the present in a systematic manner to ensure continuous improvements.',
    title: 'Organizational Learning Culture',
    dimension: "People"
  },
  '5-04': {
    category: 'Knowledge Management',
    description: 'The ability to create an environment that encourages and enables the exchange of knowledge, insight and experiences to drive the business towards its objectives.',
    title: 'Knowledge-Sharing Culture',
    dimension: "People"
  },
  '5-05': {
    category: 'Collaboration',
    description: 'The ability to create an environment that fosters a collaborative mindset of individuals which naturally think and act collaboratively.',
    title: 'Growing a Collaborative Mindset',
    dimension: "People"
  },
  '5-06': {
    category: 'Collaboration',
    description: 'The ability to create an environment in which employees cooperate efficiently and flexibly across the functional boundaries of the organization.',
    title: 'Focusing on Cross-Functional Collaboration',
    dimension: "People"
  },
  '5-07': {
    category: 'Collaboration',
    description: 'The ability to engage internal and external stakeholders to work together to create value and address the interests and needs of the participating individuals.',
    title: 'Embracing Co-Creation Thinking',
    dimension: "People"
  },
  '5-08': {
    category: 'Adaptability',
    description: 'The ability to create an environment that supports the quick implementation of best practices adopted by others (e.g., competitors).',
    title: 'Fostering Adaptiveness',
    dimension: "People"
  },
  '5-09': {
    category: 'Adaptability',
    description: 'The ability to anticipate potential future challenges and opportunities, and act upon them in advance.',
    title: 'Supporting Proactive Behavior',
    dimension: "People"
  },
  '5-10': {
    category: 'Innovation',
    description: 'The ability to create an environment that encourages risk-taking, experimentation and out-of-the-box thinking to promote new ideas and innovations.',
    title: 'Innovation-Promoting Culture',
    dimension: "People"
  },
  '5-11': {
    category: 'Innovation',
    description: 'The ability to create an environment composed of a set of shared values, goals and practices that encourages learning through experimentation.',
    title: 'Promoting a Culture of Failure',
    dimension: "People"
  },
  '5-12': {
    category: 'Adaptability',
    description: 'The ability to successfully and timely adapt to changes in the market environment while ensuring that business operations are not disrupted.',
    title: 'Workforce Responsiveness',
    dimension: "People"
  },
  '5-13': {
    category: 'Adaptability',
    description: 'The ability to create an environment in which employees develop a positive attitude and being comfortable with changes, new ideas, people, and technology.',
    title: 'Culture of Change',
    dimension: "People"
  },
  '5-14': {
    category: 'Adaptability',
    description: 'The ability to create an environment in which employees easily accept and deal with new tasks and responsibilities that come with them.',
    title: 'Increasing Acceptance of Changing Responsibilities',
    dimension: "People"
  },
  '5-15': {
    category: 'Adaptability',
    description: 'The ability to create an environment in which employees are able to change flexibly and efficiently between different tasks, teams, and projects.',
    title: 'Encouraging People Flexibility',
    dimension: "People"
  },
  '5-16': {
    category: 'Adaptability',
    description: 'The ability to create an environment that enables employees to manage uncertain and unexpected situations, recovering from change, or adapting and benefiting as a result of change.',
    title: 'Building Organization-Wide Resilience',
    dimension: "People"
  },
  '5-17': {
    category: 'Collaboration',
    description: 'The ability to create the environment that attracts and develops employees posessing high level of expertise a specific area while having the disposition for collaboration with experts from other areas.',
    title: 'Promoting T-Shaped Skills',
    dimension: "People"
  },
  '5-18': {
    category: 'Efficiency',
    description: 'The ability to provide employees with the resources, autonomy and development possibilities they need to do their job more efficiently.',
    title: 'Empowering People',
    dimension: "People"
  },
  '5-19': {
    category: 'Organizational and Management Structures',
    description: 'The ability to create an environment that equips employees with greater authority and responsibilities in how they perform their work to take charge and a greater initiative.',
    title: 'Creating an Engaging Ownership Culture',
    dimension: "People"
  },
  '5-20': {
    category: 'Organizational and Management Structures',
    description: 'The ability to create an environment in which a shared decentralized decision making-process is in place according to which a team can make autonomous decision in a flexible and efficient way.',
    title: 'Decentralizing Autonomy in Decision-Making',
    dimension: "People"
  },
  '5-21': {
    category: 'Communication',
    description: 'The ability to create an environment that empowers employees to develop and execute conflict resolution skills.',
    title: 'Promoting Conflict Resolution',
    dimension: "People"
  },
  '5-22': {
    category: 'Collaboration',
    description: 'The ability to create an open environment that fosters a culture encouraging employees to share ideas, promoting the freedom of debate, as well as fosters open communication, feedback and discussions.',
    title: 'Cultivating an Open Culture',
    dimension: "People"
  },
  '5-23': {
    category: 'Organizational and Management Structures',
    description: 'The ability to create an environment which empowers individuals to work in self-organized teams.',
    title: 'Encouraging a Self-Organized Teams Attitude',
    dimension: "People"
  },
  '5-24': {
    category: 'Innovation',
    description: 'The ability to create an environment in which the usage of technology is part of the organizational culture.',
    title: 'Implementing Technology in the Cultural DNA',
    dimension: "People"
  },
  '5-25': {
    category: 'Communication',
    description: 'The ability to create an environment which promotes transparency with information, intentions, and results, enabling employees to make informed decisions.',
    title: 'Creating Transparency',
    dimension: "People"
  },
  '5-26': {
    category: 'Organizational and Management Structures',
    description: 'The ability to create an environment in which employees are intrinsically motivated because they have an aspiration of the work, they do with the vision of creating an impact.',
    title: 'Promoting a Purpose-Driven Mindset',
    dimension: "People"
  },
  '5-27': {
    category: 'Organizational and Management Structures',
    description: 'The ability to create an environment which promotes taking ownership for one\u00e2\u20ac\u2122s actions, outcomes, opportunities, and problems.',
    title: 'Fostering Personal Responsibility',
    dimension: "People"
  },
  '5-28': {
    category: 'Customer Focus',
    description: 'The ability to create an environment which cultivates a culture that focuses on creating the best experience for the customer by putting the customer at the center of each business activity.',
    title: 'Embedding a Customer-Centric Culture',
    dimension: "People"
  },
  '6-01': {
    category: 'Customer Focus',
    description: 'The ability access and manage customer demands within the organization.',
    title: 'Availability of Customer Demands Information',
    dimension: "Customer-Centric Product Development"
  },
  '6-02': {
    category: 'Customer Focus',
    description: 'The ability to establish long-term, trusting connections with customers, preventing them from switching to a competitor.',
    title: 'Customer Connectivity',
    dimension: "Customer-Centric Product Development"
  },
  '6-03': {
    category: 'Collaboration',
    description: 'The ability to define, consolidate and manage customer information across the organization and if necessary, also integrate information from collaborative partner companies.',
    title: 'Customer Data Integration',
    dimension: "Customer-Centric Product Development"
  },
  '6-04': {
    category: 'Adaptability',
    description: 'The ability to respond fast to changes in customer requirements and to integrate the feedback, preferences and needs of the customers into products and services.',
    title: 'Customer Preferences Responsiveness',
    dimension: "Customer-Centric Product Development"
  },
  '6-05': {
    category: 'Adaptability',
    description: 'The ability to detect customers\' wants, needs, and preferences, such as through market research, questionnaires, or face-to-face encounters.',
    title: 'Customer Preferences Sensitivity',
    dimension: "Customer-Centric Product Development"
  },
  '6-06': {
    category: 'Adaptability',
    description: 'The ability to assess performance in terms of customer happiness, retention, and other metrics, and then tailor products and services to meet and exceed consumer expectations using these KPIs.',
    title: 'Focusing on Customer-Based Measures',
    dimension: "Customer-Centric Product Development"
  },
  '6-07': {
    category: 'Knowledge Management',
    description: 'The ability to listen and learn from your customers (i.e., changes in customer needs) and implement this knowledge internally.',
    title: 'Learning from Customers',
    dimension: "Customer-Centric Product Development"
  },
  '6-08': {
    category: 'Organizational and Management Structures',
    description: 'The ability to renew the range of products and services while maintaining an internal operating fluidity.',
    title: 'Product Offering Flexibility',
    dimension: "Customer-Centric Product Development"
  },
  '6-09': {
    category: 'CI-CD',
    description: 'The ability to introduce new products and services to the market at a high and fast rate.',
    title: 'Quick Product Time-to-Market',
    dimension: "Customer-Centric Product Development"
  },
  '6-10': {
    category: 'CI-CD',
    description: 'The ability to fabricate a model or assembly in a very short amount of time.',
    title: 'Rapid Prototyping',
    dimension: "Customer-Centric Product Development"
  },
  '6-11': {
    category: 'Adaptability',
    description: 'The ability to develop products and services in a very short amount of time.',
    title: 'Short Development Cycle Times',
    dimension: "Customer-Centric Product Development"
  },
  '6-12': {
    category: 'Adaptability',
    description: 'The ability to quickly change product or service components if required.',
    title: 'Short Time of Product Changes',
    dimension: "Customer-Centric Product Development"
  },
  '7-01': {
    category: 'Adaptability',
    description: 'The ability to identify which leadership approach is more appropriate for a particular circumstance, being open to learn new leadership approaches, and appropriately shift between leadership styles.',
    title: 'Holistically-Oriented Leadership',
    dimension: "Leadership"
  },
  '7-02': {
    category: 'Adaptability',
    description: 'The ability to implement an ambidextrous leadership approach throughout the transformation phase by executing tradironal leadership approaches and agile leadership at the same time.',
    title: 'Ambidextrous Leadership Approach',
    dimension: "Leadership"
  },
  '7-03': {
    category: 'Organizational and Management Structures',
    description: 'The ability of releasing from traditional leadership approaches that will not be appropriate and effective to lead employees in an agile organization.',
    title: 'Emotional Detachment from Traditional Leadership Approaches',
    dimension: "Leadership"
  },
  '7-04': {
    category: 'Collaboration',
    description: 'The ability to build a participative culture that empowers and inspires employees to realize the organizational vision.',
    title: 'Establishing a Participative Culture',
    dimension: "Leadership"
  },
  '7-05': {
    category: 'Knowlegdge Transfer',
    description: 'The ability to uncover, drive and foster employee potential and supporting and motivating them during their development process.',
    title: 'Supporting Employees in Realizing their Untapped Potential',
    dimension: "Leadership"
  },
  '7-06': {
    category: 'Knowlegdge Transfer',
    description: 'The ability to create appropriate conditions for employees to reveal their competencies and skills and use them effectively as well as encourage/ grow them to develop new capabilities and knowledge.',
    title: 'Promoting Employees Strengths',
    dimension: "Leadership"
  },
  '7-07': {
    category: 'Organizational and Management Structures',
    description: 'The ability to actively and continuously involve employees in decision-making processes and empower them to make decision on their own.',
    title: 'Encouraging Employees for Independent Decision Making',
    dimension: "Leadership"
  },
  '7-08': {
    category: 'Organizational and Management Structures',
    description: 'The ability to delegate responsibility for tasks to other team members, giving them the necessary autonomy to act independently, whilst still being accountable for the decisions being made.',
    title: 'Sharing Responsibility and Mutual Accountability',
    dimension: "Leadership"
  },
  '7-09': {
    category: 'Innovation',
    description: 'The ability to provide employees with the necessary autonomy, tools, and support they need to experiment, test and come up with new ideas.',
    title: 'Empowering Employees to Experiment and Innovate',
    dimension: "Leadership"
  },
  '7-10': {
    category: 'Customer Focus',
    description: 'The ability to think and act in the interest of the customer as well as the continuous objective of understanding the customer`s needs visions, difficulties etc..',
    title: 'Customer-First Mindset',
    dimension: "Leadership"
  },
  '7-11': {
    category: 'Collaboration',
    description: 'The ability to have a very good understanding of the business, needs, visions, strategies, products of collaborative partner companies.',
    title: 'Having a Good Knowledge of Collaborative Partner Companies',
    dimension: "Leadership"
  },
  '7-12': {
    category: 'Knowledge Management',
    description: 'The ability to provide a 360-degree feedback to employees and suggest improvement opportunities to develop new skills and knowledge.',
    title: 'Providing Feedback to Employees for Continuous Learning',
    dimension: "Leadership"
  },
  '7-13': {
    category: 'Innovation',
    description: 'The ability to focus on self-reflection and analyzing the current level of skills, strengths, weaknesses, and behavioral patterns to identify areas for learning and improvement.',
    title: 'Self-Reflection for Continuous Improvement',
    dimension: "Leadership"
  },
  '7-14': {
    category: 'Communication',
    description: 'The ability to create the shared assumption that every employee can take personal risks and "speak up without being rejected or punished".',
    title: 'Cultivating Psychological Safety',
    dimension: "Leadership"
  },
  '7-15': {
    category: 'Adaptability',
    description: 'The ability to deal with change by putting aside thoughts of failure and concentrating on the actions necessary to be open, resilient, and flexible.',
    title: 'Change-Driven Mindset',
    dimension: "Leadership"
  },
  '7-16': {
    category: 'Communication',
    description: 'The ability to recognize problems and support and encourage employees to find a common solution to a disagreement.',
    title: 'Problem-Solving Approach',
    dimension: "Leadership"
  },
  '7-17': {
    category: 'Communication',
    description: 'The ability to guide employees and influence their behavior by defining the organizational vision, and ensuring that all employees understand those visions and goals.',
    title: 'Guiding Employees Along the Organizational Vision',
    dimension: "Leadership"
  },
  '7-18': {
    category: 'Communication',
    description: 'The ability to guide the team and continuously influence team behavior by defining, disseminating and sustaining a guiding vision (declaration of the greater purpose of the organization).',
    title: 'Purpose-Driven Leadership',
    dimension: "Leadership"
  },
  '7-19': {
    category: 'Collaboration',
    description: 'The ability to eliminate silo-oriented thinking and empowering employees to build a value-connected orientation between different teams and entities.',
    title: 'Empowering a Value-Connected Solidarity between Teams and Departments',
    dimension: "Leadership"
  },
  '7-20': {
    category: 'Knowledge Management',
    description: 'The ability to ensure knowledge is transparent communicated and accessible to the rest of the organization.',
    title: 'Prioritizing Organization-Wide Knowledge Transfer',
    dimension: "Leadership"
  },
  '7-21': {
    category: 'Communication',
    description: 'The ability to openly and transparently communicate relevant company information and opinions to employees to create a trustful environment.',
    title: 'Create an Environment of Transparency and Trust',
    dimension: "Leadership"
  },
  '7-22': {
    category: 'Efficiency',
    description: 'The ability to identify and remove obstacles that prevent employees achieving their goals.',
    title: 'Managing for Outcomes',
    dimension: "Leadership"
  },
  '7-23': {
    category: 'Organizational and Management Structures',
    description: 'The ability to encourage employees to take ownership for their actions and outcomes.',
    title: 'Promoting Employees Ownership',
    dimension: "Leadership"
  }
  },
  de: {
    '1-01': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, Veränderungen im Umfeld zu erkennen und die daraus resultierenden Chancen und neuen Anforderungen zu erkennen.',
      title: 'Externe Veränderungen und aufkommende Geschäftsmöglichkeiten erkennen',
      dimension: 'Strategie und Zweck'
    },
    '1-02': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, Veränderungen und sich bietende Gelegenheiten im Umfeld aufzugreifen und wertschöpfend zu nutzen.',
      title: 'Externe Veränderungen und aufkommende Geschäftsmöglichkeiten nutzen',
      dimension: 'Strategie und Zweck'
    },
    '1-03': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, die Unternehmensstrategie schnell neu auszurichten, um auf Geschäftsmöglichkeiten zu reagieren.',
      title: 'Reaktionsfähigkeit auf externe Veränderungen und neue Geschäftsmöglichkeiten',
      dimension: 'Strategie und Zweck'
    },
    '1-04': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, das Geschäftsmodell proaktiv und schnell anzupassen.',
      title: 'Anpassungsfähigkeit des Geschäftsmodells',
      dimension: 'Strategie und Zweck'
    },
    '1-05': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, Ressourcen fliessend umzuverteilen und zu nutzen.',
      title: 'Ressourcenfluidität',
      dimension: 'Strategie und Zweck'
    },
    '1-06': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, wertvolles externes Wissen zu identifizieren und in die Wissensbasis des Unternehmens zu integrieren.',
      title: 'Absorptionsfähigkeit',
      dimension: 'Strategie und Zweck'
    },
    '1-07': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, sich gleichzeitig an eine Vielzahl von Geschäftskontexten anzupassen.',
      title: 'Simultane Anpassungsfähigkeit',
      dimension: 'Strategie und Zweck'
    },
    '1-08': {
      category: 'Innovation',
      description: 'Die Fähigkeit, verschiedene Aspekte des Geschäftsmodells der Organisation neu zu definieren.',
      title: 'Strategische Innovationsfähigkeit',
      dimension: 'Strategie und Zweck'
    },
    '1-09': {
      category: 'Innovation',
      description: 'Die Fähigkeit, eine geeignete Umgebung zu schaffen, die das Experimentieren unterstützt.',
      title: 'Unterstützung von organisationsweiten Experimenten',
      dimension: 'Strategie und Zweck'
    },
    '1-10': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, genau zu erkennen, was sich verändert, und regelmä\u00c3\u0178ig zu prüfen, wie sich diese Veränderungen auf den aktuellen Erfolg Ihres Unternehmens auswirken könnten.',
      title: 'Verleugnung überwinden',
      dimension: 'Strategie und Zweck'
    },
    '1-11': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, Partnerschaften mit externen Parteien aufzubauen, um Ressourcen, Wissen und Kompetenzen zu nutzen.',
      title: 'Aufbau von kooperativen und dauerhaften Partnerschaften',
      dimension: 'Strategie und Zweck'
    },
    '1-12': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, schnell geeignete Partner zu finden oder bestehende Partnerschaften zu ändern.',
      title: 'Schnelle Identifizierung und Bildung von Partnerschaften',
      dimension: 'Strategie und Zweck'
    },
    '1-13': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, die vertrauensvolle Zusammenarbeit mit verschiedenen Interessengruppen innerhalb und ausserhalb der Organisation zu betonen und aufzubauen',
      title: 'Förderung der internen und externen Zusammenarbeit',
      dimension: 'Strategie und Zweck'
    },
    '1-14': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, die Teilnehmer eines Netzes durch Kommunikation zu koordinieren.',
      title: 'Netzwerks-Kommunikation',
      dimension: 'Strategie und Zweck'
    },
    '1-15': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, Partner in den Prozess der Produktentwicklung einzubeziehen und zu beteiligen',
      title: 'Einbindung von Partnern in den Produktentwicklungsprozess',
      dimension: 'Strategie und Zweck'
    },
    '1-16': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, langfristige Ziele (3 bis 5 Jahre) für die Mitarbeiter zu setzen',
      title: 'Festlegung langfristiger strategischer Ziele für Mitarbeiter',
      dimension: 'Strategie und Zweck'
    },
    '1-17': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, konkrete kurzfristige Ziele für die Mitarbeiter zu setzen',
      title: 'Festlegung spezifischer kurzfristiger Ziele für Mitarbeiter',
      dimension: 'Strategie und Zweck'
    },
    '1-18': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, den Mitarbeitern kontinuierliche Lern- und Schulungsmöglichkeiten zu bieten, um sie zu ständiger Weiterentwicklung und Weiterbildung zu ermutigen.',
      title: 'Betonung des Lernens für organisatorische Exzellenz',
      dimension: 'Strategie und Zweck'
    },
    '1-19': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, Organisationsstrukturen durch die Definition einer wertvollen gemeinsamen Agenda für den Erfolg effektiv auszurichten.',
      title: 'Integration und Ausrichtung der organisatorischen Komponenten',
      dimension: 'Strategie und Zweck'
    },
    '1-20': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, sich durch Investitionen in die Entwicklung und Verbreitung von Wissen einen Wettbewerbsvorteil gegenüber der Konkurrenz zu verschaffen',
      title: 'Investitionen in Wissen als Wettbewerbsvorteil',
      dimension: 'Strategie und Zweck'
    },
    '1-21': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, offen zu sein für die Aufnahme neuer Informationen, Ideen und Fähigkeiten aus einer Vielzahl unterschiedlicher Quellen',
      title: 'Strategische Offenheit',
      dimension: 'Strategie und Zweck'
    },
    '1-22': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, aktuelle Annahmen in Frage zu stellen und durch einen offenen Dialog über strategische Fragen über zukünftige Möglichkeiten nachzudenken.',
      title: 'Strategisches Reframing',
      dimension: 'Strategie und Zweck'
    },
    '2-01': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, Macht zu dezentralisieren und Teams zur Selbstorganisation zu ermutigen.',
      title: 'Dezentralisierte Autorität und Kontrolle',
      dimension: 'Struktur',
    },
    '2-02': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, ein Machtgleichgewicht zwischen einer Person in einer Führungsposition und einer Person in einer untergeordneten Position durch weniger Titel, Ebenen, Statusdimensionen usw. herzustellen.',
      title: 'Wenige Autoritätsunterschiede',
      dimension: 'Struktur'
    },
    '2-03': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, eine Organisationsstruktur mit einer grossen Kontrollspanne, aber einer geringen Anzahl von Hierarchieebenen umzusetzen.',
      title: 'Flache Organisationsstruktur',
      dimension: 'Struktur'
    },
    '2-04': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, eine Organisationsstruktur zu implementieren, in der ein einzelner Manager oder Vorgesetzter eine grosse Anzahl von Mitarbeitern beaufsichtigt',
      title: 'Breite Kontrollspanne',
      dimension: 'Struktur'
    },
    '2-05': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, eine Struktur mit geringer Komplexität und unkomplizierten Beziehungen zwischen den Strukturelementen zu erstellen.',
      title: 'Geringe Strukturkomplexität',
      dimension: 'Struktur'
    },
    '2-06': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, ein System autonomer Netze von Teams aufzubauen, die ein gemeinsames Ziel verfolgen und auf die Vision der Organisation ausgerichtet sind',
      title: 'Netzwerk von Teams',
      dimension: 'Struktur'
    },
    '2-07': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Fähigkeit zur Bildung effizienter multidisziplinärer Teams mit Personen aus verschiedenen Funktionsbereichen',
      title: 'Funktionsübergreifender Team-Ansatz',
      dimension: 'Struktur'
    },
    '2-08': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, innerhalb eines Teams wichtige Leistungsindikatoren (KPIs) in Bezug auf Teameffizienz, Teamleistung, Teamzufriedenheit usw. festzulegen und zu verfolgen.',
      title: 'Teambasierte Ziele und Massnahmen',
      dimension: 'Struktur'
    },
    '2-09': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, Ziele und Anreize auf allen Organisationsebenen aufeinander abzustimmen und einheitlich zu gestalten',
      title: 'Angleichung von Zielen und Anreizen',
      dimension: 'Struktur'
    },
    '2-10': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, eine Organisationsstruktur zu schaffen, die den Erhalt, den einfachen Zugang und den Transfer von Wissen innerhalb der Organisation unterstützt',
      title: 'Strukturelle Unterstützung des dezentralen Wissensmanagements',
      dimension: 'Struktur'
    },
    '2-11': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, eine Organisationsstruktur zu schaffen, die das organisatorische Lernen erleichtert.',
      title: 'Strukturelle Unterstützung des organisatorischen Lernens',
      dimension: 'Struktur'
    },
    '2-12': {
      category: 'Innovation',
      description: 'Die Fähigkeit, eine Organisationsstruktur zu schaffen, die den Mitarbeitern die nötige Unterstützung und Anleitung zum Experimentieren und Innovieren bietet.',
      title: 'Strukturelle Unterstützung von Experimenten und Innovation',
      dimension: 'Struktur'
    },
    '2-13': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, die Organisationsstruktur als Reaktion auf Umweltveränderungen anzupassen.',
      title: 'Organisatorische Rekonfigurierbarkeit der Struktur',
      dimension: 'Struktur'
    },
    '2-14': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, Rollen fliessend mit der Entwicklung des Unternehmens zu wechseln, so dass Mitarbeiter ihre Aufgaben erweitern und teilen können.',
      title: 'Flüssige Rollendefinitionen',
      dimension: 'Struktur'
    },
    '2-15': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, wenige und flexible Regeln und Verfahren einzuführen, z. B. um die Entscheidungsfindung und die Arbeitsleistung zu standardisieren.',
      title: 'Formalisierung der Flexibilität',
      dimension: 'Struktur'
    },
    '2-16': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, das Silo-Denken innerhalb des Unternehmens zu minimieren, indem organisatorische Mauern beseitigt werden',
      title: 'Unterstützung der organisatorischen Konnektivität',
      dimension: 'Struktur'
    },
    '2-17': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, eine Organisationsstruktur aufzubauen, die flexibel angepasst werden kann, wenn sich die Zuständigkeiten innerhalb der Organisation ändern.',
      title: 'Flexible Zuständigkeit',
      dimension: 'Struktur'
    },
    '2-18': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, Ressourcen neu zu ordnen und zu kombinieren, wenn das Unternehmen wächst und sich Märkte und Technologien weiterentwickeln.',
      title: 'Umstrukturierbarkeit von Ressourcen',
      dimension: 'Struktur'
    },
    '3-01': {
      category: 'Innovation',
      description: 'Die Fähigkeit, Arbeitspraktiken festzulegen, die Leitlinien ohne allzu restriktive Grenzen definieren.',
      title: 'Einführung flexibler Arbeitspraktiken',
      dimension: 'Prozess'
    },
    '3-02': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, verschiedene Arten von Produkten herzustellen und mehrere Ziele mit denselben Anlagen zu erreichen.',
      title: 'Operative Flexibilität',
      dimension: 'Prozess'
    },
    '3-03': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, sich schnell und einfach an veränderte Umstände und Umgebungen anzupassen und Prozesse zu ändern.',
      title: 'Prozess-Anpassungsfähigkeit',
      dimension: 'Prozess'
    },
    '3-04': {
      category: 'Innovation',
      description: 'Die Fähigkeit, einen Innovationsprozess zu implementieren, der es ermöglicht, Ideen in neue Produkte oder Dienstleistungen umzusetzen.',
      title: 'Etablierung eines Innovationsprozesses',
      dimension: 'Prozess'
    },
    '3-05': {
      category: 'Effizienz',
      description: 'Die Fähigkeit, Ressourcen effizient zu nutzen, indem Verschwendung und nicht wertschöpfende Tätigkeiten reduziert werden',
      title: 'Etablierung von \'Leanness\' der Tätigkeiten',
      dimension: 'Prozess'
    },
    '3-06': {
      category: 'Effizienz',
      description: 'Die Fähigkeit, die Abläufe in einer Organisation schnell zu gestalten.',
      title: 'Schnelle Operationszeit',
      dimension: 'Prozess'
    },
    '3-07': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, Prozesse anzupassen, um Wissen innerhalb der Organisation zu zentralisieren und zu verwalten und es allen Mitarbeitern zugänglich zu machen.',
      title: 'Integratives Wissensmanagement',
      dimension: 'Prozess'
    },
    '3-08': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, den Wissensaustausch zwischen Einzelpersonen zu verarbeiten.',
      title: 'Einfache Verteilung von Wissen',
      dimension: 'Prozess'
    },
    '3-09': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, Prozesse so anzupassen, dass ein transparenter Informationsfluss zwischen den Beteiligten möglich ist, der eine fundierte Entscheidungsfindung ermöglicht.',
      title: 'Transparenter Informationsfluss',
      dimension: 'Prozess'
    },
    '3-10': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, schnell und einfach konsistente und korrekte Informationen zu erhalten.',
      title: 'Schneller und präziser Zugang zu Informationen',
      dimension: 'Prozess'
    },
    '3-11': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, mit einer begrenzten Anzahl von ungeschriebenen Regeln und Verfahren zu arbeiten.',
      title: 'Reduktion auf notwendige Regeln und Verfahren',
      dimension: 'Prozess'
    },
    '3-12': {
      category: 'Effizienz',
      description: 'Die Fähigkeit zur gleichzeitigen Ausführung verschiedener Tätigkeiten.',
      title: 'Gleichzeitigkeit der Operationen',
      dimension: 'Prozess'
    },
    '3-13': {
      category: 'Effizienz',
      description: 'Die Fähigkeit, Entscheidungsprozesse so anzupassen, dass eine rasche Umsetzung von Entscheidungen möglich ist.',
      title: 'Erleichterung eines schnellen Entscheidungsfindungsprozesses',
      dimension: 'Prozess'
    },
    '3-14': {
      category: 'Effizienz',
      description: 'Die Fähigkeit, durch den Auf- und Abbau von Systemen und Prozessen Optimierungsmöglichkeiten zu erkennen.',
      title: 'Operative Modularisierung',
      dimension: 'Prozess'
    },
    '3-15': {
      category: 'Innovation',
      description: 'Die Fähigkeit, durch häufiges Nachdenken potenzielle Verbesserungsbereiche zu ermitteln.',
      title: 'Identifikation von kontinuierlichen Feedback-Schleifen',
      dimension: 'Prozess'
    },
    '3-16': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, Prozesse für unternehmensweites Lernen anzupassen, indem die Schaffung, Weitergabe und Bewahrung von Wissen und Erfahrung ermöglicht wird.',
      title: 'Einen organisatorischen Lernprozess einrichten',
      dimension: 'Prozess'
    },
    '3-17': {
      category: 'Effizienz',
      description: 'Die Fähigkeit, Prozesse zu vereinfachen, indem man extern nach neuen Ideen sucht oder neue Erfindungen einbringt.',
      title: 'Erfinden und Vereinfachen',
      dimension: 'Prozess'
    },
    '4-01': {
      category: 'Effizienz',
      description: 'Die Fähigkeit, Technologie, IT-Anwendungen, Komponenten und Dienste innerhalb der Organisation effektiv einzusetzen.',
      title: 'Effektive IT-Nutzung',
      dimension: 'IT'
    },
    '4-02': {
      category: 'Innovation',
      description: 'Die Fähigkeit, technologiegetriebene Innovationen zu fördern und voranzutreiben.',
      title: 'Förderung von technologiegestützten Innovation',
      dimension: 'IT'
    },
    '4-03': {
      category: 'Effizienz',
      description: 'Die Fähigkeit, Technologie zu nutzen, um sich von der Konkurrenz abzuheben und einen Wettbewerbsvorteil zu schaffen.',
      title: 'Technologie als Differenzierungsmerkmal anwenden',
      dimension: 'IT'
    },
    '4-04': {
      category: 'CI-CD',
      description: 'Die Fähigkeit, aktuelle Technologien schnell und reibungslos an neue oder andere Technologien anzupassen oder zu integrieren.',
      title: 'Bereitschaft zum technologischen Wandel',
      dimension: 'IT'
    },
    '4-05': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, offen für neue Managementpraktiken zu sein und mit ihnen zu experimentieren.',
      title: 'Offenheit für die Erkundung der IT-Management-Praxis',
      dimension: 'IT'
    },
    '4-06': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, Komponenten der IT-Infrastruktur effizient zu integrieren und Informationen in Geschäftsprozessen zwischen verschiedenen Teams auszutauschen.',
      title: 'IT-Integration',
      dimension: 'IT'
    },
    '4-07': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, die IT-Infrastruktur mit minimalen Einbussen bei Kosten, Aufwand, Zeit oder Leistung flexibel neu zu kombinieren.',
      title: 'IT-Flexibilität',
      dimension: 'IT'
    },
    '4-08': {
      category: 'CI-CD',
      description: 'Die Fähigkeit, die IT-gestützte Geschäftsprozessintegration durch Daten- und Systemkommunikation zu erleichtern.',
      title: 'IT-Prozess-Integration',
      dimension: 'IT'
    },
    '4-09': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, IT-gestütztes Wissensmanagement durchzuführen.',
      title: 'IT-Wissensmanagement',
      dimension: 'IT'
    },
    '4-10': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, sich über neue Technologien und technologische Veränderungen zu informieren.',
      title: 'Technologisches Bewusstsein',
      dimension: 'IT'
    },
    '4-11': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit der Mitarbeiter, den Umgang mit der neu eingeführten Technologie zu erlernen.',
      title: 'Technologische Kompetenz',
      dimension: 'IT'
    },
    '4-12': {
      category: 'CI-CD',
      description: 'Die Fähigkeit, die häufige Integration und Zusammenführung von kodierter Software zu gewährleisten.',
      title: 'Kontinuierliche Integration IT-Kompetenz',
      dimension: 'IT'
    },
    '4-13': {
      category: 'CI-CD',
      description: 'Die Fähigkeit, sicherzustellen, dass kodierte Software immer in einem produktionsfähigen Zustand ist, nachdem sie erfolgreich automatisierte Tests und Qualitätsprüfungen durchlaufen hat.',
      title: 'IT-Kompetenzen im Bereich Continuous Delivery',
      dimension: 'IT'
    },
    '4-14': {
      category: 'CI-CD',
      description: 'Die Fähigkeit, kodierte Software automatisch und kontinuierlich in Kundenumgebungen einzusetzen.',
      title: 'IT-Kompetenzen im Bereich Continuous Deployment',
      dimension: 'IT'
    },
    '4-15': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit zur Zusammenarbeit zwischen Entwicklungs- und IT-Betriebsteams, so dass sie gemeinsam kommunizieren und an Problemen, Aktualisierungen und Lösungen arbeiten können.',
      title: 'Zusammenarbeit zwischen Entwicklung und IT-Betrieb',
      dimension: 'IT'
    },
    '5-01': {
      category: 'Effizienz',
      description: 'Die Fähigkeit, als Team in regelmä\u00c3\u0178igen Abständen darüber nachzudenken, wie man effektiver werden kann, und das Verhalten dementsprechend anzupassen.',
      title: 'Fokus auf Team-Reflexion',
      dimension: 'Menschen'
    },
    '5-02': {
      category: 'Innovation',
      description: 'Die Fähigkeit, neue Fähigkeiten und Kompetenzen schnell und problemlos zu entwickeln und zu erlernen.',
      title: 'Geschwindigkeit der Entwicklung neuer Fähigkeiten und Kompetenzen',
      dimension: 'Menschen'
    },
    '5-03': {
      category: 'Innovation',
      description: 'Die Fähigkeit, ständig und systematisch aus der Gegenwart zu lernen, um kontinuierliche Verbesserungen zu gewährleisten.',
      title: 'Organisatorische Lernkultur',
      dimension: 'Menschen'
    },
    '5-04': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das den Austausch von Wissen, Erkenntnissen und Erfahrungen fördert und ermöglicht, um das Unternehmen auf seine Ziele auszurichten.',
      title: 'Kultur des Wissensaustauschs',
      dimension: 'Menschen'
    },
    '5-05': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das eine kollaborative Denkweise von Personen fördert, die von Natur aus kollaborativ denken und handeln.',
      title: 'Eine kollaborative Denkweise wachsen lassen',
      dimension: 'Menschen'
    },
    '5-06': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, in dem die Mitarbeiter effizient und flexibel über die Funktionsgrenzen der Organisation hinweg zusammenarbeiten.',
      title: 'Fokus auf funktionsübergreifende Zusammenarbeit',
      dimension: 'Menschen'
    },
    '5-07': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, interne und externe Stakeholder zur Zusammenarbeit zu bewegen, um Werte zu schaffen und die Interessen und Bedürfnisse der beteiligten Personen zu berücksichtigen.',
      title: 'Co-Creation-Denken einbeziehen',
      dimension: 'Menschen'
    },
    '5-08': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das die rasche Umsetzung der von anderen (z. B. Wettbewerbern) übernommenen bewährten Verfahren unterstützt.',
      title: 'Förderung der Anpassungsfähigkeit',
      dimension: 'Menschen'
    },
    '5-09': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, potenzielle künftige Herausforderungen und Chancen zu antizipieren und im Voraus darauf zu reagieren.',
      title: 'Unterstützung von proaktivem Verhalten',
      dimension: 'Menschen'
    },
    '5-10': {
      category: 'Innovation',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das zur Risikobereitschaft, zum Experimentieren und zu unkonventionellem Denken anregt, um neue Ideen und Innovationen zu fördern.',
      title: 'Innovationsfördernde Kultur',
      dimension: 'Menschen'
    },
    '5-11': {
      category: 'Innovation',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das aus einer Reihe gemeinsamer Werte, Ziele und Praktiken besteht und das Lernen durch Experimentieren fördert.',
      title: 'Förderung einer Kultur des Scheiterns',
      dimension: 'Menschen'
    },
    '5-12': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, sich erfolgreich und rechtzeitig an Veränderungen des Marktumfelds anzupassen und gleichzeitig sicherzustellen, dass der Geschäftsbetrieb nicht gestört wird.',
      title: 'Reaktionsfähigkeit der Arbeitskräfte',
      dimension: 'Menschen'
    },
    '5-13': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, in dem die Mitarbeiter eine positive Einstellung entwickeln und sich mit Veränderungen, neuen Ideen, Menschen und Technologien wohlfühlen.',
      title: 'Kultur des Wandels',
      dimension: 'Menschen'
    },
    '5-14': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, in dem die Mitarbeiter neue Aufgaben und die damit verbundene Verantwortung problemlos annehmen und bewältigen können.',
      title: 'Zunehmende Akzeptanz der sich ändernden Verantwortlichkeiten',
      dimension: 'Menschen'
    },
    '5-15': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, in dem die Mitarbeiter flexibel und effizient zwischen verschiedenen Aufgaben, Teams und Projekten wechseln können.',
      title: 'Ermutigung zur Flexibilität der Menschen',
      dimension: 'Menschen'
    },
    '5-16': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das es den Mitarbeitern ermöglicht, mit unsicheren und unerwarteten Situationen umzugehen, sich von Veränderungen zu erholen oder sich an Veränderungen anzupassen und von ihnen zu profitieren.',
      title: 'Aufbau einer organisationsweiten Resilienz',
      dimension: 'Menschen'
    },
    '5-17': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das Mitarbeiter anzieht und fördert, die über ein hohes Mass an Fachwissen in einem bestimmten Bereich verfügen und gleichzeitig die Bereitschaft zur Zusammenarbeit mit Experten aus anderen Bereichen haben.',
      title: 'Förderung von T-Shaped Skills',
      dimension: 'Menschen'
    },
    '5-18': {
      category: 'Effizienz',
      description: 'Die Fähigkeit, den Mitarbeitern die Ressourcen, die Autonomie und die Entwicklungsmöglichkeiten zu bieten, die sie benötigen, um ihre Arbeit effizienter zu erledigen.',
      title: 'Menschen ermächtigen',
      dimension: 'Menschen'
    },
    '5-19': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das den Mitarbeitern mehr Autorität und Verantwortung bei der Ausführung ihrer Arbeit einräumt, damit sie Verantwortung übernehmen und mehr Initiative zeigen können.',
      title: 'Schaffung einer engagierten Unternehmenskultur',
      dimension: 'Menschen'
    },
    '5-20': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, in dem ein gemeinsamer dezentraler Entscheidungsfindungsprozess vorhanden ist, nach dem ein Team auf flexible und effiziente Weise autonome Entscheidungen treffen kann.',
      title: 'Dezentralisierung der Entscheidungsautonomie',
      dimension: 'Menschen'
    },
    '5-21': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das die Mitarbeiter befähigt, Konfliktlösungsfähigkeiten zu entwickeln und anzuwenden.',
      title: 'Förderung der Konfliktlösung',
      dimension: 'Menschen'
    },
    '5-22': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, ein offenes Umfeld zu schaffen, das eine Kultur des Gedankenaustauschs unter den Mitarbeitern fördert und die Freiheit der Diskussion sowie eine offene Kommunikation, Feedback und Diskussionen begünstigt.',
      title: 'Kultivierung einer offenen Kultur',
      dimension: 'Menschen'
    },
    '5-23': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das den Einzelnen befähigt, in selbstorganisierten Teams zu arbeiten.',
      title: 'Ermutigung zu einer selbstorganisierten Teamhaltung',
      dimension: 'Menschen'
    },
    '5-24': {
      category: 'Innovation',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, in dem die Nutzung von Technologie Teil der Unternehmenskultur ist.',
      title: 'Implementierung von Technologie in die kulturelle DNA',
      dimension: 'Menschen'
    },
    '5-25': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das die Transparenz von Informationen, Absichten und Ergebnissen fördert und es den Mitarbeitern ermöglicht, fundierte Entscheidungen zu treffen.',
      title: 'Transparenz schaffen',
      dimension: 'Menschen'
    },
    '5-26': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, in dem die Mitarbeiter intrinsisch motiviert sind, weil sie einen Anspruch an die Arbeit haben, die sie mit der Vision, etwas zu bewirken, verrichten.',
      title: 'Förderung einer zielgerichteten Denkweise',
      dimension: 'Menschen'
    },
    '5-27': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das die \u00c3\u0153bernahme von Verantwortung für die eigenen Handlungen, Ergebnisse, Möglichkeiten und Probleme fördert.',
      title: 'Förderung der Selbstverantwortung',
      dimension: 'Menschen'
    },
    '5-28': {
      category: 'Kundenfokus',
      description: 'Die Fähigkeit, ein Umfeld zu schaffen, das eine Kultur kultiviert, die sich auf die Schaffung des besten Kundenerlebnisses konzentriert, indem sie den Kunden in den Mittelpunkt aller Geschäftsaktivitäten stellt.',
      title: 'Verankerung einer kundenzentrierten Kultur',
      dimension: 'Menschen'
    },
    '6-01': {
      category: 'Kundenfokus',
      description: 'Die Fähigkeit, Kundenwünsche innerhalb der Organisation zu erfassen und zu verwalten.',
      title: 'Verfügbarkeit von Kundenbedarfsinformationen',
      dimension: 'Kundenzentrierte Produktentwicklung',
    },
    '6-02': {
      category: 'Kundenfokus',
      description: 'Die Fähigkeit, langfristige, vertrauensvolle Beziehungen zu den Kunden aufzubauen und sie davon abzuhalten, zu einem Konkurrenten zu wechseln.',
      title: 'Kundenkonnektivität',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '6-03': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, Kundeninformationen unternehmensweit zu definieren, zu konsolidieren und zu verwalten und, falls erforderlich, auch Informationen von Kooperationspartnern zu integrieren.',
      title: 'Integration von Kundendaten',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '6-04': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, schnell auf veränderte Kundenanforderungen zu reagieren und das Feedback, die Vorlieben und Bedürfnisse der Kunden in Produkte und Dienstleistungen zu integrieren.',
      title: 'Reaktionsfähigkeit zu Kundenpräferenzen',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '6-05': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, Kundenwünsche, Bedürfnisse und Präferenzen zu erkennen, beispielsweise durch Marktforschung, Fragebögen oder persönliche Begegnungen.',
      title: 'Sensibilität zu Kundenpräferenzen',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '6-06': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, die Leistung in Bezug auf Kundenzufriedenheit, Kundenbindung und andere Kennzahlen zu bewerten und dann Produkte und Dienstleistungen so zu gestalten, dass sie die Erwartungen der Kunden erfüllen und übertreffen, indem sie diese KPIs nutzen.',
      title: 'Fokussierung auf kundenbezogene Massnahmen',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '6-07': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, Ihren Kunden zuzuhören und von ihnen zu lernen (d. h. \u00c3\u201enderungen der Kundenbedürfnisse) und dieses Wissen intern umzusetzen.',
      title: 'Von Kunden lernen',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '6-08': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, die Produkt- und Dienstleistungspalette zu erneuern und gleichzeitig die interne Betriebsfluktuation aufrechtzuerhalten.',
      title: 'Flexibilität des Produktangebots',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '6-09': {
      category: 'CI-CD',
      description: 'Die Fähigkeit, neue Produkte und Dienstleistungen in hohem Tempo auf dem Markt einzuführen.',
      title: 'Schnelle Markteinführung von Produkten',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '6-10': {
      category: 'CI-CD',
      description: 'Die Fähigkeit, ein Modell in sehr kurzer Zeit zu fertigen.',
      title: 'Schnelles Prototyping',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '6-11': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, Produkte und Dienstleistungen in sehr kurzer Zeit zu entwickeln.',
      title: 'Kurze Entwicklungszyklen',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '6-12': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, Produkt- oder Dienstleistungskomponenten bei Bedarf schnell zu ändern.',
      title: 'Kurze Zeit für Produktänderungen',
      dimension: 'Kundenzentrierte Produktentwicklung'
    },
    '7-01': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit zu erkennen, welcher Führungsansatz für eine bestimmte Situation am besten geeignet ist, offen zu sein, neue Führungsansätze zu erlernen und in angemessener Weise zwischen verschiedenen Führungsstilen zu wechseln.',
      title: 'Ganzheitlich ausgerichtete Führung',
      dimension: 'Führung'
    },
    '7-02': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, während der gesamten Transformationsphase einen \'Ambidextrous Leadership\'-Ansatz umzusetzen, indem gleichzeitig traditionelle Führungsansätze und agile Führung angewendet werden.',
      title: '\'Ambidextrous Leadership\' Ansatz',
      dimension: 'Führung'
    },
    '7-03': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, sich von traditionellen Führungsansätzen zu lösen, die nicht geeignet und effektiv sind, um Mitarbeiter in einer agilen Organisation zu führen.',
      title: 'Emotionale Loslösung von traditionellen Führungsansätzen',
      dimension: 'Führung'
    },
    '7-04': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, eine partizipative Kultur aufzubauen, die die Mitarbeiter befähigt und inspiriert, die Unternehmensvision zu verwirklichen.',
      title: 'Etablierung einer partizipativen Kultur',
      dimension: 'Führung'
    },
    '7-05': {
      category: 'Knowlegdge Transfer',
      description: 'Die Fähigkeit, das Potenzial von Mitarbeitern zu erkennen, zu fördern und sie während ihres Entwicklungsprozesses zu unterstützen und zu motivieren.',
      title: 'Unterstützung der Mitarbeiter bei der Ausschöpfung ihres ungenutzten Potenzials',
      dimension: 'Führung'
    },
    '7-06': {
      category: 'Knowlegdge Transfer',
      description: 'Die Fähigkeit, geeignete Bedingungen zu schaffen, damit die Mitarbeiter ihre Kompetenzen und Fähigkeiten offenlegen und effektiv nutzen können, und sie zu ermutigen/zu fördern, neue Fähigkeiten und Kenntnisse zu entwickeln.',
      title: 'Förderung der Stärken der Mitarbeiter',
      dimension: 'Führung'
    },
    '7-07': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, Mitarbeiter aktiv und kontinuierlich in Entscheidungsprozesse einzubeziehen und sie zu befähigen, selbständig Entscheidungen zu treffen.',
      title: 'Ermutigung der Mitarbeiter zur unabhängigen Entscheidungsfindung',
      dimension: 'Führung'
    },
    '7-08': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, die Verantwortung für Aufgaben an andere Teammitglieder zu delegieren und ihnen die nötige Autonomie zu geben, damit sie unabhängig handeln können, aber dennoch für die getroffenen Entscheidungen verantwortlich sind.',
      title: 'Gemeinsame Verantwortung und gegenseitige Rechenschaftspflicht',
      dimension: 'Führung'
    },
    '7-09': {
      category: 'Innovation',
      description: 'Die Fähigkeit, den Mitarbeitern die nötige Autonomie, die Werkzeuge und die Unterstützung zu geben, die sie brauchen, um zu experimentieren, zu testen und neue Ideen zu entwickeln.',
      title: 'Mitarbeiter zum Experimentieren und Innovieren ermutigen',
      dimension: 'Führung'
    },
    '7-10': {
      category: 'Kundenfokus',
      description: 'Die Fähigkeit, im Interesse des Kunden zu denken und zu handeln sowie das ständige Ziel, die Bedürfnisse, Visionen, Schwierigkeiten usw. des Kunden zu verstehen.',
      title: 'Kundenorientiertes Denken',
      dimension: 'Führung'
    },
    '7-11': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, ein sehr gutes Verständnis für das Geschäft, die Bedürfnisse, Visionen, Strategien und Produkte von Kooperationspartnern zu haben.',
      title: 'Gute Kenntnisse über die Unternehmen der Kooperationspartner',
      dimension: 'Führung'
    },
    '7-12': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, den Mitarbeitern ein 360-Grad-Feedback zu geben und Verbesserungsmöglichkeiten vorzuschlagen, um neue Fähigkeiten und Kenntnisse zu entwickeln.',
      title: 'Feedback an Mitarbeiter für kontinuierliches Lernen',
      dimension: 'Führung'
    },
    '7-13': {
      category: 'Innovation',
      description: 'Die Fähigkeit, sich auf die Selbstreflexion und die Analyse des aktuellen Niveaus von Fähigkeiten, Stärken, Schwächen und Verhaltensmustern zu konzentrieren, um Lern- und Verbesserungsbereiche zu identifizieren.',
      title: 'Selbstreflexion für kontinuierliche Verbesserung',
      dimension: 'Führung'
    },
    '7-14': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, die gemeinsame Annahme zu schaffen, dass jeder Mitarbeiter persönliche Risiken eingehen und seine Meinung sagen kann, ohne abgelehnt oder bestraft zu werden.',
      title: 'Psychologische Sicherheit kultivieren',
      dimension: 'Führung'
    },
    '7-15': {
      category: 'Anpassungsfähigkeit',
      description: 'Die Fähigkeit, mit Veränderungen umzugehen, indem man Gedanken an ein Scheitern beiseite schiebt und sich auf die Massnahmen konzentriert, die notwendig sind, um offen, widerstandsfähig und flexibel zu sein.',
      title: 'Veränderungsorientiertes Mindset',
      dimension: 'Führung'
    },
    '7-16': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, Probleme zu erkennen und Mitarbeiter zu unterstützen und zu ermutigen, eine gemeinsame Lösung für eine Meinungsverschiedenheit zu finden.',
      title: 'Problemlösungsorientierter Ansatz',
      dimension: 'Führung'
    },
    '7-17': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, Mitarbeiter zu führen und ihr Verhalten zu beeinflussen, indem man die Unternehmensvision definiert und sicherstellt, dass alle Mitarbeiter diese Visionen und Ziele verstehen.',
      title: 'Führung der Mitarbeiter entlang der Unternehmensvision',
      dimension: 'Führung'
    },
    '7-18': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, das Team zu leiten und das Verhalten des Teams kontinuierlich zu beeinflussen, indem eine Leitvision (Erklärung des übergeordneten Ziels der Organisation) definiert, verbreitet und aufrechterhalten wird.',
      title: 'Zielgerichtete Führung',
      dimension: 'Führung'
    },
    '7-19': {
      category: 'Kollaboration',
      description: 'Die Fähigkeit, siloorientiertes Denken zu beseitigen und die Mitarbeiter zu befähigen, eine wertbezogene Orientierung zwischen verschiedenen Teams und Einheiten aufzubauen.',
      title: 'Förderung einer wertbezogenen Solidarität zwischen Teams und Abteilungen',
      dimension: 'Führung'
    },
    '7-20': {
      category: 'Wissensmanagement',
      description: 'Die Fähigkeit, dafür zu sorgen, dass Wissen transparent vermittelt wird und für den Rest der Organisation zugänglich ist.',
      title: 'Priorisierung des unternehmensweiten Wissenstransfers',
      dimension: 'Führung'
    },
    '7-21': {
      category: 'Kommunikation',
      description: 'Die Fähigkeit, relevante Unternehmensinformationen und -meinungen offen und transparent an die Mitarbeiter weiterzugeben, um ein vertrauensvolles Umfeld zu schaffen.',
      title: 'Schaffen Sie ein Umfeld der Transparenz und des Vertrauens',
      dimension: 'Führung'
    },
    '7-22': {
      category: 'Effizienz',
      description: 'Die Fähigkeit, Hindernisse zu erkennen und zu beseitigen, die Mitarbeiter daran hindern, ihre Ziele zu erreichen.',
      title: 'Ergebnisorientiertes Management',
      dimension: 'Führung'
    },
    '7-23': {
      category: 'Organisations- und Managementstrukturen',
      description: 'Die Fähigkeit, Mitarbeiter zu ermutigen, Verantwortung für ihre Handlungen und Ergebnisse zu übernehmen.',
      title: 'Förderung der Eigenverantwortung der Arbeitnehmer',
      dimension: 'Führung'
    }
  }
})

export const levelDesc = readable({
  en: [
    'The organization is aware of the relevance of agility capabilities and their anchoring in the resp. agility dimensions. The goal of enhancing agile maturity has been communicated and is reflected in work practices and collaboration  approaches.',
    'The organization has already taken first steps towards the development of agility capabilities and thus satisfying the goal of enhancing agile maturity. All activities implemented follow this goal and ensure customer centricity and satisfaction.',
    'The organization has further focused on the realization of agility capabilities. All activities are centered around the customer and creating customer value. The organization uses the value of resources within and outside the organization for deliver high quality products and services.',
    'The organization has focused on agility capabilities as a priority in several dimensions. Thus, the organization can respond to change in an effective and productive manner. The organization focuses on constant improvement and uncertainty management. ',
    'The organization has holistically anchored agility within its strategy, structure, processes, culture, workforces’ mindset, and leadership approach. The org. establishes a constant vibrant environment to sustain agility and to follow an organizational learning approach. '
  ],
  de: [
    'Die Organisation ist sich der Relevanz von Agilitätsfähigkeiten und deren Verankerung in den jeweiligen Agilitätsdimensionen bewusst. Das Ziel, den agilen Reifegrad zu erhöhen, ist kommuniziert und spiegelt sich in den Arbeitspraktiken und Ansätzen der Zusammenarbeit wieder.',
    'Die Organisation hat bereits erste Schritte zur Entwicklung von Agilitätskapazitäten unternommen und erfüllt damit das Ziel, den agilen Reifegrad zu erhöhen. Alle durchgeführten Aktivitäten folgen diesem Ziel und gewährleisten Kundenorientierung und -zufriedenheit.',
    'Die Organisation hat sich weiter auf die Realisierung von Agilitätsfähigkeiten konzentriert. Alle Aktivitäten sind auf den Kunden und die Schaffung von Kundennutzen ausgerichtet. Das Unternehmen nutzt den Wert der Ressourcen innerhalb und außerhalb des Unternehmens, um qualitativ hochwertige Produkte und Dienstleistungen zu liefern.',
    'Die Organisation hat sich in mehreren Dimensionen auf die Agilitätsfähigkeit konzentriert. Auf diese Weise kann die Organisation effektiv und produktiv auf Veränderungen reagieren. Die Organisation konzentriert sich auf ständige Verbesserung und Unsicherheitsmanagement.',
    'Die Organisation hat Agilität ganzheitlich in ihrer Strategie, ihrer Struktur, ihren Prozessen, ihrer Kultur, der Denkweise ihrer Mitarbeiter und ihrem Führungsansatz verankert. Die Organisation schafft ein konstantes, lebendiges Umfeld, um Agilität aufrechtzuerhalten und einen organisatorischen Lernansatz zu verfolgen.'
  ]
})

export const dimensionDesc = readable({
  en: {
  'Strategy & Purpose': 'Strategy & Purpose comprises the purpose of an organization, its vision and mission as well as its business model.',
  Structure: 'Structure comprises the organizational structure, the gover-nance, and the functions and roles within the organization.',
  Process: 'Process comprises the process organization and the information and decision flow within the organization',
  IT: 'Information Technology comprises the techn. infrastructure and architecture and the application of technology.',
  People: 'People & Culture comprises the organizational culture, the behavior and mindset of individual employees, and their skills.',
  Leadership: 'Leadership comprises the leadership approach, leadership values and attitude, and workforce empowerment.',
  'Customer-Centric Product Development': 'Customer-Centric Product Development comprises the approach to build products that place the customer at its core.'
  },
  de: {
    'Strategie und Zweck': 'Strategie und Zweck umfasst den Zweck einer Organisation, ihre Vision und Mission sowie ihr Geschäftsmodell.',
    'Struktur': 'Struktur umfasst die Organisationsstruktur, die Führung sowie die Funktionen und Rollen innerhalb der Organisation.',
    'Prozess': 'Prozess umfasst die Prozessorganisation und den Informations- und Entscheidungsfluss innerhalb der Organisation',
    'IT': 'Informationstechnologie umfasst die technische Infrastruktur und Architektur sowie die Anwendung der Technologie.',
    'Menschen': 'Menschen & Kultur umfasst die Organisationskultur, das Verhalten und die Denkweise der einzelnen Mitarbeiter sowie deren Fähigkeiten.',
    'Führung': 'Führung umfasst den Führungsansatz, die Führungswerte und -einstellung sowie die Befähigung der Mitarbeiter.',
    'Kundenzentrierte Produktentwicklung': 'Kundenzentrierte Produktentwicklung umfasst den Ansatz, Produkte zu entwickeln, bei denen der Kunde im Mittelpunkt steht.'
  }
})

export const categories = readable({
  en: {
  Adaptability: 'Adaptability',
  "CI-CD": 'CI-CD',
  Collaboration: 'Collaboration',
  Communication: 'Communication',
  "Customer Focus": 'Customer Focus',
  Efficiency: 'Efficiency',
  Innovation: 'Innovation',
  "Knowledge Management": "Knowledge Management",
  "Organizational and Management Structures": "Organizational and Management Structures"
  },
  de: {
    Adaptability: 'Anpassungsfähigkeit',
    "CI-CD": 'CI-CD',
    Collaboration: 'Kollaboration',
    Communication: 'Kommunikation',
    "Customer Focus": 'Kundenfokus',
    Efficiency: 'Effizienz',
    Innovation: 'Innovation',
    "Knowledge Management": "Wissensmanagement",
    "Organizational and Management Structures": "Organisations- und Managementstrukturen"
  }
})

export const levelAmount = readable(5)

export const emptyUserInfo = readable({
  company: '',
  department: '',
  project: '',
  description: ''
})

export const emptyUserData = readable({
  "1-01": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-02": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-03": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-04": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-05": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-06": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-07": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-08": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-09": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-10": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-11": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-12": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-13": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-14": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-15": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-16": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-17": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-18": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-19": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-20": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-21": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "1-22": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-01": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-02": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-03": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-04": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-05": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-06": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-07": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-08": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-09": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-10": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-11": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-12": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-13": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-14": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-15": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-16": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-17": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "2-18": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-01": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-02": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-03": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-04": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-05": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-06": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-07": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-08": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-09": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-10": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-11": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-12": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-13": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-14": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-15": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-16": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "3-17": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-01": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-02": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-03": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-04": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-05": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-06": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-07": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-08": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-09": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-10": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-11": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-12": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-13": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-14": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "4-15": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-01": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-02": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-03": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-04": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-05": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-06": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-07": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-08": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-09": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-10": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-11": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-12": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-13": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-14": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-15": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-16": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-17": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-18": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-19": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-20": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-21": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-22": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-23": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-24": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-25": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-26": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-27": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "5-28": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-01": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-02": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-03": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-04": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-05": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-06": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-07": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-08": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-09": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-10": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-11": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "6-12": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-01": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-02": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-03": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-04": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-05": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-06": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-07": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-08": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-09": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-10": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-11": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-12": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-13": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-14": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-15": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-16": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-17": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-18": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-19": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-20": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-21": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-22": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  },
  "7-23": {
      "explanation": "",
      "isValue": 0,
      "shouldValue": 0,
      "notRelevant": false,
  }
})

export const defaultConfig = readable({
  displayHidden: true
})

export const ui = readable({
  en: {
    main: {
      welcome: "Welcome",
      input: "Input",
      evaluation: "Evaluation",
      next: "Next",
      hideButton: "Hide capabilites marked as not relevant",
      language: "EN",
      nav: {
        welcome: "Welcome",
        input: "Input",
        evaluation: "Evaluation"
      }
    },

    index: {
      intro: "<p>Welcome to the demo page of the Agile Maturity Tool!</p><p>This is a demo version of the tool to illustrate the functionality. The tool is still under development, which is why the visual aspects of the tool are not yet fully developed.<p><p>The agile maturity model was developed in Competence Centre 08 and 09. The aim is to assess the maturity level of agile skills, to derive the agile maturity level of the company and to provide indicative recommendations for action to build up skills. </p><p>The model includes the following artefacts:</p><ul><li>The <b>Agile Maturity Grid</b> provides an overview of necessary agile capabilities including a description and a mapping to the associated agility dimension</li><li>The benefit of the <b>Quick Check</b> lies in the quick assessment of the existing maturity level of the corresponding agile capabilities as well as an indication of the agile maturity level of the company</li><li>The <b>Tool</b> serves to complement the first two artefacts and allows users to make indicative recommendations for action to improve the agile capabilities and thus the agile maturity of the company</li><li>The <b>Tool</b> serves to complement the first two artefacts and allows users to make indicative recommendations for action to improve the agile capabilities and thus the agile maturity of the company</li></ul><p>All three artefacts can be applied to different areas of the company. The prerequisite for this is that the business unit in question is at the beginning or in the middle of an agile transformation. The model should be completed by a representative number of employees. It should be noted that different departments and hierarchical levels are also taken into account in order to contain as realistic an estimate as possible of the extent to which the agile skills listed are being implemented.</p>",
      deleteButtonText: 'If you\'ve already tested a previous version of the tool in the same browser, the existing data in the local storage might break the tool. If this happens, you can click on the "Delete Data" button below.',
      deleteButton: "Delete Data"
    },
    userInfo: {
      company: "Company:",
      organisation: "Organisation:",
      project: "Name of agile project:",
      description: "Description:"
    },
    capabilityTable: {
      is: "Is = Red",
      should: "Should = Blue",
      notRelevant: "Not relevant",
      explanation: "Explanation"   
    },
    evaluationDataTable: {
      id: "ID",
      capability: "Capability",
      comment: "Comment"
    },
    evaluationChart: {
      is: "Is-Value",
      should: "Should-Value"
    },
    exportButton: {
      button: "Export Results"
    }
  },
  de: {
    main: {
      welcome: "Willkommen",
      input: "Input",
      evaluation: "Auswertung",
      next: "Nächster Schritt",
      hideButton: "Irrelevante Capabilitites ausblenden",
      language: "DE",
      nav: {
        welcome: "Willkommen",
        input: "Input",
        evaluation: "Auswertung"
      }
    },
    index: {
      intro: "<p>Willkommen zur Demopage des Agile Maturity Tools!</p><p>Dies ist eine Demoversion des Tools, welche die Funktionalitäten veranschaulichen soll. Das Tool ist noch in Entwicklung, weswegen vor allem die visuellen Aspekte des Tools noch nicht ganz ausgereift sind.</p><p>Das agile Reifegradmodell wurde im Competence Center 08 und 09 entwickelt. Ziel ist die Einschätzung des Reifegrads agiler Fähigkeiten, Ableitung des agilen Reifegrads des Unternehmens sowie Bereitstellung indikativer Handlungsempfehlungen zum Fähigkeitenaufbau. </p><p>Das Modell umfasst folgende Artefakte:</p><ul><li>Der <b>Agile Maturity Grid</b> gibt eine übersicht über notwendige agile Fähigkeiten inklusive Beschreibung und einem Mapping auf die zugehörige Agility Dimension.</li><li>Der Nutzen des <b>Schnell-Check</b> liegt in der schnellen Einschätzung des vorhandenen Reifegrads der entsprechenden agilen Fähigkeiten sowie Indikation über den agilen Reifegrad des Unternehmens.</li><li>Das <b>Tool</b> dient zur Ergänzung der ersten beiden Artefakte und erlaubt es Nutzern indikative Handlungsempfehlungen zur Verbesserung der agilen Fähigkeiten und somit des agilen Reifegrads des Unternehmens </li></ul> <p>Alle drei Artefakte können auf verschiedene Unternehmensbereiche angewendet werden. Voraussetzung hierfür ist, das sich der betreffende Unternehmensbereich am Anfang oder mitten in einer agilen Transformation befindet. Das Modell sollte von einer repräsentativen Anzahl der Mitarbeitenden ausgefüllt werden. Hierbei sollte beachtet werden, dass auch unterschiedliche Fachbereiche und Hierarchiestufen berücksichtigt werden, um eine möglichst realistische Einschätzung zu der Ausprägung der aufgeführten agilen Fähigkeiten zu enthalten.</p>",
      deleteButtonText: 'Wenn Sie bereits eine vorherige Version des Tools getestet haben kann es sein, dass die neue Version wegen bestehenden Daten nicht richtig funktioniert. Falls das passiert, können Sie alten Daten mit diesem Button löschen:',
      deleteButton: "Daten löschen"
    },
    userInfo: {
      company: "Firma:",
      organisation: "Organisation:",
      project: "Name des agilen Projektes:",
      description: "Beschreibung:"
    },
    capabilityTable: {
      is: "Ist = Rot",
      should: "Soll = Blau",
      notRelevant: "Nicht relevant",
      explanation: "Begründung"   
    },
    evaluationDataTable: {
      id: "ID",
      capability: "Capability",
      comment: "Kommentar"
    },
    evaluationChart: {
      is: "Ist-Wert",
      should: "Soll-Wert"
    },
    exportButton: {
      button: "Resultate exportieren"
    }
  }
})