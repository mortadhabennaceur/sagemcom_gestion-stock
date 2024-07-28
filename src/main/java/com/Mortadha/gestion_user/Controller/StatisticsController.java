package com.Mortadha.gestion_user.Controller;

import com.Mortadha.gestion_user.Service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/statistics")
public class StatisticsController {

    @Autowired
    private StatisticsService statisticsService;

    @GetMapping("/product-count")
    public Map<String, Long> getProductCount() {
        return statisticsService.getProductCount();
    }

    @GetMapping("/total-quantity")
    public Map<String, Integer> getTotalQuantity() {
        return statisticsService.getTotalQuantity();
    }

    @GetMapping("/user-activity")
    public Map<String, Map<String, Long>> getUserActivity() {
        return statisticsService.getUserActivity();
    }

    // Add more endpoints as needed for other statistics
}
