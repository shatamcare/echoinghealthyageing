import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Activity, Handshake, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CounterCard = ({ stat, index }: { stat: any; index: number }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(stat.number.replace(/\D/g, ''));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < target) {
        setCount(Math.min(count + Math.ceil(target / 50), target));
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [count, target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-center h-full group cursor-pointer">
        <CardContent className="p-8">
          <motion.div
            className="inline-flex items-center justify-center p-4 rounded-full mb-4 bg-gradient-to-br from-slate-500 to-teal-600 text-white shadow-sm"
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {stat.icon}
          </motion.div>
          <div className="text-4xl font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-smooth">
            {count}{stat.number.includes('+') ? '+' : ''}
          </div>
          <p className="text-slate-700 font-medium">{stat.label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "120+",
      label: "Elderly & Persons with Dementia Supported",
      color: "teal"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "1500+",
      label: "Caregivers & Healthcare Professionals Trained",
      color: "gold"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      number: "3600+",
      label: "Therapy Sessions Conducted",
      color: "lavender"
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      number: "10+",
      label: "Partnerships Across India",
      color: "teal"
    }
  ];

  const testimonials = [
    {
      text: "The brain-stimulating activities help her immensely; she happily narrates past incidents and engages with the memories we thought were lost.",
      author: "Neha Doshi",
      relation: "Family Caregiver"
    },
    {
      text: "EHA's training programs have transformed how we approach dementia care in our facility. The person-centered approach makes all the difference.",
      author: "Dr. Rajesh Kumar",
      relation: "Healthcare Professional"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-shadow">
            About Echoing Healthy Ageing (EHA)
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            EHA is a social enterprise in geriatric care, offering home therapies, dementia care training, 
            caregiver support, and Memory Café programs. Founded during Alzheimer's Month 2012, we continue 
            to make a meaningful difference in the lives of seniors and their families.
          </p>
        </motion.div>

        {/* Mission & Services */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Our Mission</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    To provide comprehensive, person-centered care and support for seniors, 
                    particularly those living with dementia, while empowering their caregivers 
                    with knowledge and resources.
                  </p>
                  <div className="bg-slate-100/80 p-4 rounded-lg shadow-sm border border-slate-200/40">
                    <p className="text-sm text-slate-800 font-medium">
                      <strong>Founded:</strong> September 2012 during Alzheimer's Month
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Our Services</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <motion.div
                        className="bg-gradient-to-br from-slate-500 to-teal-600 w-2 h-2 rounded-full mt-2 flex-shrink-0 shadow-sm"
                        whileHover={{ scale: 1.3 }}
                      />
                      <span>Home-based therapy services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <motion.div
                        className="bg-gradient-to-br from-slate-500 to-teal-600 w-2 h-2 rounded-full mt-2 flex-shrink-0 shadow-sm"
                        whileHover={{ scale: 1.3 }}
                      />
                      <span>Memory Café community programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <motion.div
                        className="bg-gradient-to-br from-slate-500 to-teal-600 w-2 h-2 rounded-full mt-2 flex-shrink-0 shadow-sm"
                        whileHover={{ scale: 1.3 }}
                      />
                      <span>Professional dementia care training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <motion.div
                        className="bg-gradient-to-br from-slate-500 to-teal-600 w-2 h-2 rounded-full mt-2 flex-shrink-0 shadow-sm"
                        whileHover={{ scale: 1.3 }}
                      />
                      <span>Caregiver support and education</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Impact Statistics */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-primary text-center mb-12 text-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Impact
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <CounterCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.h3
            className="text-3xl font-bold text-primary text-center mb-12 text-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What People Say
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 h-full group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className="bg-gradient-to-br from-slate-500 to-teal-600 p-3 rounded-full flex-shrink-0 shadow-sm"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                      >
                        <Quote className="h-6 w-6 text-white" />
                      </motion.div>
                      <p className="text-slate-700 italic leading-relaxed text-lg">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <Star className="h-4 w-4 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 group-hover:text-teal-700 transition-smooth">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-slate-600">{testimonial.relation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};