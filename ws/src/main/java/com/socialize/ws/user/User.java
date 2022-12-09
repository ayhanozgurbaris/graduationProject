package com.socialize.ws.user;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;
//import javax.validation.constraints.NotNull;

@Table(name="users")
@Entity
public class User {
	
	@Id
	@GeneratedValue
	private long id;
	
	//@NotNull(message = "username cannot be null")
	//@Size(min=4, max=255)
	//@Column(unique=true)
	private String username;
	
	//@NotNull(message = "displayName cannot be null")
	//@Size(min=4, max=255)
	private String displayName;
	
	//@Size(min=8, max=255, message = "at least 8, maximum 255 characters")
	private String password;
	
	
	private String image;
	
	

	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getDisplayName() {
		return displayName;
	}



	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	@Override
	public String toString() {
		return "User [username=" + username + ", displayName=" + displayName + ", password=" + password + "]";
	}



	public String getImage() {
		return image;
	}



	public void setImage(String image) {
		this.image = image;
	}
	
	
	

}
