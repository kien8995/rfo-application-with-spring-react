package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.CreditNoteText;

@Transactional
@Repository
public interface CreditNoteTextRepository extends JpaRepository<CreditNoteText, Long> {

}
