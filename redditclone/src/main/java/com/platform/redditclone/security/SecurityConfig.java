package com.platform.redditclone.security;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
//@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {

	 private final JwtAuthenticationFilter jwtFilter;
	 public SecurityConfig(JwtAuthenticationFilter jwtFilter) {
		 this.jwtFilter=jwtFilter;
	 }

	    @Bean
	    public SecurityFilterChain securityFilterChain(
	            HttpSecurity http
	    ) throws Exception {

	        http
	                .csrf(csrf -> csrf.disable())

	                .sessionManagement(session ->
	                        session.sessionCreationPolicy(
	                                SessionCreationPolicy.STATELESS
	                        )
	                )

	                .authorizeHttpRequests(auth -> auth

	                        .requestMatchers(
	                                "/api/auth/**",
	                                "/swagger-ui/**",
	                                "/v3/api-docs/**",
	                                "/api/uploads/**",
									"/uploads/**",
	                                "/api/posts/",
	                                "/api/communities/**",
									"/api/comments/**",
                                "/api/votes/**"
	                        ).permitAll()

	                        .requestMatchers(HttpMethod.GET,
	                                "/api/posts/**",
	                                "/api/communities/**"
	                        ).permitAll()

	                        .anyRequest().authenticated()
	                )

	                .addFilterBefore(
	                        jwtFilter,
	                        UsernamePasswordAuthenticationFilter.class
	                );

	        return http.build();
	    }

	    @Bean
	    public PasswordEncoder passwordEncoder() {

	        return new BCryptPasswordEncoder();
	    }

	    @Bean
	    public AuthenticationManager authenticationManager(
	            AuthenticationConfiguration config
	    ) throws Exception {

	        return config.getAuthenticationManager();
	    }
	    
	    @Bean
	    public DaoAuthenticationProvider authenticationProvider(
	            CustomUserDetailsService userDetailsService
	    ) {

	        DaoAuthenticationProvider authProvider =
	                new DaoAuthenticationProvider();

	        authProvider.setUserDetailsService(userDetailsService);

	        authProvider.setPasswordEncoder(passwordEncoder());

	        return authProvider;
	    }
	}
	 

