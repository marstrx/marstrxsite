import React from "react";
// import logo from "../../assets/Images/marstrx.png";

function About() {
  return (
    <>
      <div className="bg-gray-700 min-h-screen pl-5 pr-5">
        <div className="text-white flex items-center flex-col gap-5">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold pt-4 md:pt-6 text-center md:text-left">
            About me
          </h1>
        </div>

        {/*  about me paraghraph*/}
        <div className="flex justify-center items-center border-2 rounded rotate-2 shadow-lg p-6 m-6 bg-gray-800 text-white gap-4 flex-col md:flex-row">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </div>
          <p>
            I work mainly with JavaScript, React, NodeJs to create real
            solutions that deliver value and user satisfaction. I'm constantly
            improving my skills through personal projects, open-source
            contributions, and continuous learning. My goal is to grow as a
            software engineer and collaborate on impactful projects with teams
            who appreciate quality code, strong problem-solving, and creativity.
          </p>
        </div>

        {/* skills */}
        <div className="flex flex-col">
  <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center mb-6 md:mb-8">Skills</h2>

  <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center my-8 md:my-10 lg:my-12 px-4">
    {/* HTML Icon */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 transform transition-transform duration-300 hover:scale-110">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="w-full h-full"
      >
        <g fill="none">
          <rect width="256" height="256" fill="#E14E1D" rx="60" />
          <path
            fill="#fff"
            d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38H48Z"
          />
          <path
            fill="#EBEBEB"
            d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128V38Zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014v-33.227Z"
          />
        </g>
      </svg>
    </div>

    {/* CSS Icon */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 transform transition-transform duration-300 hover:scale-110">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="w-full h-full"
      >
        <g fill="none">
          <rect width="256" height="256" fill="#0277BD" rx="60" />
          <path
            fill="#EBEBEB"
            d="m53.753 102.651l2.862 31.942h71.481v-31.942H53.753ZM128.095 38H48l2.904 31.942h77.191V38Zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164l.147-.041Z"
          />
          <path
            fill="#fff"
            d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942h39.333Z"
          />
        </g>
      </svg>
    </div>

    {/* JavaScript Icon */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 transform transition-transform duration-300 hover:scale-110">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="w-full h-full"
      >
        <g fill="none">
          <rect width="256" height="256" fill="#F0DB4F" rx="60" />
          <path
            fill="#323330"
            d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
          />
        </g>
      </svg>
    </div>

    {/* React Icon */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 transform transition-transform duration-300 hover:scale-110">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="w-full h-full"
      >
        <g fill="none">
          <rect width="256" height="256" fill="#242938" rx="60" />
          <path
            fill="#00D8FF"
            d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656c0-10.303-8.352-18.656-18.656-18.656c-10.303 0-18.656 8.353-18.656 18.656c0 10.303 8.353 18.656 18.656 18.656Z"
          />
          <path
            stroke="#00D8FF"
            strokeWidth="8.911"
            d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812h.004Z"
            clipRule="evenodd"
          />
          <path
            stroke="#00D8FF"
            strokeWidth="8.911"
            d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723h.004Z"
            clipRule="evenodd"
          />
          <path
            stroke="#00D8FF"
            strokeWidth="8.911"
            d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    </div>

    {/* Tailwind CSS Icon */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 transform transition-transform duration-300 hover:scale-110">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="w-full h-full"
      >
        <g fill="none">
          <rect width="256" height="256" fill="#242938" rx="60" />
          <path
            fill="url(#skillIconsTailwindcssDark0)"
            fillRule="evenodd"
            d="m83 110c6-24 21.001-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5C102.499 93.5 92 98 83 110Zm-45 54c6-23.999 21-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5c-12-3.001-22.5 1.499-31.5 13.5Z"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="skillIconsTailwindcssDark0"
              x1="86.5"
              x2="163.5"
              y1="74"
              y2="185.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#32B1C1" />
              <stop offset="1" stopColor="#14C6B7" />
            </linearGradient>
          </defs>
        </g>
      </svg>
    </div>

  
    {/* MongoDb js icon */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 transform transition-transform duration-300 hover:scale-110">
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" className="w-full h-full"><g fill="none"><rect width="256" height="256" fill="#023430" rx="60"/><path fill="#10AA50" d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"/><path fill="#B8C4C2" d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397Z"/><path fill="#12924F" d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684Z"/></g></svg>
    </div>
    
  </div>
</div>
      </div>
    </>
  );
}

export default About;
