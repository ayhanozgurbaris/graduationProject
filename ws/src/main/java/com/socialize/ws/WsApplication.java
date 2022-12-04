package com.socialize.ws;

import java.util.Iterator;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

import com.socialize.ws.user.User;
import com.socialize.ws.user.UserService;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class WsApplication {

	public static void main(String[] args) {
		SpringApplication.run(WsApplication.class, args);
	}
	
	@Bean
	CommandLineRunner createInitialUsers(UserService userService) {
		return new CommandLineRunner() {

			@Override
			public void run(String... args) throws Exception {
				
				for(int i=1;i<=10;i++) {
				
				User user = new User();
				user.setUsername("defaultUser2"+i);
				user.setDisplayName("defaultDisplay2"+i);
				user.setPassword("defaultPassword2"+i);
				userService.save(user);
			}
			
			};
		};
	}

}
