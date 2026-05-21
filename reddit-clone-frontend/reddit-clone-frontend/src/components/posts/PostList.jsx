import PostCard from "./PostCard";

export default function PostList({
  posts,
}) {

  return (
    <div className="space-y-5">

      {
        posts?.map((post) => (

          <PostCard
            key={post.id}
            post={post}
          />

        ))
      }

    </div>
  );
}