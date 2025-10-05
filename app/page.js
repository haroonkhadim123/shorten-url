"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
    <section className="grid grid-cols-2 h-[50vh] bg-purple-100 w-full">
      <div className="h-[100%] items-center justify-center flex flex-col gap-6 p-10">
        <p className="font-bold text-3xl">Best URL in the Markete</p>
        <p className="text-gray-500 px-20">Bitlink is a free URL shortener that allows you to shorten, share and track your links. With Bitlink, you can easily create short links that are easy to remember and share. You can also track the performance of your links with detailed analytics.</p>
        <div className="flex gap-2">
            <Link className='p-2.5 rounded-xl bg-purple-500 text-white ' href="/shorten">Try Now</Link>
                <Link className='p-2.5 rounded-xl bg-purple-500 text-white' href="/shorten">GitHub</Link>
        </div>
    

      </div>
      <div className="relative">
        <Image className="mix-blend-darken" src={`/vector.jpg`} alt="an vector image" fill={true}></Image>

      </div>
    </section>
 
   </>

  );
}
