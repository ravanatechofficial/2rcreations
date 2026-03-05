
const Footer = () => {
    return (
      <footer className="w-full bg-cream-white/50 border-t border-dark-charcoal/10 mt-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-10 gap-6">
          <div className="text-center md:text-left">
            <p className="font-playfair-display text-lg font-bold">2R Creations</p>
            <p className="text-sm text-dark-charcoal/70 mt-1">Crafting Timeless Wedding Albums since 2024</p>
          </div>
          <div className="text-center text-sm text-dark-charcoal/70">
            <p>&copy; {new Date().getFullYear()} 2R Creations. All Rights Reserved.</p>
            <p>Designed & Developed with ❤️ by Sachini Fernando & Gemini</p>
          </div>
          <div className="flex items-center gap-6">
              {/* Placeholder for Social Media Icons */}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  