const db = require('../models');

module.exports = {
  //search apis
  findTen: function (req, res) {
    db.Question.aggregate(
      [{ $sample: { size: 10 } }]
    )
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err))
  },
  rangeOnly: function (req, res) {
    db.Question.find({ range: true })
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err))
  },
  categories: function (req, res) {
    db.Question.distinct('category')
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err))
  },
  findByCat: function (req, res) {
    db.Question.find({ category: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  },
  //add apis
  create: function (req, res) {
    db.Question.create({
      "category": req.body.category,
      "question": req.body.question,
      "answer": req.body.answer,
      "range": req.body.range
    })
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  }


};
