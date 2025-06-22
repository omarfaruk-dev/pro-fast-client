import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";


const Register = () => {

    const {createUser, googleSignIn} = useAuth();

     const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    };

    //signin with google
    const handleGoogleSignIn = () => {
        googleSignIn()
         .then(result => {
             const user = result.user;
             console.log(user);
             
         })
         .catch(error => {
             console.log(error);
         }  )
    }



    return (
        <div className="">
            <div className="bg-white p-10">
                <h2 className="text-3xl font-bold mb-2">Create An Account</h2>
                <p className="text-sm text-accent mb-6">Register with ProFast</p>
                <div className="bg-accent/20 rounded-full p-2 w-10 h-10 flex items-center justify-center mb-4">
                    <FaUser size={20} className="text-primary/30"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Input */}
                    <div className=" mb-4">
                        <label className="label">
                            <span className="label-text text-primary font-medium">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true }, { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Email" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" />
                        {
                            errors.email?.type === "required" && <p className="text-red-500 text-sm mt-1">Email is required</p>

                        }
                        {
                            errors.email?.type === "pattern" && <p className="text-red-500 text-sm mt-1">Please, enter a valid email address</p>

                        }
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
                        Register
                    </button>

                    <div className="text-sm text-accent text-center">
                        Already have an account? <Link to="/login" className="text-secondary hover:underline cursor-pointer">Login Here</Link>
                    </div>

                    <div className="divider my-4">Or</div>

                    <button
                    onClick={handleGoogleSignIn}
                    className="btn w-full bg-base-200 hover:bg-base-300">
                        <FcGoogle className="text-xl mr-2" /> Continue with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;