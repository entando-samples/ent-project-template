package com.entando.hub.catalog.rest;

import lombok.Data;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/example")
public class TemplateController {
    @CrossOrigin
    @GetMapping("/")
    public MyResponse getExample() {
        return new MyResponse("test Data");
    }


    @Data
    public static class MyResponse{
        private final String payload;
    }

}
