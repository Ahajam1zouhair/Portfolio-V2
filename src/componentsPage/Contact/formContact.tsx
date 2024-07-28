import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { RootState } from "../../Redux/store";

export default function FormContact() {
  const value = useSelector((state: RootState) => state.mode.value);
  const [name, setName] = useState("");
  const [Last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_mjbkn7e", // ID_service
          "template_udr11bg", // ID_Template
          form.current,
          "GwyGAX99itGDakbqc" // ID_Public Key
        )
        .then(
          (result) => {
            console.log(result.text);
            // Handle success, e.g., show a success message
          },
          (error) => {
            console.log(error.text);
            // Handle error, e.g., show an error message
          }
        );
    }

    // Clear form fields after submission
    setName("");
    setEmail("");
    setLast("");
    setMessage("");
    setPhone("");

    // Show success message
    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "Your work has been saved. We will get back to you as soon as possible.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <main
      className={`py-14 px-3 md:mr-3 border-2 rounded-xl ${
        value ? "bg-bgContactColorDarck" : "bg-bgContactColorlight border-text"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <p
            className={`text-3xl font-semibold sm:text-4xl ${
              value ? "colwhite" : "coldarck"
            }`}
          >
            Let's Talk
          </p>
          <p
            className={`text-lg md:text-2xl py-4 ml-7 ${
              value ? "text-stone-800" : "text-white"
            }`}
          >
            Please fill in the form to start a conversation.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label
                  className={`font-medium ${
                    value ? "text-stone-800" : "text-white"
                  }`}
                >
                  First name
                </label>
                <input
                  type="text"
                  name="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={`w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                    value ? "text-stone-800" : "text-white border-text"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`font-medium ${
                    value ? "text-stone-800" : "text-white"
                  }`}
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="Last_name"
                  required
                  value={Last}
                  onChange={(e) => setLast(e.target.value)}
                  className={`w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                    value ? "text-stone-800" : "text-white border-text"
                  }`}
                />
              </div>
            </div>
            <div>
              <label
                className={`font-medium ${
                  value ? "text-stone-800" : "text-white"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="from_Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                  value ? "text-stone-800" : "text-white border-text"
                }`}
              />
            </div>
            <div>
              <label
                className={`font-medium ${
                  value ? "text-stone-800" : "text-white"
                }`}
              >
                Phone number
              </label>
              <div className="relative mt-2">
                <input
                  type="number"
                  name="Phone_number"
                  placeholder="+212 600-000000"
                  required
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                    value ? "text-stone-800" : "text-white border-text"
                  }`}
                />
              </div>
            </div>
            <div>
              <label
                className={`font-medium ${
                  value ? "text-stone-800" : "text-white"
                }`}
              >
                Message
              </label>
              <textarea
                value={message}
                name="form_Message"
                onChange={(e) => setMessage(e.target.value)}
                required
                className={`w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                  value ? "text-stone-800" : "text-white border-text"
                }`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-text   rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
