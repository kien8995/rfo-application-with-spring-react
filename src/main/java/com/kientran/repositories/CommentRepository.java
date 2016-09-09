package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.Comment;

@Transactional
@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {

}
