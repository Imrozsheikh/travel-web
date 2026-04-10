import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const navigate = useNavigate()
  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/login")
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-slate-950 px-2"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <input
              className="w-full p-3 rounded-xl bg-white/20 border border-white/30 focus:outline-none"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">
                {errors.name.message as string}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              className="w-full p-3 rounded-xl bg-white/20 border border-white/30 focus:outline-none"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-3 rounded-xl bg-white/20 border border-white/30 focus:outline-none"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Signup
          </button>
        </form>

        {/* Extra */}
        <p className="text-sm text-center mt-4 text-gray-300">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="text-yellow-400 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}
