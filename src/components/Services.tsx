
import { PaintBrush, LayoutTemplate, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: <PaintBrush className="w-10 h-10 text-gold-accent" />,
    title: 'Concept Album Design',
    description: 'Fully bespoke album design from scratch, tailored to your unique love story and aesthetic preferences.',
  },
  {
    icon: <LayoutTemplate className="w-10 h-10 text-gold-accent" />,
    title: 'Template Customization',
    description: 'Choose from our exclusive collection of templates and we will customize it with your photos and details.',
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-gold-accent" />,
    title: 'Digital Marketplace',
    description: 'Purchase premium PSD album templates and Lightroom presets to elevate your own creative projects.',
  },
];

export const Services = () => (
  <section className="py-24 bg-soft-beige">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-playfair-display text-4xl font-bold text-dark-charcoal">Our Services</h2>
        <p className="font-poppins text-md text-dark-charcoal/70 mt-4 max-w-2xl mx-auto">Offering a range of services to bring your wedding memories to life, from bespoke designs to ready-to-use digital assets.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="text-center p-8 bg-cream-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="font-playfair-display text-2xl font-semibold text-dark-charcoal mb-3">{service.title}</h3>
            <p className="font-poppins text-sm text-dark-charcoal/70 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
