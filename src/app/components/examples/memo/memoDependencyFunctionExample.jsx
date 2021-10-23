import React, { useEffect } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            {" "}
        </button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
const MemoDependencyFunctionExample = (props) => {
    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };
    return <LogOutButton onLogOut={handleLogOut} />;
};

export default MemoDependencyFunctionExample;
