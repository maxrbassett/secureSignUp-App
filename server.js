
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoose = require('mongoose');
var db;
var ObjectId = require('mongodb').ObjectId;
var schema = mongoose.Schema;
mongoose.connect(process.env.MONGOLAB_URI, {useMongoClient: true,})
//mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds023550.mlab.com:23550/ward-form`, {useMongoClient: true,})
 //mongoose.connect('mongodb://maxbassett:012694mrb@ds023455.mlab.com:23455/heroku_fk7knb54', {useMongoClient: true,})
 

var memberSchema = mongoose.Schema({
	LastName: {type: String},
	WFirstName: {type: String},
	HFirstName: {type: String},
	MoveinDate: {type: String},
	ExpectedExit: {type: String},
	Children: {type: String},
	HMission: {type: String},
	WMission: {type: String},
	HPrevCalling: {type: String},
	WPrevCalling: {type: String},
	HVocalAbilities: {type: String},
	HPianoAbilities: {type: String},
	HOrganAbilities: {type: String},
	HConductingAbilities: {type: String},
	WVocalAbilities: {type: String},
	WPianoAbilities: {type: String},
	WOrganAbilities: {type: String},
	WConductingAbilities: {type: String},
	HSchool: {type: String},
	WSchool: {type: String},
	HMajor: {type: String},
	WMajor: {type: String},
	HWork: {type:String},
	WWork: {type: String},
	HHobbies: {type: String},
	WHobbies: {type: String}




})
var Member = mongoose.model('Member', memberSchema);
//process.env.MONGODB_URI
mongoClient.connect(process.env.MONGOLAB_URI,(err,database) =>{
		if(err) return console.log(err)
		db=database
	var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/index.html'));
})

app.post('/WardForm2', (req, res) => {
	db.collection('members').save(req.body, (err, result) => {
		if(err) return console.log(err)
		console.log('Saved to your Database')
	})
	res.redirect('/ThankYou')
})

app.get('/ThankYou', (req, res) => {
	res.sendFile('C:/Users/maxrb/Documents/WardForm2' + '/ThankYou.html')
})


app.get('/index', (req,res) => {
 		db.collection('members').find().toArray(function(err, result) {
  		if (err) return console.log(err)
  		res.render('index.ejs', {members: result})
	})
})

app.get('/member/:_id', (req,res) => {
	var id = req.params._id
	var x =db.collection('members').findOne({_id: ObjectId(id)})
	Member.findById(id, function(error, doc) {
      assert.ifError(error);
      res.render('member.ejs', {members: doc})
      doc
    });
})





