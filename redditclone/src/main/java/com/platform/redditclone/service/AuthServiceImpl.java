package com.platform.redditclone.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.platform.redditclone.dto.AuthResponse;
import com.platform.redditclone.dto.LoginRequest;
import com.platform.redditclone.dto.SignupRequest;
import com.platform.redditclone.entity.User;
import com.platform.redditclone.repository.UserRepository;
import com.platform.redditclone.security.JwtService;



@Service
public class AuthServiceImpl implements AuthService {

	  private final UserRepository userRepository;

	    private final PasswordEncoder passwordEncoder;

	    private final JwtService jwtService;

	    private final AuthenticationManager authenticationManager;
	    public AuthServiceImpl( UserRepository userRepository,
	    		PasswordEncoder passwordEncoder, JwtService jwtService , AuthenticationManager authenticationManager)
	    {
	    	this.userRepository=userRepository;
	    	this.passwordEncoder=passwordEncoder;
	    	this.jwtService=jwtService;
	    	this.authenticationManager=authenticationManager;
	    	
	    }
	
	@Override
	public AuthResponse signup(SignupRequest request) {

		 

			    if(userRepository.existsByEmail(
			            request.getEmail()
			    )) {

			        throw new RuntimeException(
			                "Email already exists"
			        );
			    }

			    if(userRepository.existsByUsername(
			            request.getUsername()
			    )) {

			        throw new RuntimeException(
			                "Username already exists"
			        );
			    }

			    User user = new User();

			    user.setUsername(
			            request.getUsername()
			    );

			    user.setEmail(
			            request.getEmail()
			    );

			    user.setPassword(
			            passwordEncoder.encode(
			                    request.getPassword()
			            )
			    );

			    user.setRole("ROLE_USER");

			    userRepository.save(user);

			    String token =
			            jwtService.generateToken(

			                    new org.springframework
			                            .security
			                            .core
			                            .userdetails
			                            .User(

			                            user.getEmail(),

			                            user.getPassword(),

			                            java.util.List.of()
			                    )
			            );

			    return new AuthResponse(
			            token,
			            null,
			            user.getUsername(),
			            user.getEmail()
			    );
			}
	

	@Override
	public AuthResponse login(LoginRequest request){

	    authenticationManager.authenticate(

	            new UsernamePasswordAuthenticationToken(

	                    request.getEmail(),

	                    request.getPassword()
	            )
	    );

	    User user = userRepository
	            .findByEmail(request.getEmail())
	            .orElseThrow(() ->

	                    new RuntimeException(
	                            "User not found"
	                    )
	            );

	    String token =
	            jwtService.generateToken(

	                    new org.springframework
	                            .security
	                            .core
	                            .userdetails
	                            .User(

	                            user.getEmail(),

	                            user.getPassword(),

	                            java.util.List.of()
	                    )
	            );

	    return new AuthResponse(
	            token,
	            null,
	            user.getUsername(),
	            user.getEmail()
	    );
	}
	@Override
	public User getCurrentUser() {
		 Authentication authentication =
	                SecurityContextHolder
	                        .getContext()
	                        .getAuthentication();

	        String email = authentication.getName();

	        return userRepository.findByEmail(email)
	                .orElseThrow(() ->
	                        new RuntimeException("User not found"));
	    }


}
