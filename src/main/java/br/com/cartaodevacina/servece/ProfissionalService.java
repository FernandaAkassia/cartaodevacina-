package br.com.cartaodevacina.servece;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cartaodevacina.entity.Profissional;
import br.com.cartaodevacina.repository.ProfissionalRepository;

@Service
public class ProfissionalService {

	@Autowired
	ProfissionalRepository profissionalRepository;

	public Profissional login(String cpf, String senha) {

		Profissional profissional = profissionalRepository.findByCpfAndSenha(cpf, senha);

		return profissional;

	}

}
