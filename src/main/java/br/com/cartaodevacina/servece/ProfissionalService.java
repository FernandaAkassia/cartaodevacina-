package br.com.cartaodevacina.servece;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cartaodevacina.repository.ProfissionalRepository;

@Service
public class ProfissionalService {

	@Autowired
	ProfissionalRepository profissionalRepository;

	public boolean login(String cpf, String senha) {

		boolean prof = profissionalRepository.existsByCpfAndSenha(cpf, senha);

		return prof;

	}

}
