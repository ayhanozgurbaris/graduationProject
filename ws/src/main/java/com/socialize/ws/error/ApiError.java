package com.socialize.ws.error;

import java.util.Map;

public class ApiError {
	
	private int status;
	private String message;
	private String path;
	
	
	
	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public String getPath() {
		return path;
	}


	public void setPath(String path) {
		this.path = path;
	}


	private Map<String, String> validationErrors;


	public Map<String, String> getValidationErrors() {
		return validationErrors;
	}


	public void setValidationErrors(Map<String, String> validationErrors) {
		this.validationErrors = validationErrors;
	}
	
	
	public ApiError(int status, String message, String path) {
		this.message=message;
		this.path=path;
		this.status=status;
	}


}
