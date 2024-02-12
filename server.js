import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path'
import fs from 'fs'
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

app.post('/delete', async(req, res) => {
  try {
    const deletePath = ['./wav', './musicxml', './score'];

    for (const targetPath of deletePath) {
      const files = fs.readdirSync(targetPath);
      
      for (const file of files) {
        const filePath = path.join(targetPath, file);
        fs.unlinkSync(filePath); // 파일 삭제
      }
    }

    res.send('All files in the directory have been deleted.');
  } catch (error) {
    console.error('Error deleting files:', error);
    res.status(500).send('Internal Server Error');
  }
})
