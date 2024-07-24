package com.Mortadha.gestion_user.Service;

import com.Mortadha.gestion_user.Entity.Product;
import com.Mortadha.gestion_user.Entity.ProductHistory;
import com.Mortadha.gestion_user.Entity.User;
import com.Mortadha.gestion_user.Repository.ProductHistoryRepository;
import com.Mortadha.gestion_user.Repository.ProductRepository;
import com.Mortadha.gestion_user.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductHistoryRepository productHistoryRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<ProductHistory> getAllProductsHistory() {
        return productHistoryRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product addProduct(Product product, Long userId) {
        Product savedProduct = productRepository.save(product);
        logHistory(savedProduct, userId, "ADD");
        return savedProduct;
    }

    public Product updateProduct(Product product, Long userId) {
        Product updatedProduct = productRepository.save(product);
        logHistory(updatedProduct, userId, "UPDATE");
        return updatedProduct;
    }

    public void deleteProduct(Long id, Long userId) {
        Product product = productRepository.findById(id).orElse(null);
        if (product != null) {
            productRepository.deleteById(id);
            logHistory(product, userId, "DELETE");
        }
    }

    private void logHistory(Product product, Long userId, String operation) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            ProductHistory history = new ProductHistory();
            history.setProductName(product.getName());
            history.setUserMatricule(user.getMatricule());
            history.setOperation(operation);
            history.setOperationTime(LocalDateTime.now());
            productHistoryRepository.save(history);
        }
    }
}
