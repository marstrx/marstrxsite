import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  DoughnutController
);

const Charts = () => {
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      // Fetch my github data
      const userResponse = await fetch(
        `https://api.github.com/users/marstrx`
      );
      const userData = await userResponse.json();

      // Fetch repositories
      const reposResponse = await fetch(
        `https://api.github.com/users/marstrx/repos?per_page=100`
      );
      const reposData = await reposResponse.json();

      setUserData(userData);
      setReposData(reposData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-white">Loading GitHub data...</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-red-500">Error loading GitHub data</div>
      </div>
    );
  }

  // data
  const languages = {};
  const starData = reposData
    .map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count,
    }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 8);

  reposData.forEach((repo) => {
    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1;
    }
  });

  // Chart 1: Languages Used
  const languageChartData = {
    labels: Object.keys(languages),
    datasets: [
      {
        data: Object.values(languages),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#C9CBCF",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
        ],
        borderWidth: 2,
        borderColor: "#fff",
        hoverOffset: 4,
      },
    ],
  };

  // Chart 2: Top Starred Repositories
  const starsChartData = {
    labels: starData.map((repo) => repo.name),
    datasets: [
      {
        label: "Stars",
        data: starData.map((repo) => repo.stars),
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  // Chart 3: Repository Stats
  const repoStatsData = {
    labels: reposData.slice(0, 8).map((repo) => repo.name),
    datasets: [
      {
        label: "Forks",
        data: reposData.slice(0, 8).map((repo) => repo.forks_count),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Watchers",
        data: reposData.slice(0, 8).map((repo) => repo.watchers_count),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Chart 4: Repository Creation Timeline
  const creationTimelineData = {
    labels: Object.keys(
      reposData.reduce((acc, repo) => {
        const year = new Date(repo.created_at).getFullYear();
        acc[year] = (acc[year] || 0) + 1;
        return acc;
      }, {})
    ).sort(),
    datasets: [
      {
        label: "Repositories Created",
        data: Object.values(
          reposData.reduce((acc, repo) => {
            const year = new Date(repo.created_at).getFullYear();
            acc[year] = (acc[year] || 0) + 1;
            return acc;
          }, {})
        ),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "GitHub Statistics",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-700 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center mb-6 md:mb-8">
            My GitHub Stats
          </h2>
          <div className=" p-6 inline-block">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <span className=" text-white px-3 py-1 rounded-full">
                  Followers: {userData.followers}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className=" text-white px-3 py-1 rounded-full">
                  Following: {userData.following}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className=" text-white px-3 py-1 rounded-full">
                  Repos: {userData.public_repos}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Language Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl shadow-xl p-6 border border-white">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Languages Distribution
            </h3>
            <div className="h-80">
              <Doughnut
                data={languageChartData}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    legend: {
                      position: "top",
                      labels: {
                        color: "#FFFFFF",
                      },
                    },

                    title: {
                      color: "#FFFFFF",
                      display: true,
                      text: "Programming Languages I Used",
                      font: { size: 16 },
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Top Starred Repos */}
          <div className="rounded-2xl shadow-xl p-6 border border-white">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Most Starred Repositories
            </h3>
            <div className="h-80">
              <Bar
                data={starsChartData}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    legend: {
                      position: "top",
                      labels: {
                        color: "#FFFFFF",
                      },
                    },
                    title: {
                      color: "#FFFFFF",
                      display: true,
                      text: "Top Starred Repositories",
                      font: { size: 16 },
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: "rgba(0, 0, 0, 0.1)",
                      },
                      ticks: {
                        color: "#FFFFFF",
                      },
                    },
                    x: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        color: "#FFFFFF",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Repository Stats */}
          <div className="rounded-2xl shadow-xl p-6 border border-white">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Repository Activity
            </h3>
            <div className="h-80">
              <Line
                data={repoStatsData}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    legend: {
                      position: "top",
                      labels: {
                        color: "#FFFFFF",
                      },
                    },
                    title: {
                      display: true,
                      text: "Forks vs Watchers",
                      font: { size: 16 },
                      color: "#ffffff",
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: "rgba(0, 0, 0, 0.1)",
                      },
                      ticks: {
                        color: "#FFFFFF",
                      },
                    },
                    x: {
                      grid: {
                        color: "rgba(0, 0, 0, 0.1)",
                      },
                      ticks: {
                        color: "#FFFFFF",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Creation Timeline */}
          <div className="rounded-2xl shadow-xl p-6 border border-white">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Repository Creation Timeline
            </h3>
            <div className="h-80">
              <Line
                data={creationTimelineData}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    legend: {
                      position: "top",
                      labels: {
                        color: "#FFFFFF",
                      },
                    },
                    title: {
                      display: true,
                      text: "Repositories Created by Year",
                      font: { size: 16 },
                      color: "#ffffff",
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: "rgba(0, 0, 0, 0.1)",
                      },
                      ticks: {
                        stepSize: 1,
                        color: "#ffffff",
                      },
                    },
                    x: {
                      grid: {
                        color: "rgba(0, 0, 0, 0.1)",
                      },
                      ticks: {
                        color: "#FFFFFF",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Charts;
