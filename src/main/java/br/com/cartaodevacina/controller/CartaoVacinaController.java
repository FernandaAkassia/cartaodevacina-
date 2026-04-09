package br.com.cartaodevacina.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cartaodevacina.entity.CartaoVacina;
import br.com.cartaodevacina.servece.CartaoVacinaService;

@RestController
@RequestMapping("/cartaovacina")
public class CartaoVacinaController {

	@Autowired
	CartaoVacinaService service;

	@GetMapping("/buscar")
	public List<CartaoVacina> buscar(String cpf) {

		List<CartaoVacina> list = service.buscaPorCpf(cpf);

		return list;

	}

	@PostMapping("/salvar")
	public CartaoVacina salvar(@RequestBody CartaoVacina cartaoVacina) {

		CartaoVacina cv = service.salvar(cartaoVacina);

		return cv;
	}

}
