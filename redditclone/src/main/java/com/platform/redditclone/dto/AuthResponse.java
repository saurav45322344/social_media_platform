package com.platform.redditclone.dto;



public class AuthResponse {

	

    private String token;

    private String refreshToken;

    private String username;

    private String email;
    
	
	public AuthResponse(String token, String refreshToken, String username, String email) {
		super();
		this.token = token;
		this.refreshToken = refreshToken;
		this.username = username;
		this.email = email;
	}


	public String getToken() {
		return token;
	}


	public void setToken(String token) {
		this.token = token;
	}


	public String getRefreshToken() {
		return refreshToken;
	}


	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public AuthResponse() {
		// TODO Auto-generated constructor stub
	}

}
