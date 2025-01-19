import React from "react";
import BlogImage from "../../assets/images/card-1.jpg";
import BlogImageSecond from '../../assets/images/card-2.jpg'
import './news.css'

export default function News() {
  return (
    <>
      <div className="container">
        <div className="blog-news">
          <div className="blog-heading">
            <h1>Latest News from our Blog</h1>
            <p style={{opacity:'70%'}}>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="blog-card">
            <div className="blog-datas">
              <img src={BlogImage} className="blog-image" />
              <div className="buttons">
                <button>Tavel</button>
                <button>Life Style</button>
              </div>
              <div className="blog-text">
                <h4 style={{lineHeight:'3.8rem'}}>Portable latest Fashion for young women</h4>
                <p style={{opacity: '70%'}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <p style={{opacity: '80%'  , lineHeight: '3rem'}}>31st January, 2018</p>
              </div>
            </div>
            <div className="blog-datas">
              <img src={BlogImageSecond} className="blog-image" />
              <div className="buttons">
                <button>Tavel</button>
                <button>Life Style</button>
              </div>
              <div className="blog-text">
                <h4 style={{lineHeight:'3.8rem'}}>Portable latest Fashion for young women</h4>
                <p style={{opacity: '70%'}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <p style={{opacity: '80%' , lineHeight: '3rem'}}>31st January, 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
