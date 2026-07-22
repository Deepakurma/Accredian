"use client";

import { CircleAlert, ChevronDown, X } from "lucide-react";
import { modalImage } from "@/data/site";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { toast } from "sonner";

type LeadForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  deliveryMode: string;
  location: string;
};

const domains = [
  "Product Management",
  "Data Science",
  "Artificial Intelligence",
  "Strategy & Leadership",
  "Digital Transformation",
  "Finance",
];

const deliveryModes = ["Online", "Offline", "Hybrid"];

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function FieldError({ message }: { message: string }) {
  return (
    <p className="-mt-2 flex items-center gap-1 text-xs font-medium text-red-500">
      <CircleAlert size={14} />
      {message}
    </p>
  );
}

export function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadForm>();

  const onSubmit = async (data: LeadForm) => {
    await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    reset();
    onClose();
    toast.success("Enquiry submitted successfully!", {
      description: "We'll get back to you shortly.",
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
    >
      <div className="grid w-full max-w-3xl min-w-0 overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-2 max-h-[90vh]">
        {/* Banner Image (Desktop only) */}
        <div className="relative hidden bg-primary-muted md:block min-h-96">
          <Image
            alt="Corporate training discussion"
            fill
            className="object-cover"
            src={modalImage}
          />
        </div>

        {/* Form Container */}
        <div className="p-6 md:p-7 overflow-y-auto max-h-[90vh] w-full min-w-0">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-text-primary">
              Enquire Now
            </h2>
            <button
              aria-label="Close enquiry form"
              className="shrink-0 cursor-pointer text-text-muted transition hover:text-text-primary"
              onClick={() => {
                onClose();
                reset();
              }}
              type="button"
            >
              <X size={24} />
            </button>
          </div>

          <form
            className="mt-6 grid gap-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name */}
            <input
              {...register("name", {
                required: "Name is required",
              })}
              className={`w-full border-b py-3 text-sm font-medium outline-none placeholder:text-slate-400 focus:border-primary ${
                errors.name ? "border-red-500" : "border-border-strong"
              }`}
              placeholder="Enter Name"
            />
            {errors.name && (
              <FieldError message={errors.name.message as string} />
            )}

            {/* Email */}
            <input
              {...register("email", {
                required: "Email is required",
              })}
              className={`w-full border-b py-3 text-sm font-medium outline-none placeholder:text-slate-400 focus:border-primary ${
                errors.email ? "border-red-500" : "border-border-strong"
              }`}
              placeholder="Enter Email"
              type="email"
            />
            {errors.email && (
              <FieldError message={errors.email.message as string} />
            )}

            {/* Phone */}
            <label
              className={`flex items-center gap-3 border-b py-3 text-sm font-semibold text-text-primary ${
                errors.phone ? "border-red-500" : "border-border-strong"
              }`}
            >
              <span>🇮🇳</span>
              <span>+91</span>

              <input
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className="w-full min-w-0 flex-1 outline-none placeholder:text-slate-400 font-medium"
                placeholder="Enter phone number"
                type="tel"
              />
            </label>
            {errors.phone && (
              <FieldError message={errors.phone.message as string} />
            )}

            {/* Company */}
            <input
              {...register("company", {
                required: "Company name is required",
              })}
              className={`w-full border-b py-3 text-sm font-medium outline-none placeholder:text-slate-400 focus:border-primary ${
                errors.company ? "border-red-500" : "border-border-strong"
              }`}
              placeholder="Enter company name"
            />
            {errors.company && (
              <FieldError message={errors.company.message as string} />
            )}

            {/* Domain */}
            <label
              className={`relative block w-full border-b ${
                errors.domain ? "border-red-500" : "border-border-strong"
              }`}
            >
              <select
                {...register("domain", {
                  required: "Domain is required",
                })}
                defaultValue=""
                className="w-full appearance-none bg-white py-3 pr-8 text-sm font-medium text-slate-400 outline-none focus:text-text-primary"
              >
                <option disabled value="">
                  Select Domain
                </option>

                {domains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="pointer-events-none absolute right-0 top-4 text-slate-400"
                size={18}
              />
            </label>
            {errors.domain && (
              <FieldError message={errors.domain.message as string} />
            )}

            {/* Candidates */}
            <input
              {...register("candidates", {
                required: "No. of candidates is required",
              })}
              className={`w-full border-b py-3 text-sm font-medium outline-none placeholder:text-slate-400 focus:border-primary ${
                errors.candidates ? "border-red-500" : "border-border-strong"
              }`}
              placeholder="Enter No. of candidates"
              type="number"
            />
            {errors.candidates && (
              <FieldError message={errors.candidates.message as string} />
            )}

            {/* Mode of Delivery */}
            <label
              className={`relative block w-full border-b ${
                errors.deliveryMode ? "border-red-500" : "border-border-strong"
              }`}
            >
              <select
                {...register("deliveryMode", {
                  required: "Mode of delivery is required",
                })}
                defaultValue=""
                className="w-full appearance-none bg-white py-3 pr-8 text-sm font-medium text-slate-400 outline-none focus:text-text-primary"
              >
                <option disabled value="">
                  Select Mode of Delivery *
                </option>

                {deliveryModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="pointer-events-none absolute right-0 top-4 text-slate-400"
                size={18}
              />
            </label>
            {errors.deliveryMode && (
              <FieldError message={errors.deliveryMode.message as string} />
            )}

            {/* Location */}
            <input
              {...register("location", {
                required: "Location is required",
              })}
              className={`w-full border-b py-3 text-sm font-medium outline-none placeholder:text-slate-400 focus:border-primary ${
                errors.location ? "border-red-500" : "border-border-strong"
              }`}
              placeholder="Eg: Gurgaon, Delhi, India"
            />
            {errors.location && (
              <FieldError message={errors.location.message as string} />
            )}

            {/* Submit Button */}
            <button
              className="mt-2 w-full cursor-pointer rounded-md bg-primary px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70 hover:scale-[1.01] active:scale-[0.99] hover:shadow-lg hover:shadow-primary/20"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
