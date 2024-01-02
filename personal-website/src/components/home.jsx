import React, { useRef } from "react";
import CTLogo from "../assets/CTlogo.png";
import resumePDF from "../assets/resume.pdf";
import ProUMLDashboardPage from "../assets/ProUMLDashboardPage.png";
import ACUDashboardPage from "../assets/ACUDashboardPage.png";
import ProfilePicture from "../assets/PFP2.png";
import WebsitePicture from "../assets/WebsitePicture.png";
import { Form } from "../components/form";

import {
  ReactIcon,
  TailwindIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  CPPIcon,
  HTMLIcon,
  CSSIcon,
  SQLIcon,
  PythonIcon,
  JavaIcon,
  GitIcon,
  BashIcon,
  GoIcon,
  AWSIcon,
  NodeJSIcon,
} from "./icons";
import { Link, Element } from "react-scroll";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="absolute inset-x-0 top-0 z-50 p-5 bg-gray-800 text-white py-2 text-center">
        <div className="container">
          <nav className="flex items-center lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="-m-1.5 p-1.5"
              >
                <div className="flex -space-x-1 overflow-hidden">
                  <img
                    className="inline-block rounded-full transform transition-transform duration-300 hover:scale-105 cursor-pointer p-0.5 mx-auto"
                    src={CTLogo}
                    alt="CT Logo"
                    width="50"
                    height="50"
                  />
                </div>
              </Link>
            </div>
            <div className="flex lg:flex ml-6 gap-x-12 lg:gap-x-12 mx-auto">
              <Link
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg font-semibold leading-6 text-white transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                About
              </Link>
              <Link
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg font-semibold leading-6 text-white transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg font-semibold leading-6 text-white transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="flex-grow relative isolate px-6 pt-14 mb-32 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="flex items-center justify-center pt-20 pb-56 flex-col">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl p-5">
            Corey Taylor
          </h1>
          <p className="mt-2 text-2xl leading-8 text-gray-600 text-center">
            B.S. Software Engineering 2023
          </p>
          <p className="mt-2 text-2xl leading-8 text-gray-600 text-center">
            M.S. Computer Engineering Dec. 2024
          </p>
          <img
            className="inline-block rounded-full overflow-hidden m-16 shadow-2xl ring-black ring-opacity-10"
            src={ProfilePicture}
            alt="Profile Picture"
            width="270"
            height="270"
          />
        </div>
        <hr className="my-8 border-t border-gray-300" />
        <div className="mx-auto max-w-2xl pb-32 sm:py-48 lg:py-36">
          <div className="text-center">
            <div id="about-section" ref={aboutRef}>
              <div className="text-4xl">About me</div>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Graduated from California State San Marcos in May 2023 with a B.S.
              in Software Engineering. Currently enrolled in a Master's program
              in Computer Engineering at San Diego State University. Possesses
              experience in developing web applications and has acquired
              proficiency in various programming languages, frameworks,
              technologies, and tools.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={resumePDF}
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 hover:scale-105"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="pb-24 sm:pb-16 container bg-gray-100 pt-10 rounded-2xl shadow-2xl ring-black ring-opacity-10">
          <div className="mx-auto justify-between px-6 lg:px-8">
            <h2
              id="about-section"
              ref={aboutRef}
              className="text-center text-4xl font-semibold leading-8 text-gray-900"
            >
              My Tech Stack
            </h2>
            <div className="mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
              <ReactIcon />
              <TailwindIcon />
              <JavaScriptIcon />
              <TypeScriptIcon />
              <CPPIcon />
            </div>
          </div>
          <div className="mx-auto justify-between px-6 lg:px-8">
            <div className="mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
              <HTMLIcon />
              <CSSIcon />
              <SQLIcon />
              <PythonIcon />
              <JavaIcon />
            </div>
          </div>
          <div className="mx-auto justify-between pt-8 px-6 lg:px-8">
            <div className="mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
              <GitIcon />
              <BashIcon />
              <GoIcon />
              <AWSIcon />
              <NodeJSIcon />
            </div>
          </div>
        </div>
        <hr className="my-8 border-t border-gray-300 mt-64" />

        {/* Projects */}
        <Element>
          <div className=" pb-8 sm:pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2
                  id="projects-section"
                  ref={projectsRef}
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-12"
                >
                  My Projects
                </h2>
              </div>
              {/* Portfolio */}
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-2xl ring-black ring-opacity-10 bg-gray-100">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    Corey Taylor's Website
                  </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    This website was created using ReactJS, Vite, and
                    TailwindCSS. It is a single-page application that is hosted
                    on Github Pages and uses a custom domain name.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                      Tools used in this project:
                    </h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      ReactJS
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Vite
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      TailwindCSS
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      EmailJS
                    </li>
                  </ul>
                </div>
                <div className="-mt-2 py-8 mx-auto lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 text-center lg:mr-10">
                  <img
                    className="inline-block mt-8 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    src={WebsitePicture}
                    alt="Website Picture"
                  />
                  <a
                    href="https://coreyctaylor.com/" // Replace with your desired external link
                    rel="noopener noreferrer" // Recommended for security when using target="_blank"
                    className="mt-5 mb-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 hover:scale-105"
                  >
                    View this project
                  </a>
                </div>
              </div>
              {/* ACU */}
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-2xl ring-black ring-opacity-10 bg-gray-100">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    Aztec Credit Union
                  </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    ACU is a banking website that allows users to create an
                    account, login, and perform banking transactions. It is a
                    full-stack web application that uses a PostgresQL database
                    to store user information and transactions. It also uses a
                    REST API to communicate between the front-end and back-end.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                      Tools used in this project:
                    </h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      ReactJS
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Django
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      TailwindCSS
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      PostgresQL
                    </li>
                  </ul>
                </div>
                <div className="-mt-2 py-8 mx-auto lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 text-center lg:mr-10">
                  <img
                    className="inline-block mt-8 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    src={ACUDashboardPage}
                    alt="ACU Dashboard Page"
                  />
                  <a
                    href="https://github.com/junioryono/Bank-Website" // Replace with your desired external link
                    target="_blank" // Open the link in a new tab
                    rel="noopener noreferrer" // Recommended for security when using target="_blank"
                    className="mt-5 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 hover:scale-105"
                  >
                    View this project
                  </a>
                </div>
              </div>
              {/* ProUML */}
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-2xl ring-black ring-opacity-10 bg-gray-100">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    ProUML
                  </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    ProUML is an intuitive UML diagramming tool for teams and
                    individuals looking to create and edit UML diagrams. It's
                    free to use and you can create and save multiple diagrams.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                      Tools used in this project:
                    </h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      ReactJS
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      TypeScript
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      TailwindCSS
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      SQL
                    </li>
                  </ul>
                </div>
                <div className="-mt-2 py-8 mx-auto lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 text-center lg:mr-10">
                  <img
                    className="inline-block mt-8 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    src={ProUMLDashboardPage}
                    alt="ProUML Dashboard Page"
                  />
                  <a
                    href="https://prouml.com/" // Replace with your desired external link
                    target="_blank" // Open the link in a new tab
                    rel="noopener noreferrer" // Recommended for security when using target="_blank"
                    className="mt-5 mb-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 hover:scale-105"
                  >
                    View this project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-8 border-t border-gray-300 mt-64" />
        </Element>
        <Element id="contact-section" ref={contactRef}>
          <div className="px-6 p-12 sm:pt-44 sm:pb-12 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contact me!
              </h2>
            </div>
            <Form />
          </div>
        </Element>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
      <div className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2023 Corey Taylor. All rights reserved.</p>
      </div>
    </div>
  );
}
