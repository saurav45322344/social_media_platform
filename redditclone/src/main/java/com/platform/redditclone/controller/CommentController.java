package com.platform.redditclone.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.platform.redditclone.dto.ApiResponse;
import com.platform.redditclone.dto.CommentRequest;
import com.platform.redditclone.dto.CommentResponse;
import com.platform.redditclone.service.CommentService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

	 private final CommentService commentService;
	 public CommentController(CommentService commentService) {
		 this.commentService=commentService;
	 }


	 @PostMapping
	 public ResponseEntity<ApiResponse<CommentResponse>>
	 create(

	         @Valid
	         @RequestBody
	         CommentRequest request
	 ) {

	     CommentResponse comment =
	             commentService.create(request);

	     ApiResponse<CommentResponse> response =
	             new ApiResponse<>();

	     response.setSuccess(true);

	     response.setMessage(
	             "Comment added successfully"
	     );

	     response.setData(comment);

	     return ResponseEntity.ok(response);
	 }

	 @GetMapping("/post/{postId}")
	 public ResponseEntity<ApiResponse<List<CommentResponse>>>
	 getByPost(

	         @PathVariable Long postId
	 ) {

	     List<CommentResponse> comments =
	             commentService.getByPost(postId);

	     ApiResponse<List<CommentResponse>> response =
	             new ApiResponse<>();

	     response.setSuccess(true);

	     response.setMessage(
	             "Comments fetched successfully"
	     );

	     response.setData(comments);

	     return ResponseEntity.ok(response);
	 }
}

//@PostMapping
//public ResponseEntity<ApiResponse<CommentResponse>>
//create(
//        @Valid @RequestBody CommentRequest request
//) {
//
//    return ResponseEntity.ok(
//            ApiResponse.<CommentResponse>builder()
//                    .success(true)
//                    .message("Comment added successfully")
//                    .data(commentService.create(request))
//                    .build()
//    );
//}
//
//@GetMapping("/post/{postId}")
//public ResponseEntity<ApiResponse<List<CommentResponse>>>
//getByPost(
//        @PathVariable Long postId
//) {
//
//    return ResponseEntity.ok(
//            ApiResponse.<List<CommentResponse>>builder()
//                    .success(true)
//                    .message("Comments fetched successfully")
//                    .data(commentService.getByPost(postId))
//                    .build()
//    );
//}
//}