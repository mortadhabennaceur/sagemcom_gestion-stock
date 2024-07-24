package com.Mortadha.gestion_user.Repository;

import com.Mortadha.gestion_user.Entity.ProductHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductHistoryRepository extends JpaRepository<ProductHistory,Long> {
}
