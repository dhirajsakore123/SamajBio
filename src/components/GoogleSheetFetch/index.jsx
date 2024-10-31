import React from "react";
// import "./styles.css";

export default function GoogleSheetForm() {
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.target); // Capture the form data

    // Log form data to see what is being sent
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbyS2zE4QHuywgFK4AnwC4zZe_xnpPuoRUPUA1xTIXNziyuTg0q0HNA2F0-tMLkn6hFASw/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: formData, // Send the form data directly
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`); // Check for errors
        }
        return res.text(); // Use .text() since the response might not be JSON
      })
      .then((data) => {
        console.log("Form Submitted", data); // Log success message
        e.target.reset(); // Reset the form
      })
      .catch((error) => {
        console.error("Error submitting form", error); // Log error
      });
  }

  return (
    <div className="App">
      <h1>Contact Me Form</h1>
      <h2>This demonstrates how to send data from a website form to Google Sheets</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Full Name" name="FullName" type="text" required />
        <input placeholder="Date of Birth" name="DateOfBirth" type="date" required />
        <input placeholder="Place of Birth" name="PlaceOfBirth" type="text" required />
        <input placeholder="Complexion" name="Complexion" type="text" required />
        <input placeholder="Height" name="Height" type="text" required />
        <input placeholder="Cast" name="Cast" type="text" required />
        <input placeholder="Education" name="Education" type="text" required />
        <input placeholder="Occupation" name="Occupation" type="text" required />
        <input placeholder="Father's Name" name="FatherName" type="text" required />
        <input placeholder="Mother's Name" name="MotherName" type="text" required />
        <textarea placeholder="Brother and Sister" name="BrotherAndSister"></textarea>
        <textarea placeholder="Maternal Uncle" name="MaternalUncle"></textarea>
        <textarea placeholder="Residential Address" name="ResidentialAddress" required></textarea>
        <input placeholder="Contact No" name="ContactNo" type="text" required pattern="[0-9]{10,15}" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
