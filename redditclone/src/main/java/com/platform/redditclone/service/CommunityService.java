package com.platform.redditclone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.platform.redditclone.dto.CommunityRequest;
import com.platform.redditclone.dto.CommunityResponse;
import com.platform.redditclone.entity.Community;
import com.platform.redditclone.repository.CommunityRepository;

@Service
public class CommunityService {

	
	   private final CommunityRepository communityRepository;

	    public CommunityService(CommunityRepository communityRepository) {
	        this.communityRepository = communityRepository;
	    }

//	    public CommunityResponse createCommunity(CommunityRequest request) {
//
//	        if (request.getName() == null || request.getName().trim().isEmpty()) {
//	            throw new RuntimeException("Community name cannot be empty");
//	        }
//
//	        communityRepository.findByName(request.getName())
//	                .ifPresent(c -> {
//	                    throw new RuntimeException("Community already exists");
//	                });
//
//	
//	        Community community = new Community();
//	        community.setName(request.getName());
//	        community.setDescription(request.getDescription());
//
//	        Community saved = communityRepository.save(community);
//
//	      
//	        CommunityResponse response = new CommunityResponse();
//	        response.setId(saved.getId());
//	        response.setName(saved.getName());
//	        response.setDescription(saved.getDescription());
//
//	        return response;
//	    }
//	    
//	  
//	    public List<CommunityResponse> getAllCommunities() {
//
//	        List<Community> communities = communityRepository.findAll();
//
//	        List<CommunityResponse> responseList = new ArrayList<>();
//
//	        for (Community community : communities) {
//	            CommunityResponse response = new CommunityResponse();
//	            response.setId(community.getId());
//	            response.setName(community.getName());
//	            response.setDescription(community.getDescription());
//
//	            responseList.add(response);
//	        }
//
//	        return responseList;
//	    }
//	}
	    
	    
	    
	 // =========================
	    // CREATE COMMUNITY
	    // =========================
	    public CommunityResponse createCommunity(CommunityRequest request) {

	        // validate input
	        if (request.getName() == null || request.getName().trim().isEmpty()) {
	            throw new RuntimeException("Community name cannot be empty");
	        }

	        if (request.getDescription() == null || request.getDescription().trim().isEmpty()) {
	            throw new RuntimeException("Description cannot be empty");
	        }

	        // check duplicate
	        communityRepository.findByName(request.getName())
	                .ifPresent(c -> {
	                    throw new RuntimeException("Community already exists");
	                });

	        // create entity
	        Community community = new Community();
	        community.setName(request.getName().trim());
	        community.setDescription(request.getDescription().trim());

	        // 🔥 IMPORTANT: set slug (VERY REQUIRED)
	        community.setSlug(generateSlug(request.getName()));

	        Community saved = communityRepository.save(community);

	        return mapToResponse(saved);
	    }

	    // =========================
	    // GET ALL COMMUNITIES
	    // =========================
	    public List<CommunityResponse> getAllCommunities() {

	        List<Community> communities = communityRepository.findAll();

	        return communities.stream()
	                .map(this::mapToResponse)
	                .toList();
	    }

	    // =========================
	    // GET BY SLUG (IMPORTANT FOR POSTS)
	    // =========================
	    public Community getEntityBySlug(String slug) {

	        return communityRepository.findBySlug(slug)
	                .orElseThrow(() ->
	                        new RuntimeException("Community not found"));
	    }

	    // =========================
	    // GET BY ID
	    // =========================
	    public Community getEntityById(Long id) {

	        return communityRepository.findById(id)
	                .orElseThrow(() ->
	                        new RuntimeException("Community not found"));
	    }

	    // =========================
	    // MAPPER METHOD
	    // =========================
	    private CommunityResponse mapToResponse(Community community) {

	        CommunityResponse response = new CommunityResponse();
	        response.setId(community.getId());
	        response.setName(community.getName());
	        response.setDescription(community.getDescription());

	        return response;
	    }

	    // GET COMMUNITY BY SLUG
	    public CommunityResponse getBySlug(String slug) {

	        Community community =
	                communityRepository.findBySlug(slug)
	                        .orElseThrow(() ->
	                                new RuntimeException(
	                                        "Community not found"
	                                ));

	        CommunityResponse response =
	                new CommunityResponse();

	        response.setId(community.getId());

	        response.setName(community.getName());

	        response.setDescription(
	                community.getDescription()
	        );

	        return response;
	    }

	    
	    // =========================
	    // SLUG GENERATOR
	    // =========================
	    private String generateSlug(String name) {

	        return name
	                .toLowerCase()
	                .trim()
	                .replaceAll("\\s+", "-")
	                .replaceAll("[^a-z0-9-]", "");
	    }
}