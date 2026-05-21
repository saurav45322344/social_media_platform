package com.platform.redditclone.service;

import com.platform.redditclone.dto.AuthResponse;
import com.platform.redditclone.dto.LoginRequest;
import com.platform.redditclone.dto.SignupRequest;
import com.platform.redditclone.entity.User;

public interface AuthService {

    AuthResponse signup(SignupRequest request);

    AuthResponse login(LoginRequest request);

    User getCurrentUser();
	
}
