package br.com.cartaodevacina.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cartaodevacina.entidade.cartaoVacina;

public interface CartaoVacinaRepository extends JpaRepository <cartaoVacina, Integer >{

}
