import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto w-full min-h-screen py-4  to-gray-700 space-y-4 px-4">
      {/* Project Section */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Pharmacy Management System
        </h1>
        <p className="text-gray-200 leading-relaxed max-w-3xl">
          The <span className="font-semibold">Pharmacy Management System</span>{" "}
          is a modern web application designed to manage pharmacy operations
          digitally. It helps handle medicines, inventory, and sales efficiently
          while minimizing manual work and errors.
        </p>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          This project focuses on simplicity, performance, and responsiveness,
          making it suitable for real-world pharmacy usage.
        </p>
        <p className="text-slate-500">
          This system helps manage customer expenses, profit and loss, branch
          money, and medicine stock in a simple way.
        </p>
      </section>

      {/* Developer Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        {/* Developer Image */}
        <div className="w-44 h-44 relative rounded-full overflow-hidden border">
          <Link href="https://msabir.netlify.app" target="_blank">
            <Image
              src="/mansoor.jpg"
              alt="Developer Photo"
              fill
              className="object-cover hover:scale-105 duration-600"
            />
          </Link>
        </div>

        {/* Developer Info */}
        <div className="text-center md:text-left space-y-3  max-w-xl">
          <h2
            className="
     font-bold text-2xl text-slate-500
    leading-relaxed
    animate-typing 
  "
          >
            Mansoor Sabir
          </h2>

          {/*  */}
          <p
            className="
     
    bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400
    bg-clip-text text-transparent
    leading-relaxed
    animate-gradient text-xl font-semibold
  "
          >
            Full-Stack Web Developer
          </p>

          <p className="text-gray-300">
            Learned at <span className="font-medium">Jamal Tech</span>
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            This Pharmacy Management System is part of my portfolio and reflects
            my learning journey and ability to build real-world applications
            using modern web technologies.
          </p>
          <p className="hover:text-blue-500">
            Website :
            <Link href="https://msabir.netlify.app" target="_blank">
              msabir.netlify.app
            </Link>
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "Tailwind CSS",
            "Responsive Design",
            "Modern Forms",
            "Clean UI",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm rounded-full  bg-gray-200 hover:bg-slate-700 hover:text-slate-200 text-gray-700 hover:scale-105 duration-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <footer className=" border-t py-4">
          <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Mansoor Sabir
            </p>
            <p className="text-sm text-gray-600">
              Learned at <span className="font-medium">Jamal Tech</span>
            </p>
            <a
              href="https://msabir.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              msabir.netlify.app
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
