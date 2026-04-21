package br.com.cartaodevacina.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

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
public class Cartao {

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

	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	LocalDate dataAplicacao;

	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	LocalDate dataRetorno;

}
