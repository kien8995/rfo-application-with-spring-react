package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.Address;

@Transactional
@Repository
public interface AddressRepository extends CrudRepository<Address, Long> {

}
