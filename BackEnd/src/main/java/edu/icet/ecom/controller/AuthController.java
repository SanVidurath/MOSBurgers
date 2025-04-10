package edu.icet.ecom.controller;

import edu.icet.ecom.dto.LoginRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {

    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<Map<String,String>> login(@RequestBody LoginRequest loginRequest){
        HashMap<String, String> response = new HashMap<>();
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getPassword())
            );

            response.put("message", "Login successful");
            return ResponseEntity.status(HttpStatus.OK).body(response);

        }catch (AuthenticationException ex){
            response.put("error", "Invalid email or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}
