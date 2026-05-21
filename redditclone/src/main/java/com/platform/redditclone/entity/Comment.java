package com.platform.redditclone.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;


@Entity
public class Comment {

	
	   @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(columnDefinition = "TEXT")
	    private String content;

	    @ManyToOne
	    private User author;

	    @ManyToOne
	    private Post post;

	    @CreationTimestamp
	    private LocalDateTime createdAt;
	    
	    
	public Comment(Long id, String content, User author, Post post, LocalDateTime createdAt) {
			super();
			this.id = id;
			this.content = content;
			this.author = author;
			this.post = post;
			this.createdAt = createdAt;
		}


	public Long getId() {
			return id;
		}


		public void setId(Long id) {
			this.id = id;
		}


		public String getContent() {
			return content;
		}


		public void setContent(String content) {
			this.content = content;
		}


		public User getAuthor() {
			return author;
		}


		public void setAuthor(User author) {
			this.author = author;
		}


		public Post getPost() {
			return post;
		}


		public void setPost(Post post) {
			this.post = post;
		}


		public LocalDateTime getCreatedAt() {
			return createdAt;
		}


		public void setCreatedAt(LocalDateTime createdAt) {
			this.createdAt = createdAt;
		}


	public Comment() {
		// TODO Auto-generated constructor stub
	}

}
