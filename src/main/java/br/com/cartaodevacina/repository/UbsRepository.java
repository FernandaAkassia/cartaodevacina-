package br.com.cartaodevacina.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cartaodevacina.entity.Ubs;

@Repository
public interface UbsRepository extends JpaRepository<Ubs, Integer> {

	List<Ubs> findByNomeContaining(String nome);

}
