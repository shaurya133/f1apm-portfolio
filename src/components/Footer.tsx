import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">F1APM</h3>
            <p className="text-gray-400 leading-relaxed">
              Bridging Formula 1 strategy with product management excellence through 
              engaging content and innovative tools.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Content</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#podcast" className="hover:text-white transition-colors">Podcast</a></li>
              <li><a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://www.linkedin.com/in/shauryasethi/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://x.com/shauryaset" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="mailto:shaurya.sethi@nyu.edu" className="hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">About</h4>
            <p className="text-gray-400 text-sm">
              Product Manager passionate about helping aspiring PMs break into the field through actionable insights and real experiences.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} F1APM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
