package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.RFONumber;

@Transactional
@Repository
public interface RFONumberRepository extends CrudRepository<RFONumber, Long> {

	public RFONumber findByRfoNumber(String rfoNumber);
}
