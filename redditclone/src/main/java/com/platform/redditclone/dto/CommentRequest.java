package com.platform.redditclone.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CommentRequest {

	
	
	
	   @NotBlank
	    private String content;

	    @NotNull
	    private Long postId;
	    
	    
	    
	public CommentRequest(@NotBlank String content, @NotNull Long postId) {
			super();
			this.content = content;
			this.postId = postId;
		}



	public String getContent() {
			return content;
		}



		public void setContent(String content) {
			this.content = content;
		}



		public Long getPostId() {
			return postId;
		}



		public void setPostId(Long postId) {
			this.postId = postId;
		}



	public CommentRequest() {
		// TODO Auto-generated constructor stub
	}

}
