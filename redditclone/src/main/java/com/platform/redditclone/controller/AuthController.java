package com.platform.redditclone.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.platform.redditclone.dto.ApiResponse;
import com.platform.redditclone.dto.AuthResponse;
import com.platform.redditclone.dto.LoginRequest;
import com.platform.redditclone.dto.SignupRequest;
import com.platform.redditclone.service.AuthService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")

public class AuthController {

	private final AuthService authService;
	public AuthController (AuthService authService) {
		this.authService=authService;
	}

	 @PostMapping("/signup")
	    public ResponseEntity<ApiResponse<AuthResponse>>
	    signup(

	            @Valid
	            @RequestBody
	            SignupRequest request
	    ) {

	        ApiResponse<AuthResponse> response =
	                new ApiResponse<>();

	        response.setSuccess(true);

	        response.setMessage(
	                "Signup successful"
	        );

	        response.setData(
	                authService.signup(request)
	        );

	        return ResponseEntity.ok(response);
	    }

	    @PostMapping("/login")
	    public ResponseEntity<ApiResponse<AuthResponse>>
	    login(

	            @Valid
	            @RequestBody
	            LoginRequest request
	    ) {

	        ApiResponse<AuthResponse> response =
	                new ApiResponse<>();

	        response.setSuccess(true);

	        response.setMessage(
	                "Login successful"
	        );

	        response.setData(
	                authService.login(request)
	        );

	        return ResponseEntity.ok(response);
	    }
	}