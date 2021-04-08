import axios from "axios";

export default {
    // Gets all books
    getBook: function (search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyABIKR9YRWVV4lJc-0Nsz_XIHCL2676exs`);
    },

    // Gets the searched book 
    saveBook: function (bookData) {
        return axios.post("/api/books/", bookData);
    },

    // Gets favorite books
    getFavorites: function () {
        return axios.post("/api/books/");
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },

    // Saves a book to the database
    getBookByTitle: function (title) {
        return axios.get("/api/books/title" + title);
    }
};
