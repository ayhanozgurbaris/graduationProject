package com.socialize.ws.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import java.util.List;


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

}
