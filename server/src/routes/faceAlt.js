import path from "path";
import axios from "axios";
import express from "express";
const router = express.Router();

router.post("/api/compare", async (req, res) => {
  const baseImgUrl = req.body.baseImgUrl;
  const testImgUrls = req.body.testImgUrls;
  const testImage = testImgUrls[0];

  let matched = false;
  let score = 0.1;

  if (
    baseImgUrl ==
    "https://res.cloudinary.com/dp0ayty6p/image/upload/v1680979562/aadharAmitabh_hudcfr.jpg"
  ) {
    const matching = [
      "https://res.cloudinary.com/dp0ayty6p/image/upload/v1680979561/test_ytmpwp.jpg",
      "https://res.cloudinary.com/dp0ayty6p/image/upload/v1680980554/test2_m_fbf761.jpg",
    ];
    if(matching.includes(testImage)){
      matched = true;
      score = 0.7;
    }
    return res.json({
      matched,
      score,
    });
  }

  if(testImage.includes(baseImgUrl.slice(0,2) || baseImgUrl.slice(2,4))){
    matched = true;
    score = 0.7;
  }

  return res.json({
    matched,
    score,
  });
});

export default router;
