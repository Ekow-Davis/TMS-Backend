import React from 'react';
import HomeNav from './HomeNav';
import Footer from '../../Components/Layout/Footer';
import FadeIn from '../../Components/FadeIn';
import InfoDropdown from '../../Components/InfoDropdown';

const Pricing = () => {
  const starterPlanBenefits = [
    'Up to 75 students',
    'All core features',
    'Email support',
    'Basic reporting',
    'Standard invoicing',
    'Basic scheduling',
    'Learning materials',
    'User-friendly interface',
  ];

  const growingPlanBenefits = [
    'Up to 200 students',
    'All Starter features',
    'Priority support',
    'Advanced reporting',
    'Enhanced scheduling',
    'More storage',
    'Advanced invoicing',
    'Third-party integrations',
  ];

  const establishedPlanBenefits = [
    'Unlimited students',
    'All Growing features',
    '24/7 support',
    'Comprehensive reporting',
    'Top-tier scheduling',
    'Unlimited storage',
    'Advanced billing',
    'Exclusive features',
  ];

  return (
    <>
      <HomeNav />
      <header className="bg-custom-blue pt-44 text-white text-center py-20">
      <FadeIn>
        <h1 className="text-5xl font-bold mb-4">Our Payment Plans</h1>
        <p className="text-xl mb-6">Cost Effective Payment Deal Bundles</p>
        <button className="bg-custom-purple text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-[#262ea2]">
          Get Started
        </button>
        </FadeIn>
      </header>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="p-8 bg-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 mt-20">Our Pricing Plans</h1>
            <p className="text-gray-600"><strong>Tutors</strong></p>
            <p className="text-gray-600">Choose the plan that fits your needs</p>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter Plan */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:bg-gray-50 relative border-t-8 border-blue-500">
                <h2 className="text-2xl font-bold mb-4">Starter</h2>
                <p className="text-gray-600 mb-4">$35 / month</p>
                <ul className="text-center mb-6">
                  {starterPlanBenefits.map((benefit, index) => (
                    <li key={index} className="my-3 flex items-center justify-center">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Choose Plan</button>
              </div>
              {/* Growing Plan */}
              <div className="bg-white border-t-8 border-[#8bc220] shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:bg-gray-50">
                <h2 className="text-2xl font-bold mb-4">Growing</h2>
                <p className="text-gray-600 mb-4">$75 / month</p>
                <ul className="text-center mb-6">
                  {growingPlanBenefits.map((benefit, index) => (
                    <li key={index} className="my-2 flex items-center justify-center">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="bg-[#8bc220] text-white px-4 py-2 rounded-lg">Choose Plan</button>
              </div>
              {/* Established Plan */}
              <div className="bg-white shadow-lg border-t-8 border-custom-purple rounded-lg p-6 text-center transform transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:bg-gray-50">
                <h2 className="text-2xl font-bold mb-4">Established</h2>
                <p className="text-gray-600 mb-4">$150 / month</p>
                <ul className="text-center mb-6">
                  {establishedPlanBenefits.map((benefit, index) => (
                    <li key={index} className="mb-2 flex items-center justify-center">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="bg-custom-purple text-white px-4 py-2 rounded-lg">Choose Plan</button>
              </div>
            </div>
          </FadeIn>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 mt-20">Our Pricing Plans</h1>
            <p className="text-gray-600"><strong>Students</strong></p>
            <p className="text-gray-600">Choose the plan that fits your needs</p>
          </div>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter Plan */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:bg-gray-50 relative border-t-8 border-blue-500">
                <h2 className="text-2xl font-bold mb-4">Starter</h2>
                <p className="text-gray-600 mb-4">$35 / month</p>
                <ul className="text-center mb-6">
                  {starterPlanBenefits.map((benefit, index) => (
                    <li key={index} className="my-3 flex items-center justify-center">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Choose Plan</button>
              </div>
              {/* Growing Plan */}
              <div className="bg-white border-t-8 border-[#8bc220] shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:bg-gray-50">
                <h2 className="text-2xl font-bold mb-4">Growing</h2>
                <p className="text-gray-600 mb-4">$75 / month</p>
                <ul className="text-center mb-6">
                  {growingPlanBenefits.map((benefit, index) => (
                    <li key={index} className="my-2 flex items-center justify-center">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="bg-[#8bc220] text-white px-4 py-2 rounded-lg">Choose Plan</button>
              </div>
              {/* Established Plan */}
              <div className="bg-white shadow-lg border-t-8 border-custom-purple rounded-lg p-6 text-center transform transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:bg-gray-50">
                <h2 className="text-2xl font-bold mb-4">Established</h2>
                <p className="text-gray-600 mb-4">$150 / month</p>
                <ul className="text-center mb-6">
                  {establishedPlanBenefits.map((benefit, index) => (
                    <li key={index} className="mb-2 flex items-center justify-center">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="bg-custom-purple text-white px-4 py-2 rounded-lg">Choose Plan</button>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className='items-center'>
              <h1 className="text-custom-purple text-center text-3xl my-20">
                Frequesntly Asked Questions (FAQ)
              </h1>
              <div className='my-10 flex flex-col justify-center items-center'>
                <InfoDropdown
                  title="• How do I place an order"
                  content="It did workc ncjabvcouan ncahcbouc bcahbcaojnda bdcaojcbaojb"
                />
                <InfoDropdown
                  title="• Who are the couriers?"
                  content={
                    <div>
                      Couriers are independent professionals connected to our platform. With eagerness as fuel to their vehicles, they help you with your tasks as quickly and as effectively as possible.
                      <br />
                      <br />
                      Want to be a courier? Great! Kindly fill out this form and we’ll get back to you: (insert link)
                    </div>
                  }
                />
                <InfoDropdown
                  title="• How is delivery cost calculated?"
                  content="nkdnkasnc aomomosmd oannsnd isdnsnsi soandsondson aosndonoasndand"
                />
                <InfoDropdown
                  title="• How is delivery cost calculated?"
                  content="nkdnkasnc aomomosmd oannsnd isdnsnsi soandsondson aosndonoasndand"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
