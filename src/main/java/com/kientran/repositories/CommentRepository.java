package com.kientran.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kientran.entities.Comment;

@Transactional
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

}
