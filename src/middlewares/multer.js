const multer = require('multer');
const path = require('path');

// Configuração do Multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../uploads'), // Ajuste o caminho
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = upload;
