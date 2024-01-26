import { useEffect, useState,useContext } from "react";
import Html5QrcodePlugin from "./QrPlugin";
import axios from "axios";
import Context from "../Context";
export default function Scanner({ parameter, apply }) {
  const [scanData, setScanData] = useState("");
  const context = useContext(Context);
  const addStudent = async (e) => {
    try {
      const api = await axios
        .post(
          `http://localhost:3000/add/makeAttend/${parameter.year}/${parameter.sem}/${context.user._id}`,
          {  hash: scanData  }
          
        )
        .then((data) => {
          context.SetTrigger((e)=>e=e+1)
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const onNewScanResult = (decodedText, decodedResult) => {
    setScanData(decodedResult.decodedText);
    // console.log(decodedResult.decodedText);
  };
  useEffect(() => {
    addStudent();
  }, [scanData]);

  return (
    <div className='App w-[40%] pr-3'>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  );
}
