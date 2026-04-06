package br.com.cartaodevacina.servece;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cartaodevacina.entidade.Ubs;
import br.com.cartaodevacina.repository.UbsRepository;

@Service
public class UbsService {

	@Autowired
	UbsRepository ubsRepository; 
	
	public Ubs buscar(int numero) {
		
		ubsRepository.findById(numero);
		
		return null;
		// TODO Auto-generated method stub

	}
}
