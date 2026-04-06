package br.com.cartaodevacina.entidade;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class cartaoVacina {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;

	@JoinColumn
	@OneToOne
	Paciente paciente;

	@JoinColumn
	@ManyToOne
	Vacina vacina;

	@Column
	String lote;

	@JoinColumn
	@ManyToOne
	Ubs ubs;

	@JoinColumn
	@ManyToOne
	Profissional profissional;

}
