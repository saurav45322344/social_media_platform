package com.platform.redditclone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.platform.redditclone.entity.Comment;
import com.platform.redditclone.entity.Post;

public interface CommentRepository extends JpaRepository<Comment, Long> {

	
	   List<Comment> findAllByPostOrderByCreatedAtDesc(Post post);
}
