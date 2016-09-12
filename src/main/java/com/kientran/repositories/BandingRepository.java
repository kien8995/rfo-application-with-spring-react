package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.Banding;

@Transactional
@Repository
public interface BandingRepository extends JpaRepository<Banding, Long> {

}
