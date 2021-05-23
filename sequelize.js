const Sequelize = require('sequelize');
const emailTemplateModel = require('./models/emailTemplate');

const sequelize = new Sequelize('synergite_dev', 'synergite_support_dev', 'synergy2021pwd', {

    dialect:'mysql',
    host:'agency-cloud-non-prod-cluster.cluster-cha1o3asnyvz.us-east-2.rds.amazonaws.com',
    port:3306
});


const emailTemplate = emailTemplateModel(sequelize, Sequelize);

module.exports = {emailTemplate};