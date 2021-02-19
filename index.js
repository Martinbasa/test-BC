/*
    * Simple node app to get an access_token for a Brightcove API
    * You will need to substitute valid client_id and client_secret values
    * for {your_client_id} and {your_client_secret}
    */
   import request from 'request';
   var client_id = "{0a217c59-efa8-455b-9cce-e072d205511c}";
   var client_secret = "{nhm5ky9faYcaz8Ok3mEDxJW6OLKEsCEdfTKY5IibFNvBPS7kGNfg0-Vne4buBrbxfWOho1tw-x8L9fBnVPjWZg}";
   var auth_string = new Buffer(client_id + ":" + client_secret).toString('base64');
   console.log(auth_string);
   request({
   method: 'POST',
   url: 'https://oauth.brightcove.com/v4/access_token',
   headers: {
   'Authorization': 'Basic ' + auth_string,
   'Content-Type': 'application/x-www-form-urlencoded'
   },
   body: 'grant_type=client_credentials'
   }, function (error, response, body) {
   console.log('Status: ', response.statusCode);
   console.log('Headers: ', JSON.stringify(response.headers));
   console.log('Response: ', body);
   console.log('Error: ', error);
   });
   