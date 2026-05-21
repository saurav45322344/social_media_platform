package com.platform.redditclone.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.platform.redditclone.dto.ApiResponse;
import com.platform.redditclone.entity.VoteType;
import com.platform.redditclone.service.VoteService;

@RestController
@RequestMapping("/api/votes")
public class VoteController {

	private final VoteService voteService;
	public VoteController(VoteService voteService) {
		this.voteService=voteService;
	}

	
	 // UPVOTE
    @PostMapping("/upvote/{postId}")
    public ResponseEntity<ApiResponse<String>> upvote(@PathVariable Long postId) {

        voteService.vote(postId, VoteType.UPVOTE);

        return ResponseEntity.ok(
                new ApiResponse<>(true, "Upvoted successfully", "SUCCESS")
        );
    }

    // DOWNVOTE
    @PostMapping("/downvote/{postId}")
    public ResponseEntity<ApiResponse<String>> downvote(@PathVariable Long postId) {

        voteService.vote(postId, VoteType.DOWNVOTE);

        return ResponseEntity.ok(
                new ApiResponse<>(true, "Downvoted successfully", "SUCCESS")
        );
    }

    // REMOVE VOTE
    @DeleteMapping("/{postId}")
    public ResponseEntity<ApiResponse<String>> removeVote(@PathVariable Long postId) {

        voteService.removeVote(postId);

        return ResponseEntity.ok(
                new ApiResponse<>(true, "Vote removed successfully", "SUCCESS")
        );
    }
}
	
	
//	@PostMapping
//	public ResponseEntity<ApiResponse<String>>
//	vote(
//
//	        @Valid
//	        @RequestBody
//	        VoteRequest request
//	) {
//
//	    voteService.vote(request);
//
//	    ApiResponse<String> response =
//	            new ApiResponse<>();
//
//	    response.setSuccess(true);
//
//	    response.setMessage(
//	            "Vote updated successfully"
//	    );
//
//	    response.setData("Success");
//
//	    return ResponseEntity.ok(response);
//	}
//}