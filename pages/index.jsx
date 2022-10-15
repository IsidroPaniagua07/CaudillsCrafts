import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card/Card";

export default function Home() {
  if (typeof window !== "undefined") {


    
    // let count = 1
    // const intervals = setInterval(() => {

    //     console.log(count);
    //     document.getElementById("radio" + count).checked = true;
    //     if (count === 3) {
    //       count=1
    //     } else count++;
    //   }, 2000);
    //   const buttons = document.getElementsByClassName("manual-btn")
    //   for(let i=0; i < buttons.length; i++) {
    //       buttons[i].addEventListener("click", ()=>{
    //         clearInterval(intervals)
    //         const intervals = setInterval(() => {

    //           console.log(count);
    //           document.getElementById("radio" + count).checked = true;
    //           if (count === 3) {
    //             count=1
    //           } else count++;
    //         }, 2000);
    //       })        
    //     }
        
      }
      
  


  return (
    <>
      <div className="h-full w-full flex flex-col items-center">
        <div className="w-full h-1/2 flex items-center justify-between px-2 font-RobotoMono font-bold text-5xl">
          <h1 className="flex h-fit w-1/2 italic text-black justify-start items-center ">
            Caudill&apos;s Crafts.
          </h1>
          <div className="slider mr-20 overflow-hidden">
            <div className="slides">
              <input type="radio" name="radio-btn" id="radio1" />
              <input type="radio" name="radio-btn" id="radio2" />
              <input type="radio" name="radio-btn" id="radio3" />
              <div className="slide first">
          
                <Card name="1" size="sm" url="/" />
                <Card name="2" size="sm" url="/" />
              <Card name="3" size="sm" url="/" />
              </div>
              <div className="slide">
         
                <Card name="4" size="sm" url="/" />
                <Card name="5" size="sm" url="/" />
              <Card name="6" size="sm" url="/" />
              </div>
              <div className="slide">
      
                <Card name="7" size="sm" url="/" />
                <Card name="8" size="sm" url="/" />
              <Card name="9" size="sm" url="/" />
              </div>
              <div className="manual-navigation">
                <label htmlFor="radio1" className="manual-btn" id="manual-btn1"></label>
                <label htmlFor="radio2" className="manual-btn" id="manual-btn2"></label>
                <label htmlFor="radio3" className="manual-btn" id="manual-btn3"></label>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex pl-40 items-center w-full h-1/3 bg-slate-800 text-white text-left font-Roboto text-xl mb-14">
          <div className="flex flex-col h-fit text-xl w-fit p-2">
            <span className="text-3xl">Hello!</span>
            <span>
              We&apos;re a family run Disney-inspired apparel shop in San Diego,
              CA
            </span>
            <span>
              Our mission is to add a little bit of magic into your every-day
              wardrobe.
            </span>
            Our apparel is 100% Handmade with love and magic for women, men and
            children.
            <span>
              Feel free to take a look, browse, and reach out with any
              questions!
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
