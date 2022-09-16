import React, { useState } from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-crop/dist/ReactCrop.css";
import ReactCrop from "react-image-crop";

const fs = require("fs");

// APP

import "react-image-crop/dist/ReactCrop.css";

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

  // "In West Virginia, USA, if you accidentally hit an animal with your car, you are free to take it home to eat.",
  //           "In London, UK, if you happen to die in the House of Parliament, you are entitled to a state funeral.",
  //           "The total surface area of a human lungs is the size of a football pitch.The total surface area of a human lungs is the size of a football pitch.The total surface area of a human lungs is the size of a football pitch.The total surface area of a human lungs is the size of a football pitch.The total surface area of a human lungs is the size of a football pitch.The total surface area of a human lungs is the size of a football pitch.",,
  const [baseImages, setBaseImages] = useState([]);
  const Submit = async (e) => {
    e.preventDefault();
    // console.log(random1);
    axios
      .post(
        "/result",

        {
          type: "POST",
          responseType: "stream",
          contentType: "application/json",
          url: "/post/data",
          // dataType: "json",
          link: imageLink,
          text: [
            "Approximately one quarter of human bones are in the feet.",
            "Approximately one quarter of human bones are in the feet.Approximately one quarter of human bones are in the feet.",
            "Approximately one quarter of human bones are in the feet.Approximately one quarter of human bones are in the feet.Approximately one quarter of human bones are in the feet.",
          ],
          rest: myArray,
          file: base64code,
        }
      )
      .then((response) => {
        response.pipe(
          fs.createWriteStream("C:\\Users\\Sumeet Karwa\\Downloads\\file.zip")
        );
        // console.log("hello");
        // const url = window.URL.createObjectURL(
        //   new Blob([response.data], { type: "application/zip" })
        // );
        // const link = document.createElement("a");
        // link.href = url;
        // link.setAttribute("download", "file.zip");
        // document.body.appendChild(link);
        // link.click();
      });
  };

  // APP

  const [srcImg, setSrcImg] = useState(null);
  const [image, setImage] = useState(null);
  //   const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [crop, setCrop] = useState(null);
  const [result, setResult] = useState(null);
  const [coords, setCoords] = useState(null);
  const [myArray, setMyArray] = useState([]);
  // const [theArray, setTheArray] = useState(initialArray);
  const [imageSelected, setImageSelected] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [base64code, setBase64code] = useState("");

  // const uploadImage = () => {
  //   const formData = new FormData();
  //   formData.append("file", imageSelected);
  //   formData.append("upload_preset", "pmfqihpg");
  //   axios
  //     .post("https://api.cloudinary.com/v1_1/dliwaikcu/image/upload", formData)
  //     .then((response) => {
  //       console.log(response.data.url);
  //     });
  // };

  // import React from "react";
  // import "./styles.css";

  // export default function App() {
  // let base64code = ""
  // const onChange = e => {
  //   const files = e.target.files;
  //   const file = files[0];
  //   getBase64(file);
  // };

  // const onLoad = fileString => {
  //   console.log(fileString);
  //   this.base64code = fileString
  // };

  // const getBase64 = file => {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     onLoad(reader.result);
  //   };
  // };
  // return (
  //     <div className="App">
  //       <form>
  //         <input type="file" onChange={onChange} />
  //         <textarea rows="50" cols="50" value={this.base64code}></textarea>
  //       </form>
  //     </div>
  //   );
  // }

  //
  //

  // let imageLink = "";
  const handleImage = async (event) => {
    setSrcImg(URL.createObjectURL(event.target.files[0]));
    // console.log(`bhaakkkk ${event.target.files[0]}`);
    // getBase64(event.target.files[0]);

    const formData = new FormData();

    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "pmfqihpg");
    axios
      .post("https://api.cloudinary.com/v1_1/dliwaikcu/image/upload", formData)
      .then((response) => {
        // imageLink = response.data.url;
        setImageLink(response.data.url);
        console.log(imageLink);
        console.log(response.data.url);
      });
  };

  // let base64code = "";
  // const onChange = e => {
  //   const files = e.target.files;
  //   const file = files[0];
  //   getBase64(file);
  // };

  const onLoad = async (fileString) => {
    console.log(fileString);
    console.log("print kardiya le");
    // this.base64code = fileString;
    setBase64code(fileString);
    console.log(`set kardiya ${base64code}`);
  };

  const getBase64 = async (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    // setBase64code(reader.result);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  const getCroppedImg = async () => {
    try {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      // const base64Image = canvas.toDataURL("image/jpeg", 1);
      // setResult(base64Image);
      // console.log(crop.x, crop.y);
      myArray.push(crop.x * scaleX);
      myArray.push(crop.y * scaleY);
      myArray.push(crop.width * scaleX);
      myArray.push(crop.height * scaleY);
      console.log(result);
      console.log(myArray);
      return myArray;
    } catch (e) {
      console.log("crop the image");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(result);
  };

  //

  return (
    <>
      <div>
        <div>
          <input
            type="file"
            onChange={(event) => {
              setImageSelected(event.target.files[0]);
            }}
          />
          <button onClick={handleImage}> Upload Image </button>
        </div>
        <Container className="container" fluid="md">
          <h5 className="header">React Image Crop</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Select Image you want to crop</Form.Label>
              <div>
                <input type="file" accept="image/*" onChange={handleImage} />
                {/* <textarea
                  className="gradient__text"
                  rows="50"
                  cols="50"
                  value={this.base64code}
                ></textarea> */}
              </div>
              <div>
                {srcImg && (
                  <>
                    <div>
                      <ReactCrop
                        style={{ maxWidth: "50%" }}
                        src={srcImg}
                        onImageLoaded={setImage}
                        crop={crop}
                        onChange={setCrop}
                      />
                    </div>
                    <div>
                      <Button className="cropButton" onClick={getCroppedImg}>
                        crop
                      </Button>
                    </div>
                  </>
                )}
                {result && (
                  <div>
                    <img src={result} alt="cropped image" />
                  </div>
                )}
              </div>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
      {/* <div>{srcImg}</div>*/}

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

// import React, { useState } from "react";
// import people from "../../assets/people.png";
// import ai from "../../assets/ai.png";
// import "./header.css";
// import axios from "axios";
// import canvasPreview from "../../canvasPreview.ts";

// const Header = () => {
//   const [formDetails, updateformDetails] = useState({ link: "", text: "" });
//   const [error, setError] = useState("");
//   const update = (e) => {
//     let cName = e.target.name;
//     let cValue = e.target.value;
//     updateformDetails({ ...formDetails, [cName]: cValue });
//     setError("");
//   };
//   const Submit = async (e) => {
//     e.preventDefault();

//     axios
//       .post(
//         "/result",

//         {
//           type: "POST",
//           contentType: "application/json",
//           url: "/post/data",
//           dataType: "json",
//           link: formDetails.link,
//           text: ["hyy", "bhadweeee"],
//         }
//       )
//       .then(function (res) {
//         console.log("success");
//       });
//   };

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

//           {/* <div className="gpt3__header-content__people">
//         <img src={people} />
//         <p>1,600 people requested access a visit in last 24 hours</p>
//       </div> */}
//         </div>

//         <div className="gpt3__header-image">
//           <img src={ai} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
