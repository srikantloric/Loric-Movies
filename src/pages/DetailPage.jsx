import "./DetailPage.scss";
import React, { useEffect } from "react";

import firebase from "../Firebase";

function DetailPage() {
  const db = firebase.firestore();
  useEffect(() => {
    db.collection("MOVIES")
      .doc("cartoon")
      .get()
      .then((data) => {
        console.log(data.data());
      });
  });

  return (
    <div className="detail_page">
      <img
        src="http://media.hollywood.com/images/l/swathbanner.jpg"
        alt=""
      ></img>
      <div className="titletext">
        <h2>
          Download Eternals (2021) CAMRip (English) 480p [450MB] || 720p [1.1GB]
        </h2>
        <div className="divider_line"></div>
      </div>
      <div className="info">
        <h4>Full Name : Eternal (2021)</h4>
        <h4>Language : English/Hindi</h4>
        <h4>Subtitle : No Subtitle</h4>
        <h4>Size : 450 MB & 1.1 GB</h4>
        <h4>Quality :480 & 720p - CAMRIP</h4>
        <h4>Format :MKV</h4>
      </div>
      <div className="storyline">
        <h3>Story Line :</h3>
        <p>
          Following the events of Avengers: Endgame (2019), an unexpected
          tragedy forces the Eternals, ancient aliens who have been living on
          Earth in secret for thousands of years, out of the shadows to reunite
          against mankind’s most ancient enemy, the Deviants.
        </p>
      </div>
      <div className="screenshots">
        <h3>
          Screenshots :
          <br />
          <br />
          <div className="ss_images">
            <img
              src="https://img.cinemablend.com/quill/0/0/3/3/a/f/0033aff565ba17516ab4d843f8106a1e237c375d.jpg"
              alt=""
            ></img>
            <img
              src="https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/7/9/2/1315792_jumanji_540325.jpg"
              alt=""
            ></img>
            <img
              src="https://runpee.com/wp-content/uploads/2019/12/jumanji-2-550x367.jpg"
              alt=""
            ></img>
            <img
              src="https://ccspin.net/wp-content/uploads/2020/05/AJumanji-900x778.jpg"
              alt=""
            ></img>
          </div>
        </h3>
      </div>
      <hr></hr>
      <div className="download_zone">
        <h3>Download Links :</h3>
        <div className="download_card">
          <span>
            Download Eternals (2021) CAMRip (English) 480p [450MB] || 720p
            [1.1GB]
            <button className="gdrive">G-Drive Download</button>
            <button className="mega">Mega Download</button>
          </span>
        </div>
        <div className="download_card">
          <span>
            Download Eternals (2021) CAMRip (English) 480p [450MB] || 720p
            [1.1GB]
            <button className="gdrive">G-Drive Download</button>
            <button className="mega">Mega Download</button>
          </span>
        </div>
      </div>
      <br />
      <p style={{ color: "red" }}>
        If you find any broken link please help me to know by reporting below.We
        will fix it within 2 hrs.
      </p>
      <div className="report_form">
        Name:
        <input type="text"></input>
        Email:
        <input type="text"></input>
        Comment:
        <input type="text"></input>
      </div>
    </div>
  );
}

export default DetailPage;
