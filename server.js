require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoClient = require('mongodb').MongoClient;
var db;
var ObjectId = require('mongodb').ObjectId;

mongoClient.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds023550.mlab.com:23550/ward-form`,(err,database) =>{
		if(err) return console.log(err)
		db=database
		app.listen(3000, () => {
		console.log('Server running')
	})
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//app.use(express.static('public'))
app.use(express.static('C:/Users/maxrb/Documents/WardForm2'));

app.get('/', (req, res) => {
	res.sendFile('C:/Users/maxrb/Documents/WardForm2' + '/index.html')
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


app.get('/index.ejs', (req,res) => {
 		db.collection('members').find().toArray(function(err, result) {
  		if (err) return console.log(err)
  		res.render('index.ejs', {members: result})
	})
})

app.get('/member/:_id', (req,res) => {
	var id = req.params._id
	//console.log(db.collection('members'))
	// console.log(_id)
	var x =db.collection('members').findOne({"_id": new ObjectId(id)})
	console.log(x)
	
})





