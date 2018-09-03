package com.example.flower.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.example.flower.entity.*;

public interface FlowerRepository extends CrudRepository<Flower, Long> {
	List<Flower> findByPrice(double price);

}
