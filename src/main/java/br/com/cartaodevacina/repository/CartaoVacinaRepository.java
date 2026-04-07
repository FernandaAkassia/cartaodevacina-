package br.com.cartaodevacina.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cartaodevacina.entidade.CartaoVacina;

@Repository
public interface CartaoVacinaRepository extends JpaRepository<CartaoVacina, Integer> {

	
	List<CartaoVacina> findByPacienteCpf(String cpf);
	
	
}
