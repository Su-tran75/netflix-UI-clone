import React from "react";
import "./newProduct.scss";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img"/>
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input type="file" id="imgTitle"/>
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input type="file" id="imgSm"/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Matrix"/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Description"/>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year"/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre"/>
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration"/>
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit"/>
        </div>
        <div className="addProductItem">
          <label>Is Series ?</label>
          <select name="active" id="isSeries">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select> 
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
