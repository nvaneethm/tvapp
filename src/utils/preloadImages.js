export const preloadImages = (srcArray) => {
  const images = [];
  const preloadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      images.push(img);
    });
  };

  return Promise.all(srcArray.map(preloadImage));
};