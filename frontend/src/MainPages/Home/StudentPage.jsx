import React, { useState, useEffect } from 'react';
import HomeNav from '../Home/HomeNav';
import Footer from '../../Components/Layout/Footer';
import InfoDropdown from '../../Components/InfoDropdown';
import FadeIn from '../../Components/FadeIn';

const StudentPage = () => {
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
      <header className="bg-custom-blue pt-44 text-white text-center py-20">
        <FadeIn>
          <h1 className="text-5xl font-bold mb-4">Elevate Your Learning with [System Name]</h1>
          <p className="text-xl mb-6">Access top-notch resources and support to excel in your studies.</p>
          <button className="bg-custom-purple text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-[#262ea2]">
            Get Started
          </button>
        </FadeIn>
      </header>
      <div className="container mx-auto py-20 px-4">
        <section className="mb-20">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Personalized Learning</li>
              <li>Accessible Resources</li>
              <li>Progress Tracking</li>
              <li>Support and Communication</li>
            </ul>
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
