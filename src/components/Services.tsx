import { LayoutTemplate, Paintbrush, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: <LayoutTemplate size={72} strokeWidth={1} />,
    title: 'Modern Web Design',
    description: 'Crafting visually stunning and user-friendly websites that leave a lasting impression. Modern, clean, and built for performance.',
  },
  {
    icon: <Paintbrush size={72} strokeWidth={1} />,
    title: 'Graphic Design',
    description: 'Bringing your brand to life with custom graphics, logos, and marketing materials that capture your unique identity.',
  },
  {
    icon: <ShoppingBag size={72} strokeWidth={1} />,
    title: 'E-Commerce Solutions',
    description: 'Building powerful and scalable online stores that drive sales and provide a seamless shopping experience for your customers.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-cream-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair-display text-center text-dark-charcoal mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-soft-beige p-8 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-gold-accent mb-4 inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-playfair-display text-dark-charcoal mb-3">{service.title}</h3>
              <p className="text-dark-charcoal font-poppins">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
