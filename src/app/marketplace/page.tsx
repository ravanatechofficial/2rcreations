
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketplace | 2R Creations',
  description: 'Browse and purchase digital products like PSD templates and Lightroom presets.',
};

const MarketplacePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-playfair-display font-bold text-center my-12">Digital Marketplace</h1>
      <div className="text-center">
        <p className="text-lg leading-relaxed">
          A filterable gallery of digital products available for purchase will be featured here.
        </p>
      </div>
    </div>
  );
};

export default MarketplacePage;
