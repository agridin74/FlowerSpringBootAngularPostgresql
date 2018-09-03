package com.example.flower.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.flower.entity.*;
import com.example.flower.repository.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class FlowerController {
	private static Logger logger = LoggerFactory.getLogger(FlowerController.class);
	@Autowired
	FlowerRepository repository;
	
	@GetMapping("/flowers")
	public List<Flower> getAllFlowers(){
		logger.info("Get all flowers...");
		List<Flower> flowers = new ArrayList<>();
		repository.findAll().forEach(flowers::add);
		return flowers;
	}
	
	@PostMapping(value = "/flowers/create")
	public Flower postFlower(@RequestBody Flower flower) {
		logger.info("Create new flower...");
		Flower newFlower = repository.save(new Flower(flower.getName(), flower.getPrice()));
		return newFlower;
	}
	
	@DeleteMapping("/flowers/{id}")
	public ResponseEntity<String> deleteFlower(@PathVariable("id") long id){
		logger.info("Dlete Flower with ID = "+ id + "...");
		repository.deleteById(id);
		return new ResponseEntity<>("Flower has been deleted!", HttpStatus.OK);
	}
	
	@DeleteMapping("/flowers/delete")
	public ResponseEntity<String> deleteAllFlowers(){
		logger.info("Delete all Flowers...");
		repository.deleteAll();
		return new ResponseEntity<>("Allflowers have been deleted!", HttpStatus.OK);
	}
	
	@GetMapping(value = "flowers/price/{price}")
	public List<Flower> findByPrice(@PathVariable double price) {
		List<Flower> flowers = repository.findByPrice(price);
		return flowers;
	}
	
	@PutMapping("/flowers/{id}")
	public ResponseEntity<Flower> updateFlower(@PathVariable("id") long id, @RequestBody Flower flower){
		logger.info("Update flower with ID = " + id + "...");
		Optional<Flower> flowerData = repository.findById(id);
		if(flowerData.isPresent()) {
			Flower updFlower = flowerData.get();
			updFlower.setName(flower.getName());
			updFlower.setPrice(flower.getPrice());
			updFlower.setActive(flower.isActive());
			return new ResponseEntity<>(repository.save(updFlower), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
