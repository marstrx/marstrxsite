import React from 'react'

function FrontEnd() {
  return (
    <div className="sticky top-60">

        <h3 className="text-xl md:text-2xl font-semibold text-white relative inline-block pb-2 mb-6 
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 
              after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:transition-all 
              after:duration-300 hover:after:w-full rotate-5">
  Front End
</h3>
  <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center my-2 px-4">
    {/* HTML Icon */}
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 transform transition-transform duration-300 hover:scale-110">
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
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 transform transition-transform duration-300 hover:scale-110">
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
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 transform transition-transform duration-300 hover:scale-110">
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
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 transform transition-transform duration-300 hover:scale-110">
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
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 transform transition-transform duration-300 hover:scale-110">
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

    {/* ChartJs */}
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 transform transition-transform duration-300 hover:scale-110">
      <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 296" className="w-full h-full"><path fill="#36A2EB" d="M248.572 148.807c-41.32.811-32.713 26.969-61.833 33.584c-29.582 6.72-34.252-72.248-63.826-72.248c-29.579 0-36.13 76.709-73.166 129.37l-1.057 1.491l79.404 45.836l120.478-69.551z"/><path fill="#FFCE56" d="M248.572 146.426c-13.832-17.752-23.214-38.16-43.4-38.16c-35.72 0-26.32 58.271-65.798 58.271c-39.482 0-43.633-62.679-88.358-3.759c-14.252 18.774-25.723 39.707-34.734 59.515l111.812 64.549l120.478-69.551z"/><path fill="#FE6184" d="M7.613 170.564c13.555-37.538 19.405-67.94 45.283-67.94c39.478 0 48.875 110.908 82.718 99.625c33.838-11.278 30.077-71.432 82.719-71.432c10.02 0 20.25 6.138 30.241 16.067v70.405l-120.478 69.55L7.613 217.29z" opacity=".8"/><path fill="#E7E9ED" d="M128 295.56L0 221.673V73.89L128 0l128 73.89v147.78zM15.039 212.99L128 278.2l112.961-65.21V82.572L128 17.362L15.039 82.572z"/></svg>
    </div>

  </div>
      </div>
  )
}

export default FrontEnd