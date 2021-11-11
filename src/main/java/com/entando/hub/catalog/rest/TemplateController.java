package com.entando.hub.catalog.rest;

import lombok.Data;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/api/example")
public class TemplateController {

    @RolesAllowed("mf-widget-admin")
    //@PreAuthorize("hasAuthority('ROLE_mf-widget-admin')")
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
