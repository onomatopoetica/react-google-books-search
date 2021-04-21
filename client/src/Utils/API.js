import axios from "axios";

export default {
    // Gets all books
    getBook: function (search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}`);
    },

    // Gets the searched book 
    saveBook: function (bookData) {
        return axios.post("/api/books/", bookData);
    },

    // Gets favorite books
    getAllFavorites: function () {
        return axios.get("/api/books/");
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },

    // Saves a book to the database
    getBookByTitle: function (title) {
        return axios.get("/api/books/title/" + title);
    }
};
