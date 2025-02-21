const multer = require('multer');
const path = require('path');

/* the diskStorage method from the multer library is used to configure how files should be 
stored on the servers file system. It allows you to define:
 where to save the files and how to name the files
 */

/* desitnation is a callback function where you specify the directory where the uploaded files should be stored
req: HTTP request object, file: information about the uploaded file
cb: callback function to pass the destiantion path
path.join(__dirname, '../uploads'): __dirname refers to the current directory of the script
../uploads navigates one level up from the current directory and looks for an upload folder. This ensures
 that the upload files will be saved in the upload directory relative to the scripts location
 Callback: The first argument null is for the error if any. Here its set to null because there is no error.
 The second argument is the path to the directory where files should be saved.
 The filename function determines the name of the uploaded file.
 file.fieldname: The name of the form field used to upload the file.
 Date.now(): A timestamp to ensure filenames are unique.
 Math.round(Math.random()*1E9: A randomly generated number to further avoid filename collisions
 path.extname(file.originalname):Extracts the file extension(eg .jpg,.png) from the original file name
 example: If the uploaded file was named profile-pic.jpg and the form field was image, the resulting
 filename might be: image-1637093420487-834897123.jpg
 Callback: The first argument (null) is for the error
 The second argument is the generated filename.
*/

// 🟢 Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // ✅ Ensure the "uploads" folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

/*This initializes multer with the specified storage configuration. The upload object is now ready
to be used as middleware in routes to handle file uploads.*/

const upload = multer({ storage: storage });

module.exports = upload;

/* const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); //
  },
  filename: (req, file, cb) => {
    if (!file.originalname) {
      return cb(new Error('File data is missing'));
    }
    cb(null, Date.now() + path.extname(file.originalname).toLowerCase());
  },
}); */
