import React, { useState } from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import axios from "axios";
// import Cropper from "../../App.tsx";
import canvasPreview from "../../canvasPreview.ts";
import { useDebounceEffect } from "../../useDebounceEffect.ts";
import { random1 } from "../../App.tsx";

// APP

import "react-image-crop/dist/ReactCrop.css";
let random = [];

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
  console.log("hogya");
}

// export const random1 = random;

// APP

const Header = () => {
  const [formDetails, updateformDetails] = useState({ link: "", text: "" });
  const [error, setError] = useState("");
  const update = (e) => {
    let cName = e.target.name;
    let cValue = e.target.value;
    updateformDetails({ ...formDetails, [cName]: cValue });
    setError("");
  };

  const Submit = async (e) => {
    e.preventDefault();
    console.log(random1);
    axios
      .post(
        "/result",

        {
          type: "POST",
          contentType: "application/json",
          url: "/post/data",
          dataType: "json",
          link: formDetails.link,
          text: ["hyy", "bhadweeee"],
          rest: random1,
        }
      )
      .then(function (res) {
        console.log("success");
      });
  };

  //   return (
  //     <>
  //       <div className="gpt3__header section__padding" id="home">
  //         <div className="gpt3__header-content">
  //           <h1 className="gradient__text">
  //             Generate Multiple Social Media Images in One Click
  //           </h1>
  //           {/* <p>
  //         Yet bed any for travelling assistance indulgence unpleasing. Not
  //         thoughts all exercise blessing. Indulgence way everything joy alteration
  //         boisterous the attachment. Party we years to order allow asked of.
  //       </p> */}

  //           <div className="gpt3__header-content__input">
  //             <input
  //               type="text"
  //               name="link"
  //               id="link"
  //               onChange={update}
  //               placeholder="Select Image Template"
  //             />

  //             {/* <button type="button">Upload Image</button> */}
  //           </div>
  //           <div className="gpt3__header-content__input">
  //             <input type="text" name="text" id="text" onChange={update} />
  //           </div>

  //           <div className="gpt4__header-content__input">
  //             <button type="button" onClick={Submit}>
  //               Generate Image
  //             </button>
  //           </div>
  //           {/* <h1>{random1} </h1> */}
  //           {/* <div className="gpt3__header-content__people">
  //         <img src={people} />
  //         <p>1,600 people requested access a visit in last 24 hours</p>
  //       </div> */}
  //         </div>
  //         <div>
  //           <div className="gpt3__header-image">
  //             <img src={ai} />
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  // export default Header;
  return (
    <>
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">
            Generate Multiple Social Media Images in One Click
          </h1>
          {/* <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p> */}

          <div className="gpt3__header-content__input">
            <input
              type="text"
              name="link"
              id="link"
              onChange={update}
              placeholder="Select Image Template"
            />

            {/* <button type="button">Upload Image</button> */}
          </div>
          <div className="gpt3__header-content__input">
            <input type="text" name="text" id="text" onChange={update} />
          </div>

          <div className="gpt4__header-content__input">
            <button type="button" onClick={Submit}>
              Generate Image
            </button>
          </div>

          {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
        </div>

        <div className="gpt3__header-image">
          <img src={ai} />
        </div>
      </div>
    </>
  );
};

export default Header;
