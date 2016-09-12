package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.RegionType;

@Transactional
@Repository
public interface RegionTypeRepository extends JpaRepository<RegionType, Long> {

}
