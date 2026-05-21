package com.platform.redditclone.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.platform.redditclone.community.CommentMapper;
import com.platform.redditclone.dto.CommentRequest;
import com.platform.redditclone.dto.CommentResponse;
import com.platform.redditclone.dto.PostResponse;
import com.platform.redditclone.entity.Comment;
import com.platform.redditclone.entity.Post;
import com.platform.redditclone.entity.User;
import com.platform.redditclone.repository.CommentRepository;
import com.platform.redditclone.repository.PostRepository;


@Service
public class CommentServiceImpl implements CommentService{

	
	
    private final CommentRepository commentRepository;

    private final PostService postService;

    private final PostRepository postRepository;

    private final AuthService authService;
    
    public CommentServiceImpl(CommentRepository commentRepository, PostService postService,
    		PostRepository postRepository , AuthService authService) {
    	this.commentRepository=commentRepository;
    	this.postService=postService;
    	this.postRepository=postRepository;
    	this.authService=authService;
    }

	@Override
	public CommentResponse create(CommentRequest request) {
		 User currentUser = authService.getCurrentUser();

	        Post post = postService.getEntity(request.getPostId());

	        Comment comment = new Comment();
	        comment.setContent(request.getContent());
	        comment.setAuthor(currentUser);
	        comment.setPost(post);

	        commentRepository.save(comment);

	        post.setCommentCount(post.getCommentCount() + 1);
	        postRepository.save(post);

	        return CommentMapper.toResponse(comment);
   }

	@Override
	public List<CommentResponse> getByPost(Long postId) {
		  Post post = postService.getEntity(postId);

	        return commentRepository
	                .findAllByPostOrderByCreatedAtDesc(post)
	                .stream()
	                .map(CommentMapper::toResponse)
	                .toList();
	}
}
