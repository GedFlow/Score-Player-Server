import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path'
import Core from './core.js';

let musicTitle = "";

const app = express();
const port = 1609
app.use(cors());
app.use('/music', express.static('./wav', {}));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './score/');
  },
  filename: function(req, file, cb) {
    musicTitle = file.originalname;
    cb(null, file.originalname);
  }
})
const upload = multer({ storage: storage });

app.listen(port, () => {
  console.log(`http://localhost:${port}  에서 node 서버 실행 중...`);
})

app.post('/', upload.single('image'), async (req, res) => {
  const uploadedFile = req.file;
  const result = await Core(uploadedFile.originalname);
  res.send(result);
})

