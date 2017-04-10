package com.ferdisonmezay.tutorials.genericrestapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="bar")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Bar extends BaseModel {
	
	private static final long serialVersionUID = -1833470956169842323L;

	@Column(name="property_name")
	private String propertyName; 

	@Column(name="property_value")
	private String propertyValue;

	public String getPropertyName() {
		return propertyName;
	}

	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}

	public String getPropertyValue() {
		return propertyValue;
	}

	public void setPropertyValue(String propertyValue) {
		this.propertyValue = propertyValue;
	}
	
	
}
