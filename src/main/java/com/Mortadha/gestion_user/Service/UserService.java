package com.Mortadha.gestion_user.Service;

import com.Mortadha.gestion_user.Entity.User;
import com.Mortadha.gestion_user.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    // Add user method for registration
    public User addUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // Find user by matricule
    public User findByMatricule(String matricule) {
        return userRepository.findByMatricule(matricule).orElse(null);
    }

    // Login user method
    public boolean loginUser(String matricule, String password) {
        User user = findByMatricule(matricule);
        if (user != null && bCryptPasswordEncoder.matches(password, user.getPassword())) {
            return true;
        } else {
            return false;
        }
    }
}
