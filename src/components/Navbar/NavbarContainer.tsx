import React from "react";
import {StoreType} from "../../index";
import Navbar from "./Navbar";

type NavbarPropsType = {
    store: StoreType
}

const NavbarContainer = (props: NavbarPropsType) => {

    return <Navbar sideBar={props.store.getState().sideBar}/>
}

export default NavbarContainer