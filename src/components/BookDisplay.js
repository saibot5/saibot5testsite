import React from "react";
import bookData from "../enkeldata.json";

const BookDisplay = () => {
  return (
    <div>
      <div>
        <h1>Mina böcker</h1>
        {bookData.böcker.map((bok) => (
          <div key={bok.id}>
            <h2>{bok.titel}</h2>
            <p>Författare: {bok.författare}</p>
            <p>Utgivningsår: {bok.utgivningsår}</p>
            <p>Genre: {bok.genre}</p>
          </div>
        ))}
      </div>
      <div>
      <h1>Mina CD</h1>
      {bookData.cdskivor.map((cd) => (
        <div key={cd.id}>
          <h2>{cd.cdnamn}</h2>
          <p>artist: {cd.artist}</p>
          <p>Utgivningsår: {cd.utgivningsår}</p>
          <p>Genre: {cd.genre}</p>
        </div>
      ))}
    </div>
    </div>
  );
};
export default BookDisplay;
