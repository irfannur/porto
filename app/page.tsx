import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover' style={{ backgroundImage: "url(/main-bg.webp)" }}>
        <div className="pl-10 pr-10 md:pl-20 md:pr-20 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Irfan Nur Fahrudin{" "}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-gray-200">
          Hi! I'm a Full Stack Web Developer based on Yogyakarta, Indonesia. <br/>I have more than 5 years
          experience on developing web-based application. I'm ready to turn your ideas to an easy-to-use and
          practical app for the users.
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5">
          <Link 
              href="/my-skills" 
              className="rounded-[20px] group relative bg-transparent hover:bg-blue-400 border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Skills & Tech
            </Link>
            <Link 
              href="/my-projects" 
              className="rounded-[20px] group relative bg-transparent hover:bg-blue-400 border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My project
            </Link>
            <Link 
              href="/contact-me" 
              className="rounded-[20px] group relative bg-transparent hover:bg-blue-400 border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/my-skill" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Learn More
        </Link>
        <Link href="/my-project" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          
          My project
        </Link>
        <Link href="/contact-me" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          
          Contact me
        </Link>
      </div> */}

      <div className="hidden lg:block absolute bottom-0 right-0 z-[10]">
        <Image 
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image 
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
      <Image 
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image 
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-0 left-0 z-[10]"
        />
    </main>
  );
}
