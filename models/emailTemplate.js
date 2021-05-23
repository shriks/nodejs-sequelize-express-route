module.exports = (sequelize, type) => {
    return sequelize.define('email_template',{

        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        client_Id: type.STRING,
        template_title: type.STRING,
        template_description: type.STRING,
        templete_type: type.STRING,
        send_from: type.STRING,
        send_to: type.STRING,
        cc: type.STRING,
        subject: type.STRING,
        has_attachments: type.STRING,
        attachments: type.STRING
    },{

        freezeTableName: true,
        timestamps: false
    });


};