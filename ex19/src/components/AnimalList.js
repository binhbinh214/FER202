import React from "react";
import AnimalCard from "./AnimalCard";
import animalData from "../data/animalData";

const AnimalList = () => {
  return (
    <div>
      <h1 className="title">Animals</h1>

      {/* Danh sách động vật */}
      <div className="animal-list">
        {animalData.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            image={animal.image}
            showAdditional={(data) => alert(data.notes)}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
