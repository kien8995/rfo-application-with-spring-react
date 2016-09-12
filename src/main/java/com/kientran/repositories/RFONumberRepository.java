package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.RFONumber;

@Transactional
@Repository
public interface RFONumberRepository extends JpaRepository<RFONumber, Long> {

	public RFONumber findByRfoNumber(String rfoNumber);
}
