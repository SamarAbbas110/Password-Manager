import React, { useEffect, useRef, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

<<<<<<< HEAD

=======
>>>>>>> abcc0ee (Added project files)
const Main = () => {
  const [showpassword, setshowpassword] = useState(false);
  const passwordref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  //storing passwords
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const togglefunction = () => {
    setshowpassword((prevshowpassword) => !prevshowpassword);
    const inputref = showpassword ? "password" : "text";
    passwordref.current.type = inputref;
  };

  // saving the password
  const savepassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      const newPassword = { ...form, id: uuidv4() }; // Invoke uuidv4() to generate unique identifier
      setpasswordArray((prevArray) => [...prevArray, newPassword]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, newPassword])
      );
      setform({ site: "", username: "", password: "" });
    } else {
      toast("Error : Password Cannot be saved");
    }
  };
  

  const editpassword = (id) => {
    const passwordToEdit = passwordArray.find((item) => item.id === id);
    setform(passwordToEdit);
    setpasswordArray((prevArray) => prevArray.filter((item) => item.id !== id));
  };

  const deletepassword = (id) => {
    console.log("delete this password", id);
    let c = window.confirm("Do you really want to delete this password?");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  // For copy functionality
  const copyText = (text) => {
    toast("Text copied to clipboard successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce" 
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 min-h-screen items-center flex-grow px-5 py-24 bg-gradient-to-br from-slate-900 to-green-500 overflow-auto ">
        <div className="md:mycontainer p-2 md:p-0">
          <h1 className="text-neutral-50 text-center font-bold text-4xl">
            Password
            <span className="text-green-500"> Manager</span>
          </h1>
          <p className="text-neutral-50 text-center my-3">
            Your own<span className="text-green-500"> password Manager</span>
          </p>

          <div className=" flex flex-col p-4 text-black gap-3 items-center">
            <input
              value={form.site}
              onChange={handlechange}
              className="rounded-full py-2 border-green-900 w-full px-3 font-semibold placeholder:italic "
              placeholder="Enter Website URL..."
              name="site"
              type="text"
            />

            <div className="flex w-full  justify-between gap-5">
              <input
                value={form.username}
                onChange={handlechange}
                className="rounded-full py-2 my-5 px-3 border-green-900 w-1/2 font-semibold  placeholder:italic "
                placeholder="Enter Username"
                name="username"
                id=""
              />
              <div className="relative">
                <input
                  value={form.password}
                  onChange={handlechange}
                  ref={passwordref}
                  className="rounded-full p-4 my-5 py-2 border-green-900 w-full font-semibold placeholder-italic"
                  placeholder="Enter Password"
                  name="password"
                  type="password"
                />
                <span
                  className="absolute right-[12px] text-black top-[2px] mt-7 cursor-pointer"
                  onClick={togglefunction}
                >
                  {showpassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <IoEyeSharp size={20} />
                  )}
                </span>
              </div>
            </div>

            <button
              onClick={savepassword}
              className="flex justify-center items-center rounded-full bg-green-500 w-1/6 gap-1 p-3 py-1 hover:bg-green-700 border-2 border-green-900"
            >
              <span className="text-black font-bold mx-1">Save</span>
            </button>
          </div>
        </div>

        <div className="passwords">
  <h2 className="text-white font-bold py-4 text-center text-3xl ">
    Your Passwords
  </h2>
  {passwordArray.length === 0 && (
    <div className="text-white">No Password to Show</div>
  )}
  {passwordArray.length !== 0 && (
    <div className="overflow-x-auto"> {/* Allows horizontal scrolling on mobile */}
      <table className="table-auto text-white w-full rounded-t-md overflow-hidden border-green-500">
        <thead className="bg-green-500 border border-white text-black py-5">
          <tr>
            <th className="py-1">Site</th>
            <th className="py-1">Username</th>
            <th className="py-1">Password</th>
            <th className="py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
        {passwordArray.map((item, index) => {
  return (
    <tr key={index}>
      {/* Site */}
      <td className="border border-white relative w-32 py-2">
        <div className="flex items-center justify-between px-2"> 
          <div className="text-md truncate">{item.site}</div>
          <div
            className="ml-2" // Ensure className is inside quotes and no misplaced braces
            onClick={() => copyText(item.site)}
          >
            <MdContentCopy
              size={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </td>

      {/* Username */}
      <td className="border border-white relative w-32">
        <div className="flex items-center justify-between px-2">
          <div className="text-md truncate">{item.username}</div>
          <div
            className="ml-2"
            onClick={() => copyText(item.username)}
          >
            <MdContentCopy
              size={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </td>

      {/* Password */}
      <td className="border border-white relative w-32">
        <div className="flex items-center justify-between px-2">
          <div className="text-md truncate">{item.password}</div>
          <div
            className="ml-2"
            onClick={() => copyText(item.password)}
          >
            <MdContentCopy
              size={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </td>

      {/* Actions */}
      <td className="justify-center border py-2 border-white text-center relative w-32">
        <span
          className="cursor-pointer mx-1"
          onClick={() => {
            editpassword(item.id);
          }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/zfzufhzk.json"
            trigger="hover"
            style={{ width: "28px", height: "25px" }}
          ></lord-icon>
        </span>
        <span
          className="cursor-pointer mx-1"
          onClick={() => {
            deletepassword(item.id);
          }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/hjbrplwk.json"
            trigger="hover"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
        </span>
      </td>
    </tr>
  );
})}
        </tbody>
      </table>
    </div>
  )}
</div>
      </div>
    </>
  );
};

export default Main;
