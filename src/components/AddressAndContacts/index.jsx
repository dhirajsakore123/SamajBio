import React from "react";

const AddressAndContacts = () => {
  return (
    <>
      <div className="bg-slate-50 grid grid-cols-1 md:grid-cols-2">
        <div className="  min-h-[50vh]  text-black flex flex-col items-center justify-evenly  gap-5 py-5 ">
          <div className=" w-[80%] md:w-[35%] h-28 border flex flex-col items-center justify-center rounded-sm bg-white shadow  ">
            <p className=" text-xl tiro-devanagari-marathi-regular">संस्थापक</p>
            <p className=" text-3xl tiro-devanagari-marathi-regular">
              श्री उज्ज्वल बाडबैल
            </p>
          </div>

          <div className=" w-full  flex flex-col md:flex-row justify-evenly items-center gap-5  ">
            <div className="  w-[80%] md:w-[35%] h-28 border flex flex-col items-center justify-center rounded-sm bg-white shadow ">
              <p className=" text-xl tiro-devanagari-marathi-regular">
                अध्यक्ष
              </p>
              <p className=" text-3xl tiro-devanagari-marathi-regular">
                श्री स्वप्नील प्र. रोहणकर
              </p>
              <p>क्रमांक.७२१८८८००१५</p>
            </div>
            <div className="w-[80%] md:w-[35%] h-28 border flex flex-col items-center justify-center rounded-sm bg-white shadow">
              <p className=" text-xl tiro-devanagari-marathi-regular">सचिव</p>
              <p className=" text-3xl tiro-devanagari-marathi-regular">
                श्री प्रदिप महाजन
              </p>
              <p>क्रमांक.९४३२६३३३२७</p>
            </div>
          </div>
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
