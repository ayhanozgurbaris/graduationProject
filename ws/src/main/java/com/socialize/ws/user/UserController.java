//http requestlerin ulaştığı ilk class
package com.socialize.ws.user;

import java.util.HashMap;
import java.util.Map;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.socialize.ws.error.ApiError;
import com.socialize.ws.user.vm.UserVM;

import shared.GenericResponse;

@RestController
public class UserController {
	
	@Autowired 
	UserService userService;
	
	@CrossOrigin
	@PostMapping("/api/1.0/users")
	public ResponseEntity<?> createUser(@RequestBody User user) {
		
		ApiError apiError = new ApiError(400, "/api/1.0/users","Validation Error");
		
		Map<String, String> validationErrors = new HashMap<>();
		
		//BURADA SIGNUP ICIN HATA MESAJLARI
		
		String username = user.getUsername();
		String displayName = user.getDisplayName();
		String password = user.getPassword();
		
		if (username == null || username.isEmpty()) {
			validationErrors.put("username", "username cannot be null");
		}else if (username.length()<8 && username.length()>0) {
			validationErrors.put("username","username size must be longer than 8");
		}
		
		
		if (password == null || password.isEmpty()) {
			validationErrors.put("password", "password cannot be null");
		}else if (password.length()<8 && password.length()>0) {
			validationErrors.put("password","password size must be longer than 8");
		}
		
		
		
		if (displayName == null || displayName.isEmpty()) {
			validationErrors.put("displayName", "displayName cannot be null");
		}else if (displayName.length()<8 && displayName.length()>0) {
			validationErrors.put("displayName","displayName size must be longer than 8");
		}
			
		

		
		
		if(validationErrors.size()>0) {
			apiError.setValidationErrors(validationErrors);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(apiError);
		}
	

		userService.save(user);
		return ResponseEntity.ok(new GenericResponse("user created"));
	}
	
	
	
	
	

	@GetMapping("api/1.0/users")
	Page<UserVM> getUsers(Pageable page){
		return userService.getUsers(page).map(UserVM::new);
	}
	
	
	@GetMapping("/api/1.0/users/{username}")
	UserVM getUser(@PathVariable String username) {
		User user = userService.getByUsername(username);
		return new UserVM(user);
	}
	
	
	
	

}























