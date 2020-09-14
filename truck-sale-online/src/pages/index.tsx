import React from 'react';
import { PageProps } from 'gatsby';
import ContactForm from '@/components/ContactForm';

const Home: React.FC<PageProps> = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Home;
