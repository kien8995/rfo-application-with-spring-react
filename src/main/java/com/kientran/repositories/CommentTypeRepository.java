package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.CommentType;

@Transactional
@Repository
public interface CommentTypeRepository extends JpaRepository<CommentType, Long> {

}
