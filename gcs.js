/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// The ID of your GCS bucket
const bucketName = 'kddi_iit_ropar_engagement_data';

// The path to your file to upload
const filePath = './data/0846eeae127770a110677734d56452c3.mp4';

// The new ID for your GCS file
const destFileName = '0846eeae127770a110677734d56452c3.mp4';

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

const fs = require('fs');

let _creds = fs.readFileSync('gcs-kddi.json');
let creds = JSON.parse(_creds);
  
const storage = new Storage({
    credentials: creds
  });
// Creates a client
// const storage = new Storage();

async function uploadFile(src, dest) {
  await storage.bucket(bucketName).upload(src, {
    destination: dest,
  });

  console.log(`${src} uploaded to ${bucketName}`);
}

module.exports = uploadFile
// uploadFile(filePath, destFileName).catch(console.error);