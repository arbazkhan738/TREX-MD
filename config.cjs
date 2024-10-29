// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUNKdUFXdVRqQ0oxWE12Rml2NjNaNTdBMituQUxLdkI5UHJvb1ZFRU5Hdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3FNbDNUbVdZcWxGbnI5dGdPY1FRZ25WYVk3N2ZDZEhsMzVrU3M5aHdWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT2VOaXVRUUNhWlV1eFRpU3VHTGFpT0VPdnpoZm9ZRXY1QlJCb3lWT2xRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuVGtZTjNSa292ZTJmcDRVMEExbzVkWnMwRDVDVmJjclZxTzZzYXNwalF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQNkVneHE2bFZPVXpyNy81WXFZRjhtUTBvOFRSWXRjWnhEQStFUzZSV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkU2ak50RENwd2xORW0rVFgyeXRxN29KMjk0OGNwcWRrajZtQlZhTnZkUjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV00zWjNEQVI5VS9NYzBDQm9XMmFqQTkwdys3UTAwS0YwOCtwTThSenUwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWitDZndPb2ZTY3ZrRjI5Z1UvdUhUOGVLQkRPeGQvcVM1d0hRWlE4bFpCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRDeGoramNxbGR2YU9uZ2JNRzNJRGtqU2Zxc2xnbjBJWTBXc0g0a0M4ZWt1cmMvQzhLUktWcmloL0lHTm9hR3NOTGJBZkN4cisyemM3MGdjVEZ6RGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiJZS0lyNERoY3A5Z1NPZGowYWxRc1pJUkFTM05lVUtoQUQ2MmN5RzVSUS9rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqNEFkRkZyZFFpLTVkSEYwQzRQSHZ3IiwicGhvbmVJZCI6ImI2NzE4OWViLWI4MGEtNDc3Mi05MTE2LTJiNDFjMGFkY2E4OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYT29JWmxoVGRJT1ZlSE9sdVhvajA1d3Qza1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWtnbzViamU0Ylg2VDd3c1R0TjdJcUlxcHlJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpLWThYUko2IiwibWUiOnsiaWQiOiI5MTc0NzgxNzIyNjc6NzFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2L3J0d0NFTHEraExrR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlovZTY4YTdYMG9kdWZ1clRWQ2FSN1N3MVlmWUdaQ0swYS9WcnZIdzQ0d0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Inh4UE1kdmhXYkczdkk5NVNPK0tHTW1rVG04ZC90V0dBYWFCSjBnU0ZRbTNHeGFodFVFVS85cmlXa3JScDIyY0t4NFg3emZMVmM2NDdQWDNpWktyaEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0U3pxTHNsTjVSK3cyZkV3aDl0T3dMZGdzYVB0dFY5cVRTQmdqYmlGRUEvRkk2Y2x0cGpua1NHR2lTR2YrdEd0OWZsWHJQaEp5MkR0N1hoL2FyNGtqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNzQ3ODE3MjI2Nzo3MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXZjN1dkd1MTlLSGJuN3EwMVFta2Uwc05XSDJCbVFpdEd2MWE3eDhPT01CIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwMjIzOTQ0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNOOSJ9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Bera",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "917478172267",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
