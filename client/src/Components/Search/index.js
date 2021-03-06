import React, { useState } from "react";
import API from "../../Utils/API";
import "./style.css";
import BookCard from "../../Components/BookCard/index";


function SearchBox() {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    function handleSearch() {
        API.getBook(search).then((res) => {
            const resultAPi = res.data.items;
            const newArray = [];
            resultAPi.forEach((item) => {
                const newObj = item.volumeInfo;
                newArray.push(newObj);
            });
            setResult(newArray);
        });
    }

    return (
        <>
            {" "}
            <div className="container">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="col-md-5 form-control book-input"
                        placeholder="Search for a book"
                        value={search}
                        name="search"
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <div className="input-group-append">
                        <span onClick={handleSearch} className="search-icon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <BookCard results={result} search={search} />
            </div>
        </>
    );
}

export default SearchBox;