package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.Company;

@Transactional
@Repository
public interface CompanyRepository extends CrudRepository<Company, Long> {

}
