package edu.icet.ecom.controller;

import edu.icet.ecom.dto.Product;
import edu.icet.ecom.service.custom.ProductService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {

    private final ProductService productService;

    @GetMapping(value = "/items", produces = "application/json")
    public List<Product> getAll(HttpServletRequest request){
        return productService.getAll();
    }
}
