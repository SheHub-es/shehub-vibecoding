
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, Rocket, Users, Star } from 'lucide-react';
import Network from '@/components/Network';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedGradient />
      <Navbar />
      <Hero />
      
      <Features />
      
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <FadeIn>
                <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
                  👩‍💻 How It Works
                </span>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  SheHub replicates the dynamics of a real tech company
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg text-muted-foreground mb-6">
                  So women gain not just skills, but experience that counts. It's not just about learning — it's about working, growing, and being seen.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <span className="text-shehub-purple font-bold mr-2">✅</span>
                    <p className="text-muted-foreground">Agile team structure with real roles: UX/UI, Dev, Product, Data, Marketing</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-shehub-purple font-bold mr-2">✅</span>
                    <p className="text-muted-foreground">4–8 week projects with real deliverables</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-shehub-purple font-bold mr-2">✅</span>
                    <p className="text-muted-foreground">Mentorship from professionals in tech</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-shehub-purple font-bold mr-2">✅</span>
                    <p className="text-muted-foreground">Planning, retrospectives, and demo moments</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-shehub-purple font-bold mr-2">✅</span>
                    <p className="text-muted-foreground">Access to tools used in top companies: Notion, Genway.ai</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="md:col-span-2">
              <FadeIn direction="right">
                <div className="glass-card p-8 relative">
                  <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full bg-shehub-light-purple flex items-center justify-center border-4 border-white">
                    <Rocket size={20} className="text-shehub-purple" />
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mr-4">
                        <Users size={20} className="text-shehub-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold">Our Impact So Far</h3>
                        <p className="text-sm text-muted-foreground">Real results</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Stat number="100+" label="Women joined the community in the first month" />
                    <Stat number="2+" label="Cross-functional teams already working" />
                    <Stat number="10+" label="Mentors from across the tech industry" />
                    <Stat number="4+" label="Professional tools like Notion and Genway.ai" />
                    <Stat number="7+" label="Contributors securing interview opportunities" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-shehub-orange/10 blur-3xl" />
      </section>
      
      <section id="mentorship" className="py-20 bg-shehub-purple/5 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
                💼 For Mentors
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Lead. Inspire. Grow — while helping women break into tech</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Support cross-functional teams in real product simulations and build the kind of leadership experience that companies look for.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn direction="up">
              <MentorCard 
                icon={<Star size={20} className="text-shehub-purple" />}
                title="Develop Leadership"
                description="Develop your coaching, decision-making, and team management skills in a low-risk, high-impact setting"
              />
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1}>
              <MentorCard 
                icon={<Users size={20} className="text-shehub-purple" />}
                title="Flexible Commitment"
                description="Time commitment is flexible — around 1 to 2 hours per week, fully remote"
              />
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <MentorCard 
                icon={<Network size={20} className="text-shehub-purple" />}
                title="Career Enhancement"
                description="SheHub experience is something you can proudly list on your LinkedIn or CV"
              />
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <a 
                href="#waitlist" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-shehub-gradient text-white text-lg font-medium transition-all hover:shadow-glow-purple hover:scale-105"
              >
                Apply to Become a Mentor <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <section id="vision" className="py-24 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
                  🎯 Our Vision
                </span>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  We're building the future of tech — together
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg text-muted-foreground mb-6">
                  We don't just help women enter the field. We're redesigning how the field recognizes, supports, and grows diverse talent.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-lg text-muted-foreground mb-8">
                  SheHub will be self-sustaining through:
                </p>
                <ul className="space-y-3 mb-8 pl-4">
                  <li className="flex items-start">
                    <span className="text-shehub-purple font-bold mr-2">📈</span>
                    <p className="text-muted-foreground"><span className="font-medium">Talent Bridge:</span> Paid recruitment partnerships</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-shehub-purple font-bold mr-2">📈</span>
                    <p className="text-muted-foreground"><span className="font-medium">Innovation & Inclusion Consulting:</span> DEI workshops, audits, and mentorship programs</p>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground font-medium mb-8">
                  Funding now helps us build the foundation for long-term impact.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <a 
                  href="mailto:info@shehub.es" 
                  className="inline-flex items-center px-6 py-3 rounded-full border border-shehub-purple text-shehub-purple font-medium transition-all hover:bg-shehub-purple/10"
                >
                  Contact Us to Support SheHub
                </a>
              </FadeIn>
            </div>
            
            <div>
              <FadeIn direction="right" delay={0.2}>
                <div className="glass-card p-8 relative">
                  <h3 className="text-2xl font-bold mb-6">🙋‍♀️ FAQ</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2">What is SheHub?</h4>
                      <p className="text-muted-foreground">A collaborative platform where women gain job-ready experience by working in agile teams with real mentors.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Is it free?</h4>
                      <p className="text-muted-foreground">Yes. SheHub is completely free for contributors and mentors.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Who can join?</h4>
                      <p className="text-muted-foreground">Contributors: Women who have completed a bootcamp or are self-taught and want to gain hands-on, team-based experience. Mentors: Women professionals in tech who want to support others while also growing their leadership skills.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">What kind of projects are they?</h4>
                      <p className="text-muted-foreground">Teams build real features and tools, either for the SheHub platform or partner initiatives. All work is collaborative and relevant.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">How long are the projects?</h4>
                      <p className="text-muted-foreground">Most last 4 to 8 weeks and are designed to be flexible and part-time.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Can I include this on my CV or LinkedIn?</h4>
                      <p className="text-muted-foreground">Yes. Everything you work on is structured, visible, and can be showcased as real experience.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-shehub-purple/10 blur-3xl" />
      </section>
      
      <WaitlistForm />
      <Footer />
    </div>
  );
};

interface StatProps {
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ number, label }) => {
  return (
    <div className="flex items-center">
      <div className="w-16 text-xl font-bold">{number}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

interface MentorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-8 h-full relative overflow-hidden group transition-all hover:shadow-md hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground relative z-10">{description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-shehub-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </div>
  );
};

export default Index;
