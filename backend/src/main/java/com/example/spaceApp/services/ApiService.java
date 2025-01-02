package com.example.spaceApp.services;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import org.springframework.web.util.UriComponentsBuilder;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;

@Service
public class ApiService {

    private final WebClient.Builder webClientBuilder;

    @Value("${external.api.key}")
    private String apiKey;

    public ApiService(WebClient.Builder webClientBuilder) {
        this.webClientBuilder = webClientBuilder;
    }

    public Mono<JsonNode> getApod() {
        String url = UriComponentsBuilder.fromHttpUrl("https://api.nasa.gov/planetary/apod")
                .queryParam("api_key", apiKey)
                .toUriString();

        return webClientBuilder.build()
                .get()
                .uri(url)
                .retrieve()
                .onStatus(status -> status.is4xxClientError(), clientResponse -> {
                    return Mono.error(new RuntimeException("Błąd klienta: " + clientResponse.statusCode()));
                })
                .onStatus(status -> status.is5xxServerError(), clientResponse -> {
                    return Mono.error(new RuntimeException("Błąd serwera: " + clientResponse.statusCode()));
                })
                .bodyToMono(JsonNode.class);
    }

    public Mono<JsonNode> getMarsPhoto(LocalDate date) {
        String url = UriComponentsBuilder.fromHttpUrl("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos")
                .queryParam("earth_date", date.toString()) // LocalDate automatycznie formatuje do yyyy-MM-dd
                .queryParam("api_key", apiKey)
                .toUriString();

        return webClientBuilder.build()
                .get()
                .uri(url)
                .retrieve()
                .onStatus(status -> status.is4xxClientError(), clientResponse -> {
                    return Mono.error(new RuntimeException("Client error: " + clientResponse.statusCode()));
                })
                .onStatus(status -> status.is5xxServerError(), clientResponse -> {
                    return Mono.error(new RuntimeException("Server error: " + clientResponse.statusCode()));
                })
                .bodyToMono(JsonNode.class);
    }
}
