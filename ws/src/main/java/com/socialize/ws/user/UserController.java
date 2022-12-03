//http requestlerin ulaştığı ilk class
package com.socialize.ws.user;

import java.util.HashMap;
import java.util.Map;
import java.util.List;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.socialize.ws.error.ApiError;

import shared.GenericResponse;

@RestController
public class UserController {
	
	@Autowired 
	UserService userService;
	
	@CrossOrigin
	@PostMapping("/api/1.0/users")
	public ResponseEntity<?> createUser(@Valid @RequestBody User user) {
		
		ApiError apiError = new ApiError(400, "/api/1.0/users","Validation Error");
		
		Map<String, String> validationErrors = new HashMap<>();
		
		String username = user.getUsername();
		String displayName = user.getDisplayName();
		String password = user.getPassword();
		if (username == null || username.isEmpty()) {
			
			validationErrors.put("username", "username cannot be null");

		}
			
		
		if (displayName == null || displayName.isEmpty()) {
			
		
			validationErrors.put("displayName", "Display Name cannot be null");
		
		}
		
		if (password == null || password.isEmpty()) {
			
			
			validationErrors.put("displayName", "Display Name cannot be null");
		
		}
		
		
		
		
		if(validationErrors.size()>0) {
			apiError.setValidationErrors(validationErrors);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(apiError);
		}
		

		userService.save(user);
		return ResponseEntity.ok(new GenericResponse("user created"));
	}
	
	
	
	
	

	@GetMapping("api/1.0/users")
	List<User> getUsers(){
		return userService.getUsers();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
