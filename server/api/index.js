const router = require('express').Router()
const { Album, Artist, Song } = require('../db/index')

// connect your API routes here!
router.get('/albums', async(req, res, next) =>  {
  try {
    const allAlbums = await Album.findAll({
      include:[{model: Artist}]
    });
    res.status(200).send(allAlbums);
  } catch (error) {
    console.log('This is the error ', error);
    next(error);
  }
})

router.get('/albums/:albumId', async(req, res, next) =>  {
  try {
    const id = req.params.albumId
    const album = await Album.findOne({
      where: { 
        id
      },
      include: [{model: Artist}, {model: Song}]
    });
    res.status(200).send(album);
  } catch (error) {
    console.log('This is the error ', error);
    next(error);
  }
})

module.exports = router
