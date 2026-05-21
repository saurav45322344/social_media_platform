package com.platform.redditclone.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.platform.redditclone.entity.Community;

public interface CommunityRepository extends JpaRepository<Community, Long> {

	
    Optional<Community> findByName(String name);
    
    Optional<Community> findBySlug(String slug);
   
}
