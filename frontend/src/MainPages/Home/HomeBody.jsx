import React from 'react'

const HomeBody = () => {
  return (
    <>
    <header className="bg-custom-blue text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to TMSServices</h1>
        <p className="text-xl mb-6">Efficient management for your teaching business</p>
        <button className="bg-[#8bc220] text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-[#7bb018]">
          Get Started
        </button>
      </header>
      <main className="p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Better Billing</h3>
              <p className="text-gray-600">
                <ul>
                  <li>
                    Offer flexible billing options including calendar-based billing, package billing, flat fees or a combination to accommodate your unique needs.
                  </li>
                  <li>
                    Generate single invoices, multiple invoices, or automate your invoicing.
                  </li>
                  <li>
                    Send automatic Invoice Due Reminders and Low Package Balance Alerts to your clients.
                  </li>
                  <li>
                    Allow your clients to pay online, or process payments on their behalf.
                  </li>
                  <li>
                    Accept upfront credit card payments when new and existing clients book lessons, join classes or enroll in courses.
                  </li>
                  <li>
                  More Billing Features
                  </li>
                </ul>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Feature 2</h3>
              <p className="text-gray-600">
                Description of feature 2.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3.</p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Step 1</h3>
              <p className="text-gray-600">Description of step 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Step 2</h3>
              <p className="text-gray-600">Description of step 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Step 3</h3>
              <p className="text-gray-600">Description of step 3.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomeBody