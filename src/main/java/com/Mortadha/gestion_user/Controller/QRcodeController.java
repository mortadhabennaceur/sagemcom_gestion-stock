package com.Mortadha.gestion_user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/qrcode")
public class QrCodeResultController {

    @Autowired
    private QrCodeResultService service;

    @PostMapping("/scan")
    public QrCodeResult handleScanResult(@RequestBody String data) {
        return service.saveResult(data);
    }

    @GetMapping("/results")
    public List<QrCodeResult> getAllResults() {
        return service.getAllResults();
    }
}
