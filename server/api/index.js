const router = require('express').Router()
const { Album } = require('../db/index')

// connect your API routes here!
router.get('/albums', async(req, res, next) =>  {
  try {
    const allAlbums = await Album.findAll();
    res.status(200).send(allAlbums);
  } catch (error) {
    console.log('This is the error ', error);
    next(error);
  }
})

module.exports = router
