/* API call to retrieve an Image url */
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '9702895960-ps0qgbuuptvtq3953uiiq9269ij532gn.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04DXIXX_QW8EfCgYIARAAGAQSNwF-L9Iri7el3Q5VoaxGvXaBDA-3YP2d8zOEUNzTjBbxaRcdebcmtpEpmgPYuWcvAjJkUDOR_5k';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Setting up the Authentication Object
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Initializing the Google Drive
const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

// Hardcoding the filepath for the file to be uplaoded
const filePath = path.join(__dirname, 'Ishit_Kanwar.jpg');

/* ###################################################################
##Funtion to Upload File to Google Drive. Not being used in my case.##
####################################################################*/
async function uploadFile() {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: 'Ishit_Kanwar.jpg', // Name of the File to be stored on the drive.
        mimeType: 'image/jpg',
      },
      media: {
        mimeType: 'image/jpg',
        body: fs.createReadStream(filePath),
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

// uploadFile();

/* #####################################################################
##Funtion to Delete File from Google Drive. Not being used in my case.##
######################################################################*/
// async function deleteFile() {
//   try {
//     const response = await drive.files.delete({
//       fileId: 'YOUR FILE ID',
//     });
//     console.log(response.data, response.status);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// deleteFile(); 



/* ######################################################
## Funtion to Generate File Urls's against specific ID ##
#######################################################*/
async function generatePublicUrl() {
  try {
    const fileId = '14SZxjKu-fKpJQbFLIi9mbDTXIMmvsN5Q'; // Hardcoded Filed ID.
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });
    /*########################################
    ## webViewLink: View the file in browser #
    ## webContentLink: Direct download link ##
    ########################################*/
    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    });
    console.log(result.data); // In case of working backend to be passed onto frontend
  } catch (error) {
    console.log(error.message);
  }
}

generatePublicUrl();