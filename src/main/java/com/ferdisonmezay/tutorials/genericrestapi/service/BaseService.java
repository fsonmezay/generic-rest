package com.ferdisonmezay.tutorials.genericrestapi.service;

import java.util.List;

import com.ferdisonmezay.tutorials.genericrestapi.model.BaseModel;

public interface BaseService<T extends BaseModel> {
	
	public List<T> list();
	
	public T save(T entity);
	
	public T update(T entity);
	
	public void delete(Long id);
	
	public T getById(Long id);
	
	// HEAD, OPTIONS
}
