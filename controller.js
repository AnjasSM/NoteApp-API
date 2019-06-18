const response = require('./response');
const connection = require('./connect');


exports.home = (req, res) => {
   response.dataResponse('Note App Home', res)
}

// add note to db
exports.notes = (req, res) => {
   let title = req.body.title;
   let note = req.body.note;
   let id_category = req.body.id_category;
   connection.query(
      `INSERT into notes set title=?, note=?, time=now(), id_category=?`,
      [title, note, id_category],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'note has been created',
            });
         }
      }
   )
}

//read note from db
exports.readNotes = (req, res) => {
   connection.query(
      'SELECT * from notes', (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'notes has been showed',
            });
         }
      }
   )
}

//read note by id from db
exports.notesById = (req, res) => {
   let id = req.params.id;
   connection.query(
      'SELECT * from notes where id = ?',
      [id],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: `note id: ${id} has been showed`,
            });
         }
      }
   )
}

//delete note from db by note id
exports.deleteNote = (req, res) => {
   let id = req.params.id;
   connection.query(
      `DELETE from notes where id=${id}`,
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: `note has been removed`
            })
         }
      }
   )
}

//update note from db by id
exports.updateNote = (req, res) => {
   let id = req.params.id;
   let title = req.body.title;
   let note = req.body.note;
   let catId = req.body.id_category;
   connection.query(
      `UPDATE notes set title=?,note=?,id_category=? where id=?`,
      [title, note, catId, id],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'note has been updated'
            })
         }
      }
   )
}

//add category to db
exports.categories = (req, res) => {
   let categories = req.body.categories;
   connection.query(
      `INSERT into categories set category=?`,
      [categories],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'category has been added',
            });
         }
      }
   )
}

//read category from db
exports.readCategories = (req, res) => {
   connection.query(
      'SELECT * from categories', (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'categories has been showed',
            });
         }
      }
   )
}

//read category by id from db
exports.categoriesById = (req, res) => {
   let id = req.params.id;
   connection.query(
      'SELECT * from categories where id=?',
      [id],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: `category id: ${id} has been showed`,
            });
         }
      }
   )
}

//delete category from db by category id
exports.deleteCategory = (req, res) => {
   let id = req.body.id;
   connection.query(
      `DELETE from categories where id=?`,
      [id],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: `category has been removed`
            })
         }
      }
   )
}

//update category from db by id
exports.updateCategory = (req, res) => {
   let id = req.body.id;
   let category = req.body.category;
   connection.query(
      `UPDATE categories set category=?,id=?`,
      [category, id],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'category has been updated'
            })
         }
      }
   )
}