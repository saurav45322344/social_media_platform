package com.platform.redditclone.exception;

import java.time.LocalDateTime;
import java.util.Map;

public class ApiErrorResponse {

	   private boolean success;

	    private String message;

	    private int status;

	    private LocalDateTime timestamp;

	    private Map<String, String> errors;

		public boolean isSuccess() {
			return success;
		}

		public void setSuccess(boolean success) {
			this.success = success;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public int getStatus() {
			return status;
		}

		public void setStatus(int status) {
			this.status = status;
		}

		public LocalDateTime getTimestamp() {
			return timestamp;
		}

		public void setTimestamp(LocalDateTime timestamp) {
			this.timestamp = timestamp;
		}

		public Map<String, String> getErrors() {
			return errors;
		}

		public void setErrors(Map<String, String> errors) {
			this.errors = errors;
		}

		public ApiErrorResponse(boolean success, String message, int status, LocalDateTime timestamp,
				Map<String, String> errors) {
			super();
			this.success = success;
			this.message = message;
			this.status = status;
			this.timestamp = timestamp;
			this.errors = errors;
		}

		public ApiErrorResponse() {
			super();
			// TODO Auto-generated constructor stub
		}
	    
	}

