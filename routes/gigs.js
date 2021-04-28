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

router.get('/gigs/:id', async (req, res) => {
    const { id } = req.params
    try {
        const getOne = await Gig.findAll({ where: { id } })
        res.json(getOne)
    } catch (err) {
        console.log(err);
    }
})


router.post('/add', async (req, res) => {
    try {
        const {title, technologies, description, budget, email} = req.body
        console.log(req.body, 'bododoodo')
        const newGig = await Gig.create({title, technologies, description, budget, email})
        res.json(newGig)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router 