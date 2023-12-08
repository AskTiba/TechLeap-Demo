import { images } from "./Instructors";

export const Instructors = () => {
  return;
  <>
    <div className="relative">
      {images.map((image, index) => (
        <img
          src={image}
          alt=""
          className={`rounded-full w-20 h-20 absolute top-${index * 4} left-${
            index * 4
          } z-${index * 10}`}
          key={index}
        />
      ))}
    </div>
  </>;
};
