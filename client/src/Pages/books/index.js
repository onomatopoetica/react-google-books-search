import React, { useState } from "react";
import "./index.css";

import NavBar from "../../Components/Nav/index";
import Hero from "../../Components/Hero";
import SearchBox from "../../Components/Search";

function Books() {

    const [result, setResult] = useState([]);

    return (
        <>
            <NavBar />
            <Hero />
            <SearchBox />
        </>
    );
}

export default Books;