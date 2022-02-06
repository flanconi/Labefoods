import React from "react";
import { ContainerScreen } from "./styles";
import logo from "../../assets/logo-future-eats.png"

const ScreenLoading = () => {

    return (
        <ContainerScreen>
            <img src={logo} alt="logo futureEats"/>
        </ContainerScreen>
    )

}

export default ScreenLoading;