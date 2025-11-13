import React from "react";

function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 432 416"
          className="w-7 h-7"
        >
          <path
            fill="currentColor"
            d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
          />
        </svg>
      ),
      url: "https://github.com/marstrx",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 432 432"
          className="w-7 h-7"
        >
          <path
            fill="currentColor"
            d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"
          />
        </svg>
      ),
      url: "https://www.linkedin.com/in/marstrx/",
    },
    {
      name: "X",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m3 21l7.5-7.5m3-3L21 3M8 3H3l13 18h5Z"
          />
        </svg>
      ),
      url: "https://x.com/marstrx0",
    },
    {
      name: "LeetCode",
      icon: (
        <svg viewBox="0 0 128 128" className="w-7 h-7">
          <path
            fill="#b3b1b0"
            d="M117.555 76.558c0-3.957-3.008-7.178-6.72-7.178H57.159c-3.712 0-6.72 3.221-6.72 7.178c0 3.958 3.002 7.18 6.72 7.18h53.676c3.712.005 6.72-3.217 6.72-7.18"
          />
          <path
            fill="#e7a41f"
            d="m18.79 96.996l23.003 23.26c5.19 5.221 12.363 7.744 20.283 7.744s15.094-2.73 20.294-7.968l13.803-14.065c2.72-2.741 2.624-7.28-.208-10.133c-2.832-2.854-7.333-2.95-10.048-.208L71.645 109.53c-2.465 2.49-5.878 3.53-9.649 3.53s-7.179-1.04-9.653-3.53L29.419 86.26c-2.47-2.49-3.712-6.133-3.712-9.936s1.243-7.238 3.712-9.728l22.854-23.361c2.47-2.49 5.952-3.44 9.718-3.44s7.179 1.04 9.648 3.53l14.273 13.9c2.72 2.746 7.221 2.65 10.053-.203c2.832-2.859 2.928-7.398.208-10.14L82.37 32.825a26.64 26.64 0 0 0-12.758-7.094l-.18-.037l13.05-13.35c2.73-2.741 2.635-7.285-.197-10.139S74.945-.74 72.22 2.002L18.79 55.87c-5.19 5.237-7.905 12.464-7.905 20.454S13.6 91.77 18.79 96.996"
          />
          <path
            fill="#070706"
            d="M43.5 121.674a11.3 11.3 0 0 1-2.528-1.925c-7.078-7.11-14.187-14.187-21.249-21.318C9.115 87.721 7.445 72.1 15.531 59.39a32 32 0 0 1 4.475-5.355L71.33 2.605c3.333-3.34 7.99-3.478 11.088-.358c2.987 3.003 2.81 7.76-.416 11.019c-4.101 4.139-8.208 8.267-12.315 12.4c-.219.651-.747 1.067-1.2 1.531c-4.603 4.672-9.334 9.222-13.872 13.963c-.592.619-1.398.992-1.984 1.627c-7.59 7.59-15.27 15.094-22.753 22.784c-6.054 6.225-5.85 15.67.363 22.012c6.976 7.125 14.075 14.134 21.126 21.195c.357.357.725.704 1.088 1.056c2.496 1.616 2.528 6.667.976 8.912c-1.712 2.48-3.947 4-7.11 3.883c-1.061-.032-1.936-.458-2.821-.955"
          />
        </svg>
      ),
      url: "https://leetcode.com/marstrx",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-4 px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110"
              aria-label={`Visit my ${link.name} profile`}
            >
              <div className="bg-gray-700 p-4 rounded-xl group-hover:bg-gray-600 transition-colors duration-300 shadow-lg">
                {link.icon}
              </div>
              <span className="mt-2 text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-2 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Marstrx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
