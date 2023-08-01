const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const multer = require('multer');
const bodyParser = require('body-parser');
const imgSchema = require('./models/note');
//const fs = require('fs');
const $ = require('jquery');


require('dotenv').config();
require('./config/database');

require('./config/passport');

const indexRouter = require('./routes/index');
const classesRouter = require('./routes/classes');
const groupsRouter = require('./routes/groups');
const notesRouter = require('./routes/notes');



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });

app.get('/', (req, res) => {
  imgSchema.find({})
	.then((data, err)=>{
		if(err){
			console.log(err);
		}
		res.render('imagepage',{items: data})
	})
});


app.post('/', upload.single('image'), (req, res, next) => {

	var obj = {
		name: req.body.name,
		desc: req.body.desc,
		img: {
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
			contentType: 'image/png'
		}
	}
	imgSchema.create(obj)
	.then ((err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			// item.save();
			res.redirect('/');
		}
	});
});

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
	res.locals.user = req.user;
  next();
});

app.use('/', indexRouter);
app.use('/notes', notesRouter);
app.use('/', classesRouter);
app.use('/', groupsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
