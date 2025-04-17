type AvatarProps = {
    src: string;
    alt: string;
    size?: "sm" | "md" | "lg";
  };
  
  export const Avatar = ({ src, alt, size = "md" }: AvatarProps) => {
    const sizeMap = {
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16",
    };
  
    return (
      <img
        src={src}
        alt={alt}
        className={`rounded-full object-cover ${sizeMap[size]}`}
      />
    );
  };
  