package com.Mortadha.gestion_user.Controller;

import com.Mortadha.gestion_user.Entity.User;
import com.Mortadha.gestion_user.Service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    // Register new user
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    // Login user
    @PostMapping("/login")
    public String loginUser(@RequestBody LoginRequest loginRequest) {
        boolean isAuthenticated = userService.loginUser(loginRequest.getMatricule(), loginRequest.getPassword());
        if (isAuthenticated) {
            return "Login successful";
        } else {
            return "Invalid matricule or password";
        }
    }

    // Get user ID by matricule
    @GetMapping("/{matricule}/id")
    public ResponseEntity<Long> getUserIdByMatricule(@PathVariable String matricule) {
        User user = userService.findByMatricule(matricule);
        if (user != null) {
            return ResponseEntity.ok(user.getUser_id());  // Use getUserId() instead of getId()
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    // Inner class to hold login request data
    public static class LoginRequest {
        private String matricule;
        private String password;

        // Getters and setters
        public String getMatricule() {
            return matricule;
        }

        public void setMatricule(String matricule) {
            this.matricule = matricule;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
