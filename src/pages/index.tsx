import Head from "next/head";
import { useState } from "react";

import FileQandAArea from "../components/FileQandAArea";
import { FileLite } from "../types/file";
import FileUploadArea from "../components/FileUploadArea";

export default function FileQandA() {
  const [files, setFiles] = useState<FileLite[]>([]);

  return (
    <div className="flex items-left text-left h-screen flex-col">
      <Head>
        <title>CRYPKEN ChAT</title>
      </Head>
      <div className="max-w-3xl mx-auto m-8 space-y-8 text-gray-800 ">
        <h1 className="text-4xl text-center">CRYPKEN CHAT</h1>

        <div className="">
          To search for answers from the content in your files, upload them here
          and we will use OpenAI embeddings and GPT to find answers from the
          relevant documents.
        </div>

        <FileUploadArea
          handleSetFiles={setFiles}
          maxNumFiles={75}
          maxFileSizeMB={30}
        />

        <FileQandAArea files={files} />
      </div>
    </div>
  );
}


// const axios = require('axios');

// // Define the API endpoint and parameters
// const openaiEndpoint = 'https://api.openai.com/v1/classifications';
// const apiKey = 'YOUR_API_KEY';

// // Define the input text
// const inputText = 'Hi! How are you doing?';

// // Define the parameters for the OpenAI API endpoint
// const openaiParams = {
//   model: 'text-davinci-002',
//   query: inputText,
// labels: ['greeting', 'question', 'statement'],
//   search_model: 'text-davinci-002',
//   model_bias: -1
// };

// // Use axios to make a call to the OpenAI API
// axios.post(openaiEndpoint, openaiParams, {
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiKey}`
//   }
// }).then(openaiResponse => {
//   const label = openaiResponse.data.label[0].toUpperCase() + openaiResponse.data.label.slice(1);
//   console.log(`Intent: ${label}`);
  
//   // Choose a different API or approach based on the determined intent
//   switch (label) {
//     case 'Greeting':
//       console.log('Hello!');
//       break;
//     case 'Question':
//       // Use a question answering API or approach
//       break;
//     case 'Statement':
//       // Use a text generation API or approach
//       break;
//     default:
//       console.log('Sorry, I didn\'t understand what you said.');
//   }
// }).catch(error => {
//   console.log(`Error classifying text: ${error}`);
// });
