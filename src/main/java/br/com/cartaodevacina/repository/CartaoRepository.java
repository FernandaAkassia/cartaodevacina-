package br.com.cartaodevacina.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cartaodevacina.entity.Cartao;

@Repository
public interface CartaoRepository extends JpaRepository<Cartao, Integer> {

	List<Cartao> findByPacienteCpf(String cpf);

}
