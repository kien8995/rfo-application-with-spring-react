package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.CommentType;

@Transactional
@Repository
public interface CommentTypeRepository extends CrudRepository<CommentType, Long> {

}
