const {fileExtension} = require('../middleware/customMiddleware')
const imageTypes = ['jpg', 'tif', 'gif', 'png', 'svg']
const sharp = require('sharp')
const download = require('image-downloader')

// Resize image on post
exports.create_thumbnail_post = (req, res, next) => {
  // Save image url and extension
  const imageUrl = req.body.image_url
  const imageUrlExt = fileExtension(req.body.image_url)
  
  // If image url extension is a type of image file, proceed to resize
  if (imageTypes.includes(imageUrlExt)) {
    // Download image and save
    const options = {
      url: imageUrl,
      dest: './public/images/original/'
    }
    // Set location for resized images to be saved.
    const resizeFolder = './public/images/resized/'
    // Download image from the url and save in selected destination in options.
    download.image(options)
      .then(({filename, image}) => {
        
        
      })
      .catch(err => {
        console.error(err)
      })
  }
  else {
    res.send({error: 'We only handle image files.'})
  }
}
