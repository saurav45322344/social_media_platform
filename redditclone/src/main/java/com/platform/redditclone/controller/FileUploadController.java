package com.platform.redditclone.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.platform.redditclone.dto.ApiResponse;
import com.platform.redditclone.dto.FileUploadResponse;
import com.platform.redditclone.service.FileStorageService;

@RestController
@RequestMapping("/api/upload")
public class FileUploadController {


    private final FileStorageService
            fileStorageService;
    
    public FileUploadController(FileStorageService
            fileStorageService) {
    	this.fileStorageService=fileStorageService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<FileUploadResponse>>
    upload(

            @RequestParam("file")
            MultipartFile file
    ) {

        FileUploadResponse uploadResult =
                fileStorageService.uploadFile(file);

        ApiResponse<FileUploadResponse> response =
                new ApiResponse<>();

        response.setSuccess(true);

        response.setMessage(
                "File uploaded successfully"
        );

        response.setData(uploadResult);

        return ResponseEntity.ok(response);
    }
}