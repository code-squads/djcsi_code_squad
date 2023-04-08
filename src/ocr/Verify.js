import axios from "axios";
import { useState } from "react";

const ocr = async (options) => {
  // try {
  //   const response = await axios.request(options);
  //   console.log("Got response", response);
  //   return response.data; 
  // } catch(err){
  //   console.error(err);
  //   return {"result":"1","subScans":[],"value":"HRE FRE\nGovernment of India\nAmitabh Rajendra Shah\nDOB: 03/02/1990\nMale\n1234 5678 9012\n\u00c5RT TEIR, \u00c0"};
  // }
  return {"result":"1","subScans":[],"value":"HRE FRE\nGovernment of India\nAmitabh Rajendra Shah\nDOB: 03/02/1990\nMale\n1234 5678 9012\n\u00c5RT TEIR, \u00c0"};
}

function Verify() {
  const [previewImage, setPreviewImage] = useState("");
  const [text, setText] = useState("");

  // Data on image upload
  function handleFileInputChange(event) {
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    const form = new FormData();
    form.append("Session", "string");
    form.append("srcImg", event.target.files[0]);
    const options = {
      method: "POST",
      url: "https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/",
      headers: {
        "content-type": "multipart/form-data",
        "x-rapidapi-host": "pen-to-print-handwriting-ocr.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
      },
      data: form,
    };
    const dataText = ocr(options)
      .then(res => {
        setText(res.value);
        const splitMe = res.value.split('\n')
        const userName = splitMe[2];
        const DOB = splitMe[3].split(':')[1].trim();
        const aadhar = splitMe[5];
        console.log(userName);
        console.log(DOB);
        console.log(aadhar);
      });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
   }

  return (
    <div className="App">
      <h1>Image to Text Extractor</h1>
      <img src={previewImage} />
        <form onSubmit={handleFormSubmit}>
          <input type="file" onChange={handleFileInputChange} />
          <input type="submit" value="Extract Text" />
       </form>
       <p className="text">{text}</p>
     </div>
  );
}
export default Verify;