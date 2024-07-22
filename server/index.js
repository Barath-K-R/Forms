import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import userRouter from './routes/userRoutes.js';
import formRouter from './routes/formRoutes.js';
import authRouter from './routes/authRoutes.js';
import { connectDb } from './config/dbConfig.js';
import './passport.js'; 

const app = express();

//middlewares
dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

// Session configuration
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } 
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// DB connection
connectDb();

app.use('/api/users', userRouter);
app.use('/api/forms', formRouter);
app.use('/api/auth', authRouter);

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
