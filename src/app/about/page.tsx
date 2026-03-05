
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | 2R Creations',
  description: 'Learn more about Sachini Fernando, the creative force behind 2R Creations.',
};

const AboutPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-playfair-display font-bold text-center my-12">About 2R Creations</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed text-center">
          Detailed content about Sachini Fernando's journey, vision, and the story of 2R Creations will be placed here.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
