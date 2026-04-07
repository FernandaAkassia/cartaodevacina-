package br.com.cartaodevacina.servece;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cartaodevacina.entidade.CartaoVacina;
import br.com.cartaodevacina.repository.CartaoVacinaRepository;

@Service
public class CartaoVacinaService {

	@Autowired
	CartaoVacinaRepository cartaoVacinaRepository;

	public CartaoVacina salvar(CartaoVacina cartaoVacina) {

		System.out.println(cartaoVacinaRepository.save(cartaoVacina));
		return cartaoVacinaRepository.save(cartaoVacina);

	}

	public List<CartaoVacina> buscaPorCpf(String cpf) {

		List<CartaoVacina> lista = cartaoVacinaRepository.findByPacienteCpf(cpf);

		System.out.println(lista);

		return lista;

	}

}
