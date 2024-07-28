package com.Mortadha.gestion_user.Service;

import com.Mortadha.gestion_user.Entity.Product;
import com.Mortadha.gestion_user.Entity.ProductHistory;
import com.Mortadha.gestion_user.Repository.ProductHistoryRepository;
import com.Mortadha.gestion_user.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class StatisticsService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductHistoryRepository productHistoryRepository;

    public Map<String, Long> getProductCount() {
        long count = productRepository.count();
        Map<String, Long> result = new HashMap<>();
        result.put("productCount", count);
        return result;
    }

    public Map<String, Integer> getTotalQuantity() {
        int totalQuantity = productRepository.findAll().stream().mapToInt(Product::getQuantite).sum();
        Map<String, Integer> result = new HashMap<>();
        result.put("totalQuantity", totalQuantity);
        return result;
    }

    public Map<String, Map<String, Long>> getUserActivity() {
        List<ProductHistory> historyList = productHistoryRepository.findAll();
        Map<String, Map<String, Long>> userActivity = new HashMap<>();

        for (ProductHistory history : historyList) {
            String userMatricule = history.getUserMatricule();
            String operation = history.getOperation();

            userActivity.putIfAbsent(userMatricule, new HashMap<>());
            Map<String, Long> operations = userActivity.get(userMatricule);
            operations.put(operation, operations.getOrDefault(operation, 0L) + 1);
        }

        return userActivity;
    }

    // Add more methods as needed for other statistics
}
