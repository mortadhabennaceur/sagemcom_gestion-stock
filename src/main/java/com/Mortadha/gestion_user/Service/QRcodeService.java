package com.Mortadha.gestion_user.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QrCodeResultService {

    @Autowired
    private QrCodeResultRepository repository;

    public QrCodeResult saveResult(String data) {
        QrCodeResult result = new QrCodeResult(data);
        return repository.save(result);
    }

    public List<QrCodeResult> getAllResults() {
        return repository.findAll();
    }
}
