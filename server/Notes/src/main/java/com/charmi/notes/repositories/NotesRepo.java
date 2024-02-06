package com.charmi.notes.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.charmi.notes.entities.Notes;
import com.charmi.notes.entities.User;

public interface NotesRepo extends JpaRepository<Notes, Integer> {
    List<Notes> findByUser(User user);
}
