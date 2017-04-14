package com.ferdisonmezay.tutorials.genericrestapi.model;

import javax.persistence.Column;

public class FooBar extends BaseModel {

	private static final long serialVersionUID = -8808785226422177770L;
	
	@Column(name="foo_id")
	private Integer fooId;
	
	@Column(name="bar_id")
	private Integer barId;

	public Integer getFooId() {
		return fooId;
	}

	public void setFooId(Integer fooId) {
		this.fooId = fooId;
	}

	public Integer getBarId() {
		return barId;
	}

	public void setBarId(Integer barId) {
		this.barId = barId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
