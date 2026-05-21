package com.platform.redditclone.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "posts")
public class Post {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(nullable = false)
	    private String title;

	    @Column(columnDefinition = "TEXT")
	    private String content;

	    private String imageUrl;

	    private Integer voteCount = 0;

	    private Integer commentCount = 0;

	    @ManyToOne
	    @JoinColumn(name = "community_id")
	    private Community community;

	    @CreationTimestamp
	    private LocalDateTime createdAt;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getContent() {
			return content;
		}

		public void setContent(String content) {
			this.content = content;
		}

		public String getImageUrl() {
			return imageUrl;
		}

		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}

		public Integer getVoteCount() {
			return voteCount;
		}

		public void setVoteCount(Integer voteCount) {
			this.voteCount = voteCount;
		}

		public Integer getCommentCount() {
			return commentCount;
		}

		public void setCommentCount(Integer commentCount) {
			this.commentCount = commentCount;
		}

		public Community getCommunity() {
			return community;
		}

		public void setCommunity(Community community) {
			this.community = community;
		}

		public LocalDateTime getCreatedAt() {
			return createdAt;
		}

		public void setCreatedAt(LocalDateTime createdAt) {
			this.createdAt = createdAt;
		}

		public Post(Long id, String title, String content, String imageUrl, Integer voteCount, Integer commentCount,
				Community community, LocalDateTime createdAt) {
			super();
			this.id = id;
			this.title = title;
			this.content = content;
			this.imageUrl = imageUrl;
			this.voteCount = voteCount;
			this.commentCount = commentCount;
			this.community = community;
			this.createdAt = createdAt;
		}

		public Post() {
			super();
			// TODO Auto-generated constructor stub
		}

}
