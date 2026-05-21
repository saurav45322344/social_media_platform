package com.platform.redditclone.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;


@Entity

@Table(
	    uniqueConstraints = {
	        @UniqueConstraint(
	            columnNames = {
	                "user_id",
	                "post_id"
	            }
	        )
	    }
	)
public class Vote {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Enumerated(EnumType.STRING)
	    private VoteType type;
	    
	    @ManyToOne
	    private User user;

	    @ManyToOne
	    private Post post;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public VoteType getType() {
			return type;
		}

		public void setType(VoteType type) {
			this.type = type;
		}

		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}

		public Post getPost() {
			return post;
		}

		public void setPost(Post post) {
			this.post = post;
		}

		public Vote(Long id, VoteType type, User user, Post post) {
			super();
			this.id = id;
			this.type = type;
			this.user = user;
			this.post = post;
		}

		public Vote() {
			super();
			// TODO Auto-generated constructor stub
		}
	    
	    
	}
	
