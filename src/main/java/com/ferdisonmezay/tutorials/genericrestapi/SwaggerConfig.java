package com.ferdisonmezay.tutorials.genericrestapi;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                             
          .apis(RequestHandlerSelectors.any())              
          .paths(PathSelectors.any())                          
          .build()
          .apiInfo(apiInfo())
          .useDefaultResponseMessages(false)                                   
          ;    
        
    }
    
    private ApiInfo apiInfo() {
    	
    	ApiInfoBuilder apiInfoBuilder = new ApiInfoBuilder();
    	apiInfoBuilder.title("Generic REST API");
    	apiInfoBuilder.description("Simple REST API Generation");
    	apiInfoBuilder.version("0.0.1-SNAPSHOT");
    	apiInfoBuilder.contact(new Contact("Ferdi Sonmezay", "http://ferdisonmezay.com", "hi@ferdisonmezay.com"));
    	apiInfoBuilder.license("Apache License, Version 2.0");
    	apiInfoBuilder.licenseUrl("https://opensource.org/licenses/Apache-2.0");
    	
    	return apiInfoBuilder.build();
    }
    
}
