// import Navbar from "../components/layout/Navbar";
// function CreatePostPage() {

//   return (
//     <div className="min-h-screen bg-gray-100">

//       <Navbar />

//       <div className="max-w-2xl mx-auto py-10">

//         <div className="bg-white p-8 rounded-2xl shadow">

//           <h1 className="text-3xl font-bold mb-6">
//             Create Post
//           </h1>

//           <input
//             type="text"
//             placeholder="Post title"
//             className="w-full border p-3 rounded-xl mb-4"
//           />

//           <textarea
//             placeholder="Write your content..."
//             rows="6"
//             className="w-full border p-3 rounded-xl mb-4"
//           />

//           <button
//             className="bg-orange-500 text-white px-6 py-3 rounded-xl"
//           >
//             Create Post
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default CreatePostPage;

import { useState } from "react";

import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";

import { uploadImage }
from "../services/uploadService";

import api from "../services/api";

export default function CreatePostPage() {

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const [community, setCommunity] =
    useState("");

  const [image, setImage] =
    useState(null);

  const [imagePreview, setImagePreview] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setImagePreview(
      URL.createObjectURL(file)
    );
  };

  const handleCreatePost =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        let uploadedImageUrl = "";

        /*
          STEP 1
          UPLOAD IMAGE
        */

        if (image) {

          const uploadedImage =
            await uploadImage(image);

        //   uploadedImageUrl =
        //     uploadedImage.fileDownloadUri;
        uploadedImageUrl =
  uploadedImage.data.fileDownloadUri;
        }

        /*
          STEP 2
          CREATE POST
        */

        const postData = {
          title,
          content,
          communityName: community,
          imageUrl: uploadedImageUrl,
        };

        await api.post(
          "/posts",
          postData
        );

        toast.success(
          "Post created successfully 🚀"
        );

        setTitle("");
        setContent("");
        setCommunity("");
        setImage(null);
        setImagePreview("");

      } catch (error) {

        toast.error(
          error.response?.data?.message
          || "Failed to create post"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div
        className="
        max-w-3xl
        mx-auto
        py-10
        px-4
      "
      >

        <div
          className="
          bg-white
          rounded-3xl
          shadow-sm
          border
          p-8
        "
        >

          <h1
            className="
            text-4xl
            font-bold
            text-gray-800
            mb-2
          "
          >
            Create Post 🚀
          </h1>

          <p className="text-gray-500 mb-8">
            Share your ideas with the community
          </p>

          <form
            onSubmit={handleCreatePost}
            className="space-y-6"
          >

            {/* TITLE */}

            <div>

              <label
                className="
                block
                text-sm
                font-semibold
                mb-2
              "
              >
                Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                placeholder="Post title..."
                className="
                w-full
                border
                rounded-xl
                p-4
                focus:ring-2
                focus:ring-orange-500
                outline-none
              "
                required
              />

            </div>

            {/* COMMUNITY */}

            <div>

              <label
                className="
                block
                text-sm
                font-semibold
                mb-2
              "
              >
                Community
              </label>

              <input
                type="text"
                value={community}
                onChange={(e) =>
                  setCommunity(e.target.value)
                }
                placeholder="reactjs"
                className="
                w-full
                border
                rounded-xl
                p-4
                focus:ring-2
                focus:ring-orange-500
                outline-none
              "
                required
              />

            </div>

            {/* CONTENT */}

            <div>

              <label
                className="
                block
                text-sm
                font-semibold
                mb-2
              "
              >
                Content
              </label>

              <textarea
                rows="6"
                value={content}
                onChange={(e) =>
                  setContent(e.target.value)
                }
                placeholder="Write your post..."
                className="
                w-full
                border
                rounded-xl
                p-4
                focus:ring-2
                focus:ring-orange-500
                outline-none
              "
                required
              />

            </div>

            {/* IMAGE */}

            <div>

              <label
                className="
                block
                text-sm
                font-semibold
                mb-2
              "
              >
                Upload Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="
                w-full
                border
                rounded-xl
                p-3
              "
              />

            </div>

            {/* PREVIEW */}

            {
              imagePreview && (

                <img
                  src={imagePreview}
                  alt="preview"
                  className="
                  w-full
                  max-h-96
                  object-cover
                  rounded-2xl
                  border
                "
                />

              )
            }

            {/* BUTTON */}

            <button
              disabled={loading}
              className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-4
              rounded-xl
              font-semibold
              transition
            "
            >

              {
                loading
                  ? "Creating Post..."
                  : "Create Post"
              }

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}