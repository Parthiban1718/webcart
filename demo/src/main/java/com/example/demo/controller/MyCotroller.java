package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.jwtutil.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;



@RestController
public class MyCotroller {
    
    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/")
    public ResponseEntity<String> mymthod() {
        String a = jwtUtil.generateToken("welcome@gmail.com");
        return ResponseEntity.ok().body(a);
    }
    
    @PostMapping("/validatetoken")
    public ResponseEntity<String> postMethodName(@RequestHeader("Authorization") String token) {
        String email = jwtUtil.extractUsername(token);
        return ResponseEntity.ok().body(email);
    }
    

}
