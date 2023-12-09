import React from "react";

interface PortraitProps {
  src: string;
  width: number;
  height: number;
}

const Portrait: React.FC<PortraitProps> = ({ src, width, height }) => {
  return (
    <img
      src={src}
      className={`object-cover rounded-full w-${width}
    h-${height} `}
      alt="Portrait"
    />
  );
};

interface PortraitRowProps {
  images: string[];
  width: number;
  height: number;
  gap: number;
}

const PortraitRow: React.FC<PortraitRowProps> = ({
  images,
  width,
  height,
  gap,
}) => {
  return (
    <div className={`flex items-center space-x-[${gap}]`}>
      {images.map((image, index) => (
        <Portrait key={index} src={image} width={width} height={height} />
      ))}
    </div>
  );
};

export default PortraitRow;
