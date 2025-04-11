package edu.icet.ecom.dto;

import edu.icet.ecom.util.ItemType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    private Integer id;
    private String itemCode;
    private ItemType itemType;
    private String itemName;
    private Double unitPrice;
    private Double discount;
    private Integer quantityInStock;
    private List<OrderDetail> orderDetails = new ArrayList<>();
}
