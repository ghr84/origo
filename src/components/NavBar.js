import React, { useState } from 'react';
import ModalOrder from './ModalOrder';

const NavBar = ({setBusinessKey}) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="nav-bar">
            <div className="orders"></div>
            <div onClick={() =>
                setOpenModal(true)} className="add"></div>

            <div className="notification"></div>
            
            {openModal ? <ModalOrder setBusinessKey={setBusinessKey} closeModal={()=>{
                setOpenModal(false)
            }} /> : ""}
        </div>

    )
}

export default NavBar;