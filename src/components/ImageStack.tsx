// Import the images as modules using the named import syntax
import { default as samuel } from "../assets/images/samuel.jpg";
import { default as vazh } from "../assets/images/vazhnik.jpg";
import { default as zemu } from "../assets/images/zemu.jpg";
import { default as gitz } from "../assets/images/gitz.jpg";
// An array of image modules
const images = [samuel, zemu, vazh, gitz];

// A React component that renders the images
const ImageStack = () => {
  return (
    // A container element with relative position
    <div className="relative">
      {images.map((image, index) => (
        // An image element with Tailwind classes and the image module as the source
        // Use the default property to access the image data
        <img
          src={image.default}
          alt=""
          className={`rounded-full w-20 h-20 absolute top-${index * 4} left-${
            index * 4
          } z-${index * 10}`}
          key={index}
        />
      ))}
    </div>
  );
};

export default ImageStack;
