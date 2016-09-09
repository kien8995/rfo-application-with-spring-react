package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.AgreementDealer;

@Transactional
@Repository
public interface AgreementDealerRepository extends CrudRepository<AgreementDealer, Long> {

}
