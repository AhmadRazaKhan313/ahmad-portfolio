import React from 'react';
import { Code, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background/80 py-12 border-t border-white/10">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 text-xl font-semibold mb-4">
              <Code className="w-6 h-6 text-accent" />
            <span className="gradient-text-primary">  &lt;ahmad.raza/&gt;</span>
            </div>
            <p className="text-text-secondary mb-6 max-w-md">
              A passionate Frontend Developer focused on creating beautiful and functional web experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.742 9.482 19.845 9.482 18.988C7 19.539 6.35 18.457 6.15 17.859C6.037 17.539 5.5 16.618 5 16.342C4.6 16.117 4.1 15.566 4.99 15.558C5.8 15.55 6.386 16.306 6.6 16.634C7.4 18.177 8.878 17.899 9.55 17.638C9.642 16.946 9.917 16.476 10.225 16.206C7.925 15.936 5.5 15.031 5.5 11.167C5.5 10.054 5.927 9.134 6.625 8.422C6.525 8.177 6.137 7.069 6.725 5.806C6.725 5.806 7.475 5.545 9.5 6.879C10.3 6.642 11.15 6.524 12 6.524C12.85 6.524 13.7 6.642 14.5 6.879C16.525 5.537 17.275 5.806 17.275 5.806C17.875 7.069 17.475 8.177 17.375 8.422C18.075 9.134 18.5 10.046 18.5 11.167C18.5 15.04 16.067 15.936 13.767 16.206C14.167 16.538 14.5 17.184 14.5 18.184C14.5 19.594 14.482 20.642 14.482 21.017C14.482 21.278 14.65 21.589 15.15 21.487C17.164 20.812 18.881 19.505 20.069 17.752C21.256 15.999 21.843 13.893 21.839 11.745C21.839 6.348 17.418 2.001 11.999 2.001L12 2Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.155 3.008C22.347 3.461 21.467 3.783 20.545 3.961C20.159 3.519 19.652 3.187 19.082 3.002C18.513 2.817 17.899 2.786 17.311 2.913C16.723 3.041 16.179 3.321 15.737 3.727C15.295 4.133 14.971 4.651 14.799 5.227C14.799 5.227 14.799 5.706 14.799 5.706C12.693 5.751 10.634 5.18 8.853 4.055C7.072 2.929 5.645 1.299 4.745 -0.617C4.745 -0.617 2.434 7.215 9.358 10.605C7.695 11.709 5.745 12.278 3.766 12.232C10.69 16.58 19.126 12.232 19.126 5.207C19.125 4.992 19.105 4.778 19.066 4.566C19.944 3.722 20.555 2.623 23.155 3.008Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-text-secondary hover:text-text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-text-secondary hover:text-text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-text-secondary hover:text-text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:contact@ahmadraza.dev" className="text-text-secondary hover:text-text-primary transition-colors">
                  ahmadrazakhan130@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+11234567890" className="text-text-secondary hover:text-text-primary transition-colors">
                  +92 (306) 959-5036
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span className="text-text-secondary">
                  Satellite Town, Bahawalpur Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} Ahmad Raza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;