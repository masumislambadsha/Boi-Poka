import React from 'react';

const About = () => {
 return (
    <section className="about container mx-auto px-4 py-16">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="text-lg text-gray-700 mb-10">
          Books Vibe is a welcoming place to discover and track great reads across genres—pairing timeless classics with modern favorites in a clean, card‑based layout. {/* [web:11][web:13] */}
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p className="text-gray-700">
              Help readers quickly find books they’ll love by curating clear categories, concise snapshots, and community‑guided signals like ratings and tags. {/* [web:11][web:14] */}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">What we offer</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Curated shelves grouped by genre and theme for effortless browsing. {/* [web:11][web:19] */}</li>
              <li>Book cards with author, genre, and rating for fast decisions. {/* [web:7][web:18] */}</li>
              <li>Seasonal lists and highlights that keep the feed fresh. {/* [web:10][web:16] */}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">How books are featured</h3>
            <p className="text-gray-700">
              Selections blend literary staples with crowd‑pleasers, prioritizing readability, impact, and community interest. {/* [web:11][web:19] */}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Design principles</h3>
            <p className="text-gray-700">
              Clean, distraction‑free UI, bold cover art, and clear calls to action make scanning and selecting effortless. {/* [web:6][web:5] */}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p className="text-gray-700">
              Become a trusted homebase where a quick visit leads to a new favorite book, a growing shelf, and a lasting love of reading. {/* [web:11][web:14] */}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Values</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Clarity: Plain‑language summaries and consistent cards. {/* [web:13][web:6] */}</li>
              <li>Inclusivity: A broad mix of genres and voices. {/* [web:14][web:21] */}</li>
              <li>Community: Reader ratings and recommendations. {/* [web:11][web:16] */}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Get involved</h3>
            <p className="text-gray-700">
              Browse the lists, save favorites, and share feedback—each interaction helps refine future spotlights. {/* [web:11][web:13] */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
