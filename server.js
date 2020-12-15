express=require('express');
App=express();
function logger(req, res, next) {
    var now = new Date();
      if(now.getDay()===6 ||now.getDay()===7 ){
       
     res.send('The web application is only available in working time (Monday to Friday,  from 9 to 17) ')
      }
       else if (now.getHours()<9 || now.getHours()>17){
           res.send('The web application is only available in working time (Monday to Friday,  from 9 to 17) ')
       }
      next();

}
// global middleware
App.use(logger);
App.use( express.static(__dirname + "/Public"));
const port = 5000;
App.listen(port, () => {
  console.log(`The Server is running on port ${port}`);
});