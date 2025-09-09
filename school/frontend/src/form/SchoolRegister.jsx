import React from "react";
import { useForm } from "react-hook-form";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Application Submitted Successfully ✅");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-2">
          School Admission Form
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Fields marked with <span className="text-red-500">*</span> are required.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Student Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter student full name"
              {...register("studentName", { required: "Student Name is required" })}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName.message}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>}
          </div>

          {/* Grade */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Applying For Grade <span className="text-red-500">*</span>
            </label>
            <select
              {...register("grade", { required: "Grade is required" })}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Grade</option>
              <option value="1">Grade 1</option>
              <option value="2">Grade 2</option>
              <option value="3">Grade 3</option>
              <option value="4">Grade 4</option>
            </select>
            {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade.message}</p>}
          </div>

          {/* Parent Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Parent / Guardian Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter parent's full name"
              {...register("parentName", { required: "Parent Name is required" })}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Parent Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter parent email"
              {...register("parentEmail", { required: "Email is required" })}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.parentEmail && <p className="text-red-500 text-xs mt-1">{errors.parentEmail.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Parent Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              {...register("parentPhone", { required: "Phone number is required" })}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.parentPhone && <p className="text-red-500 text-xs mt-1">{errors.parentPhone.message}</p>}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Residential Address</label>
            <textarea
              rows="3"
              placeholder="Enter full address"
              {...register("address")}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Previous School */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Previous School</label>
            <input
              type="text"
              placeholder="Enter previous school name"
              {...register("previousSchool")}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Document Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Documents Link (Drive/URL)</label>
            <input
              type="url"
              placeholder="https://..."
              {...register("documents")}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
            <textarea
              rows="2"
              placeholder="Any special instructions"
              {...register("notes")}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="md:col-span-2 flex items-center">
            <input type="checkbox" {...register("agreement", { required: "You must agree to continue" })} />
            <span className="ml-2 text-sm text-gray-600">
              I agree to the admission policy & privacy terms. <span className="text-red-500">*</span>
            </span>
          </div>
          {errors.agreement && <p className="text-red-500 text-xs ml-1">{errors.agreement.message}</p>}

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-center gap-4 mt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition"
            >
              Submit Application
            </button>
            <button
              type="button"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg transition"
            >
              Need Help?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
