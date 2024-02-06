import React, { useState } from 'react';
import { Addnote } from '../component/Addnote';
import { Singup } from './Singup';

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const data = { "id": "", "title": "", "desc": "" };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    window.location.reload();
  };

  return (
    <>
    <div className='nav-container'>
      <ul className="nav nav-pills p-3 bg-white mb-3 rounded-pill align-items-center">
        <li className="nav-item">
          <a
            href="/"
            className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active"
            id="all-category"
          >
            All Notes
          </a>
        </li>
        {sessionStorage.getItem("email") ? 
          <li className="nav-item ml-auto">
            <a
              className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
              id="add-notes"
              onClick={handleShow}
            >
              Add Notes
            </a>
          </li> : null}
       
        {!sessionStorage.getItem("email") ?
          <li className="nav-item mr-auto">
            <a
              className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
              id="add-notes"
              onClick={handleShow2}
            >
              Login
            </a>
          </li>
            :
            <li className="nav-item mr-auto">
              <a
                className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
                id="add-notes"
                onClick={handleLogout}
              >
                Logout
              </a>
            </li>}
      </ul>
      </div>
      {show && <Addnote handleClose={handleClose} show={show} data={data} edit={false} />}
      {show2 && <Singup handleClose2={handleClose2} show2={show2} />}
    </>
  );
};
