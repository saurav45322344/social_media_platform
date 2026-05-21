package com.platform.redditclone.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.platform.redditclone.dto.ApiResponse;
import com.platform.redditclone.dto.CommunityRequest;
import com.platform.redditclone.dto.CommunityResponse;
import com.platform.redditclone.service.CommunityService;

@RestController
@RequestMapping("/api/communities")

public class CommunityController {

	 private final CommunityService communityService;

	   
	    public CommunityController(CommunityService communityService) {
	        this.communityService = communityService;
	    }

	    @PostMapping
	    public ResponseEntity<ApiResponse<CommunityResponse>> createCommunity(
	            @RequestBody CommunityRequest request
	    ) {

	        CommunityResponse response = communityService.createCommunity(request);

	     
	        ApiResponse<CommunityResponse> apiResponse = new ApiResponse<>();

	        apiResponse.setSuccess(true);
	        apiResponse.setMessage("Community created successfully");
	        apiResponse.setData(response);

	        return new ResponseEntity<>(apiResponse, HttpStatus.CREATED);
	    }
	    
	  
	    @GetMapping
	    public ResponseEntity<List<CommunityResponse>> getAllCommunities() {

	        List<CommunityResponse> response = communityService.getAllCommunities();

	        return new ResponseEntity<>(response, HttpStatus.OK);
	    }
	    
	 // GET COMMUNITY BY SLUG
	    @GetMapping("/{slug}")
	    public ResponseEntity<ApiResponse<CommunityResponse>> getBySlug(
	            @PathVariable String slug
	    ) {

	        CommunityResponse community =
	                communityService.getBySlug(slug);

	        ApiResponse<CommunityResponse> response =
	                new ApiResponse<>();

	        response.setSuccess(true);
	        response.setMessage("Community fetched successfully");
	        response.setData(community);

	        return ResponseEntity.ok(response);
	    
	}
	}