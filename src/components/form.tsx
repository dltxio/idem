import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
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
            "We have submitted your request. Please check your email for a redeem code."
          );
        }
      })
      .catch(() => {
        alert("ERROR, please try again");
      });
  };

  return (
    <div className="w-1/5 flex flex-col items-center mt-10 mb-10">
      <a
        href="#"
        className="block bg-black rounded-lg px-10 py-5 bg-opacity-90"
      >
        <h2 className="text-white text-xl w-full mt-2">
          Want to try IDEM? Join our test group today!
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center mt-5"
        >
          <input
            className="outline-[#ffd000] w-full block rounded-xl text-white bg-black border-white border-2 mt-5 p-2 text-sm"
            placeholder="First Name"
            {...register("firstName")}
          />
          <input
            placeholder="Last Name"
            className="outline-[#ffd000] w-full rounded-xl block text-white bg-black border-white mt-5 border-2 p-2 text-sm"
            {...register("lastName")}
          />
          <input
            placeholder="Apple ID Email"
            className="outline-[#ffd000] w-full rounded-xl block text-white bg-black border-white border-2 mt-5 p-2 text-sm"
            type="email"
            {...register("email")}
          />
          <input
            type="submit"
            className="bg-[#ffd000] text-black text-sm rounded-3xl px-5 py-2 my-10 hover:bg-[#ab8d09]"
          />
        </form>
      </a>
    </div>
  );
};
export default RedeemCodeForm;
