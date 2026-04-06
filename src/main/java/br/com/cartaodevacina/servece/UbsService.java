package br.com.cartaodevacina.servece;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cartaodevacina.entidade.Ubs;
import br.com.cartaodevacina.repository.UbsRepository;

@Service
public class UbsService {

	@Autowired
	UbsRepository ubsRepository;

	public Optional<Ubs> buscarPorId(int numero) {

		return ubsRepository.findById(numero);

	}
}
