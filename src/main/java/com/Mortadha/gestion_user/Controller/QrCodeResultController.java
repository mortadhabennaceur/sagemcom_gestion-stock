package com.Mortadha.gestion_user.Controller;

import com.Mortadha.gestion_user.Entity.QRCodeResult;
import com.Mortadha.gestion_user.Service.QrCodeResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/qrcode")
public class QrCodeResultController {

    @Autowired
    private QrCodeResultService service;

    @PostMapping("/scan")
    public QRCodeResult handleScanResult(@RequestBody QRCodeResult data) {
        return service.saveResult(data);
    }

    @GetMapping("/results")
    public List<QRCodeResult> getAllResults() {
        return service.getAllResults();
    }
}
