package br.com.cartaodevacina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cartaodevacina.entidade.Ubs;

@Repository
public interface UbsRepository extends JpaRepository<Ubs, Integer>{

}
