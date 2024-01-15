import "./featuredProperties.css";
import useFetch from './../../hook/useFetch';
import { useEffect, useState } from "react";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");

  const imageUrls = [
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const [dataWithImages, setDataWithImages] = useState([]);

  useEffect(() => {
    // Assign a random image URL to each item in the data array
    const newData = data.map(item => ({
      ...item,
      selectedImageUrl: imageUrls[Math.floor(Math.random() * imageUrls.length)],
    }));

    // Update the state with the new data
    setDataWithImages(newData);
  }, [data]);

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {dataWithImages.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.selectedImageUrl}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
