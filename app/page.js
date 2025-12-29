"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[60vh] bg-purple-100 w-full">
        <div className="h-full flex flex-col justify-center items-start gap-6 p-10">
          <p className="font-bold text-4xl md:text-5xl dark:text-white">
            {"Best URL Shortener in the Market"}
          </p>
          <p className="text-gray-600 md:text-lg px-2">
            {"Bitlink is a free URL shortener that allows you to shorten, share and track your links. With Bitlink, you can easily create short links that are easy to remember and share. You can also track the performance of your links with detailed analytics."}
          </p>
          <div className="flex gap-4">
            <Link
              className="p-3 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition"
              href="/shorten"
            >
              {"Try Now"}
            </Link>
            <Link
              className="p-3 rounded-xl bg-gray-800 text-white hover:bg-gray-900 transition"
              href="https://github.com/your-repo"
              target="_blank"
            >
              {"GitHub"}
            </Link>
          </div>
        </div>
        <div className="relative w-full h-[60vh] hidden md:block">
          <Image
            className="object-cover mix-blend-darken"
            src={`/vector.jpg`}
            alt="Vector image"
            fill
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 text-center dark:text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {"Why Choose Bitlink?"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <p className="text-purple-500 text-2xl mb-4">{"⚡ Fast & Easy"}</p>
              <p className="text-gray-600">
                {"Shorten your links in just a few clicks. Quick and hassle-free."}
              </p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <p className="text-purple-500 text-2xl mb-4">{"📊 Analytics"}</p>
              <p className="text-gray-600">
                {"Track your links’ performance with detailed statistics and insights."}
              </p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <p className="text-purple-500 text-2xl mb-4">{"🔒 Secure"}</p>
              <p className="text-gray-600">
                {"All links are safe, reliable, and secure for sharing anywhere."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-purple-50 w-full">
        <div className="max-w-7xl mx-auto px-6 text-center dark:text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {"How It Works"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <p className="text-purple-500 text-xl font-bold mb-2">
                {"1. Paste Your URL"}
              </p>
              <p className="text-gray-600">
                {"Copy the link you want to shorten and paste it into our tool."}
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <p className="text-purple-500 text-xl font-bold mb-2">
                {"2. Shorten Link"}
              </p>
              <p className="text-gray-600">
                {"Click the shorten button and get your custom short URL instantly."}
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <p className="text-purple-500 text-xl font-bold mb-2">
                {"3. Share & Track"}
              </p>
              <p className="text-gray-600">
                {"Share your link and monitor analytics to see how it performs."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 text-center dark:text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {"What Our Users Say"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-600 mb-4">
                {"Bitlink has made sharing URLs so much easier and tracking them is super convenient!"}
              </p>
              <p className="font-bold text-purple-500">{"- Sarah J."}</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-600 mb-4">
                {"The analytics feature is really helpful. I can see which links are performing best."}
              </p>
              <p className="font-bold text-purple-500">{"- Mike D."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-purple-500 w-full text-white">
        <div className="max-w-7xl mx-auto px-6 text-center dark:text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {"Ready to shorten your links?"}
          </h2>
          <p className="mb-6">
            {"Start using Bitlink today and make your links memorable and trackable."}
          </p>
          <Link
            className="p-3 rounded-xl bg-white text-purple-500 font-bold hover:bg-gray-100 transition"
            href="/shorten"
          >
            {"Get Started"}
          </Link>
        </div>
      </section>
    </>
  );
}
