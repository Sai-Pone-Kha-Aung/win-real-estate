'use client'
import React from 'react'
import "./page.scss"
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const NewPostPage = () => {
  return (
    <div className='newPostPage'>
        <div className="formContainer">
            <h1>Add New Post</h1>
            <div className="wrapper">
            <form>
              <div className="item">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title"  />
              </div>
              <div className="item">
              <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price"  />
              </div>
              <div className="item">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address"  />
              </div>
              <div className="item description">
                <label htmlFor="description">Description</label>
                <ReactQuill theme="snow"/>
              </div>
              <div className="item">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city"  />
              </div>
              <div className="item">
                <label htmlFor="bedroom">Bedroom Number</label>
                <input min={1}type="number" name="bedroom" id="bedroom"  />
              </div>
              <div className="item">
                <label htmlFor="bathroom">Bathroom Number</label>
                <input min={1} type="number" name="bathroom" id="bathroom"  />
              </div>
              <div className="item">
                <label htmlFor="latitude">Latitude</label>
                <input type="latitude" name="latitude" id="address"  />
              </div>
              <div className="item">
                <label htmlFor="longitude">Longtitude</label>
                <input type="text" name="address" id="address"  />
              </div>
              <div className="item">
                <label htmlFor="type">Type</label>
                <select name='type'>
                  <option value="rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="type">Property</label>
                <select name='property'>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="utilities">Utilities Policy</label>
                <select name='utilities'>
                  <option value="owner">Owner is responsible</option>
                  <option value="tenant">tenant is responsible</option>
                  <option value="shared">Shared</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="pet">Pet Policy</label>
                <select name='pet'>
                  <option value="allow">Allowed</option>
                  <option value="not-allow">Not Allowed</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="income">Income Policy</label>
                <input type="text" name="income" id="income" placeholder='Income Policy'  />
              </div>
              <div className="item">
                <label htmlFor="size">Total Size (sqft)</label>
                <input min={0} type="number" name="size" id="size"  />
              </div>
              <div className="item">
                <label htmlFor="school">School</label>
                <input min={0} type="number" name="school" id="school"  />
              </div>
              <div className="item">
                <label htmlFor="bus">Bus</label>
                <input min={0} type="number" name="bus" id="bus"  />
              </div>
              <div className="item">
                <label htmlFor="restaurant">Restaurant</label>
                <input min={0} type="number" name="restaurant" id="restaurant"  />
              </div>
              <button className='addButton'>Add</button>
            </form>
            </div>
        </div>
        <div className="sideContainer">
            update widget
        </div>
    </div>
  )
}

export default NewPostPage