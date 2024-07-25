package com.Mortadha.gestion_user.Service;

import com.Mortadha.gestion_user.Entity.QRCodeResult;
import com.Mortadha.gestion_user.Repository.QrCodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QrCodeResultService {

    @Autowired
    private QrCodeRepository repository;

    public QRCodeResult saveResult(QRCodeResult data) {
        return repository.save(data);
    }

    public List<QRCodeResult> getAllResults() {
        return repository.findAll();
    }
}
