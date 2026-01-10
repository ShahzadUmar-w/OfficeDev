import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "napress",
    country: "United States",
    content:
      "The add-in was even better than I had hoped. This is the first time I have worked with a developer where the finished product is even better than I would have hoped.",
    rating: 5,
    isRepeatClient: false,
  },
  {
    name: "islamontg",
    country: "United States",
    content:
      "I hired Shahzad as an Excel Add-in developer and I'm very happy with the results. He delivered high-quality work, understood the requirements clearly, and handled complex logic very professionally.",
    rating: 5,
    isRepeatClient: false,
  },
  {
    name: "kabomarketing",
    country: "Germany",
    content:
      "This was my second time working with this seller, and once again a great experience. The XML was delivered perfectly. Communication was clear, changes were implemented quickly, and the final XML works flawlessly in Outlook.",
    rating: 5,
    isRepeatClient: true,
  },
  {
    name: "holger_mahltig",
    country: "Germany",
    content:
      "Mr. Umar has worked under the usual circumstances of the customer providing a rough project description and providing details on the way - this is high process quality aside of the technical quality.",
    rating: 4.7,
    isRepeatClient: false,
  },
  {
    name: "ajay244",
    country: "United States",
    content:
      "Shahzad is exceptional. He is extremely smart, intuitively knew what I wanted, and delivered it exactly if not better than I expected. Do yourself a favor and hire him if you want the job done right.",
    rating: 5,
    isRepeatClient: true,
  },
  {
    name: "marifhossain330",
    country: "Canada",
    content:
      "I needed an Outlook Web Professional add-in developed, and Shahzad exceeded my expectations despite the complexity of the project! He was proactive and very cooperative throughout the process.",
    rating: 5,
    isRepeatClient: false,
  },
  {
    name: "thegrbteam",
    country: "United Kingdom",
    content:
      "Quick and very knowledgeable, we're very happy to have found our main MS Add-ins support developer.",
    rating: 5,
    isRepeatClient: true,
  },
  {
    name: "ncentera",
    country: "United States",
    content:
      "He took a simple brief and brought it to life quickly and efficiently. I was able to communicate easily and we were able to work together well. There was a slight error in the code and he fixed it quickly!",
    rating: 5,
    isRepeatClient: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-card/30">
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground">
            Don't just take my word for it. Here's what my clients have to say about
            working with me on their Office Add-in projects.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    {testimonial.isRepeatClient && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-primary/20 text-primary rounded-full">
                        Repeat Client
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{testimonial.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
