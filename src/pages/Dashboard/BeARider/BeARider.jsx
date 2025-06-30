import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const BeARider = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [selectedRegion, setSelectedRegion] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const axiosSecure = useAxiosSecure();

    const serviceCenters = useLoaderData();

    const regions = [...new Set(serviceCenters.map((s) => s.region))];
    const districts = serviceCenters
        .filter((s) => s.region === selectedRegion)
        .map((s) => s.district);

    const onSubmit = async (data) => {
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Authentication Error",
                text: "Please login to submit your application.",
            });
            return;
        }

        setIsSubmitting(true);
        
        const riderData = {
            ...data,
            name: user?.displayName || "",
            email: user?.email || "",
            status: "pending",
            created_at: new Date().toISOString(),
        };

        try {
            const res = await axiosSecure.post('/riders', riderData);
            
            if (res.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Application Submitted Successfully!",
                    text: "Your application is pending approval. We'll notify you once it's reviewed.",
                    confirmButtonText: "OK"
                });
                reset();
                setSelectedRegion("");
            }
        } catch (error) {
            console.error("Error submitting application:", error);
            Swal.fire({
                icon: "error",
                title: "Submission Failed",
                text: error.response?.data?.message || "Failed to submit application. Please try again.",
                confirmButtonText: "OK"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Become a Rider</h2>
                    <p className="text-gray-600">Join our delivery team and start earning with ProFast</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* User Information Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                        
                        {/* Name (read-only) */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Full Name</span>
                            </label>
                            <input
                                type="text"
                                value={user?.displayName || "Not available"}
                                readOnly
                                className="input input-bordered w-full bg-gray-100 text-gray-600"
                            />
                        </div>

                        {/* Email (read-only) */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Email Address</span>
                            </label>
                            <input
                                type="email"
                                value={user?.email || "Not available"}
                                readOnly
                                className="input input-bordered w-full bg-gray-100 text-gray-600"
                            />
                        </div>

                        {/* Age */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Age</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter your age"
                                className="input input-bordered w-full focus:outline-none focus:ring-1 focus:ring-secondary"
                                {...register("age", { 
                                    required: "Age is required", 
                                    min: { value: 18, message: "You must be 18 or older" },
                                    max: { value: 65, message: "Age must be 65 or younger" }
                                })}
                            />
                            {errors.age && (
                                <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Phone Number</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="input input-bordered w-full focus:outline-none focus:ring-1 focus:ring-secondary"
                                {...register("phone", { 
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^(\+880|880|0)?1[3-9]\d{8}$/,
                                        message: "Please enter a valid Bangladeshi phone number"
                                    }
                                })}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                            )}
                        </div>

                        {/* National ID */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text text-primary font-medium">National ID Card Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your NID number"
                                className="input input-bordered w-full focus:outline-none focus:ring-1 focus:ring-secondary"
                                {...register("nid", { 
                                    required: "NID is required",
                                    pattern: {
                                        value: /^\d{10,17}$/,
                                        message: "Please enter a valid NID number"
                                    }
                                })}
                            />
                            {errors.nid && (
                                <p className="text-red-500 text-sm mt-1">{errors.nid.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Location Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Area</h3>
                        
                        {/* Region */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Region</span>
                            </label>
                            <select
                                className="select select-bordered w-full focus:outline-none focus:ring-1 focus:ring-secondary"
                                {...register("region", { required: "Region is required" })}
                                onChange={(e) => setSelectedRegion(e.target.value)}
                            >
                                <option value="">Select Region</option>
                                {regions.map((region, idx) => (
                                    <option key={idx} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>
                            {errors.region && (
                                <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>
                            )}
                        </div>

                        {/* District */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text text-primary font-medium">District</span>
                            </label>
                            <select
                                className="select select-bordered w-full focus:outline-none focus:ring-1 focus:ring-secondary"
                                {...register("district", { required: "District is required" })}
                                disabled={!selectedRegion}
                            >
                                <option value="">Select District</option>
                                {districts.map((district, idx) => (
                                    <option key={idx} value={district}>
                                        {district}
                                    </option>
                                ))}
                            </select>
                            {errors.district && (
                                <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Vehicle Information Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Vehicle Information</h3>
                        
                        {/* Bike Brand */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Bike Brand & Model</span>
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Yamaha FZ, Honda CB Shine"
                                className="input input-bordered w-full focus:outline-none focus:ring-1 focus:ring-secondary"
                                {...register("bike_brand", { required: "Bike brand is required" })}
                            />
                            {errors.bike_brand && (
                                <p className="text-red-500 text-sm mt-1">{errors.bike_brand.message}</p>
                            )}
                        </div>

                        {/* Bike Registration */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Bike Registration Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Dhaka Metro-12345"
                                className="input input-bordered w-full focus:outline-none focus:ring-1 focus:ring-secondary"
                                {...register("bike_registration", { required: "Registration number is required" })}
                            />
                            {errors.bike_registration && (
                                <p className="text-red-500 text-sm mt-1">{errors.bike_registration.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h3>
                        
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Additional Notes (Optional)</span>
                            </label>
                            <textarea
                                placeholder="Tell us about your delivery experience, availability, or any other relevant information..."
                                className="textarea textarea-bordered w-full focus:outline-none focus:ring-1 focus:ring-secondary"
                                rows="4"
                                {...register("note")}
                            ></textarea>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className={`btn btn-secondary w-full text-white font-semibold ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Rider Application'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>By submitting this application, you agree to our terms and conditions.</p>
                    <p className="mt-2">We'll review your application and contact you within 2-3 business days.</p>
                </div>
            </div>
        </div>
    );
};

export default BeARider;