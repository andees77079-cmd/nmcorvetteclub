import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const image1 = "https://i.imgur.com/gMtewpe.jpeg";
  const image2 = "";
  const image3 = "";
  const image4 = "";
  const image5 = "";
  const image6 = "";
  const images = [image1, image2, image3];
  let currentIndex = 0; 
  const heroImage = document.getElementById("hero-image");

  function changeImage() {
    // Change source after fade out
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to start [4]
        heroImage.src = images[currentIndex];
    }, 1000); // Matches CSS transition time
  }

// Change image every 5 seconds
setInterval(changeImage, 5000);


  return (
    <>
      <header className="header">
        {/* <h1>New Mexico Corvette Club</h1>
       <h2>Welcome to the Club!</h2>  */}
      </header>

      <div class='under-header'>
        <h1>NEW MEXICO CORVETTE CLUB</h1>
        <h2>MEET THE TEAM</h2>
      </div>
      <div class="carousel">
        <div class="group">
          <div class="card-1">Corvette photo </div>
          <div class="card-2">Corvette photo </div>
          <div class="card-3">Corvette photo </div>
          <div class="card-4">Corvette photo </div>
          <div class="card-5">Corvette photo </div>
          <div class="card-6">Corvette photo </div>
        </div>
        <div aria-hidden="true" class="group">
          <div class="card-1">Corvette photo </div>
          <div class="card-2">Corvette photo </div>
          <div class="card-3">Corvette photo </div>
          <div class="card-4">Corvette photo </div>
          <div class="card-5">Corvette photo </div>
          <div class="card-6">Corvette photo </div>
        </div>
      </div>

      <div class="Events">
        <div class="Events-text">
          <h1>OUR PLANNED EVENTS</h1>
        </div>
        <div class="Events-Box">
            <p>Event details will be displayed here.</p>
        </div>
      </div>

      <div className='For-sale'>
        <h1>FOR SALE</h1>
      </div>

    </>

  )
}
export default App

//AIzaSyBoTywzMPV3AAplUvQAGW9a7xWzDA56xpw