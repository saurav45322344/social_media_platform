import {
  useQuery,
} from "@tanstack/react-query";

import {
  getAllPosts,
} from "../services/postService";

export default function usePosts() {

  return useQuery({

    queryKey: ["posts"],

    queryFn: getAllPosts,

    staleTime: 1000 * 60 * 5,
  });
}