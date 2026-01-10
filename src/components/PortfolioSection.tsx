import { motion } from "framer-motion";
import { ExternalLink, Mail, TableProperties, FileText } from "lucide-react";

const projects = [
  {
    icon: Mail,
    title: "Enterprise Email Workflow",
    category: "Outlook Add-in",
    description:
      "Automated email processing add-in for a Fortune 500 company. Handles 10,000+ emails daily with smart categorization and task creation.",
    technologies: ["Office.js", "React", "Azure Functions", "Microsoft Graph"],
    metrics: "10,000+ emails/day",
  },
  {
    icon: TableProperties,
    title: "Financial Data Analyzer",
    category: "Excel Add-in",
    description:
      "Custom Excel add-in for a financial services firm. Real-time data feeds, custom formulas, and automated reporting.",
    technologies: ["Office.js", "TypeScript", "REST APIs", "Custom Functions"],
    metrics: "500+ daily users",
  },
  {
    icon: FileText,
    title: "Legal Document Generator",
    category: "Word Add-in",
    description:
      "Document automation solution for a law firm. Generates contracts, NDAs, and legal documents from templates with dynamic content.",
    technologies: ["Office.js", "Node.js", "Document Templates", "Azure AD"],
    metrics: "5,000+ docs/month",
  },
  {
    icon: Mail,
    title: "CRM Integration Suite",
    category: "Outlook Add-in",
    description:
      "Seamless CRM integration add-in that syncs emails, contacts, and calendar events with Salesforce and HubSpot.",
    technologies: ["Office.js", "Microsoft Graph", "REST APIs", "OAuth 2.0"],
    metrics: "98% sync accuracy",
  },
  {
    icon: TableProperties,
    title: "Inventory Management Tool",
    category: "Excel Add-in",
    description:
      "Real-time inventory tracking add-in connected to warehouse management systems. Automatic stock updates and reorder alerts.",
    technologies: ["Office.js", "WebSockets", "SQL Server", "Power Automate"],
    metrics: "Real-time updates",
  },
  {
    icon: FileText,
    title: "Proposal Builder",
    category: "PowerPoint Add-in",
    description:
      "Sales proposal automation tool that pulls data from CRM to create customized presentations with brand-compliant templates.",
    technologies: ["Office.js", "React", "SharePoint", "Microsoft Graph"],
    metrics: "70% time saved",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A selection of production add-ins I've built for clients across various
            industries. Each project solved real business challenges.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glass-card overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-border bg-muted/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {project.metrics}
                  </span>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
