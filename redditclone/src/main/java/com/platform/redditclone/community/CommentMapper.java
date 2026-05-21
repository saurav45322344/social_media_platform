package com.platform.redditclone.community;

import com.platform.redditclone.dto.CommentResponse;
import com.platform.redditclone.entity.Comment;

public class CommentMapper {

	public static CommentResponse toResponse(
	        Comment comment
	) {

	    CommentResponse response =
	            new CommentResponse();

	    response.setId(
	            comment.getId()
	    );

	    response.setContent(
	            comment.getContent()
	    );

	    response.setAuthor(
	            comment.getAuthor()
	                    .getUsername()
	    );

	    response.setCreatedAt(
	            comment.getCreatedAt()
	    );

	    return response;
	}
}

