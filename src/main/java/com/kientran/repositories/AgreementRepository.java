package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.Agreement;
import com.kientran.entities.pk.AgreementPK;

@Transactional
@Repository
public interface AgreementRepository extends CrudRepository<Agreement, AgreementPK> {

}
