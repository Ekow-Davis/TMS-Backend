import React, { useState, useEffect } from 'react';
import HomeNav from '../Home/HomeNav';
import Footer from '../../Components/Layout/Footer';
import InfoDropdown from '../../Components/InfoDropdown';
import FadeIn from '../../Components/FadeIn';

const TutorPage = () => {
  const faqItems = [
    { title: "How does scheduling work?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus." },
    { title: "How do I track student progress?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus." },
    { title: "How do I manage billing?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus." },
  ];

  const testimonials = [
    { text: "This system has transformed how I manage my tutoring business. Highly recommend!", author: "David Berko" },
    { text: "The scheduling tool is a game changer. I love it!", author: "Joshua Danso" },
    { text: "Tracking student progress has never been easier.", author: "Ella Kumah" },
    { text: "The billing management is very efficient.", author: "Ekow Davis" },
    { text: "Great support and features. Very happy!", author: "Caleb Tetteh" },
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
          <h1 className="text-5xl font-bold mb-4">Empower Your Teaching with [System Name]</h1>
          <p className="text-xl mb-6">Enhance your tutoring experience with our comprehensive management tools.</p>
          <button className="bg-custom-purple text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-[#262ea2]">
            Sign Up Now
          </button>
        </FadeIn>
      </header>
      <div className="container mx-auto py-20 px-4">
        <section className="mb-20">
        <FadeIn>
        <div className="container mx-auto py-20 px-4">
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center">Key Benefits</h2>
            <ul className="list-disc list-inside text-lg space-y-4">
              <li className="flex items-center">
                <img src="placeholder-image.png" alt="Personalized Learning" className="w-12 h-12 mr-4" />
                <div className="transition transform hover:scale-105 hover:text-custom-purple">
                  Personalized Learning
                </div>
              </li>
              <li className="flex items-center">
                <img src="placeholder-image.png" alt="Accessible Resources" className="w-12 h-12 mr-4" />
                <div className="transition transform hover:scale-105 hover:text-custom-purple">
                  Accessible Resources
                </div>
              </li>
              <li className="flex items-center">
                <img src="./Images/HomePictures/progress_tracking.png" alt="Progress Tracking" className="w-12 h-12 mr-4" />
                <div className="transition transform hover:scale-105 hover:text-custom-purple">
                  Progress Tracking
                </div>
              </li>
              <li className="flex items-center">
                <img src="placeholder-image.png" alt="Support and Communication" className="w-12 h-12 mr-4" />
                <div className="transition transform hover:scale-105 hover:text-custom-purple">
                  Support and Communication
                </div>
              </li>
            </ul>
          </section>
        </div>
      </FadeIn>
        </section>
        <section className="mb-20">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Interactive Demos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded shadow-lg transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">Scheduling Tool</h3>
                <img src="./Images/HomePictures/cal.png" alt="Scheduling Tool" className="mb-4"/>
                <p>Click-through demo showing how easy it is to schedule and manage classes.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow-lg transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">Student Progress Tracker</h3>
                <img src="./Images/HomePictures/stats.png" alt="Student Progress Tracker" className="mb-4"/>
                <p>Interactive feature showing how to monitor and record student progress.</p>
              </div>
            </div>
          </FadeIn>
        </section>
        <section className="mb-20">
          <FadeIn>
            <h2 className="text-3xl text-center font-bold my-6">Testimonials</h2>                  
              <div className="italic h-48 border-l-4 border-custom-purple bg-[#ced0f25a] text-center text-3xl py-2 transition-opacity duration-3000">
                  <br />
                  "{testimonials[currentTestimonial].text}" 
                  <br />
                  <br />
                  - {testimonials[currentTestimonial].author}
            </div>
            
          </FadeIn>
        </section>
        <section className="mb-20">
          <FadeIn>
            <h2 className="text-3xl text-center font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
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

export default TutorPage;
