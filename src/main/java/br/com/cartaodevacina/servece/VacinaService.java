package br.com.cartaodevacina.servece;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cartaodevacina.entity.Vacina;
import br.com.cartaodevacina.repository.VacinaRepository;

@Service
public class VacinaService {

	@Autowired
	VacinaRepository repository;

	public List<Vacina> buscarTodas() {

		List<Vacina> listaVacina = repository.findAll();

		return listaVacina;

	}

}
