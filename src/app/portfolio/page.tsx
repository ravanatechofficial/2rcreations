
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | 2R Creations',
  description: 'Explore a curated collection of concept wedding album designs by 2R Creations.',
};

const PortfolioPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-playfair-display font-bold text-center my-12">Our Portfolio</h1>
      <div className="text-center">
        <p className="text-lg leading-relaxed">
          A beautiful grid gallery showcasing all the wedding album concepts will be displayed here soon.
        </p>
      </div>
    </div>
  );
};

export default PortfolioPage;
