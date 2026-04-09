package br.com.cartaodevacina.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cartaodevacina.entity.Vacina;
import br.com.cartaodevacina.servece.VacinaService;

@RestController
@RequestMapping("/vacina")
public class VacinaController {

	@Autowired
	VacinaService service;
	
	@GetMapping("/pegarTodas")
	public List<Vacina> pegarTodas(){
		
		List<Vacina> pegarTodas = service.buscarTodas();
		return  pegarTodas;
		
	}
	
}
