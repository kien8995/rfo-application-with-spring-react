package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.Volume;

@Transactional
@Repository
public interface VolumeRepository extends JpaRepository<Volume, Long> {

}
