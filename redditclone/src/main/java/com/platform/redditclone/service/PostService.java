package com.platform.redditclone.service;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.platform.redditclone.dto.PostRequest;
import com.platform.redditclone.dto.PostResponse;
import com.platform.redditclone.entity.Community;
import com.platform.redditclone.entity.Post;
import com.platform.redditclone.repository.CommunityRepository;
import com.platform.redditclone.repository.PostRepository;

@Service
public class PostService {

	 private final PostRepository postRepository;

	    private final CommunityRepository communityRepository;

	    public PostService(PostRepository postRepository,
	                       CommunityRepository communityRepository) {

	        this.postRepository = postRepository;
	        this.communityRepository = communityRepository;
	    }

	    public PostResponse create(PostRequest request) {

	        Community community =
	                communityRepository.findById(request.getCommunityId())
	                        .orElseThrow(() ->
	                                new RuntimeException("Community not found"));

	        Post post = new Post();

	        post.setTitle(request.getTitle());

	        post.setContent(request.getContent());

	        post.setImageUrl(request.getImageUrl());

	        post.setCommunity(community);

	        Post savedPost = postRepository.save(post);

	        PostResponse response = new PostResponse();

	        response.setId(savedPost.getId());

	        response.setTitle(savedPost.getTitle());

	        response.setContent(savedPost.getContent());

	        response.setImageUrl(savedPost.getImageUrl());

	        response.setVoteCount(savedPost.getVoteCount());

	        response.setCommentCount(savedPost.getCommentCount());

	        response.setCommunityName(
	                savedPost.getCommunity().getName()
	        );

	        response.setCreatedAt(savedPost.getCreatedAt());

	        return response;
	    }
	    
	    
	    
	 // GET SINGLE POST
	    public PostResponse get(Long id) {

	        Post post = postRepository.findById(id)
	                .orElseThrow(() ->
	                        new RuntimeException(
	                                "Post not found"
	                        ));

	        return mapToResponse(post);
	    }

	    // FEED POSTS
	    public Page<PostResponse> feed(
	            String sort,
	            int page,
	            int size
	    ) {

	        Pageable pageable =
	                PageRequest.of(page, size);

	        Page<Post> posts;

	        if (sort.equalsIgnoreCase("popular")) {

	            posts =
	                    postRepository
	                            .findAllByOrderByVoteCountDesc(
	                                    pageable
	                            );

	        } else {

	            posts =
	                    postRepository
	                            .findAllByOrderByCreatedAtDesc(
	                                    pageable
	                            );
	        }

	        return posts.map(this::mapToResponse);
	    }

	    // POSTS OF COMMUNITY
	    public Page<PostResponse> getCommunityPosts(
	            String slug,
	            int page,
	            int size
	    ) {

	        Pageable pageable =
	                PageRequest.of(page, size);

	        return postRepository
	                .findByCommunitySlug(slug, pageable)
	                .map(this::mapToResponse);
	    }

	    // RESPONSE MAPPER
	    private PostResponse mapToResponse(Post post) {

	        PostResponse response =
	                new PostResponse();

	        response.setId(post.getId());

	        response.setTitle(post.getTitle());

	        response.setContent(post.getContent());

	        response.setImageUrl(post.getImageUrl());

	        response.setVoteCount(post.getVoteCount());

	        response.setCommentCount(post.getCommentCount());

	        response.setCommunityName(
	                post.getCommunity().getName()
	        );

	        response.setCreatedAt(
	                post.getCreatedAt()
	        );

	        return response;
	    }
	    
	    public Post getEntity(Long id) {
	        return postRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Post not found"));
	    }
	}
	


