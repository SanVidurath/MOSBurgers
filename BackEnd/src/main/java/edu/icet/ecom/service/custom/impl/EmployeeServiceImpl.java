package edu.icet.ecom.service.custom.impl;

import edu.icet.ecom.dto.Employee;
import edu.icet.ecom.entity.EmployeeEntity;
import edu.icet.ecom.repository.custom.EmployeeRepository;
import edu.icet.ecom.service.custom.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    final EmployeeRepository employeeRepository;
    final ModelMapper modelMapper;
    final PasswordEncoder passwordEncoder;

    @Override
    public void add(Employee employee) {
        EmployeeEntity employeeEntity = modelMapper.map(employee, EmployeeEntity.class);
        employeeEntity.setPassword(passwordEncoder.encode(employeeEntity.getPassword()));
        employeeRepository.save(employeeEntity);
    }
}
