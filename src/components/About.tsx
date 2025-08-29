import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Activity, Handshake, Quote, Star } from "lucide-react";

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

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Echoing Healthy Ageing (EHA)
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            EHA is a social enterprise in geriatric care, offering home therapies, dementia care training, 
            caregiver support, and Memory Café programs. Founded during Alzheimer's Month 2012, we continue 
            to make a meaningful difference in the lives of seniors and their families.
          </p>
        </div>

        {/* Mission & Services */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="gradient-card border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To provide comprehensive, person-centered care and support for seniors, 
                    particularly those living with dementia, while empowering their caregivers 
                    with knowledge and resources.
                  </p>
                  <div className="bg-teal/10 p-4 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      <strong>Founded:</strong> September 2012 during Alzheimer's Month
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Our Services</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="bg-teal w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Home-based therapy services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-gold w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Memory Café community programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-lavender w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Professional dementia care training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-teal w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Caregiver support and education</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statistics */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Impact</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className={`gradient-card border-0 shadow-xl text-center hover:scale-105 transition-bounce`}>
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center p-4 rounded-full mb-4 ${
                    stat.color === 'teal' ? 'bg-teal/10 text-teal' :
                    stat.color === 'gold' ? 'bg-gold/10 text-gold' :
                    'bg-lavender/30 text-primary'
                  }`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">What People Say</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="gradient-card border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gold/10 p-3 rounded-full flex-shrink-0">
                      <Quote className="h-6 w-6 text-gold" />
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};