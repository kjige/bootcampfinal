import * as axios from 'axios';

class helpers {
  static authenticate() {
    axios.post('/login')(req,res, function() {
      res.json(req.user);
    });
  }
}

export default helpers;