package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.VolumeRestrictionType;

@Transactional
@Repository
public interface VolumeRestrictionTypeRepository extends CrudRepository<VolumeRestrictionType, Long> {

}
