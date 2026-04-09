package br.com.cartaodevacina.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cartaodevacina.entity.Paciente;
import br.com.cartaodevacina.servece.PacienteService;

@RestController
@RequestMapping("/paciente")
public class PacienteController {

	@Autowired
	PacienteService service;
	
	@GetMapping("/buscar")
	public Paciente burcar(String cpf){
		
		Paciente paciente = service.buscarPorCpf(cpf);
				
		return paciente;
	}
	
	@PostMapping("/salvar")
	public Paciente salvar (@RequestBody Paciente paciente) {
		
		Paciente pac = service.salvarPaciente(paciente);
		
		return pac;
	}
	@GetMapping("/chamar")
	public Optional<Paciente> chamar(Integer id ) {
		
		Optional<Paciente> paciente = service.buscarPorId(id);
		
		return paciente;
		
	}
}
