package com.ferdisonmezay.tutorials.genericrestapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="FOO")
public class Foo extends BaseModel {
	
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
