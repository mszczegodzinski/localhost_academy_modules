// const {v4 : uuidv4} = require('uuid')
// const express = require('express');
// const router = express.Router();
// const app = express();


// router.get('http://127.0.0.1/', async (req, res) => {
//     const newId = uuidv4()
//     console.log(newId)
//     res.send({id: newId});
// });
  
// const newId = uuidv4()
// console.log(newId)

// const port = 3000
// app.listen(port, () => console.log(`Listening on port ${port}`))

const { uuid } = require('uuidv4');
const id = uuid();
console.log(id)

export default id;