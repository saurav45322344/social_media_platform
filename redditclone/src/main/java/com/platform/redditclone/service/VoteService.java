package com.platform.redditclone.service;

import com.platform.redditclone.entity.VoteType;

public interface VoteService {

	
	  // void vote(VoteRequest request);
	 void vote(Long postId, VoteType type);
	    void removeVote(Long postId);
	}

