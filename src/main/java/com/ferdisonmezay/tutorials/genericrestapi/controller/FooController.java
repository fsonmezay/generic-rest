package com.ferdisonmezay.tutorials.genericrestapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ferdisonmezay.tutorials.genericrestapi.model.Foo;

@RestController
@RequestMapping("/foo")
public class FooController extends GenericRestController<Foo> {

}
