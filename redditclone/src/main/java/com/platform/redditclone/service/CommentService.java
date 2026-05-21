package com.platform.redditclone.service;

import java.util.List;

import com.platform.redditclone.dto.CommentRequest;
import com.platform.redditclone.dto.CommentResponse;

public interface CommentService {

    CommentResponse create(CommentRequest request);

    List<CommentResponse> getByPost(Long postId);
}
