package br.com.cartaodevacina.entidade;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table
@Entity
public class ubs {
	
	@Id
	int id;
	
	@Column
	String nome;
	
}
