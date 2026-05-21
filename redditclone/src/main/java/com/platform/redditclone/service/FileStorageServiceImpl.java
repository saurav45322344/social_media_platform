package com.platform.redditclone.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.platform.redditclone.dto.FileUploadResponse;
import com.platform.redditclone.exception.BadRequestException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@Service
public class FileStorageServiceImpl implements FileStorageService{

	  @Value("${file.upload-dir}")
	    private String uploadDir;
	
	
	@Override
	public FileUploadResponse uploadFile(MultipartFile file) {

	    validateFile(file);

	    try {

	        String originalFilename =
	                StringUtils.cleanPath(
	                        file.getOriginalFilename()
	                );

	        String extension = "";

	        int index =
	                originalFilename.lastIndexOf(".");

	        if (index > 0) {

	            extension =
	                    originalFilename.substring(index);
	        }

	        String fileName =
	                UUID.randomUUID()
	                        + extension;

	        Path uploadPath =
	                Paths.get(uploadDir);

	        if (!Files.exists(uploadPath)) {

	            Files.createDirectories(uploadPath);
	        }

	        Path targetLocation =
	                uploadPath.resolve(fileName);

	        Files.copy(
	                file.getInputStream(),
	                targetLocation,
	                StandardCopyOption.REPLACE_EXISTING
	        );

	        FileUploadResponse response =
	                new FileUploadResponse();

	        response.setFileName(fileName);

	        // response.setFileDownloadUri(
	        //         "/uploads/" + fileName
	        // );

			response.setFileDownloadUri(
        "http://localhost:8080/uploads/" + fileName
);

	        response.setFileType(
	                file.getContentType()
	        );

	        response.setSize(
	                file.getSize()
	        );

	        return response;

	    } catch (IOException ex) {

	        throw new RuntimeException(
	                "Could not store file"
	        );
	    }
	}

    private void validateFile(
            MultipartFile file
    ) {

        if(file.isEmpty()) {

            throw new BadRequestException( "File must not be empty"
            );
        }

        String contentType =
                file.getContentType();

        if(contentType == null
                || (!contentType.startsWith("image/"))) {

            throw new BadRequestException(                    "Only image files are allowed. Invalid type: " + contentType
            );
        }
    }
}