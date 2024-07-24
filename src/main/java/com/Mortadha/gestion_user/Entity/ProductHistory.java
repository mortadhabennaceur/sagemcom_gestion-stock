package com.Mortadha.gestion_user.Entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "product_history")
public class ProductHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "history_id", length = 255)
    private Long historyId;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "matricule")
    private String userMatricule;

    @Column(name = "operation", length = 255)
    private String operation;

    @Column(name = "operation_time")
    private LocalDateTime operationTime;

    public ProductHistory() {
    }

    public ProductHistory(Long historyId, String productName, String userMatricule, String operation, LocalDateTime operationTime) {
        this.historyId = historyId;
        this.productName = productName;
        this.userMatricule = userMatricule;
        this.operation = operation;
        this.operationTime = operationTime;
    }

    public Long getHistoryId() {
        return historyId;
    }

    public void setHistoryId(Long historyId) {
        this.historyId = historyId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getUserMatricule() {
        return userMatricule;
    }

    public void setUserMatricule(String userMatricule) {
        this.userMatricule = userMatricule;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public LocalDateTime getOperationTime() {
        return operationTime;
    }

    public void setOperationTime(LocalDateTime operationTime) {
        this.operationTime = operationTime;
    }

    @Override
    public String toString() {
        return "ProductHistory{" +
                "historyId=" + historyId +
                ", productName='" + productName + '\'' +
                ", userMatricule='" + userMatricule + '\'' +
                ", operation='" + operation + '\'' +
                ", operationTime=" + operationTime +
                '}';
    }
}
