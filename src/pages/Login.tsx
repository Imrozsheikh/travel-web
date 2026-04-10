import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/")
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-2"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
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
            Login
          </button>
        </form>

        {/* Extra */}
        <p className="text-sm text-center mt-4 text-gray-300">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")} className="text-yellow-400 cursor-pointer">Signup</span>
        </p>
      </div>
    </div>
  );
}
