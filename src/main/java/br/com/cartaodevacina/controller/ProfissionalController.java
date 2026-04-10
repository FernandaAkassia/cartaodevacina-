package br.com.cartaodevacina.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cartaodevacina.entity.Profissional;
import br.com.cartaodevacina.servece.ProfissionalService;

@RestController
@RequestMapping("/profissinoal")
public class ProfissionalController {

	@Autowired
	ProfissionalService service;

	@GetMapping("/login")
	public Profissional buscarPorCpfSenha(String cpf, String senha) {

		Profissional profissional = service.login(cpf, senha);

		return profissional;

	}

}
