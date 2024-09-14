"use client";
import React, { useState } from "react";
import {
  city,
  countries,
  gender,
  position,
  status,
  traveling,
  visatype,
} from "./formdata/Formdata";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "@/constant/constants";
import { motion } from "framer-motion";
import {
  fadeIn,
  letter,
  sentence,
  staggerContainer,
} from "./animations/Motion";
import Link from "next/link";

type OptionType = {
  value: string;
  label: string;
};

const Form = () => {
  const [selectedCountry, setSelectedCountry] =
    React.useState<OptionType | null>(null);
  const [selectedcity, setSelectedcity] = React.useState<OptionType | null>(
    null
  );
  const [selectedtravel, setSelectedtravel] = React.useState<OptionType | null>(
    null
  );
  const [selectedstatus, setSelectedstatus] = React.useState<OptionType | null>(
    null
  );
  const [selectedGender, setSelectedGender] = React.useState<OptionType | null>(
    null
  );
  const [selectedvisatype, setSelectedvisatype] =
    React.useState<OptionType | null>(null);
  const [selectedposition, setSelectedposition] =
    React.useState<OptionType | null>(null);
  const [dateofbirthValue, setDateofbirthValue] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [passportno, setpassportno] = useState("");
  const [confirmpassportno, setconfirmpassportno] = useState("");
  const [passportissueplace, setpassportissueplace] = useState("");
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [nationalid, setnationalid] = useState("");
  const [other, setother] = useState("");
  const [dateofissueValue, setDateofissueValue] = useState("");
  const [dateofexpireValue, setDateofexpireValue] = useState("");

  const handleCountry = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
  };

  const handlecity = (selectedOption: any) => {
    setSelectedcity(selectedOption);
  };

  const handletravel = (selectedOption: any) => {
    setSelectedtravel(selectedOption);
  };

  const handlegender = (selectedOption: any) => {
    setSelectedGender(selectedOption);
  };

  const handleposition = (selectedOption: any) => {
    setSelectedposition(selectedOption);
  };

  const handlestatus = (selectedOption: any) => {
    setSelectedstatus(selectedOption);
  };

  const handlevisatype = (selectedOption: any) => {
    setSelectedvisatype(selectedOption);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  const FormSubmit = async (event: any) => {
    try {
      event.preventDefault();
      if (selectedCountry) {
        const res = await fetch(`${BASE_URL}/api/form`, {
          method: "POST",
          body: JSON.stringify({
            country: selectedCountry?.label,
            city: selectedcity?.label,
            countrytravelto: selectedtravel?.label,
            firstname: firstname,
            lastname: lastname,
            dateofbirth: dateofbirthValue,
            gender: selectedGender?.label,
            martialstatus: selectedstatus?.label,
            passportno: passportno,
            confirmpassportno: confirmpassportno,
            passportissuedate: dateofissueValue,
            passportissueplace: passportissueplace,
            passportexpirydate: dateofexpireValue,
            visatype: selectedvisatype?.label,
            email: email,
            phoneno: phoneno,
            nationalid: nationalid,
            postionappliedfor: selectedposition?.label,
            other: other,
          }),
        });
        console.log(res.ok);
        if (res.ok) {
          toast.success("Form submitted successfully", {
            position: "top-right",
          });
          setIsSubmitted(true); // Set state to show the new button
        } else {
          toast.error("Failed to submit form", {
            position: "top-right",
          });
        }
      }
      setSelectedcity(null);
      setSelectedCountry(null);
      setSelectedtravel(null);
      setSelectedGender(null);
      setSelectedstatus(null);
      setSelectedvisatype(null);
      setSelectedposition(null);
      setFirstname("");
      setLastname("");
      setDateofbirthValue("");
      setpassportno("");
      setconfirmpassportno("");
      setpassportissueplace("");
      setDateofissueValue("");
      setDateofexpireValue("");
      setemail("");
      setphoneno("");
      setnationalid("");
      setother("");
    } catch (error) {
      console.log("error");
    }
  };
  const line1 = "Book a medical examination appointment ";

  return (
    <>
      <Toaster position="top-right" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        viewport={{ once: false, amount: 0.25 }}
        whileInView="show"
        className="h-full w-full py-32 px-6"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="max-w-[1100px] justify-items-end   border p-6 sm:p-10 rounded-xl shadow-md shadow-black border-gray-300 items-center flex flex-col mx-auto text-black   bg-[#ffff]  "
        >
          <div className="flex flex-col w-full space-y-10 ">
            {/* medical examination */}

            <div>
              <motion.p variants={sentence} initial="hidden" animate="visible">
                {line1.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letter}
                    className="text-xl sm:text-4xl font-bold "
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* country */}
              <div className="  flex-col w-full  place-self-end ">
                <div className="space-y-4">
                  <p className="text-xl font-bold">Location</p>
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">Country </p>
                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <Select
                    className="  rounded-xl "
                    value={selectedCountry}
                    onChange={handleCountry}
                    options={countries}
                    placeholder="Select a country"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        backgroundColor: "#e6e5e5fd",
                        borderColor: "gray",
                        fontSize: "14px",
                        color: "gray",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        backgroundColor: "white", // Background color for the menu
                        color: "white", // Text color in the menu
                        fontSize: "10px",
                      }),
                      option: (provided) => ({
                        ...provided,
                        color: "black",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "black", // Text color for the selected value
                      }),
                    }}
                  />
                </div>
              </div>
              {/* city */}
              <div className="flex flex-col w-full  justify-end ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">City</p>
                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <Select
                    className="  rounded-xl "
                    value={selectedcity}
                    onChange={handlecity}
                    options={city}
                    placeholder="Select your city
"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        backgroundColor: "#e6e5e5fd",
                        borderColor: "gray",
                        fontSize: "14px",
                        color: "gray",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        backgroundColor: "white", // Background color for the menu
                        color: "white", // Text color in the menu
                        fontSize: "10px",
                      }),
                      option: (provided) => ({
                        ...provided,
                        color: "black",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "black", // Text color for the selected value
                      }),
                    }}
                  />
                </div>
              </div>
              {/* country traveling to */}
              <div className="flex flex-col w-full  justify-end ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">
                      {" "}
                      Country Traveling To
                    </p>
                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>

                  <Select
                    className="  rounded-xl "
                    value={selectedtravel}
                    onChange={handletravel}
                    options={traveling}
                    placeholder="Select GCC country 
"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        backgroundColor: "#e6e5e5fd",
                        borderColor: "gray",
                        fontSize: "14px",
                        color: "gray",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        backgroundColor: "white", // Background color for the menu
                        color: "white", // Text color in the menu
                        fontSize: "10px",
                      }),
                      option: (provided) => ({
                        ...provided,
                        color: "black",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "black", // Text color for the selected value
                      }),
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Candidate's information*/}

            <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-10 pt-20">
              {/* first name */}
              <div className="  flex-col w-full  justify-end ">
                <div className="space-y-4">
                  <p className="text-xl font-bold">Candidate's information</p>

                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">
                      First Name
                    </p>
                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <input
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    placeholder=" First Name  "
                    className="w-full placeholder:text-[#616369]  rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd] border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* last name */}
              <div className="   w-full  place-self-end ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">
                      Last Name
                    </p>

                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    placeholder=" Last Name  "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* date of birth */}
              <div className="   w-full  place-self-end ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">
                      Date of Birth
                    </p>

                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>

                  <input
                    type="date"
                    value={dateofbirthValue}
                    onChange={(e) => setDateofbirthValue(e.target.value)}
                    className={`date-input w-full text-sm h-[37px] bg-[#e6e5e5fd] border border-gray-500   hover:border-gray-400 rounded-[4px] px-2 ${
                      dateofbirthValue ? "text-black" : "text-[#616369]"
                    }`}
                    placeholder="MM/DD/YY"
                  />
                </div>
              </div>
              {/* gender */}
              <div className="space-y-4">
                <div className=" flex justify-between items-center">
                  <p className="text-sm font-bold text-gray-500 ">Gender</p>

                  <span className="text-[10px] font-bold text-gray-500 ">
                    (required)
                  </span>
                </div>
                <Select
                  className="  rounded-xl "
                  value={selectedGender}
                  onChange={handlegender}
                  options={gender}
                  placeholder="-------
"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#e6e5e5fd",
                      borderColor: "gray",
                      fontSize: "14px",
                      color: "gray",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: "white", // Background color for the menu
                      color: "white", // Text color in the menu
                      fontSize: "10px",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black", // Text color for the selected value
                    }),
                  }}
                />
              </div>
              {/* status */}
              <div className="space-y-4">
                <div className=" flex justify-between items-center">
                  <p className="text-sm font-bold text-gray-500 ">
                    Marital status
                  </p>

                  <span className="text-[10px] font-bold text-gray-500 ">
                    (required)
                  </span>
                </div>
                <Select
                  className="  rounded-xl "
                  value={selectedstatus}
                  onChange={handlestatus}
                  options={status}
                  placeholder="-------
"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#e6e5e5fd",
                      borderColor: "gray",
                      fontSize: "14px",
                      color: "gray",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: "white", // Background color for the menu
                      color: "white", // Text color in the menu
                      fontSize: "10px",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black", // Text color for the selected value
                    }),
                  }}
                />
              </div>
              {/* password number */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">
                      Passport number №
                    </p>

                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <input
                    value={passportno}
                    onChange={(e) => setpassportno(e.target.value)}
                    type="text"
                    placeholder=" Passport number no*"
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/*Confirm password number */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">
                      Confirm Passport №
                    </p>
                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <input
                    value={confirmpassportno}
                    onChange={(e) => setconfirmpassportno(e.target.value)}
                    type="text"
                    placeholder=" Confirm Passport no* "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* password issue date */}
              <div className="   w-full  place-self-end">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">
                      Passport Issue Date
                    </p>

                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <input
                    type="date"
                    value={dateofissueValue}
                    onChange={(e) => setDateofissueValue(e.target.value)}
                    className={`date-input w-full text-sm h-[37px] bg-[#e6e5e5fd] border border-gray-500 hover:border-gray-400 rounded-[4px] px-2 ${
                      dateofissueValue ? "text-black" : "text-[#616369]"
                    }`}
                    placeholder="MM/DD/YY"
                  />
                </div>
              </div>
              {/* password issue place */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">
                      Passport Issue Place
                    </p>

                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <input
                    value={passportissueplace}
                    onChange={(e) => setpassportissueplace(e.target.value)}
                    type="text"
                    placeholder=" Passport Issue Place  "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* password expiry date */}
              <div className="   w-full  place-self-end ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">
                      Passport Expiry Date
                    </p>

                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <input
                    type="date"
                    value={dateofexpireValue}
                    onChange={(e) => setDateofexpireValue(e.target.value)}
                    className={`date-input w-full text-sm h-[37px] bg-[#e6e5e5fd] border border-gray-500 hover:border-gray-400 rounded-[4px] px-2 ${
                      dateofexpireValue ? "text-black" : "text-[#616369]"
                    }`}
                    placeholder="MM/DD/YY"
                  />
                </div>
              </div>
              {/* visa type */}
              <div className="space-y-4">
                <div className=" flex justify-between items-center">
                  <p className="text-sm font-bold text-gray-500 ">Visa Type</p>

                  <span className="text-[10px] font-bold text-gray-500 ">
                    (required)
                  </span>
                </div>
                <Select
                  className="  rounded-xl "
                  value={selectedvisatype}
                  onChange={handlevisatype}
                  options={visatype}
                  placeholder="Select Visa Type

"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#e6e5e5fd",
                      borderColor: "gray",
                      fontSize: "14px",
                      color: "gray",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: "white", // Background color for the menu
                      color: "white", // Text color in the menu
                      fontSize: "10px",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black", // Text color for the selected value
                    }),
                  }}
                />
              </div>
              {/* email */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">Email ID</p>

                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="text"
                    placeholder=" your@gmail.com  "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* phone no */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">Phone no</p>

                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <input
                    value={phoneno}
                    onChange={(e) => setphoneno(e.target.value)}
                    type="text"
                    placeholder=" Phone no "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* notion id */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-500 ">
                      National ID
                    </p>

                    <span className="text-[10px] font-bold text-gray-500 ">
                      (required)
                    </span>
                  </div>
                  <input
                    value={nationalid}
                    onChange={(e) => setnationalid(e.target.value)}
                    type="text"
                    placeholder=" National ID
 "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* position applied for*/}
              <div className="space-y-4   ">
                <div className=" flex justify-between items-center">
                  <p className="text-sm font-bold text-gray-500 ">
                    Position applied for
                  </p>

                  <span className="text-[10px] font-bold text-gray-500 ">
                    (required)
                  </span>
                </div>
                <Select
                  className="  rounded-xl "
                  value={selectedposition}
                  onChange={handleposition}
                  options={position}
                  placeholder="-------
"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#e6e5e5fd",

                      borderColor: "gray",
                      fontSize: "14px",
                      color: "gray",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: "white", // Background color for the menu
                      color: "white", // Text color in the menu
                      fontSize: "10px",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black", // Text color for the selected value
                    }),
                  }}
                />
              </div>
              {/* Other */}
              <div className="space-y-4  md:w-[400px] ">
                <div className=" flex justify-between items-center">
                  <p className="text-sm font-bold text-gray-500 ">Other</p>

                  <span className="text-[10px] font-bold text-gray-500 ">
                    (optional)
                  </span>
                </div>
                <div className="flex space-x-2">
                  {/* <input type="checkbox"></input> */}

                  <input
                    value={other}
                    onChange={(e) => setother(e.target.value)}
                    type="text"
                    name=""
                    id=""
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
            </div>

            <div className="flex  flex-col items-end justify-end">
              <div className="flex justify-end items-center w-full space-x-4">
                <button
                  onClick={FormSubmit}
                  className={`w-[60%] md:text-lg font-semibold cursor-pointer md:w-[25%] text-center py-3 rounded-lg ${
                    isSubmitted
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gray-600 text-white"
                  }`}
                  disabled={isSubmitted}
                >
                  Save
                </button>

                {isSubmitted && (
                  <Link href={"/payment"}>
                    <button
                      className="md:text-lg 
                      font-semibold px-10 text-center text-white py-3 bg-blue-600 rounded-lg"
                    >
                      Continue{" "}
                    </button>
                  </Link>
                )}
              </div>

              <p className=" mt-6 text-sm font-bold ">
                {" "}
                <span className="text-red-600 text-lg">Note:</span> Please make
                sure you fill out the complete form with the correct
                information.
              </p>

              <p className=" mt-6 text-lg font-bold ">
                {" "}
                نوٹ
                <span className="text-red-600 text-sm">
                  {" "}
                  : براہ کرم اس بات کو یقینی بنائیں کہ آپ نے مکمل فارم درست
                  معلومات کے ساتھ بھر لیا ہے۔
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Form;
