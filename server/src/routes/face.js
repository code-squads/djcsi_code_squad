// import path from 'path';
// import axios from 'axios';
// import express from 'express';
// const router = express.Router();
// // import '@tensorflow/tfjs-node';

// import * as faceapi from 'face-api.js';
// import fetch from 'cross-fetch';
// import canvas from "canvas";
// import Blob from 'cross-blob';

// globalThis.Blob = Blob;

// const { Canvas, Image, ImageData } = canvas;
// faceapi.env.monkeyPatch({ Canvas, Image, ImageData, fetch });
// // faceapi.env.monkeyPatch({ fetch });

// const __dirname = path.resolve();
// const MODEL_PATH = path.join(__dirname, 'src', 'routes', 'weights');

// // Load models
// Promise.all([
//   faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_PATH),
//   faceapi.nets.faceLandmark68Net.loadFromDisk(MODEL_PATH),
//   faceapi.nets.faceRecognitionNet.loadFromDisk(MODEL_PATH),
// ]).then(() => {
//   console.log('Loaded models');
// });


// router.post('/api/compare', async (req, res) => {
//   const baseImgUrl = req.body.baseImgUrl;
//   const testImgUrls = req.body.testImgUrls;

//   try {
//     // Load base image
//     // const baseImg = await loadImageFromUrl(baseImgUrl);
//     const baseImg = await canvas.loadImage(baseImgUrl);

//     // Detect face in base image
//     const baseFace = await detectFace(baseImg);

//     // Compare base image to each test image
//     const results = [];
//     try {
//       for (const testImgUrl of testImgUrls) {
//         console.log("Comparing", );
//         // const testImg = await loadImageFromUrl(testImgUrl);
//         const testImg = await canvas.loadImage(testImgUrl);
//         const testFace = await detectFace(testImg);
//         const distance = faceapi.euclideanDistance(baseFace.descriptor, testFace.descriptor);
//         const score = 1 - distance;
//         const isMatch = score > 0.6;
//         results.push({ testImgUrl, isMatch, score });
//       }
//     } catch (err){
//       console.log("Err", err);
//     }
//     // Output results
//     res.json(results);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: error.message });
//   }
// });

// async function loadImageFromUrl(url) {
//   const response = await axios.get(url, { responseType: 'arraybuffer' });
//   const buffer = Buffer.from(response.data, 'binary');
//   const img = await faceapi.bufferToImage(buffer);
//   return img;
// }

// async function detectFace(img) {
//   const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
//   if (!detections) {
//     throw new Error('No face detected in the image.');
//   }
//   return detections;
// }

// export default router;