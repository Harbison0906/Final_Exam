import * as express from 'express';
import * as passport from 'passport';
import booksRouter from './books';
import categoriesRouter from './categories';

const router = express.Router();


router.use((req, res, next) => {
  passport.authenticate('bearer', {session: false}, (err, user, info) => {
    if(user) req.user = user;
    return next();
  })(req, res, next);
})

router.use('/books', booksRouter);
router.use('/categories', categoriesRouter);



export default router;