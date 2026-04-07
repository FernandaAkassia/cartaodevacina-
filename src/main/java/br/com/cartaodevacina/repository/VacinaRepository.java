package br.com.cartaodevacina.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cartaodevacina.entidade.Vacina;

public interface VacinaRepository extends JpaRepository<Vacina, Integer> {

}
