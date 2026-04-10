package br.com.cartaodevacina.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cartaodevacina.entity.Cartao;
import br.com.cartaodevacina.servece.CartaoService;

@RestController
@RequestMapping("/cartaovacina")
public class CartaoController {

	@Autowired
	CartaoService service;

	@GetMapping("/buscar")
	public List<Cartao> buscar(String cpf) {

		List<Cartao> list = service.buscaPorCpf(cpf);

		return list;

	}

	@PostMapping("/salvar")
	public Cartao salvar(@RequestBody Cartao cartaoVacina) {

		Cartao cartao = service.salvar(cartaoVacina);

		return cartao;
	}

}
