package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.FundingMethod;

@Transactional
@Repository
public interface FundingMethodRepository extends CrudRepository<FundingMethod, Long> {

}
