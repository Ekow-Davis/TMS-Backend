import React from 'react';
import HomeNav from '../Home/HomeNav';
import FadeIn from '../../Components/FadeIn';
import Footer from '../../Components/Layout/Footer';
import InfoDropdown from '../../Components/InfoDropdown';

const HelpPage = () => {
  const faqSections = [
    { id: 'section1', title: 'General Questions' },
    { id: 'section2', title: 'Billing Services' },
    { id: 'section3', title: 'Technical Support' },
    { id: 'section4', title: 'Account Management' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HomeNav />
      <header className="bg-custom-blue pt-44 text-white text-center py-20">
      <FadeIn>
        <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl mb-6">Find answers to your questions</p>
        <button className="bg-custom-purple text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-[#262ea2]">
          Get Started
        </button>
        </FadeIn>
      </header>
      <div className="container mx-auto py-20 px-4">
        <nav className="mb-10">
          <ul className="flex flex-col md:flex-row justify-around text-custom-purple text-lg">
            {faqSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="p-6 hover:border-2 hover:border-custom-purple hover:bg-custom-purple transition duration-300 rounded-[10px] hover:text-white "
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {faqSections.map((section) => (
          <section id={section.id} key={section.id} className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <div className="flex flex-col items-center">
              <InfoDropdown
                title={`What is ${section.title}?`}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus."
              />
              <InfoDropdown
                title={`How to handle ${section.title}?`}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus."
              />
              <InfoDropdown
                title={`Why choose ${section.title}?`}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus."
              />
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HelpPage;
