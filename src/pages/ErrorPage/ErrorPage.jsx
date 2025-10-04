import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
     <main className="grid min-h-screen place-items-center bg-gray-50 px-6 py-24">
      <div className="text-center">
        <p className="text-base font-semibold text-green-600">404</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1]">
          Page not found
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          The page being requested doesn’t exist or was moved.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-white font-semibold shadow-md transition hover:opacity-90"
          >
            Go home
          </Link>

          <Link
            to="/search"
            className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-100"
          >
            Search books
          </Link>
        </div>

        <div className="mt-16">
          <pre className="inline-block rounded-xl bg-gray-900 text-gray-100 p-4 text-left text-sm">
{`Need help? Email support@site.test`}
          </pre>
        </div>
      </div>
    </main>
    </div>
  );
};

export default ErrorPage;
