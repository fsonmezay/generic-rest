package com.ferdisonmezay.tutorials.genericrestapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ferdisonmezay.tutorials.genericrestapi.model.Bar;

@RestController
@RequestMapping("/bar")
public class BarController extends GenericRestController<Bar> {

}
