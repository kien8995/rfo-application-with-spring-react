package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.AgreementDocument;

@Transactional
@Repository
public interface AgreementDocumentRepository extends JpaRepository<AgreementDocument, Long> {

}
