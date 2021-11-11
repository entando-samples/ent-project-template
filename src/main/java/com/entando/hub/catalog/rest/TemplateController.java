package com.entando.hub.catalog.rest;

import lombok.Data;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/api/example")
public class TemplateController {

    @RolesAllowed("et-first-role")
    //@PreAuthorize("hasAuthority('ROLE_et-first-role')")
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
