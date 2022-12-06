package com.socialize.ws.authentication;

import org.slf4j.LoggerFactory;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.socialize.ws.error.ApiError;
import com.socialize.ws.user.User;
import com.socialize.ws.user.UserRepository;


@RestController
public class AuthController {
	
	@Autowired
	UserRepository userRepository;
	
	PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@PostMapping("/api/1.0/auth")
	ResponseEntity<?> handleAuthentication(@RequestHeader(name="Authorization" , required=false) String authorization) {
		if (authorization == null) {
			ApiError error = new ApiError(401,"Unauthorized request","/api/1.0/auth");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
		}
		
		
		
		
		
		
		
		String encoded = authorization.split("Basic ")[1];
		String decoded = new String( Base64.getDecoder().decode(encoded));
		String[] parts = decoded.split(":");
		String username = parts[0];
		String password = parts[1];
		
		User inDB =userRepository.findByUsername(username);
		if (inDB==null) {
			ApiError error = new ApiError(401,"User not found","/api/1.0/auth");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
		}
		
		String hashedPassword = inDB.getPassword();
		if (!passwordEncoder.matches(password, hashedPassword)) {
			ApiError error = new ApiError(401,"Wrong Password","/api/1.0/auth");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
		}
	
		
		//usernam, displayName, image
		Map<String,String> responseBody = new HashMap<>();
		responseBody.put("username", inDB.getUsername());
		responseBody.put("displayName", inDB.getDisplayName());
		responseBody.put("image", inDB.getImage());
		
	
		return ResponseEntity.ok(responseBody);
		
	}
}





















