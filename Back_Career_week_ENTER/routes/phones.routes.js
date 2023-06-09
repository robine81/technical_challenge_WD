const router = require("express").Router();
const phones = require('../data/phones.json')

router.get("/", (req, res, next) => {
  try {
    res.status(200).json(phones);
  } catch (err) {
    console.error(err)
    req.status(500)
  }
});

router.get("/:name", (req, res, next) => {
    try {
        const { name } = req.params
        console.log("Here is the model: ", name)
        const onePhone = phones.find(phone => phone.name === name)
        if(onePhone) {
            res.status(200).json(onePhone)
        } else {
            res.status(404).json({ error: "Phone not found" })
        }
    }catch (err){
        console.error(err)
        res.status(500).json({ error: "Internal Server Error" })
    }
});

module.exports = router;
