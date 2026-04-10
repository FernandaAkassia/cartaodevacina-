package br.com.cartaodevacina.servece;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cartaodevacina.entity.Cartao;
import br.com.cartaodevacina.entity.Paciente;
import br.com.cartaodevacina.repository.CartaoRepository;

@Service
public class CartaoService {

	@Autowired
	CartaoRepository cartaoVacinaRepository;

	@Autowired
	PacienteService pacienteServece;

	public Cartao salvar(Cartao cartaoVacina) {

		Cartao cartaoVacinaSalvo = cartaoVacinaRepository.save(cartaoVacina);

		Optional<Paciente> buscaPacientePorId = pacienteServece.buscarPorId(cartaoVacinaSalvo.getPaciente().getId());

		List<Cartao> ultimoRegistroDoCartao = buscaPorCpf(buscaPacientePorId.get().getCpf());

		return ultimoRegistroDoCartao.getLast();

	}

	public List<Cartao> buscaPorCpf(String cpf) {

		List<Cartao> lista = cartaoVacinaRepository.findByPacienteCpf(cpf);

		return lista;

	}

}
