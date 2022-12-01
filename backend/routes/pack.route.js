let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let packSchema = require('../model/Pack')

// CRUD

// Create
//localhost:5000/pack/create
router.route('/create').post((req, res, next) => {
    packSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Books
//localhost:5000/pack/
router.route('/').get((req, res) => {
    packSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Pack
//localhost:5000/pack/1
router.route('/:id').get((req, res) => {
    packSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Pack
//localhost:5000/pack/edit/2
router.route('/edit/:id').put((req, res) => {
    packSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log('Student updated successfully !')
            res.json(data)
        }
    })
})

// Delete Pack
//localhost:5000/pack/delete/2
router.route('/delete/:id').delete((req, res, next) => {
    bookSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = router