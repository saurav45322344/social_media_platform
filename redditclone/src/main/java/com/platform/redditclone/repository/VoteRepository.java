package com.platform.redditclone.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.platform.redditclone.entity.Post;
import com.platform.redditclone.entity.User;
import com.platform.redditclone.entity.Vote;

public interface VoteRepository extends JpaRepository<Vote, Long> {

	
	
	 Optional<Vote> findByUserAndPost(User user, Post post);
}
