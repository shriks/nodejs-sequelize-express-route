const express = require('express');

const app = express();

const port = process.env.port || 3000;

const {emailTemplate} = require('./sequelize');

const emailTemplateRouter = express.Router();

const bodyParser = require('body-parser');

app.use(bodyParser.json())

emailTemplateRouter.route('/template')
.get((req, res) => {

    emailTemplate.findAll().then(tempaltes => res.json(tempaltes));  
    
})
.post((req, res) => {

    emailTemplate.create(req.body).then(template => res.json(template));
});

emailTemplateRouter.route('/template/:clientId')
.get((req, res) => {

    let query;
    if(req.params.clientId){

        query = emailTemplate.findByClientId();
    }else{
        query = emailTemplate.findAll();
    }
    
    query.then(tempaltes => res.json(tempaltes));  
    
})

app.use('/api', emailTemplateRouter);

app.get("/", (req, res) => {

    res.send('Welcome to my API');
});

app.listen(port, () => {

    console.log(`Running on port ${port}`);
});
