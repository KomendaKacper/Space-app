package com.example.spaceApp.controllers;

import com.example.spaceApp.services.ApiService;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.time.LocalDate;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:5173/")
public class MainController {

    @Autowired
    private ApiService apiService;

    @GetMapping("/apod")
    public Mono<JsonNode> getApod(){
        return apiService.getApod();
    }

    @GetMapping("/mars-photo")
    public Mono<JsonNode> getMarsPhoto(){
        String dateString = "2020-12-20";
        return apiService.getMarsPhoto(LocalDate.parse(dateString));
    }
}
