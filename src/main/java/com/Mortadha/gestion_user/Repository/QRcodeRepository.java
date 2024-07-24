package com.Mortadha.gestion_user.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QrCodeResultRepository extends JpaRepository<QrCodeResult, Long> {
}
