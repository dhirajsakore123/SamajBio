import React from "react";

const AddressAndContacts = () => {
  return (
    <>
      <div className="bg-slate-50 grid grid-cols-1 md:grid-cols-1">
        <div className="  min-h-[50vh] px-2 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   text-black   items-center justify-evenly  gap-5 py-5 ">
          <div className="   h-28 border flex flex-col items-center justify-center rounded-sm bg-white shadow  ">
            <p className=" text-xl tiro-devanagari-marathi-regular">संस्थापक</p>
            <p className=" text-3xl tiro-devanagari-marathi-regular">
              श्री उज्ज्वल बाडबैल
            </p>
            <p>क्रमांक.8412071712 </p>
          </div>

          <div className="   h-28 border flex flex-col items-center justify-center rounded-sm bg-white shadow ">
            <p className=" text-xl tiro-devanagari-marathi-regular">अध्यक्ष</p>
            <p className=" text-3xl tiro-devanagari-marathi-regular">
              श्री स्वप्नील प्र. रोहणकर
            </p>
            <p>क्रमांक.7218880015</p>
          </div>

          <div className=" h-28 border flex flex-col items-center justify-center rounded-sm bg-white shadow">
            <p className=" text-xl tiro-devanagari-marathi-regular">सचिव</p>
            <p className=" text-3xl tiro-devanagari-marathi-regular">
            डॉ.प्रदीप महाजन
            </p>
            <p>क्रमांक.9423633327</p>
          </div>

          <div className="  h-28 border flex flex-col items-center justify-center rounded-sm bg-white shadow  ">
            {/* <p className=" text-xl tiro-devanagari-marathi-regular">संस्थापक</p> */}
            <p className=" text-3xl tiro-devanagari-marathi-regular">
            श्री मोहन डंबारे
            </p>
            <p>क्रमांक.7757008546</p>
          </div>

          <div className="  h-28 border flex flex-col items-center justify-center rounded-sm bg-white shadow  ">
            {/* <p className=" text-xl tiro-devanagari-marathi-regular">संस्थापक</p> */}
            <p className=" text-3xl tiro-devanagari-marathi-regular">
            श्री महादेवरावजी वैद्य
            </p>
            <p>क्रमांक.9850169434</p>
          </div>
          {/* <div className=" w-full  flex flex-col md:flex-row justify-evenly items-center gap-5  "> */}
         
          <div className=" h-28 border flex flex-col items-center justify-center rounded-sm bg-white shadow">
            {/* <p className=" text-xl tiro-devanagari-marathi-regular">सचिव</p> */}
            <p className=" text-3xl tiro-devanagari-marathi-regular">
            श्री रामरतन देशमुख
            </p>
            <p>क्रमांक.9850251604</p>
          </div>
         
          {/* </div> */}
        </div>

        <div className=" bg-slate-200 text-black flex flex-col justify-evenly py-5 gap-5">
          <div className=" flex flex-col items-center gap-2 md:gap-4">
            <p className=" text-3xl tiro-devanagari-marathi-regular">
              {" "}
              मुख्यालय{" "}
            </p>
            <p className=" text-lg tiro-devanagari-marathi-regular px-5 text-center">
              पत्ता प्लॉट नं. २४, गजानन महाराज मंदिर जवळ, नर्मदा लॉन, पिपला
              फाटा, हुडकेश्वर रोड, नागपूर ४४००३४
            </p>
          </div>
          <div className=" flex flex-col items-center gap-2 md:gap-4">
            <p className=" text-3xl tiro-devanagari-marathi-regular"> ऑफिस </p>
            <p className=" text-lg tiro-devanagari-marathi-regular px-5 text-center">
              कॉर्टर नं. डि ८/४, अंबाझरी पोलीस स्टेशन समोर, रवी नगर, नागपूर
              प्लॉट नं. २४, दुर्गेश नंदीनी नगर, पी.एम.बी.एस.
              कॉलेज, नरसाळा, नागपूर ४४००३४
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressAndContacts;
