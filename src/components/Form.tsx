import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
const RedeemCodeForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    axios
      .post(
        `${import.meta.env.VITE_APP_PROXY_URL}user/tester`,
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.status === 201) {
          alert(
            "We have submitted your request. Please wait while our team gets back to you as soon as possible."
          );
        }
      })
      .catch(() => {
        alert("ERROR, please try again");
      });
  };

  return (
    <div className="w-2/5 flex flex-col items-center mt-10">
      <h1 className="text-[#ffd000] text-5xl pt-50 w-full">Support</h1>
      <h2 className="text-white text-xl w-full mt-2">
        Get in contact with our team and we will get back to you shortly.
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center mt-5"
        autoComplete="off"
      >
        <label
          htmlFor="firstName"
          className="text-white text-xl w-full text-center"
        >
          First Name
        </label>

        <input
          className="outline-[#ffd000] w-full block rounded-3xl text-white bg-black border-white border-2 mt-2 p-2 text-sm"
          placeholder="First Name"
          {...register("firstName")}
        />

        <label
          htmlFor="lastName"
          className="text-white text-xl w-full text-center mt-4"
        >
          Last Name
        </label>

        <input
          placeholder="Last Name"
          className="outline-[#ffd000] w-full rounded-3xl block text-white bg-black border-white mt-2 border-2 p-2 text-sm"
          {...register("lastName")}
        />

        <label
          htmlFor="email"
          className="text-white text-xl w-full text-center mt-4"
        >
          Email
        </label>

        <input
          placeholder="Apple ID Email"
          className="outline-[#ffd000] w-full rounded-3xl block text-white bg-black border-white border-2 mt-2 p-2 text-sm"
          type="email"
          {...register("email")}
        />
        <label
          htmlFor="message"
          className="text-white text-xl w-full text-center mt-4"
        >
          Message
        </label>

        <input
          placeholder="Type Here"
          className="outline-[#ffd000] w-full rounded-3xl block text-white bg-black border-white border-2 mt-2 p-2 text-sm"
          type="message"
          {...register("message")}
        />

        <input
          type="submit"
          className="bg-[#ffd000] text-black text-sm rounded-3xl px-5 py-2 my-10 hover:bg-[#ab8d09]"
        />
      </form>
    </div>
  );
};
export default RedeemCodeForm;
