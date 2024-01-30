import { useState, useEffect } from 'react';
import '../App.css';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'


const Upload =()=> {
  const [imageUpload, setImageUpload] = useState(null)
  const [imageList, setImageList] = useState([])

  console.log(imageList)


  const imageRefList = ref(storage, "images/");

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    })
  };

  useEffect(() => {
    listAll(imageRefList).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then(url => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  return (
    <div className="App">
      <input type='file' onChange={(e) => { setImageUpload(e.target.files[0]) }} />
      <button onClick={uploadImage}>Upload</button>
      <div className='images_block'>
        {imageList.map((url) => {
          return <img src={url} alt="image_upload" key={url}/>
        })}
      </div>



    </div>
  );
}

export default Upload;
