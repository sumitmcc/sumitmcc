// data/content.ts
import { Item, Content } from "@/lib/types";

export const workExperience: Item[] = [
  {
    title: "Airbnb",
    subtitle: "Site Reliability Engineer",
    description:
      "At Airbnb, I played a pivotal role in transforming the observability stack by migrating it from a vendor-based solution to an open-source ecosystem using Python, Golang, Prometheus, Grafana, OpenSearch, and Kubernetes, saving approximately $800,000 annually. I developed custom exporters for NTP, Meraki, and Anycast, enabling data scraping and visualization in Grafana with alerting capabilities. I also created a centralized monitoring tool using Python, AWS Lambda, and Terraform, which streamlined monitoring for newly deployed infrastructure from day one. Additionally, I built a platform for managing alert silences via a UI, reducing alert noise by 30%. My responsibilities included serving as Incident Commander for over 50 Sev0 and Sev1 incidents, ensuring swift resolution and minimal impact.",
    duration: "2022-",
    location: "Bangalore (IN)",
    icon: "/airbnb-logo.svg",
    skills: [
      "python",
      "golang",
      "kubernetes",
      "grafana",
      "aws",
      "terraform",
      "typescript",
      "incident management",
    ],
    current: true,
  },
  {
    title: "Cisco India Pvt Ltd",
    subtitle: "Lead Engineer - NetDevOps",
    description:
      "Led a mid-sized team driving innovation in automation, reducing test automation turnaround by 35% and increasing adoption by 20%. Pioneered a crowdsourcing model boosting automation KPIs by 40% and enhancing team skill development. Developed Python-based tools for charting automation metrics, earning recognition from leadership and integrating into quarterly reporting. Conducted trainings in Python, network automation, and best practices to uplift organizational skills. Created test automations that seamlessly integrated into CI/CD pipelines, enabling automated infrastructure testing for new Cisco IOS versions, reducing potential failures and enhancing customer confidence. Worked extensively on developing networking test automation frameworks, and delivering scalable solutions like policy generators and virtual device testing.",
    duration: "2020-2022",
    location: "Bangalore (IN)",
    icon: "/cisco-logo.svg",
    skills: [
      "python",
      "ansible",
      "kubernetes",
      "jenkins",
      "robotframework",
      "jira",
      "leadership",
    ],
  },
  {
    title: "Cisco Inc.",
    subtitle: "Software Engineer",
    description:
      "I oversaw end-to-end validation lifecycles for customers, including designing validation plans, developing and executing automation, analyzing reports, and deploying and maintaining features in a CI/CD model. I designed scalable, reusable, vendor-neutral network automation frameworks that integrated with REST APIs and OS platforms like Junos and Huawei. My role involved collaborating with customers to tailor solutions, identify technical resources, and implement seamless network test automation using tools like pyATS, Ansible, and Robot Framework, enabling a NetDevOps approach. Additionally, I implemented Agile practices, managed user stories, sprints, and JIRA dashboards, ensuring efficient project execution and smooth transitions for change requests.",
    duration: "2017-2020",
    location: "Raleigh, NC (USA)",
    icon: "/cisco-logo.svg",
    skills: [
      "python",
      "docker",
      "jira",
      "Cisco IOS",
      "wireshark",
      "customer management",
    ],
  },
];

export const education: Item[] = [
  {
    title: "The State University of New York at Buffalo",
    subtitle: "Master's in Electrical Engineering",
    description: "Graduated with Distinction",
    duration: "2015-2017",
    location: "Buffalo, New York (USA)",
    icon: "/ub-logo-dark.png",
  },
  {
    title: "Gogte Institute of Technology (VTU)",
    subtitle: "Bachelor's in Electronics and Communications",
    description: "Graduated with Distinction",
    duration: "2011-2015",
    location: "Belgaum, Karnataka (IN)",
    icon: "/git-logo.png",
  },
];

export const projects: Item[] = [
    {
    title: "Single Pane of Glass (SPOG)",
    location: "Airbnb",
    subtitle: "",
    duration: "Ongoing",
    skills: [
        "typescript",
        "react",
        "sql",
        "git",
        "spinnaker",
        "pagerduty",
        "incident.io",
        "backstage.io"
    ],
    description: "At our organization, we did not have a centralised tool to reflect the health of our services and infrastructure. Users at all levels have to go to different tools to collect partial information of the services they manage. To address this, we developed SPOG - one stop dashboard to reflect the health of all services and infrastructure. The tool is build as a plugin to the Backstage.io and provides personalised views based on the user logged in with provisions to view data from the entire organisation. The tool provides metrics and information regarding users' services, infrastructure, SLI/SLO, incidents and at-risk items. The tool is built using React and Typescript with data fetched from superset, incident.io, pagerduty and other internal tools. The tool provides a comprehensive view for the directors to understand the state of the organisation and take necessary actions.",
  },
  {
    title: "Incident Management",
    location: "Airbnb",
    subtitle: "",
    duration: "Ongoing",
    skills: [
        "incident management",
        "pagerduty",
        "incident.io",
        "communication",
        "leadership"
    ],
    description: "As an SRE, I have served as Incident Commander for over 50 Sev0 and Sev1 incidents, ensuring swift resolution and minimal impact. I coordinate cross-functional teams, manage communication with stakeholders, and lead post-incident reviews to identify root causes and implement preventive measures. My proactive approach and effective leadership have significantly improved our incident response times and overall system reliability.",
  },
  {
    title: "Alert Validation Tool",
    location: "Airbnb",
    subtitle: "",
    duration: "Mar 2025",
    skills: [
        "python", 
        "git",
        "prometheus",
        "grafana",
        "aws",
        "kubernetes",
        "jenkins"
    ],
    description: "I developed a tool to validate Prometheus alerts before they are deployed to production. The tool checks for updated git repositories for changes to alert files since it last ran, to ensure only those changes are validated and deployed. This reduced the API calls to github by 95%. The validation logic is deployed as a lambda function triggered by API gateway and the validator tool is deployed on kubernetes pods. The tool runs periodically to ensure only the valid alerts make it to production. Metrics are scraped for the tool's performance and visualized in Grafana. Backup mechanisms are provided in case of any failures to manually override and deploy alerts for admins. The teams are notified on incorrect alerts via github issues.",
  },
  {
    title: "Personal Portfolio",
    location: "Personal",
    subtitle: "",
    duration: "Dec 2024",
    skills: ["Nextjs", "Typescript", "React", "Tailwind CSS"],
    description:
      "Using Next.js and TypeScript, I created a contemporary portfolio website that highlights both my hobbies and professional background. The website offers a comprehensive overview of my work and achievements with parts specifically devoted to my education, projects, talents, and resume. It also showcases my interests, such as baking and photography, with eye-catching design and personality-reflected content. The portfolio skilfully combines professionalism and creativity by emphasising a simple, adaptable design and providing an easy-to-use interface.",
  },
  {
    title: "Alert Scheduled Downtime",
    location: "Airbnb",
    subtitle: "",
    duration: "Aug 2024",
    skills: [
        "golang", 
        "react", 
        "typescript", 
        "git"
    ],
    description: "To address the challenge of alert fatigue among SRE teams, I helped develop a comprehensive Alert Silence Management Platform using Golang for the backend and React with TypeScript for the frontend. This platform allows users to create, manage, and track alert silences through an intuitive UI, significantly reducing noise by 30%. The platform also includes robust authentication and authorization mechanisms using role-based workflows to ensure only select people have the ability to manage alert silences. The implementation also keeps track of changelogs to the silences so that users can easily see the history of changes and recreate any previous silences. The silences are also designed to auto-expire after a set duration to prevent stale silences. Detailed metrics are collected and visualized in Grafana to monitor platform usage and effectiveness.",
  },
  {
    title: "Auto-discovery for Monitoring",
    location: "Airbnb",
    subtitle: "",
    duration: "Mar 2024",
    skills: [
      "python",
      "terraform",
      "kubernetes",
      "AWS Lambda",
      "AWS API Gateway",
    ],
    description:
      "As we had multiple applications for managing different resources (networking hosts, EC2 instances, VMs, K8s resources, etc), there was no single source of truth for monitoring. I worked on creating a centralised monitoring repository of targets that would detect changes in applications and would create a single centralised source of truth for all targets for monitoring. I also provided features to add exclusions, override infirmation for hosts, and tagging. This enabled day-1 automatic monitoring option for a range of targets and brought down the MTTD by 15% by providing informative tagging in alerts. I leveraged AWS Lambda to trigger python functions to fetch and update dynamo db with latest hosts list. Git was used to integrate override functionality and API gateway would provide the information to exporters about targets.",
  },
  {
    title: "Observability Migration from Vendor to Open Source",
    location: "Airbnb",
    subtitle: "",
    duration: "Jul 2023",
    skills: [
        "python",
        "kubernetes",
        "prometheus",
        "grafana",
        "alertmanager",
    ],
    description:
      "To reduce costs and improve flexibility, I helped with the migration of our observability stack from a vendor-based solution to an open-source ecosystem using Prometheus, Grafana, and Kubernetes. This transition saved approximately $1,500,000 annually. I developed custom exporters for NTP, Meraki, and Anycast, enabling data scraping and visualization in Grafana with alerting capabilities. The migration involved extensive planning, testing, and collaboration with cross-functional teams to ensure a smooth transition with minimal disruption to services. Post-migration, I provided training and documentation to the teams to ensure effective use of the new tools. Runbooks were created to handle common alert resolution and maintenance tasks.",
  },
  {
    title: "Observability Exporters",
    duration: "Feb 2023",
    skills: [
      "python",
      "prometheus",
      "ntplib",
      "Rest API",
      "kubernetes",
      "jenkins",
      "aws",
    ],
    subtitle: "",
    location: "Airbnb",
    description:
      "To improve observability and monitoring, special Python exporters for NTP, Meraki, and Anycast were created. In order to securely integrate with HashiCorp Vault for API key management, the Meraki exporter used REST APIs to retrieve data from Meraki servers. In order to provide real-time insights into the health of the infrastructure, metrics were exposed using the Prometheus client library and shown through extensive Grafana dashboards. The exporters were set up to transmit alerts using Prometheus Alertmanager for proactive issue detection, and they integrated with the OpenTelemetry Collector for telemetry data. Kubernetes was used to fully automate the deployment process, guaranteeing scalability and ease of maintenance in a dynamic setting.",
  },
];

export const ExtraCurriculars: Item[] = [
    {
        title: "Toastmasters International",
        subtitle: "",
        location: "Airbnb",
        description: "Active member of Toastmasters International, a global organization dedicated to improving public speaking and leadership skills. Participated in regular meetings, delivered speeches, and took on leadership roles within the club to enhance communication abilities and build confidence. Participated in regular meetings, delivered speeches, and took on leadership roles within the club to enhance communication abilities and build confidence.",
    },
    {
        title: "Capture the Flag (CTF) Competitions",
        subtitle: "",
        location: "Airbnb",
        description: "Enthusiastic participant in Capture the Flag (CTF) competitions, focusing on cybersecurity challenges that test skills in areas such as cryptography, reverse engineering, web security, and forensics. Collaborate with peers to form teams, share knowledge, and develop strategies for tackling complex challenges in a competitive environment. Secured 5th place in the Airbnb wide CTF competition.",
    },
    {
        title: "Hackathons",
        subtitle: "",
        location: "Airbnb",
        description: "Active participant in hackathons, collaborating with cross-functional teams to develop innovative solutions under time constraints. Engaged in brainstorming sessions, rapid prototyping, and presentation of ideas to judges and peers. These experiences have honed my problem-solving skills, creativity, and ability to work effectively in high-pressure environments.",
    },
    {
        title: "Organise Team Outing",
        subtitle: "",
        location: "Airbnb",
        description: "Organized team outing in Bangalore to foster team bonding and improve workplace morale. Coordinated logistics, event booking, activities, and communication to ensure successful events that promote collaboration and camaraderie among team members. Saw a 20% increase in team engagement and satisfaction through these initiatives.",
    },
    {
        title: "Kahoot Quiz Master",
        subtitle: "",
        location: "Airbnb",
        description: "As a Kahoot Quiz Master, I design and host engaging quizzes for team-building activities and knowledge sharing sessions which happen every alternate week. Created diverse question sets covering various topics to encourage participation and foster a fun learning environment. These sessions have been greatly appreciated by the team and have helped in improving team bonding.",
    },
    {
        title: "Automation Champion",
        subtitle: "",
        location: "Cisco",
        description: "Recognized as an Automation Champion for promoting automation best practices within the organization. Conducted training sessions and workshops to educate teams on the benefits of automation, tools, and techniques. Advocated for the adoption of automation in daily workflows, leading to increased efficiency and productivity across teams.",
    },
    {
        title: "Automation Training",
        subtitle: "",
        location: "Cisco",
        description: "Conducted comprehensive training sessions on automation tools and frameworks such as Python, Ansible, and Robot Framework. Developed training materials, hands-on labs, and real-world scenarios to enhance learning outcomes. These sessions have empowered team members to leverage automation in their projects, resulting in improved efficiency and reduced manual effort. The training were tailored for networking engineers with little to no programming experience.",
    },
    {
        title: "Networking Fundamentals Training",
        subtitle: "",
        location: "Cisco & Airbnb",
        description: "Delivered training sessions on networking fundamentals to automation and software engineers. Covered key concepts such as TCP/IP, routing, switching, and network protocols. Developed interactive presentations and hands-on labs to facilitate understanding and practical application of networking principles. These sessions have helped in building a strong foundation for team members, enabling them to excel in their roles.",
    },
    {
        title: "IEEE Student Chairperson",
        subtitle: "",
        location: "GIT, Belgaum",
        description: "As the IEEE Student Chairperson at Gogte Institute of Technology, I led the student branch in organizing technical events, workshops, and seminars to promote learning and professional development among students. Coordinated with faculty and industry professionals to bring valuable insights and opportunities to the student community. Under my leadership, the branch saw increased participation and engagement in IEEE activities.",
    },
    {
        title: "Python Workshop",
        subtitle: "",
        location: "GIT, Belgaum",
        description: "Conducted a comprehensive Python programming workshop for students at Gogte Institute of Technology. Developed curriculum covering Python basics, data structures, and practical applications. Facilitated hands-on coding sessions to enhance learning and problem-solving skills. The workshop received positive feedback and helped participants gain confidence in programming with Python.",
    }

]

export const content: Content = {
  work: workExperience,
  education,
  projects,
  extracurriculars: ExtraCurriculars,
};
