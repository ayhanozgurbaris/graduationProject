package com.socialize.ws.user;

import org.springframework.data.domain.Page;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.socialize.ws.error.UserNotFound;

import org.springframework.data.domain.Pageable;


@Service
public class UserService {
	UserRepository userRepository;
	PasswordEncoder passwordEncoder;
	

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
		this.passwordEncoder = new BCryptPasswordEncoder();
	}



	public void save(User user) {
		String encryptedPassword = this.passwordEncoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		userRepository.save(user);		
	}



	public Page<User> getUsers(Pageable page) {
		return userRepository.findAll(page);
	}



	public User getByUsername(String username) {
		User INDB =  userRepository.findByUsername(username);
		if (INDB == null) {
			throw new UserNotFound();
		}
		return INDB;
	}

}




























