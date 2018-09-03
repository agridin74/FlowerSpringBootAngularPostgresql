package com.example.flower;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class FlowerSpringBootRestAngularPostgresqlApplication {

	private static Logger logger = LoggerFactory.getLogger(FlowerSpringBootRestAngularPostgresqlApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(FlowerSpringBootRestAngularPostgresqlApplication.class, args);
		logger.info("<------------START APP----------->");
	}
}
