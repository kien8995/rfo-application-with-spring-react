package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.Address;

@Transactional
@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

}
