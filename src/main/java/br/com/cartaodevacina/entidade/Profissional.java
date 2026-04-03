package br.com.cartaodevacina.entidade;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table
public class Profissional {
	@Id
	int id;
	@Column
	@NotNull
	String nome;
	@Column
	@NotNull
	int registro;
	
}
