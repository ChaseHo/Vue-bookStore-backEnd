var express = require('express');
var app = express();
var commentRoutes = express.Router();

// Require Item model in our routes module
var Comment = require('../models/Comment');

// Defined store route
commentRoutes.route('/add').post(function (req, res) {
  var comment = new Comment(req.body);
      comment.save()
    .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

commentRoutes.route('/addComment').post(function (req, res) {
    var comment = new Comment(req.body);
        comment.save()
      .then(item => {
      res.status(200).json({'item': 'Item added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
// Defined get data(index or listing) route
commentRoutes.route('/').get(function (req, res) {
  Comment.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
commentRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Comment.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
commentRoutes.route('/update/:id').post(function (req, res) {
  Comment.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.title = req.body.title;
      item.bookid = req.body.bookid;
      item.username = req.body.username;
      item.content = req.body.content;
      item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
commentRoutes.route('/delete/:id').get(function (req, res) {
  Comment.findByIdAndRemove({_id: req.params.id}, function(err, item){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = commentRoutes;
