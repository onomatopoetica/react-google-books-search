import React, { useState } from "react";
// import API from "../../Utils/Api";
import "./index.css";

import NavBar from "../../Components/Nav/index";
import Hero from "../../Components/Hero";
import SearchBox from "../../Components/Search";

function Books() {
    // search will hold the inital title/word searched needed for the API call

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