module.exports = (app) => {
    const controller = require('./controller')
    //GET
    app.get('/',controller.home)
    app.get('/notes',controller.readNotes)
    app.get('/categories',controller.readCategories)
    app.get('/categories/:id',controller.categoriesById)
    //POST
    app.post('/notes',controller.addNotes)
    app.post('/categories',controller.categories)
    //PATCH
    app.patch('/notes/:id',controller.updateNote)
    app.patch('/categories/:id',controller.updateCategory)
    //DELETE
    app.delete('/notes/:id',controller.deleteNote)
    app.delete('/categories/:id',controller.deleteCategory)
}