import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import {StateType} from "../../App";


let mapStateToProps = (state: StateType) => {
    return {
        sideBar: state.sideBar
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer