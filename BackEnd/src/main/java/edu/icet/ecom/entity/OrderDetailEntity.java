package edu.icet.ecom.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "order_detail")
public class OrderDetailEntity {

    @EmbeddedId
    private OrderDetailsId id;

    @ManyToOne()
    @MapsId("prodId")
    @JoinColumn(name = "product_id")
    private ProductEntity productEntity;

    @ManyToOne()
    @MapsId("orderId")
    @JoinColumn(name = "order_id")
    private OrderEntity orderEntity;

    @Column(name = "unit_price", nullable = false)
    private Double unitPrice;

    @Column(name = "quantity_purchased", nullable = false)
    private Integer quantityPurchased;

    public OrderDetailEntity( ProductEntity productEntity, OrderEntity orderEntity, Double unitPrice, Integer qtyPurchased) {
        if (productEntity == null || orderEntity == null || orderEntity.getId() == null) {
            throw new IllegalArgumentException("ProductEntity and OrderEntity with ID cannot be null");
        }
        this.orderEntity = orderEntity;
        this.productEntity = productEntity;
        this.unitPrice = unitPrice;
        this.quantityPurchased = qtyPurchased;

        // Ensure the composite key is initialized
        this.id = new OrderDetailsId(orderEntity.getId(), productEntity.getId());
    }

}

