package com.platform.redditclone.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.platform.redditclone.dto.ApiResponse;
import com.platform.redditclone.dto.PostRequest;
import com.platform.redditclone.dto.PostResponse;
import com.platform.redditclone.service.PostService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/posts")
public class PostController {

	private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<PostResponse>> create(
            @Valid @RequestBody PostRequest request
    ) {

        PostResponse post = postService.create(request);

        ApiResponse<PostResponse> response =
                new ApiResponse<>();

        response.setSuccess(true);

        response.setMessage("Post created successfully");

        response.setData(post);

        return ResponseEntity.ok(response);
    }
    
    
    
    
    
 // GET SINGLE POST
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<PostResponse>> get(
            @PathVariable Long id
    ) {

        PostResponse post =
                postService.get(id);

        ApiResponse<PostResponse> response =
                new ApiResponse<>();

        response.setSuccess(true);

        response.setMessage(
                "Post fetched successfully"
        );

        response.setData(post);

        return ResponseEntity.ok(response);
    }

    // GET FEED POSTS
    @GetMapping
    public ResponseEntity<ApiResponse<Page<PostResponse>>> feed(

            @RequestParam(defaultValue = "latest")
            String sort,

            @RequestParam(defaultValue = "0")
            int page,

            @RequestParam(defaultValue = "10")
            int size
    ) {

        Page<PostResponse> posts =
                postService.feed(sort, page, size);

        ApiResponse<Page<PostResponse>> response =
                new ApiResponse<>();

        response.setSuccess(true);

        response.setMessage(
                "Feed fetched successfully"
        );

        response.setData(posts);

        return ResponseEntity.ok(response);
    }

    // GET POSTS OF COMMUNITY
    @GetMapping("/community/{slug}")
    public ResponseEntity<ApiResponse<Page<PostResponse>>>
    getCommunityPosts(

            @PathVariable String slug,

            @RequestParam(defaultValue = "0")
            int page,

            @RequestParam(defaultValue = "10")
            int size
    ) {

        Page<PostResponse> posts =
                postService.getCommunityPosts(
                        slug,
                        page,
                        size
                );

        ApiResponse<Page<PostResponse>> response =
                new ApiResponse<>();

        response.setSuccess(true);

        response.setMessage(
                "Community posts fetched"
        );

        response.setData(posts);

        return ResponseEntity.ok(response);
    }

}
