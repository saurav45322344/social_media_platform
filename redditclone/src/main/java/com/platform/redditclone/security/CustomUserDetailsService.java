package com.platform.redditclone.security;

import java.util.List;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.platform.redditclone.entity.User;
import com.platform.redditclone.repository.UserRepository;



@Service

public class CustomUserDetailsService implements UserDetailsService  {

    private final UserRepository userRepository;
    
    public CustomUserDetailsService (UserRepository userRepository) {
    	this.userRepository=userRepository;
    }
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		 User user = userRepository
		            .findByEmail(username)
		            .orElseThrow(() ->

		                    new UsernameNotFoundException(
		                            "User not found"
		                    )
		            );

		    return new org.springframework.security
		            .core.userdetails.User(

		            user.getEmail(),

		            user.getPassword(),

		            java.util.List.of(
		                    new SimpleGrantedAuthority(
		                            user.getRole()
		                    )
		            )
		    );
		}
}