package com.platform.redditclone.service;

import org.springframework.web.multipart.MultipartFile;

import com.platform.redditclone.dto.FileUploadResponse;

public interface FileStorageService {

	
    FileUploadResponse uploadFile(
            MultipartFile file
    );
}
