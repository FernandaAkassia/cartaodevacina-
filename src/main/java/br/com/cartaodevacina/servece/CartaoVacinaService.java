package br.com.cartaodevacina.servece;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cartaodevacina.entity.CartaoVacina;
import br.com.cartaodevacina.entity.Paciente;
import br.com.cartaodevacina.repository.CartaoVacinaRepository;

@Service
public class CartaoVacinaService {

	@Autowired
	CartaoVacinaRepository cartaoVacinaRepository;

	@Autowired
	PacienteService pacienteServece;

	public CartaoVacina salvar(CartaoVacina cartaoVacina) {

		CartaoVacina cartaoVacinaSalvo = cartaoVacinaRepository.save(cartaoVacina);

		Optional<Paciente> buscaPacientePorId = pacienteServece.buscarPorId(cartaoVacinaSalvo.getPaciente().getId());

		List<CartaoVacina> ultimoRegistroDoCartao = buscaPorCpf(buscaPacientePorId.get().getCpf());

		return ultimoRegistroDoCartao.getLast();

	}

	public List<CartaoVacina> buscaPorCpf(String cpf) {

		List<CartaoVacina> lista = cartaoVacinaRepository.findByPacienteCpf(cpf);

		return lista;

	}

}
