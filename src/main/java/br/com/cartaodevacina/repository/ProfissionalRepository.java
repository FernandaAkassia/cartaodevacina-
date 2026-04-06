package br.com.cartaodevacina.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cartaodevacina.entidade.Profissional;

public interface ProfissionalRepository extends JpaRepository<Profissional, Integer>{

}
