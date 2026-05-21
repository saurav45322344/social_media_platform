package com.platform.redditclone.dto;

import jakarta.validation.constraints.NotNull;

public class VoteRequest {

	
	
	   @NotNull
	    private Long postId;

	    @NotNull
	    private String type;
	    
	    
	public VoteRequest(@NotNull Long postId, @NotNull String type) {
			super();
			this.postId = postId;
			this.type = type;
		}


	public Long getPostId() {
			return postId;
		}


		public void setPostId(Long postId) {
			this.postId = postId;
		}


		public String getType() {
			return type;
		}


		public void setType(String type) {
			this.type = type;
		}


	public VoteRequest() {
		// TODO Auto-generated constructor stub
	}

}
