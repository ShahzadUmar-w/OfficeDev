import { motion } from "framer-motion";
import { Mail, TableProperties, FileText, Presentation, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Outlook Add-ins",
    description:
      "Custom add-ins for email automation, calendar integration, contact management, and workflow optimization.",
    features: ["Email Processing", "Calendar Sync", "Task Automation", "Contact Management"],
  },
  {
    icon: TableProperties,
    title: "Excel Add-ins",
    description:
      "Powerful data processing, custom functions, visualization tools, and integration with external data sources.",
    features: ["Custom Functions", "Data Validation", "Report Generation", "API Integration"],
  },
  {
    icon: FileText,
    title: "Word Add-ins",
    description:
      "Document automation, template management, content insertion, and formatting tools for productivity.",
    features: ["Document Templates", "Content Controls", "Mail Merge", "Document Generation"],
  },
  {
    icon: Presentation,
    title: "PowerPoint Add-ins",
    description:
      "Presentation automation, slide management, content insertion, and design tools for efficient workflows.",
    features: ["Slide Templates", "Asset Libraries", "Brand Compliance", "Batch Processing"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Office Add-in <span className="text-gradient">Development</span>
          </h2>
          <p className="text-muted-foreground">
            Specialized development services for the entire Microsoft Office suite.
            Each add-in is built to enterprise standards.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glass-card p-8 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
