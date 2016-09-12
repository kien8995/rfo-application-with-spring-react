package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.AgreementStatus;

@Transactional
@Repository
public interface AgreementStatusRepository extends JpaRepository<AgreementStatus, Long> {

}
