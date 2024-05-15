export default function ImageBox({ src }) {
  return (
    <div className="imagebox">
      <img src={src} className="ghostbox" />
      <div/>
    </div>
  );
}
