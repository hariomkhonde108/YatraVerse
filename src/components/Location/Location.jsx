import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8301.762136271569!2d77.53127602638118!3d12.933678757005612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1731480746373!5m2!1sen!2sin" 
          width="100%"
          height="360"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{ borderRadius: "20px" }}


          
          ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
