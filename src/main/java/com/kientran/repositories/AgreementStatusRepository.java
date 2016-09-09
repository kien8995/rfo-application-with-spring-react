package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.AgreementStatus;

@Transactional
@Repository
public interface AgreementStatusRepository extends CrudRepository<AgreementStatus, Long> {

}
