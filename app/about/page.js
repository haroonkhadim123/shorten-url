"use client"
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Bitlink</h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Bitlink is a professional URL shortener designed to help you shorten, track, and share links easily. Our goal is to simplify link management for individuals and businesses alike.
            </p>
          </div>
          <div className="flex-1 relative w-full h-64 md:h-96">
            <Image src="/url.png" alt="About hero" fill className="object-cover rounded-xl shadow-lg"/>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 md:text-lg mb-6">
            Founded with the mission to make URL management effortless, Bitlink was created for everyone who shares links online. From marketers to bloggers, we provide tools to make links shorter, cleaner, and trackable.  
          </p>
          <p className="text-gray-600 md:text-lg">
            Our team believes in simplicity, security, and speed. We are constantly improving our platform to provide better analytics and user experience.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-purple-50 dark:text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 md:text-lg">
              To provide the fastest and easiest way to shorten and track URLs while keeping them secure and reliable for everyone.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 md:text-lg">
              To be the leading URL management platform, helping individuals and businesses optimize their link sharing and analytics worldwide.
            </p>
          </div>
        </div>
      </section>

     {/* Team Section */}
<section className="py-20 bg-white dark:text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet the Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Team Member 1 */}
      <div className="p-6 border rounded-xl hover:shadow-lg transition flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          HK
        </div>
        <h3 className="font-bold text-lg">Haroon Khadim</h3>
        <p className="text-gray-500">Founder & CEO</p>
      </div>
      {/* Team Member 2 */}
      <div className="p-6 border rounded-xl hover:shadow-lg transition flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          SJ
        </div>
        <h3 className="font-bold text-lg">Sarah J.</h3>
        <p className="text-gray-500">Product Manager</p>
      </div>
      {/* Team Member 3 */}
      <div className="p-6 border rounded-xl hover:shadow-lg transition flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          MD
        </div>
        <h3 className="font-bold text-lg">Mike D.</h3>
        <p className="text-gray-500">Lead Developer</p>
      </div>
      {/* Team Member 4 */}
      <div className="p-6 border rounded-xl hover:shadow-lg transition flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          ER
        </div>
        <h3 className="font-bold text-lg">Emily R.</h3>
        <p className="text-gray-500">Marketing Lead</p>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action Section */}
      <section className="py-20 bg-purple-500 w-full text-white text-center dark:text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Bitlink Today</h2>
          <p className="mb-6 text-lg md:text-xl">Shorten your links, track analytics, and share them effortlessly. Start now!</p>
          <a href="/shorten" className="p-3 rounded-xl bg-white text-purple-500 font-bold hover:bg-gray-100 transition">Get Started</a>
        </div>
      </section>
    </>
  );
}
