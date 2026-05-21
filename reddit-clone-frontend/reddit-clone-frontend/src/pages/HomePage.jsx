// import { Link } from "react-router-dom";

// export default function HomePage() {

//   return (
//     <div className="min-h-screen">

//       {/* HERO */}

//       <section
//         className="
//         py-24
//         px-6
//         text-center
//         bg-gradient-to-r
//         from-orange-500
//         to-red-500
//         text-white
//       "
//       >

//         <h1
//           className="
//           text-6xl
//           font-bold
//           max-w-4xl
//           mx-auto
//           leading-tight
//         "
//         >
//           Build Developer Communities 🚀
//         </h1>

//         <p
//           className="
//           mt-6
//           text-xl
//           max-w-2xl
//           mx-auto
//         "
//         >
//           Share ideas, create communities,
//           discuss technology, and connect
//           with developers worldwide.
//         </p>

//         <div
//           className="
//           flex
//           justify-center
//           gap-4
//           mt-10
//         "
//         >

//           <Link
//             to="/communities"
//             className="
//             bg-white
//             text-orange-600
//             px-8
//             py-4
//             rounded-xl
//             font-bold
//           "
//           >
//             Explore Communities
//           </Link>

//           <Link
//             to="/signup"
//             className="
//             bg-black
//             text-white
//             px-8
//             py-4
//             rounded-xl
//             font-bold
//           "
//           >
//             Get Started
//           </Link>

//         </div>

//       </section>

//       {/* FEATURES */}

//       <section
//         className="
//         max-w-7xl
//         mx-auto
//         px-6
//         py-16
//         grid
//         md:grid-cols-3
//         gap-8
//       "
//       >

//         <div
//           className="
//           bg-white
//           p-8
//           rounded-2xl
//           shadow-sm
//           border
//         "
//         >
//           <h2 className="text-3xl mb-4">
//             🌍
//           </h2>

//           <h3 className="text-xl font-bold">
//             Communities
//           </h3>

//           <p className="mt-3 text-gray-600">
//             Create and join communities
//             around your interests.
//           </p>
//         </div>

//         <div
//           className="
//           bg-white
//           p-8
//           rounded-2xl
//           shadow-sm
//           border
//         "
//         >
//           <h2 className="text-3xl mb-4">
//             📝
//           </h2>

//           <h3 className="text-xl font-bold">
//             Posts
//           </h3>

//           <p className="mt-3 text-gray-600">
//             Share ideas, images,
//             and discussions.
//           </p>
//         </div>

//         <div
//           className="
//           bg-white
//           p-8
//           rounded-2xl
//           shadow-sm
//           border
//         "
//         >
//           <h2 className="text-3xl mb-4">
//             🔥
//           </h2>

//           <h3 className="text-xl font-bold">
//             Voting System
//           </h3>

//           <p className="mt-3 text-gray-600">
//             Upvote quality content
//             and discover trending posts.
//           </p>
//         </div>

//       </section>

//     </div>
//   );
// }

import {
  useEffect,
  useState,
} from "react";

import {
  Sparkles,
  Flame,
  TrendingUp,
  Users,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import PostCard
from "../components/posts/PostCard";

import { getAllPosts }
from "../services/postService";

export default function HomePage() {

  const [posts, setPosts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {

    try {

      const response =
        await getAllPosts();

      setPosts(
        response.data || response
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <MainLayout>

      {/* HERO */}

      <div
        className="
        relative
        overflow-hidden
        rounded-[32px]
        p-10
        mb-8
        bg-gradient-to-br
        from-orange-500
        via-pink-500
        to-purple-600
        text-white
        shadow-2xl
      "
      >

        <div
          className="
          absolute
          top-0
          right-0
          w-72
          h-72
          bg-white/10
          rounded-full
          blur-3xl
        "
        />

        <div className="relative z-10">

          <div
            className="
            flex
            items-center
            gap-2
            mb-4
          "
          >
            <Sparkles />

            <span className="font-semibold">
              NEXT GEN COMMUNITY PLATFORM
            </span>

          </div>

          <h1
            className="
            text-6xl
            font-black
            leading-tight
            max-w-4xl
          "
          >
            Build Communities.
            Share Ideas.
            Grow Together 🚀
          </h1>

          <p
            className="
            mt-6
            text-lg
            text-white/90
            max-w-2xl
          "
          >
            DevHub helps developers connect,
            discuss technology, share knowledge,
            and build amazing communities.
          </p>

          <div
            className="
            flex
            gap-4
            mt-8
          "
          >

            <button
              className="
              bg-white
              text-black
              px-7
              py-4
              rounded-2xl
              font-bold
              hover:scale-105
              transition
            "
            >
              Explore Feed
            </button>

            <button
              className="
              border
              border-white/30
              backdrop-blur-lg
              px-7
              py-4
              rounded-2xl
              font-bold
              hover:bg-white/10
              transition
            "
            >
              Create Community
            </button>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        mb-8
      "
      >

        <div
          className="
          bg-white
          rounded-3xl
          p-6
          shadow-sm
          border
        "
        >

          <div className="flex items-center gap-3">

            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-orange-100
              flex
              items-center
              justify-center
            "
            >
              <Users className="text-orange-500" />
            </div>

            <div>

              <h2 className="text-3xl font-black">
                12K+
              </h2>

              <p className="text-gray-500">
                Active Developers
              </p>

            </div>

          </div>

        </div>

        <div
          className="
          bg-white
          rounded-3xl
          p-6
          shadow-sm
          border
        "
        >

          <div className="flex items-center gap-3">

            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-pink-100
              flex
              items-center
              justify-center
            "
            >
              <Flame className="text-pink-500" />
            </div>

            <div>

              <h2 className="text-3xl font-black">
                1.5M+
              </h2>

              <p className="text-gray-500">
                Posts Shared
              </p>

            </div>

          </div>

        </div>

        <div
          className="
          bg-white
          rounded-3xl
          p-6
          shadow-sm
          border
        "
        >

          <div className="flex items-center gap-3">

            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-purple-100
              flex
              items-center
              justify-center
            "
            >
              <TrendingUp className="text-purple-500" />
            </div>

            <div>

              <h2 className="text-3xl font-black">
                850+
              </h2>

              <p className="text-gray-500">
                Trending Communities
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* FEED */}

      <div className="space-y-6">

        {
          loading ? (

            <>
              <div
                className="
                h-96
                bg-white
                rounded-3xl
                animate-pulse
              "
              />

              <div
                className="
                h-96
                bg-white
                rounded-3xl
                animate-pulse
              "
              />
            </>

          ) : posts.length > 0 ? (

            posts.map((post) => (

              <PostCard
                key={post.id}
                post={post}
              />

            ))

          ) : (

            <div
              className="
              bg-white
              rounded-3xl
              p-16
              text-center
              border
              shadow-sm
            "
            >

              <h2
                className="
                text-4xl
                font-black
                text-gray-800
              "
              >
                No posts yet 🚀
              </h2>

              <p
                className="
                text-gray-500
                mt-4
                text-lg
              "
              >
                Be the first developer
                to share something amazing.
              </p>

            </div>

          )
        }

      </div>

    </MainLayout>
  );
}