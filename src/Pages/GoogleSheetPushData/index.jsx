import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';

export default function GoogleSheetPushData() {
  const [donationAmount, setDonationAmount] = useState(100); // Default donation amount
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle form submission to open the donation amount modal
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal
  };

  // Function to handle Razorpay payment after donation amount is selected
  const handlePayment = () => {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    formDatab.append("Donation", donationAmount);

    const options = {
      key: "rzp_test_8gAAcZx74kP2Zm", // Your Razorpay key
      amount: donationAmount * 100, // Convert to smallest currency unit (paise)
      currency: "INR",
      name: "Doanation For Kunbhi Samaj",
      description: "Donation for form submission",
      handler: function (response) {
        sendDataToGoogleSheet(formDatab); // Send data to Google Sheets after successful payment
        formEle.reset(); // Clear the form after successful submission
        setIsModalOpen(false); // Close the modal
        toast.success("BioData submitted successfully");
      },
      prefill: {
        name: formDatab.get("FullName"),
        email: "example@example.com",
      },
      notes: {
        address: "Donor Address",
      },
      theme: {
        color: "#F37254",
      },
    };

    if (window.Razorpay) {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } else {
      console.error("Razorpay SDK not loaded.");
      toast.error("Payment processing failed. Please try again.");
    }
  };

  // Function to send form data to Google Sheets
  const sendDataToGoogleSheet = (formDatab) => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzcaa4n3WiouJ7NC30tUv8EkkKu2ML0j907Ici80JRwGwnZZ9ueNGcnRoVQDWl9xZZpZQ/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Form submitted", data);
      })
      .catch((error) => {
        console.error("Error submitting form", error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-fit bg-gray-100">
      <div className="w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          BioData Form
        </h1>
        <p className="text-center text-gray-600 mb-8">Enter Your BioData Info</p>
        <form className="bg-white text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" onSubmit={handleSubmit}>
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" name="FullName" type="text" required />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Date of Birth" name="DateOfBirth" type="date" required />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Place of Birth" name="PlaceOfBirth" type="text" required />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Complexion" name="Complexion" type="text" required />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Height" name="Height" type="text" required />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Cast" name="Cast" type="text" required />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Education" name="Education" type="text" required />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Occupation" name="Occupation" type="text" required />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Father's Name" name="FatherName" type="text" required />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Mother's Name" name="MotherName" type="text" required />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contact No" name="ContactNo" type="text" required pattern="[0-9]{10,15}" />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Aadhaar Number" name="AadhaarNumber" type="text" required pattern="[0-9]{12}" />
          <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Aadhaar Linked Mobile" name="AadhaarLinkedMobile" type="text" required pattern="[0-9]{10}" />
          <div className="col-span-1 sm:col-span-2 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
            <textarea className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Brother and Sister" name="BrotherAndSister"></textarea>
            <textarea className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Maternal Uncle" name="MaternalUncle"></textarea>
            <textarea className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Residential Address" name="ResidentialAddress" required></textarea>
          </div>

          <div className="flex justify-end col-span-1 sm:col-span-2 md:col-span-3">
            <button className="w-fit h-fit py-2 px-4 bg-blue-500 text-white font-semibold rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">
              Pay & Submit
            </button>
          </div>
        </form>
      </div>

      {/* Modal for donation amount selection */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md w-80">
            <h2 className="text-xl font-semibold text-center mb-4">Select Donation Amount</h2>
            <div className="space-y-2">
              {[100, 200, 300, 400, 500].map((amount) => (
                <button
                  key={amount}
                  className={`w-full py-2 px-4 rounded-sm ${
                    donationAmount === amount ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setDonationAmount(amount)}
                >
                  ₹{amount}
                </button>
              ))}
            </div>
            <button
              className="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-sm hover:bg-blue-600"
              onClick={handlePayment}
            >
              Proceed to Pay ₹{donationAmount}
            </button>
            <button
              className="mt-4 w-full py-2 px-4 bg-gray-400 text-white font-semibold rounded-sm hover:bg-gray-500"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}





// import { useState, useEffect } from "react";

// export default function GoogleSheetPushData() {
//   const [step, setStep] = useState(1); // State to track the form step
//   const [formData, setFormData] = useState({
//     FullName: "",
//     DateOfBirth: "",
//     PlaceOfBirth: "",
//     Complexion: "",
//     Height: "",
//     Cast: "",
//     Education: "",
//     Occupation: "",
//     FatherName: "",
//     MotherName: "",
//     BrotherAndSister: "",
//     MaternalUncle: "",
//     ResidentialAddress: "",
//     ContactNo: "",
//     AadhaarNumber: "",
//     AadhaarLinkedMobile: "",
//   });

//   // Load data from local storage when the component mounts
//   useEffect(() => {
//     const savedData = localStorage.getItem("formData");
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     }
//   }, []);

//   function handleInputChange(e) {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }

//   function handleNext() {
//     localStorage.setItem("formData", JSON.stringify(formData));
//     setStep(2); // Move to the next step
//   }

//   function Submit(e) {
//     e.preventDefault(); // Prevent default form submission
//     const formEle = document.querySelector("form"); // Select the form element
//     const formDatab = new FormData(formEle); // Collect form data from all inputs

//     fetch(
//       "https://script.google.com/macros/s/AKfycbxqYtx2p4zEiG5hOFCsuhNnW7NfBwuJbOyBNNMi2RwJX8ndaBm2odu2oMgprE8oShsTHw/exec",
//       {
//         method: "POST",
//         body: formDatab,
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         localStorage.removeItem("formData"); // Clear local storage after successful submission
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-2">
//       <div className="w-full bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//           Contact Me Form
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           This demonstrates how to send data from a website form to Google Sheets in React or Vanilla JS
//         </p>

//         <form className="bg-white text-black grid grid-cols-3 gap-4" onSubmit={Submit}>
//           {step === 1 && (
//             <>
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" name="FullName" type="text" required onChange={handleInputChange} value={formData.FullName} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Date of Birth" name="DateOfBirth" type="date" required onChange={handleInputChange} value={formData.DateOfBirth} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Place of Birth" name="PlaceOfBirth" type="text" required onChange={handleInputChange} value={formData.PlaceOfBirth} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Complexion" name="Complexion" type="text" required onChange={handleInputChange} value={formData.Complexion} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Height" name="Height" type="text" required onChange={handleInputChange} value={formData.Height} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Cast" name="Cast" type="text" required onChange={handleInputChange} value={formData.Cast} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Education" name="Education" type="text" required onChange={handleInputChange} value={formData.Education} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Occupation" name="Occupation" type="text" required onChange={handleInputChange} value={formData.Occupation} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Father's Name" name="FatherName" type="text" required onChange={handleInputChange} value={formData.FatherName} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Mother's Name" name="MotherName" type="text" required onChange={handleInputChange} value={formData.MotherName} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contact No" name="ContactNo" type="text" required pattern="[0-9]{10,15}" onChange={handleInputChange} value={formData.ContactNo} />
//               <div className="col-span-3 grid grid-cols-3 gap-4">
//                 <textarea className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Brother and Sister" name="BrotherAndSister" onChange={handleInputChange} value={formData.BrotherAndSister}></textarea>
//                 <textarea className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Maternal Uncle" name="MaternalUncle" onChange={handleInputChange} value={formData.MaternalUncle}></textarea>
//                 <textarea className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Residential Address" name="ResidentialAddress" required onChange={handleInputChange} value={formData.ResidentialAddress}></textarea>
//               </div>
//               <div className="flex justify-end col-span-3">
//                 <button type="button" onClick={handleNext} className="p-4 bg-blue-500 text-white font-semibold rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   Save and Next
//                 </button>
//               </div>
//             </>
//           )}
//           {step === 2 && (
//             <>
//               <h2 className="col-span-3 text-xl font-semibold mb-4">Aadhaar Card Details</h2>
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Aadhaar Number" name="AadhaarNumber" type="text" required pattern="[0-9]{12}" onChange={handleInputChange} value={formData.AadhaarNumber} />
//               <input className="w-full p-4 border bg-white text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Aadhaar Linked Mobile" name="AadhaarLinkedMobile" type="text" required pattern="[0-9]{10}" onChange={handleInputChange} value={formData.AadhaarLinkedMobile} />
//               <div className="flex justify-between col-span-3">
//                 <button type="button" onClick={() => setStep(1)} className="p-4 bg-gray-500 text-white font-semibold rounded-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
//                   Back
//                 </button>
//                 <button type="submit" className="p-4 bg-blue-500 text-white font-semibold rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   Submit
//                 </button>
//               </div>
//             </>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

