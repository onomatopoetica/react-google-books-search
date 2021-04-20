const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Route for "/api/books"
router
    .route("/")
    .get(booksController.findAll)
    .post(booksController.create);

router.get("/title/:title", booksController.findByTitle);

// Route for "/api/books/:id"
router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;