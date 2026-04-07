package br.com.cartaodevacina.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartaoVacina {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;

	@JoinColumn
	@ManyToOne
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
