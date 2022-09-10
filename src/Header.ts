import React, { useState } from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import axios from "axios";
// import Cropper from "../../App.tsx";
import canvasPreview from "../../canvasPreview.ts";
import { useDebounceEffect } from '../../useDebounceEffect.ts'
import { random1 } from "../../App.tsx";

// APP
// import React, { useState, useRef } from 'react'

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
// import { canvasPreview } from './canvasPreview.ts'
// import { useDebounceEffect } from './useDebounceEffect.ts'

import 'react-image-crop/dist/ReactCrop.css'
let random = [];

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
  console.log('hogya')
}

export default function Cropper() {
  const [imgSrc, setImgSrc] = useState('')
  //const [dimen,setDim]= useState({"x":0,"y":0,"w":0,"h":0}) 
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState<number | undefined>(16 / 9)

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
      console.log(width, height, aspect)
    }
  }
  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        console.log("hyyyy")
        random = (canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        ))
      }
    },
    100,
    [completedCrop, scale, rotate],
  )

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined)
    } else if (imgRef.current) {
      const { width, height } = imgRef.current
      setAspect(16 / 9)
      setCrop(centerAspectCrop(width, height, 16 / 9))
    }
  }

  // return (
    // <div className="App">
    //   <div className="Crop-Controls">
    //     <input type="file" accept="image/*" onChange={onSelectFile} />
    //     <div>
    //       <label htmlFor="scale-input">Scale: </label>
    //       <input
    //         id="scale-input"
    //         type="number"
    //         step="0.1"
    //         value={scale}
    //         disabled={!imgSrc}
    //         onChange={(e) => setScale(Number(e.target.value))}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="rotate-input">Rotate: </label>
    //       <input
    //         id="rotate-input"
    //         type="number"
    //         value={rotate}
    //         disabled={!imgSrc}
    //         onChange={(e) =>
    //           setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
    //         }
    //       />
    //     </div>
    //     <div>
    //       <button onClick={handleToggleAspectClick}>
    //         Toggle aspect {aspect ? 'off' : 'on'}
    //       </button>
    //     </div>
    //   </div>
    //   {Boolean(imgSrc) && (
    //     <ReactCrop
    //       crop={crop}
    //       onChange={(_, percentCrop) => setCrop(percentCrop)}
    //       onComplete={(c) => setCompletedCrop(c)}
    //       aspect={aspect}
    //     >
    //       <img
    //         ref={imgRef}
    //         alt="Crop me"
    //         src={imgSrc}
    //         style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
    //         onLoad={onImageLoad}
    //       />
    //     </ReactCrop>
    //   )}
    //   <div>
    //     {Boolean(completedCrop) && (
    //       <canvas
    //         ref={previewCanvasRef}
    //         style={{
    //           border: '1px solid black',
    //           objectFit: 'contain',
    //           width: completedCrop.width,
    //           height: completedCrop.height,
    //         }}
    //       />
    //     )}
    //   </div>
    //   {/* <h1 className="color-font-white">{completedCrop.width}</h1> */}
    // </div>
  // )
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
          <h1>{random1} </h1>
          {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
        </div>
        
        <div>
          <div className="App">
      <div className="Crop-Controls">
        <input type="file" accept="image/*" onChange={onSelectFile} />
        <div>
          <label htmlFor="scale-input">Scale: </label>
          <input
            id="scale-input"
            type="number"
            step="0.1"
            value={scale}
            disabled={!imgSrc}
            onChange={(e) => setScale(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="rotate-input">Rotate: </label>
          <input
            id="rotate-input"
            type="number"
            value={rotate}
            disabled={!imgSrc}
            onChange={(e) =>
              setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
            }
          />
        </div>
        <div>
          <button onClick={handleToggleAspectClick}>
            Toggle aspect {aspect ? 'off' : 'on'}
          </button>
        </div>
      </div>
      {Boolean(imgSrc) && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      <div>
        {Boolean(completedCrop) && (
          <canvas
            ref={previewCanvasRef}
            style={{
              border: '1px solid black',
              objectFit: 'contain',
              width: completedCrop.width,
              height: completedCrop.height,
            }}
          />
        )}
      </div>
      {/* <h1 className="color-font-white">{completedCrop.width}</h1> */}
    </div>
          </div>


        <div className="gpt3__header-image">
          <img src={ai} />
        </div>
      </div>
    </>
  );
};

export default Header;
