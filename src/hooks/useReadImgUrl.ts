import { useEffect, useState } from "react";

const useReadImgUrl = () => {
  const [binaryImg, setBinaryImg] = useState<File | null>(null);
  const [perviewURL, setPerviewURL] = useState<string | null>(null);

  useEffect(() => {
    if (!binaryImg) return;
    // reading and parsing binary data
    const imageReader = new FileReader();
    imageReader.readAsDataURL(binaryImg);
    // wait for read binary data and parse file
    imageReader.onload = () => {
      setPerviewURL(imageReader.result as string);
    };
    //  log the error and reset binaryImg
    imageReader.onerror = (error) => {
      console.log(error);
      setBinaryImg(null);
    };
  }, [binaryImg, setPerviewURL]);

  return [perviewURL, binaryImg, setBinaryImg] as const;
};

export default useReadImgUrl;
