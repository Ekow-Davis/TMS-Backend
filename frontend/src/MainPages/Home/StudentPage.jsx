import React, { useState, useEffect } from 'react';
import FeatureBox from '../../Components/FeatureBox';
import HomeNav from '../Home/HomeNav';
import Footer from '../../Components/Layout/Footer';
import InfoDropdown from '../../Components/InfoDropdown';
import FadeIn from '../../Components/FadeIn';

const StudentPage = () => {
  const features = [
    {
      imageSrc: './Images/HomePictures/scheduling.svg',
      altText: 'Easy Scheduling',
      heading: 'Easy Scheduling',
      listItems: [
        'Schedule tutoring sessions with just a few clicks, based on your availability.',
        'View tutor profiles, their expertise, and reviews before booking.',
        'Receive reminders for upcoming sessions so you never miss a class.',
        'Easily reschedule or cancel your sessions without any hassle.',
        'Book recurring sessions to ensure continuous learning progress.',
      ],
      imagePosition: 'left',
    },
    {
      imageSrc: './Images/HomePictures/student-payment.svg',
      altText: 'Secure Payments',
      heading: 'Secure Payments',
      listItems: [
        'Choose from flexible payment options, including one-time and recurring payments.',
        'Keep track of all your invoices and payment history in one place.',
        'Receive payment reminders to avoid missing any sessions due to payment delays.',
        'Pay online via credit card, PayPal, or other convenient methods.',
        'Enjoy a secure and smooth checkout experience, with receipts sent automatically.',
      ],
      imagePosition: 'right',
    },
    {
      imageSrc: './Images/HomePictures/tracking.svg',
      altText: 'Track Progress',
      heading: 'Track Your Progress',
      listItems: [
        'Monitor your learning progress with detailed reports from tutors.',
        'Access session notes, feedback, and assignments at any time.',
        'Set personal learning goals and track your progress toward them.',
        'Receive performance updates and insights on areas that need improvement.',
        'Ensure your academic growth with personalized progress tracking.',
      ],
      imagePosition: 'left',
    },
    
  ];

  const faqItems = [
    { title: "What is personalized learning?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus." },
    { title: "How do I access resources?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus." },
    { title: "How can I track my progress?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus." },
  ];

  const testimonials = [
    { text: "Using [System Name] has made learning so much easier and more effective!", author: "Adwoa" },
    { text: "I love the personalized learning plans!", author: "Elikem" },
    { text: "The resources are top-notch.", author: "Johnson" },
    { text: "Tracking my progress is very motivating.", author: "Arnold" },
    { text: "Great support and communication.", author: "Joel" },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <HomeNav />
      <header 
            className="bg-custom-blue mt-16 pt-44 text-white text-center py-20 bg-cover bg-center" 
            style={{ backgroundImage: `url('./Images/HomePictures/student.jpg')` }}
          >
        <FadeIn>
          <h1 className="text-5xl font-bold mb-4">Elevate Your Learning with TMSerives</h1>
          <p className="text-xl mb-6">Access top-notch resources and support to excel in your studies.</p>
          <button className="bg-custom-purple text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-custom-blue">
            Get Started
          </button>
        </FadeIn>
      </header>
      <div className="mx-auto py-20 px-4">
        <section className="mb-20">
          <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          {features.map((feature, index) => (
            <FeatureBox key={index} {...feature} />
          ))}
          </FadeIn>
        </section>
        <section className="mb-20">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Interactive Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded shadow-lg transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">Student Dashboard</h3>
                <img src="./Images/HomePictures/cal.png" alt="Student Dashboard" className="mb-4"/>
                <p>Click-through demo showcasing how students can navigate their dashboard.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow-lg transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">Resource Library</h3>
                <img src="./Images/HomePictures/stats.png" alt="Resource Library" className="mb-4"/>
                <p>Preview of the types of resources available (videos, PDFs, quizzes).</p>
              </div>
            </div>
          </FadeIn>
        </section>
        <section className="mb-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
            <div className="italic h-48 border-l-4 border-custom-purple bg-[#ced0f25a] text-center text-3xl py-2 transition-opacity duration-100">
              <br />
              "{testimonials[currentTestimonial].text}" 
              <br />
              <br />
              - {testimonials[currentTestimonial].author}
              <br />
            </div>
          </FadeIn>
        </section>
        <section className="mb-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions (FAQ)</h2>
            {faqItems.map((item, index) => (
              <div className="flex justify-center">
                <InfoDropdown key={index} title={item.title} content={item.content} />
              </div>
            ))}
          </FadeIn>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default StudentPage;
