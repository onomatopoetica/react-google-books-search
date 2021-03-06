import React, { useEffect, useState } from "react";
import Api from "../../Utils/API";
import "./index.css";
import NavBar from "../../Components/Nav/index";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    // Load all books and store with setBooks
    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks() {
        Api.getAllFavorites().then((res) => {
            console.log(res)
            setFavorites(res.data);
        });
    }

    function deleteBook(result) {
        const id = result._id;
        Api.deleteBook(id).then((res) => console.log(res.data));
        window.location.reload();
    }

    return (
        <>
            <NavBar />

            <div className="book-card container">
                <h2 className="favorites">Saved Books</h2>

                {favorites.map((result, index) => (
                    <div key={`${result.title} + ${index}`} className="container book-item card mb-4">
                        <div className="row">
                            <div className="col-md-2 col-sm-4 book-cover">
                                {" "}
                                <img
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/150";
                                    }}
                                    src={result.cover === undefined ? "" : result.cover}
                                    alt="Book Cover"
                                />
                            </div>
                            <div className="col-md-10 col-sm-8">
                                <div className="row">
                                    <div className="col">
                                        <h5>{result.title}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>{result.author}</h6>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col book-description ">
                                        <p>{result.description}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <i
                                            onClick={() => deleteBook(result)}
                                            className="far fa-trash-alt delete-icon"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Favorites;