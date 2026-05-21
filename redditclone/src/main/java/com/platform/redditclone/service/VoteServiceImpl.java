package com.platform.redditclone.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.platform.redditclone.dto.VoteRequest;
import com.platform.redditclone.entity.Post;
import com.platform.redditclone.entity.User;
import com.platform.redditclone.entity.Vote;
import com.platform.redditclone.entity.VoteType;
import com.platform.redditclone.repository.PostRepository;
import com.platform.redditclone.repository.VoteRepository;

import org.springframework.transaction.annotation.Transactional;


@Service
public class VoteServiceImpl implements VoteService{

	
	 private final VoteRepository voteRepository;

	    private final PostService postService;

	    private final PostRepository postRepository;

	    private final AuthService authService;
	    
	    public VoteServiceImpl(VoteRepository voteRepository ,

	    		 PostService postService , 

	    		 PostRepository postRepository , 

	    		AuthService authService ) {
	    	this.voteRepository=voteRepository;
	    	this.postService=postService;
	    	this.postRepository=postRepository;
	    	this.authService=authService;
	    }

		@Override
		  @Transactional
		public void vote(Long postId, VoteType type) {
			 User currentUser = authService.getCurrentUser();
		        Post post = postService.getEntity(postId);

		        Optional<Vote> existingVote =
		                voteRepository.findByUserAndPost(currentUser, post);

		        if (existingVote.isPresent()) {

		            Vote vote = existingVote.get();

		            // same vote → remove it (toggle)
		            
		            if (vote.getType() == type) {

		                voteRepository.delete(vote);

		                if (type == VoteType.UPVOTE) {
		                    post.setVoteCount(post.getVoteCount() - 1);
		                } else {
		                    post.setVoteCount(post.getVoteCount() + 1);
		                }

		                postRepository.save(post);
		                return;
		            }

		            // change vote type
		            vote.setType(type);
		            voteRepository.save(vote);

		            if (type == VoteType.UPVOTE) {
		                post.setVoteCount(post.getVoteCount() + 2);
		            } else {
		                post.setVoteCount(post.getVoteCount() - 2);
		            }

		            postRepository.save(post);
		            return;
		        }

		        // new vote
		        Vote vote = new Vote();
		        vote.setUser(currentUser);
		        vote.setPost(post);
		        vote.setType(type);

		        voteRepository.save(vote);

		        if (type == VoteType.UPVOTE) {
		            post.setVoteCount(post.getVoteCount() + 1);
		        } else {
		            post.setVoteCount(post.getVoteCount() - 1);
		        }

		        postRepository.save(post);
			
		}		
//			 User currentUser = authService.getCurrentUser();
//			    Post post = postService.getEntity(postId);
//
//			    Optional<Vote> existingVote =
//			            voteRepository.findByUserAndPost(currentUser, post);
//
//			    if (existingVote.isPresent()) {
//
//			        Vote vote = existingVote.get();
//
//			        if (vote.getType() == type) {
//
//			            voteRepository.delete(vote);
//
//			            if (type == VoteType.UPVOTE) {
//			                post.setVoteCount(post.getVoteCount() - 1);
//			            } else {
//			                post.setVoteCount(post.getVoteCount() + 1);
//			            }
//
//			            postRepository.save(post);
//			            return;
//			        }
//
//			        vote.setType(type);
//			        voteRepository.save(vote);
//
//			        if (type == VoteType.UPVOTE) {
//			            post.setVoteCount(post.getVoteCount() + 2);
//			        } else {
//			            post.setVoteCount(post.getVoteCount() - 2);
//			        }
//
//			        postRepository.save(post);
//			        return;
//			    }
//
//			    Vote vote = new Vote();
//			    vote.setUser(currentUser);
//			    vote.setPost(post);
//			    vote.setType(type);
//
//			    voteRepository.save(vote);
//
//			    if (type == VoteType.UPVOTE) {
//			        post.setVoteCount(post.getVoteCount() + 1);
//			    } else {
//			        post.setVoteCount(post.getVoteCount() - 1);
//			    }
//
//			    postRepository.save(post);
//			}
		    


		@Override
		public void removeVote(Long postId) {
			 User currentUser = authService.getCurrentUser();
		        Post post = postService.getEntity(postId);

		        Vote vote = voteRepository.findByUserAndPost(currentUser, post)
		                .orElseThrow(() -> new RuntimeException("Vote not found"));

		        if (vote.getType() == VoteType.UPVOTE) {
		            post.setVoteCount(post.getVoteCount() - 1);
		        } else {
		            post.setVoteCount(post.getVoteCount() + 1);
		        }

		        voteRepository.delete(vote);
		        postRepository.save(post);
		    }
}
//		@Override
//		public void vote(VoteRequest request) {
//			User currentUser =
//	                authService.getCurrentUser();
//
//	        Post post =
//	                postService.getEntity(
//	                        request.getPostId()
//	                );
//
//	        VoteType voteType =
//	                VoteType.valueOf(
//	                        request.getType()
//	                                .toUpperCase()
//	                );
//
//	        Optional<Vote> existingVote =
//	                voteRepository.findByUserAndPost(
//	                        currentUser,
//	                        post
//	                );
//
//	        if(existingVote.isPresent()) {
//
//	            Vote vote = existingVote.get();
//
//	            if(vote.getType() == voteType) {
//
//	                voteRepository.delete(vote);
//
//	                if(voteType == VoteType.UPVOTE) {
//
//	                    post.setVoteCount(
//	                            post.getVoteCount() - 1
//	                    );
//
//	                } else {
//
//	                    post.setVoteCount(
//	                            post.getVoteCount() + 1
//	                    );
//	                }
//
//	                postRepository.save(post);
//
//	                return;
//	            }
//
//	            vote.setType(voteType);
//
//	            if(voteType == VoteType.UPVOTE) {
//
//	                post.setVoteCount(
//	                        post.getVoteCount() + 2
//	                );
//
//	            } else {
//
//	                post.setVoteCount(
//	                        post.getVoteCount() - 2
//	                );
//	            }
//
//	            voteRepository.save(vote);
//
//	            postRepository.save(post);
//
//	            return;
//	        }
//
//	        Vote vote = new Vote();
//
//	        vote.setUser(currentUser);
//
//	        vote.setPost(post);
//
//	        vote.setType(voteType);
//
//	        voteRepository.save(vote);
//
//	        if(voteType == VoteType.UPVOTE) {
//
//	            post.setVoteCount(
//	                    post.getVoteCount() + 1
//	            );
//
//	        } else {
//
//	            post.setVoteCount(
//	                    post.getVoteCount() - 1
//	            );
//	        }
//
//	        postRepository.save(post);
//}
//}
