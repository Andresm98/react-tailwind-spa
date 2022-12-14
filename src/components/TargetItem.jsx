export const TargetItem = ({ country }) => {
  return (
    <>
      <div className="relative flex min-h-screen flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
        <div className="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
          <div>
            <span className="text-purple-800 text-sm">Engineering</span>
            <h3 className="font-bold text-xl mt-px hover:cursor-pointer">
              Senior Full Stack Backend Engineer
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                Full-time
              </span>
              <span className="text-slate-600 text-sm flex gap-1 items-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>{" "}
                {country}
              </span>
            </div>
          </div>
          <div>
            <button className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
              Set Values Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
