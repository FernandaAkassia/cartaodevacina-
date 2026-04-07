package br.com.cartaodevacina.servece;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cartaodevacina.entity.Paciente;
import br.com.cartaodevacina.repository.PacienteRepository;

@Service
public class PacienteServece {

	@Autowired
	private PacienteRepository pacienteRepository;

	public Paciente buscarPorCpf(String cpf) {

		Paciente retorno = pacienteRepository.findByCpf(cpf);
		System.out.println(retorno);

		return retorno;

	}

	public Paciente salvarPaciente(Paciente paciente) {

		Paciente retorno = pacienteRepository.save(paciente);

		return retorno;

	}

}
