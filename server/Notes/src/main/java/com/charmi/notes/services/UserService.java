package com.charmi.notes.services;

import java.util.List;

import com.charmi.notes.payload.NotesDto;
import com.charmi.notes.payload.UserDto;
import com.charmi.notes.payload.ApiRes;

public interface UserService {
    //create
    UserDto createUser(UserDto userDto);
    //update
    UserDto updateUser(UserDto userDto,Integer userId);
    //delete
    void deleteUser(Integer userId);
    //get
    UserDto getUser(Integer userId);
    //getAll
    List<UserDto> getAllUser();

    //user login
    UserDto userLogin(String email, String password);
    
}
