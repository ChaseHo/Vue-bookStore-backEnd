var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Comment = new Schema({
  bookid: {
    type: String
  },
  username: {
    type: String
  },
  create_at:{
    type: Date,
    default: Date.now
  },
  content: {
      type: String
  },

},{
	collection: 'comment'
});

module.exports = mongoose.model('Comment', Comment);
