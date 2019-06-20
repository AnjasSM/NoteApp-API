const response = require('./response');
const connection = require('./connect');
const moment = require('moment');
const time = moment();

exports.home = (req, res) => {
   response.dataResponse('Note App Home', res)
}

// add note to db
exports.notes = (req, res) => {
   let { title } = req.body;
   let { note } = req.body;
   let { id_category } = req.body;
   let date = time.format('L');
   let sql = `INSERT into notes set title=?, note=?, created_at=?, id_category=?`;
   connection.query(
      sql, [title, note, date, id_category], (err, rows, fields) => {
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

//read notes from db
exports.readNotes = (req, res) => {
   const { search } = req.query;
   const { sort } = req.query;
   const { page } = req.query;
   let { limit } = req.query;
   let start = 0;
   let sql = `SELECT notes.id, notes.title, notes.note, notes.created_at,
            notes.updated_at, categories.category FROM notes INNER JOIN
            categories ON notes.id_category = categories.id`
   limit = 10
   //search by title from db
   if(search) {
      sql +=` WHERE title LIKE '%${search}%'`;
   //sort db table descendingly
   } if(sort) {
      if(sort === 'DESC') {
         sql +=` ORDER BY created_at DESC`;
      } else {
         sql +=` ORDER BY created_at ASC`;
      }
   //get notes in page and give limit per page
   } if(page && limit) {
      if(page > 1) {
         start = (page * limit) - limit
      }
   //sort Ascendingly or if url didn't have search/sort/page and limit query
   }
   sql += ` LIMIT ${start},${limit}`
   const sqlToCount = `SELECT COUNT(*) as tot FROM notes`
   connection.query(
         sql,(err, rows, fields) => {
            if (err) {
               throw err
            } else {
               connection.query(sqlToCount,(err,result,fields) => {
                  if (err) {
                     throw err
                  } else {
                     let total = result[0].tot;
                     let totalPage = Math.ceil(total/10);
                     let currpage = parseInt(page);
                     let limit = 10;
                     let toCount = [total,totalPage,currpage,limit]
                     response.getCountData(rows, toCount, res) ;
                  }
               })
            }
         }
      )
      
   }

//read note by id from db
exports.notesById = (req, res) => {
   let id = req.params.id;
   connection.query(
      'SELECT * from notes where id = ?',
      [id], (err, rows, fields) => {
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
   let sql = `DELETE from notes where id=${id}`;
   connection.query(
      sql, (err, rows, fields) => {
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
   let updateTime = time.format('L');
   let sql = `UPDATE notes set title=?, note=?, updated_at=?, id_category=? where id=?`
   connection.query(
      sql, [title, note, updateTime, catId, id], (err, rows, fields) => {
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
   let sql = `INSERT into categories set category=?`;
   connection.query(
      sql, [categories], (err, rows, fields) => {
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
   let sql = 'SELECT * from categories';
   connection.query(
      sql, (err, rows, fields) => {
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
   let sql = 'SELECT * from categories where id=?';
   connection.query(
      sql, [id], (err, rows, fields) => {
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
   let sql = `DELETE from categories where id=?`;
   connection.query(
      sql, [id], (err, rows, fields) => {
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
   let sql = `UPDATE categories set category=?,id=?`
   connection.query(
      sql, [category, id], (err, rows, fields) => {
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