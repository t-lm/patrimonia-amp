// ./patrimoniaEmailOnRequest/src/index.js

// ./patrimoniaEmailOnRequest/src/index.js

var aws = require('aws-sdk');
const dynamoDb = new aws.DynamoDB.DocumentClient();
var ses = new aws.SES({ region: 'eu-west-1' });

exports.handler = (event, context, callback) => {

  event.Records.forEach(record => {

    if("dynamodb" in record && "NewImage" in record.dynamodb) {
      
      try {
        let organiserID = record.dynamodb.NewImage.organiserID.S
        let discoID = record.dynamodb.NewImage.discoID.S
        let discoName = record.dynamodb.NewImage.discoName.S
        let discoDate = record.dynamodb.NewImage.discoDate.S
        let createdAt = record.dynamodb.NewImage.createdAt.S
        let emailRequest = record.dynamodb.NewImage.email.S
        let name = record.dynamodb.NewImage.name.S
        let numberPersons = record.dynamodb.NewImage.numberPersons.S
        let locale = record.dynamodb.NewImage.locale.S

        // what is the email of the owner
        let params = {
          ExpressionAttributeValues: { ':s': organiserID },
          KeyConditionExpression: 'id = :s',
          TableName: "Organiser-dg6n37kw5bezfgxg7zofsv3j4m-dev",
        }

        dynamoDb.query(params, (err, data) => {
          
          if (err) return context.fail(err);

          if (data.Count > 0) {

            let email = data.Items[0].email

            let subject = `Nouvelle demande pour ${discoName}`
            let body = `<div>
                  <p>Bonjour,</p>
                  <p>Votre découverte, ${discoName}, est référencée sur <a href="https://www.patrimonia.app/discos/${discoID}">Patrimonia.</a></p> 
                  <p>Vous avez reçu une nouvelle demande le ${new Date(createdAt).toLocaleString("fr")}.</p>
                  <ul>
                    <li>Nom: ${name}</li>
                    <li>Email: ${emailRequest}</li>`
            if (discoDate) { body += `<i>Date: ${discoDate}</li>`}
            body += `
                    <li>Nombre de personnes: ${numberPersons}</li>
                    <li>Langue: ${locale}</li>
                  </ul>
                  <p>Répondez leur rapidement directement par email :)</p>
                  <p>Merci,</p>
                  <p><a href="https://www.patrimonia.app">Patrimonia</a></p>
                  </div>
                  `

            let params = {
              Destination: { ToAddresses: ["thomas@patrimonia.app"] }, Source: "hi@patrimonia.app",
              Message: {
                Subject: { Charset: "UTF-8", Data: subject },
                Body: { Html: { Charset: "UTF-8", Data: body } }
              }
            }

            ses.sendEmail(params, function(err, data) {
              if (err) { console.log(err) }
              context.succeed(event)
            })

          }

          else { context.succeed(event); }
        })

      }
      catch { context.fail(event) }
    }

    else context.fail(event);

  })
};
