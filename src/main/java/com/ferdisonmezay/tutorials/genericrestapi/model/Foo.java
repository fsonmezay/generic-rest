package com.ferdisonmezay.tutorials.genericrestapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="foo")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Foo extends BaseModel {
	
	private static final long serialVersionUID = -4422396830365416535L;
	

	@Column(name="name")
	private String name;
	
	@Column(name="age")
	private Integer age;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
}
