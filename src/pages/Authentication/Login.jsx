
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };



    return (
        <div className="">
            <div className="bg-white p-10">
                <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                <p className="text-sm text-accent mb-6">Login with Profast</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Input */}
                    <div className=" mb-4">
                        <label className="label">
                            <span className="label-text text-primary font-medium">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="Email" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" />
                    </div>
                    {/* Password Input */}
                    <div className=" mb-2">
                        <label className="label">
                            <span className="label-text text-primary font-medium">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true, minLength: 6 })} placeholder="Type your password" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" />
                        {
                            errors.password?.type === "required" && <p className="text-red-500 text-sm mt-1">Password is required</p>
                        }
                        {
                            errors.password?.type === "minLength" && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters or longer</p>
                        }
                    </div>

                    <Link to="/forget-password" className="text-sm text-accent mb-4 cursor-pointer hover:underline">
                        Forget Password?
                    </Link>

                    <button className="btn btn-secondary w-full rounded-md text-primary font-semibold mb-4">
                        Continue
                    </button>

                    <div className="text-sm text-accent text-center">
                        Don’t have any account? <span className="text-secondary hover:underline cursor-pointer">Register</span>
                    </div>

                    <div className="divider my-4">Or</div>

                    <button className="btn w-full bg-base-200 hover:bg-base-300">
                        <FcGoogle className="text-xl mr-2" /> Login with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
