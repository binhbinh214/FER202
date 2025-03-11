import React from "react";
import PropTypes from "prop-types";
import "../App.css";
const AnimalCard = ({
  name,
  scientificName,
  size,
  diet,
  additional,
  showAdditional,
  image,
}) => {
  // Hàm hiển thị thông tin bổ sung
  const showAdditionalData = (data) => {
    const additionalInfo = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    alert(additionalInfo);
  };

  return (
    <div className="animal-card">
      <img src={image} alt={name} className="animal-image" />
      <h2>{name}</h2>
      <p>Scientific Name: {scientificName}</p>
      <p>Size: {size} kg</p>
      <p>Diet: {diet.join(", ")}</p>
      {additional && (
        <button onClick={() => showAdditionalData(additional)}>
          More Info
        </button>
      )}
    </div>
  );
};

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  showAdditional: PropTypes.func.isRequired,
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  image: PropTypes.string.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: "No Additional Information",
  },
};

export default AnimalCard;
