package com.socialize.ws.user.vm;
import com.socialize.ws.user.User;

import lombok.Data;

//dto

@Data
public class UserVM {
	
	private String username;
	private String displayName;
	private String image;
	
	
	public UserVM(User user) {
		this.setUsername(user.getUsername());
		this.setDisplayName(user.getDisplayName());
		this.setImage(user.getImage());
		
	}

}
