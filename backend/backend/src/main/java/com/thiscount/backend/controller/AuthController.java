package com.thiscount.backend.controller;

import com.thiscount.backend.dto.LoginRequest;
import com.thiscount.backend.dto.RegisterRequest;
import com.thiscount.backend.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    private final AuthenticationManager authenticationManager; 

    public AuthController(AuthService authService, AuthenticationManager authenticationManager) {
        this.authService = authService;
        this.authenticationManager = authenticationManager;
    }

    @GetMapping("/status")
    public ResponseEntity<?> getSystemStatus() {
        boolean isSetupRequired = authService.isFirstUser();
        return ResponseEntity.ok(Map.of("isSetupRequired", isSetupRequired));
    }

    @GetMapping("/admin/dashboard")
    public ResponseEntity<?> adminDashboard() {
        return ResponseEntity.ok("Welcome to Admin Dashboard!");
    }

    @PostMapping("/setup")
    public ResponseEntity<?> setupAdmin(@RequestBody RegisterRequest request) {
        try {
            authService.registerFirstAdmin(request.fullName(), request.email(), request.password());
            return ResponseEntity.ok(Map.of("message", "Admin created successfully! Setup complete."));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(403).body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            authService.registerUser(request);
            return ResponseEntity.ok(Map.of("message", "User registered successfully!"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "An error occurred during registration"));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            UsernamePasswordAuthenticationToken authToken = 
                new UsernamePasswordAuthenticationToken(request.email(), request.password());

            Authentication authentication = authenticationManager.authenticate(authToken);

            return ResponseEntity.ok(Map.of(
                "message", "Login Successful!", 
                "user", authentication.getName()
            ));

        } catch (AuthenticationException e) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid email or password"));
        }
    }
}