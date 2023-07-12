const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads", // Replace with the actual destination folder
  filename: (req, file, callback) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = file.originalname.split(".").pop();
    callback(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
