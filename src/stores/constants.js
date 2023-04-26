import { readable } from 'svelte/store'

export const capabilityList = readable({
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
    category: 'CI/CD',
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
    category: 'CI/CD',
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
    category: 'CI/CD',
    description: 'The ability to ensure the frequent integration and merging of coded software.',
    title: 'Continuous Integration IT Competency',
    dimension: "IT"
  },
  '4-13': {
    category: 'CI/CD',
    description: 'The ability to ensure coded software is always at a production-ready state after successfully passing automted tests and quality checks.',
    title: 'Continuous Delivery IT Competency',
    dimension: "IT"
  },
  '4-14': {
    category: 'CI/CD',
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
    category: 'CI/CD',
    description: 'The ability to introduce new products and services to the market at a high and fast rate.',
    title: 'Quick Product Time-to-Market',
    dimension: "Customer-Centric Product Development"
  },
  '6-10': {
    category: 'CI/CD',
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
})

export const levelDesc = readable([
  'The organization is aware of the relevance of agility capabilities and their anchoring in the resp. agility dimensions. The goal of enhancing agile maturity has been communicated and is reflected in work practices and collaboration  approaches.',
  'The organization has already taken first steps towards the development of agility capabilities and thus satisfying the goal of enhancing agile maturity. All activities implemented follow this goal and ensure customer centricity and satisfaction.',
  'The organization has further focused on the realization of agility capabilities. All activities are centered around the customer and creating customer value. The organization uses the value of resources within and outside the organization for deliver high quality products and services.',
  'The organization has focused on agility capabilities as a priority in several dimensions. Thus, the organization can respond to change in an effective and productive manner. The organization focuses on constant improvement and uncertainty management. ',
  'The organization has holistically anchored agility within its strategy, structure, processes, culture, workforces’ mindset, and leadership approach. The org. establishes a constant vibrant environment to sustain agility and to follow an organizational learning approach. '
])

export const dimensionDesc = readable({
  'Strategy & Purpose': 'Strategy & Purpose comprises the purpose of an organization, its vision and mission as well as its business model.',
  Structure: 'Structure comprises the organizational structure, the gover-nance, and the functions and roles within the organization.',
  Process: 'Process comprises the process organization and the information and decision flow within the organization',
  IT: 'Information Technology comprises the techn. infrastructure and architecture and the application of technology.',
  People: 'People & Culture comprises the organizational culture, the behavior and mindset of individual employees, and their skills.',
  Leadership: 'Leadership comprises the leadership approach, leadership values and attitude, and workforce empowerment.',
  'Customer-Centric Product Development': 'Customer-Centric Product Development comprises the approach to build products that place the customer at its core.'
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
