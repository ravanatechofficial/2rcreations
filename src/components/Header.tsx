
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-cream-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-6">
        <div className="font-playfair-display text-2xl font-bold text-dark-charcoal">
          <Link href="/">2R Creations</Link>
        </div>
        <ul className="flex items-center gap-8 font-poppins text-sm font-medium tracking-wider text-dark-charcoal/80">
          <li><Link href="/" className="hover:text-gold-accent transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-gold-accent transition-colors">About</Link></li>
          <li><Link href="/portfolio" className="hover:text-gold-accent transition-colors">Portfolio</Link></li>
          <li><Link href="/marketplace" className="hover:text-gold-accent transition-colors">Marketplace</Link></li>
          <li><Link href="/contact" className="hover:text-gold-accent transition-colors">Contact</Link></li>
        </ul>
        <div>
            {/* Placeholder for Cart/Account Icon */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
