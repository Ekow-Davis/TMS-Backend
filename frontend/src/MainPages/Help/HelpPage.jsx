import React from 'react';
import { Link } from 'react-router-dom';
import HomeNav from '../Home/HomeNav';
import FadeIn from '../../Components/FadeIn';
import Footer from '../../Components/Layout/Footer';
import InfoDropdown from '../../Components/InfoDropdown';

const HelpPage = () => {
  const faqSections = [
    { id: 'section1', title: 'General Questions' },
    { id: 'section2', title: 'Billing Services' },
    { id: 'section3', title: 'Contact Us', isLink: true },
    { id: 'section4', title: 'Technical Support' },
    { id: 'section5', title: 'Account Management' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HomeNav />
      <header 
            className="bg-custom-blue mt-24 pt-44 text-white text-center py-20 bg-cover bg-center" 
            style={{ backgroundImage: `url('./Images/HomePictures/support.jpg')` }}
          >
        <FadeIn>
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl mb-6">Find answers to your questions</p>
          <button className="bg-custom-purple text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-[#262ea2]">
            Get Started
          </button>
        </FadeIn>
      </header>
      <div className="mx-auto py-20 px-4">
        <nav className="mb-10">
          <ul className="flex flex-col md:flex-row justify-around text-custom-heading text-lg">
            {faqSections.map((section) => (
              <li key={section.id}>
                {section.isLink ? (
                  <Link to="/ContactUs" className="p-6 hover:bg-custom-purple transition duration-300 rounded-[10px] hover:text-white">
                    {section.title}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="p-6 hover:bg-custom-purple transition duration-300 rounded-[10px] hover:text-white"
                  >
                    {section.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {faqSections.map((section) => (
          <section id={section.id} key={section.id} className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <div className="flex flex-col items-center">
              {section.id === 'section1' && (
                <>
                  <InfoDropdown
                    title="What is TMSServices?"
                    content="TMSServices is an online platform designed to help students book tutoring sessions with qualified tutors."
                  />
                  <InfoDropdown
                    title="How do I register as a student?"
                    content="To register as a student, visit the signup page, provide your details, and create an account."
                  />
                </>
              )}
              {section.id === 'section2' && (
                <>
                  <InfoDropdown
                    title="What payment methods are available?"
                    content="We support various payment methods, including credit cards and online payment platforms."
                  />
                  <InfoDropdown
                    title="How do I check my billing history?"
                    content="Go to the billing section in your account to view your payment history and invoices."
                  />
                </>
              )}
              {section.id === 'section4' && (
                <>
                  <InfoDropdown
                    title="How can I get technical support?"
                    content="You can reach out to our technical support team via email or by submitting a support request through the support page."
                  />
                  <InfoDropdown
                    title="What should I do if I forget my password?"
                    content="If you forget your password, click 'Forgot Password' on the sign-in page to reset it."
                  />
                </>
              )}
              {section.id === 'section5' && (
                <>
                  <InfoDropdown
                    title="How do I update my account details?"
                    content="Navigate to the account management section to update your profile and other personal details."
                  />
                  <InfoDropdown
                    title="Can I delete my account?"
                    content="Yes, you can delete your account from the account management page, but note that this action is irreversible."
                  />
                </>
              )}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HelpPage;
