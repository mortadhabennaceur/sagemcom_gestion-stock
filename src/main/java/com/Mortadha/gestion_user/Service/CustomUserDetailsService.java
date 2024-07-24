package com.Mortadha.gestion_user.Service;

import com.Mortadha.gestion_user.Entity.User;
import com.Mortadha.gestion_user.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String matricule) throws UsernameNotFoundException {
        User user = userRepository.findByMatricule(matricule)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with matricule: " + matricule));
        return new org.springframework.security.core.userdetails.User(user.getMatricule(), user.getPassword(), new ArrayList<>());
    }
}
