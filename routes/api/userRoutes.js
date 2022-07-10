const router = require('express').Router();

router.post('/loginapi', async (req, res) => {
  try {
      console.log(req.body)
      const userData = await User.findOne({where: {username: req.body.user} });
      if (!userData) {
          res.status(400).json({message: "User does not exist"});
          return;
      }
      const validPassword = await userData.checkPassword(req.body.pass);
      if (!validPassword) {
          res.status(400).json({message: 'Incorrect password'});
          return;
      }

      req.session.save(()=> {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          res.json({ user: userData, message: "You are now logged in" })
          //.redirect('homepage');
      })
  } catch (err) {
      res.status(400).json(err);
  }
});
