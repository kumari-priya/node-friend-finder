const router = require('express').Router();
const friends = require('../data/friends');

// get route
router.get("/friends", (req, res) => {
  return res.json(friends);
});

// post route
router.post("/friends", (req, res) => {
  let data = req.body["scores[]"];
  let match = [];
  // loop all the friends
  for (let i = 0; i < friends.length; i++) {
    let difference = 0;
    // loop all the input anwers
    for (let j = 0; j < data.length; j++) {
      // if the answers does not match with current friend's answer
      if (friends[i].scores[j] != data[j]) {
        // add to the difference
        difference += Math.abs(friends[i].scores[j] - data[j]);
      }
    }
    // add difference to match array
    match.push(difference);
  }
  console.log(match);
  // get the lowest difference
  let best = Math.min.apply(null, match);
  // get the index of lowest difference
  let ind = match.indexOf(best);
  // create object to send with response
  let retData = {
    name: friends[ind].name,
    photo: friends[ind].photo
  }
  // return object
  return res.json(retData);
});

module.exports = router;
