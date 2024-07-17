import React from 'react';
import FadeIn from '../../Components/FadeIn';
import FeatureBox from '../../Components/FeatureBox';

const HomeBody = () => {
  const features = [
    {
      imageSrc: './Images/HomePictures/pay-online.png',
      altText: 'Better Billing',
      heading: 'Better Billing',
      listItems: [
        'Offer flexible billing options including package billing, flat fees or a combination.',
        'Generate single invoices, multiple invoices, or automate your invoicing.',
        'Send automatic Invoice Due Reminders and Low Package Balance Alerts to your clients.',
        'Allow your clients to pay online, or process payments on their behalf.',
        'Accept upfront credit card payments join classes or book your own.',
      ],
      imagePosition: 'right',
    },
    {
      imageSrc: './Images/HomePictures/cal.png',
      altText: 'Simplify Scheduling',
      heading: 'Simplify Scheduling',
      listItems: [
        'Easily manage your schedule with calendar-based billing.',
        'Automate your invoicing to save time.',
        'Send reminders and alerts to your clients.',
        'Allow clients to schedule and pay online.',
        'Optimize your scheduling with our tools.',
      ],
      imagePosition: 'left',
    },
    {
      imageSrc: './Images/HomePictures/msgs.png',
      altText: 'Improve Communication',
      heading: 'Improve Communication',
      listItems: [
        'Enhance communication with automated messages.',
        'Keep clients informed with reminders and alerts.',
        'Use our platform to streamline client interactions.',
        'Provide excellent customer service with our tools.',
        'Build better client relationships.',
      ],
      imagePosition: 'right',
    },
  ];

  const customers = [
    {
      imageSrc: './Images/HomePictures/tutors.png',
      altText: 'Students',
      heading: 'Students',
      listItems: [
        'Access a user-friendly platform to find and book tutoring sessions with ease.',
        'Receive personalized learning plans and progress tracking from your tutors.',
        'Benefit from flexible scheduling options to fit your study needs and availability.',
        'Communicate directly with tutors for any questions or additional support.',
        'Get reminders for upcoming sessions and updates on your progress through the system.',
        'Access a variety of learning resources and materials provided by your tutors.',
        'Enjoy an organized and transparent billing process for your sessions and services.',
        'Give feedback on sessions to help improve the quality of tutoring services.',
      ],      
      imagePosition: 'right',
    },
    {
      imageSrc: './Images/HomePictures/tutors.png',
      altText: 'Tutors',
      heading: 'Tutors',
      listItems: [
        'Manage your tutoring schedule and availability easily with our intuitive calendar system.',
        'Create and manage personalized learning plans for each student based on their needs.',
        'Track student progress and provide feedback directly through the platform.',
        'Automate your billing processes with options for different billing models.',
        'Send automatic reminders for upcoming sessions and follow-up messages.',
        'Access tools for creating and sharing educational resources and materials.',
        'Receive and manage payments online with secure and straightforward transaction options.',
        'Gain access to a platform for finding new students and expanding your tutoring business.',
      ],      
      imagePosition: 'left',
    },
    {
      imageSrc: './Images/HomePictures/clients.png',
      altText: 'Organizations',
      heading: 'Organizations',
      listItems: [
        'Streamline the management of tutors and students with centralized control and oversight.',
        'Generate detailed reports and analytics on sessions, progress, and financials.',
        'Offer flexible billing options to accommodate different organizational needs and preferences.',
        'Automate scheduling, reminders, and notifications for both tutors and students.',
        'Manage tutor performance and gather feedback from students to ensure high-quality education.',
        'Provide a platform for communication between tutors, students, and organizational admins.',
        'Access tools for creating and sharing educational materials and resources for your programs.',
        'Ensure secure and efficient online payment processing for all services and fees.',
      ],      
      imagePosition: 'right',
    },
  ];

  return (
    <>
      <header className="bg-custom-blue pt-44 text-white text-center py-20">
        <FadeIn>
        <h1 className="text-5xl font-bold mb-4">Welcome to TMSServices</h1>
        <p className="text-xl mb-6">Efficient management for your teaching business</p>
        <button className="bg-custom-purple text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-[#262ea2]">
          Get Started
        </button>
        </FadeIn>
      </header>
      <main className="p-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          {features.map((feature, index) => (
            <FeatureBox key={index} {...feature} />
          ))}
        </FadeIn>
        <FadeIn>
        <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
          {customers.map((customer, index) => (
            <FeatureBox key={index} {...customer} />
          ))}
        </FadeIn>
      </main>
    </>
  );
};

export default HomeBody;
