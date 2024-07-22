package com.Mortadha.gestion_user.Controller;

import com.Mortadha.gestion_user.Entity.Product;
import com.Mortadha.gestion_user.Entity.ProductHistory;
import com.Mortadha.gestion_user.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/api/v1/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/getallproducts")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping(path = "/getallproductshistory")
    public List<ProductHistory> getAllProductsHistory() {
        return productService.getAllProductsHistory();
    }

    @GetMapping("/getproduct/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping(path = "/addproduct")
    public Product addProduct(@RequestBody Product product, @RequestParam Long userId) {
        return productService.addProduct(product, userId);
    }

    @PutMapping("/updateproduct/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product, @RequestParam Long userId) {
        product.setProductId(id);
        return productService.updateProduct(product, userId);
    }

    @DeleteMapping("/deleteproduct/{id}")
    public void deleteProduct(@PathVariable Long id, @RequestParam Long userId) {
        productService.deleteProduct(id, userId);
    }
}
