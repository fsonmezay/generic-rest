package com.ferdisonmezay.tutorials.genericrestapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ferdisonmezay.tutorials.genericrestapi.model.FooBar;

@RestController
@RequestMapping("/foobar")
public class FooBarController extends GenericRestController<FooBar> {

}
