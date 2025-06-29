import "./CarImg.scss";

const CarImg = ({ src }) => {
  const imgSrc = src.includes("empty-car")
    ? ""
    : `https://trademobile.co.il/_ipx/f_webp,b_white,fit_cover,s_360x270/tm/${src}`;

  return (
    <a
      href={imgSrc}
      target="popup"
      onClick={() => window.open(src, "name", "width=600,height=400")}
    >
      <img src={imgSrc} to={imgSrc} />
    </a>
  );
};

export default CarImg;
