package br.com.cartaodevacina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cartaodevacina.entidade.cartaoVacina;

@Repository
public interface CartaoVacinaRepository extends JpaRepository <cartaoVacina, Integer >{

}
