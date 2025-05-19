import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Mail, MapPin, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="section-padding bg-background/50" ref={ref}>
      <div className="container mx-auto container-padding">
        <SectionHeading title="Get In Touch" subtitle="Let's start a conversation" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 glass rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-primary-start" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:contact@ahmadraza.dev" className="text-text-secondary hover:text-accent transition-colors">
                      ahmadrazakhan130@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 glass rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-secondary-start" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-text-secondary">Satellite Town, Bahawalpur</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 glass rounded-lg mr-4">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Social Media</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://github.com/AhmadRazaKhan313" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-full hover:bg-white/20 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.742 9.482 19.845 9.482 18.988C7 19.539 6.35 18.457 6.15 17.859C6.037 17.539 5.5 16.618 5 16.342C4.6 16.117 4.1 15.566 4.99 15.558C5.8 15.55 6.386 16.306 6.6 16.634C7.4 18.177 8.878 17.899 9.55 17.638C9.642 16.946 9.917 16.476 10.225 16.206C7.925 15.936 5.5 15.031 5.5 11.167C5.5 10.054 5.927 9.134 6.625 8.422C6.525 8.177 6.137 7.069 6.725 5.806C6.725 5.806 7.475 5.545 9.5 6.879C10.3 6.642 11.15 6.524 12 6.524C12.85 6.524 13.7 6.642 14.5 6.879C16.525 5.537 17.275 5.806 17.275 5.806C17.875 7.069 17.475 8.177 17.375 8.422C18.075 9.134 18.5 10.046 18.5 11.167C18.5 15.04 16.067 15.936 13.767 16.206C14.167 16.538 14.5 17.184 14.5 18.184C14.5 19.594 14.482 20.642 14.482 21.017C14.482 21.278 14.65 21.589 15.15 21.487C17.164 20.812 18.881 19.505 20.069 17.752C21.256 15.999 21.843 13.893 21.839 11.745C21.839 6.348 17.418 2.001 11.999 2.001L12 2Z" fill="currentColor"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/ahmad-raza-khan300" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-full hover:bg-white/20 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z" fill="currentColor"/>
                        </svg>
                      </a>
                      <a href="https://twitter.com/ahmadrazakhan130" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-full hover:bg-white/20 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.155 3.008C22.347 3.461 21.467 3.783 20.545 3.961C20.159 3.519 19.652 3.187 19.082 3.002C18.513 2.817 17.899 2.786 17.311 2.913C16.723 3.041 16.179 3.321 15.737 3.727C15.295 4.133 14.971 4.651 14.799 5.227C14.799 5.227 14.799 5.706 14.799 5.706C12.693 5.751 10.634 5.18 8.853 4.055C7.072 2.929 5.645 1.299 4.745 -0.617C4.745 -0.617 2.434 7.215 9.358 10.605C7.695 11.709 5.745 12.278 3.766 12.232C10.69 16.58 19.126 12.232 19.126 5.207C19.125 4.992 19.105 4.778 19.066 4.566C19.944 3.722 20.555 2.623 23.155 3.008Z" fill="currentColor"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="p-6 glass rounded-lg">
                  <h4 className="font-medium mb-3">Working Hours</h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 10:00 PM</span>
                    </li>
                    {/* <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>By appointment</span>
                    </li> */}
                    {/* <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary-end/20 border border-primary-end/30 rounded-lg p-6 text-center"
                >
                  <Send className="w-12 h-12 mx-auto mb-4 text-primary-end" />
                  <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                  <p className="text-text-secondary">Your message has been sent successfully. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-start/50"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-start/50"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-start/50"
                        placeholder="How can I help you?"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        type="submit"
                        variant="primary"
                        className="w-full py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;