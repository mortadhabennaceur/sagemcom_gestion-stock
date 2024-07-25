package com.Mortadha.gestion_user.Repository;
import com.Mortadha.gestion_user.Entity.QRCodeResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QrCodeRepository extends JpaRepository<QRCodeResult, Long> {
}