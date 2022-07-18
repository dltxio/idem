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
      .post(`http://localhost:3001/user/tester`, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" }
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.status === 200) {
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
    <>
      <div className="w-50 h-50 flex-col justify-center mt-10">
        <div>
          <label className="text-[#ffd000] text-5xl pt-50">IDEM</label>
        </div>
        <div>
          <label className="text-white text-xl">
            Want to try IDEM? Join our test group today!
          </label>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex-col">
          <div>
            <label htmlFor="firstName" className="text-white text-xl">
              First Name
            </label>
            <div>
              <input
                className=" outline-[#ffd000] rounded-3xl text-white bg-black border-white border-2 ml-5 mt-2 px-2 py-2 text-sm w-80"
                placeholder="First Name"
                {...register("firstName")}
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="text-white text-xl">
              Last Name
            </label>
            <div>
              <input
                placeholder="Last Name"
                className="outline-[#ffd000] rounded-3xl text-white bg-black border-white mt-2 border-2 ml-5 px-2 py-2 text-sm w-80"
                {...register("lastName")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-white text-xl mr-8">
              Email
            </label>
            <div>
              <input
                placeholder="Email"
                className="outline-[#ffd000] rounded-3xl text-white bg-black border-white border-2 ml-5 mt-2 px-2 py-2 text-sm w-80"
                type="email"
                {...register("email")}
              />
            </div>
          </div>
          <input
            type="submit"
            className="bg-[#ffd000] text-black text-sm rounded-3xl px-5 py-2 mb-10 hover:bg-[#ab8d09]"
          />
        </form>
      </div>
    </>
  );
};
export default RedeemCodeForm;
