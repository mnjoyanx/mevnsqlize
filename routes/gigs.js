const Route = require('express')
const router = Route()
const Gig = require('../modules/gig')


router.get('/gigs', async (req, res) => {
    try {
        const allGigs = await Gig.findAll()
        res.json(allGigs)
    } catch (err) {
        console.log(err);
    }
})


router.post('/add', async (req, res) => {
    // const data = {
    // "title": "first",
    // "technologies": "vue js",
    // "budget": "200",
    // "description": "some description",
    // "email": "test@gmail.com"
// }
    try {
        const {title, technologies, description, budget, email} = req.body
        console.log(req.body, 'bododoodo')
        const newGig = await Gig.create({
title, technologies, description, budget, email
        })
        res.json(newGig)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router 