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
    title: "NTP, Meraki, Anycast Exporter",
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
];

export const content: Content = {
  work: workExperience,
  education,
  projects,
};
