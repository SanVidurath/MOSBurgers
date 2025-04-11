package edu.icet.ecom.controller;

import edu.icet.ecom.dto.Customer;
import edu.icet.ecom.service.custom.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class CustomerController {

    final CustomerService customerService;

    @PostMapping(value = "/cart", produces = "application/json")
    public ResponseEntity<Map<String, String>> addCustomer(@Valid @RequestBody Customer customer){
        customerService.add(customer);
        Map<String, String> response = new HashMap<>();
        response.put("message", "customer registered successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
