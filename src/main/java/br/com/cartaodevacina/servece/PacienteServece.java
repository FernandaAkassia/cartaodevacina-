package br.com.cartaodevacina.servece;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cartaodevacina.entidade.Paciente;
import br.com.cartaodevacina.repository.PacienteRepository;

@Service
public class PacienteServece {

	@Autowired
	private PacienteRepository pacienteRepository;

	public Paciente buscarporcpf(String cpf) {

		Paciente retorno = pacienteRepository.findByCpf(cpf);
		System.out.println(retorno);

		return retorno;

	}

}
