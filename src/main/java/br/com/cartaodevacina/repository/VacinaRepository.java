package br.com.cartaodevacina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cartaodevacina.entity.Vacina;

@Repository
public interface VacinaRepository extends JpaRepository<Vacina, Integer> {

}
