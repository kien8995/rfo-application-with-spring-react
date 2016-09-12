package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.VolumeRestrictionType;

@Transactional
@Repository
public interface VolumeRestrictionTypeRepository extends JpaRepository<VolumeRestrictionType, Long> {

}
