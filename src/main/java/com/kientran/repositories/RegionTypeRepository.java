package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.RegionType;

@Transactional
@Repository
public interface RegionTypeRepository extends CrudRepository<RegionType, Long> {

}
