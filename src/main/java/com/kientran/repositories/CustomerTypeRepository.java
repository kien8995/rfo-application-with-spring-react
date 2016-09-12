package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.CustomerType;

@Transactional
@Repository
public interface CustomerTypeRepository extends JpaRepository<CustomerType, Long> {

}
