import React from "react"

export default function About(props){

  let myStyle = {
    border: props.mode === 'dark' ? '1px solid white' : '0px',
    color: props.mode === 'dark' ? 'white' : 'black', 
    backgroundColor : props.mode === 'dark' ? 'black' : 'white'
  }

    return (
      <div>
        <div className="accordion" id="accordionExample">
          <h1 style={{color: props.mode === 'dark' ? 'white' : 'black', 
    backgroundColor : props.mode === 'dark' ? 'black' : 'white'}}>About</h1>
            <div className="accordion-item">
                <h2 className="accordion-header" >
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}> About Us </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <strong>About Us</strong><br></br><br></br> Welcome to WebCore—your ultimate destination for all things text manipulation! At WebCore, we believe that working with text should be both powerful and simple. That's why we've created a suite of intuitive tools designed to help you analyze, modify, and enhance your text effortlessly.<br></br><br></br>Whether you’re looking to transform your text into different formats, perform complex analyses, or simply tweak and tune your words to perfection, WebCore has you covered. Our platform is built using the latest web technologies, leveraging the power of React and JSX to deliver a seamless and responsive user experience.<br></br><br></br><strong>Our Mission</strong><br></br><br></br>Our mission at WebCore is to empower users with tools that make text manipulation easy and accessible for everyone, from developers to content creators. We strive to continually innovate and expand our offerings to meet the diverse needs of our community.


                </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Website Description
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>WebCore</strong>  is your go-to platform for versatile text manipulation! Our website offers powerful features to convert text between <strong>uppercase</strong> and <strong>lowercase</strong> repeat text with ease, and customize your experience with a sleek <strong>dark mode</strong>. Whether you're fine-tuning content or just exploring creative text transformations, WebCore provides the tools you need, all wrapped in a user-friendly interface powered by React.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        Contact Info
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={myStyle}>
        <strong>Creator : Kashish Dalwani</strong><br></br>We'd love to hear from you! Whether you have questions, feedback, or need support, our team is here to help.<br></br><br></br>Email: dalwanikashish25@gmail.com<br></br>ww.linkedin.com/in/kashish-dalwani-a1355b254 (LinkedIn)<br></br>Mobile No.: 7227081369
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }


