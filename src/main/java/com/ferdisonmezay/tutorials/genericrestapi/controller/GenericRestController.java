package com.ferdisonmezay.tutorials.genericrestapi.controller;

import com.ferdisonmezay.tutorials.genericrestapi.model.BaseModel;
import com.ferdisonmezay.tutorials.genericrestapi.service.BaseService;

public class GenericRestController<T extends BaseModel, S extends BaseService<T>> {
	
}
