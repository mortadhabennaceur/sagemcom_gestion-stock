package com.Mortadha.gestion_user.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id",length = 255)
    private Long user_id;
    @Column(name = "nom",length = 255)
    private String nom;
    @Column(name = "prenom",length = 255)
    private String prenom;
    @Column(name = "role",length = 255)
    private String role;
    @Column(name = "matricule",length = 255)
    private String matricule;
    @Column(name = "password",length = 255)
    private String password;

    public User(Long user_id, String nom, String prenom, String role, String matricule, String passwor) {
        this.user_id = user_id;
        this.nom = nom;
        this.prenom = prenom;
        this.role = role;
        this.matricule = matricule;
        this.password = passwor;
    }

    public User() {
    }

    public long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

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

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", role='" + role + '\'' +
                ", matricule='" + matricule + '\'' +
                ", passwor='" + password + '\'' +
                '}';
    }
}
