package com.platform.redditclone.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


public class SignupRequest {

	
	  @NotBlank(message = "Username is required")
	    @Size(min = 3, max = 30)
	    private String username;

	    @Email(message = "Invalid email")
	    @NotBlank(message = "Email is required")
	    private String email;

	    @NotBlank(message = "Password is required")
	    @Size(min = 6, max = 100)
	    private String password;
	    
	
	public SignupRequest(@NotBlank(message = "Username is required") @Size(min = 3, max = 30) String username,
				@Email(message = "Invalid email") @NotBlank(message = "Email is required") String email,
				@NotBlank(message = "Password is required") @Size(min = 6, max = 100) String password) {
			super();
			this.username = username;
			this.email = email;
			this.password = password;
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


		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;
		}


	public SignupRequest() {
		// TODO Auto-generated constructor stub
	}

}
