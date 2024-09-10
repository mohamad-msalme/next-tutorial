type loaderProps = {
  src: string;
  width: number;
  quality: number;
};

const loader = ({ src, quality, width }: loaderProps) =>
  src.startsWith("/") || src.startsWith("http")
    ? src
    : `https://i.imgur.com/${src}?w=${width}&q=${quality || 75}`;

export default loader;
