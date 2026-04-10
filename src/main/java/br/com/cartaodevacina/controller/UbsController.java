package br.com.cartaodevacina.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cartaodevacina.entity.Ubs;
import br.com.cartaodevacina.servece.UbsService;

@RestController
@RequestMapping("/ubs")
public class UbsController {

	@Autowired
	UbsService service;

	@GetMapping("/encontrar")
	public List<Ubs> list(String palavra) {

		List<Ubs> listaUbs = service.buscarPorAproximacao(palavra);
		return listaUbs;

	}

}
