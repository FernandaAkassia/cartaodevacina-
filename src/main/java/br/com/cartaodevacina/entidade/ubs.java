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
	
	@Column
	String cep;
	
	@Column
	String rua;
	
	@Column
	String n;
	
	@Column
	String estado;
	
	@Column
	String cidade;
	
	@Column
	String bairro;

	@Column
	String ddd;
	
	@Column
	String fone;
	
}
