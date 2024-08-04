"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
    IconBrandGithub,
    IconBrandGoogle,
} from "@tabler/icons-react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { Combobox } from '@headlessui/react';

const countries = ["United States", "Canada", "United Kingdom", "Germany", "Australia", "India"];
const steps = ["Basic Info", "Account Details", "Verification"];

interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    country: string;
}

export function SellerOnboardingForm(): JSX.Element {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [query, setQuery] = useState<string>('');
    const [passwordStrength, setPasswordStrength] = useState<number>(0);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const filteredCountries = query === ''
        ? countries
        : countries.filter((country) => country.toLowerCase().includes(query.toLowerCase()));

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        // Handle form submission
    };

    const checkPasswordStrength = (password: string): number => {
        // Implement password strength logic here
        // This is a simple example, you should use a more robust method
        return password.length * 10 > 100 ? 100 : password.length * 10;
    };

    const renderStep = (): JSX.Element | null => {
        switch(currentStep) {
            case 0:
                return (
                    <>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name</Label>
                                <Input 
                                    id="firstname" 
                                    {...register("firstname", { required: "First name is required" })} 
                                    placeholder="Tyler" 
                                    type="text"
                                />
                                {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input 
                                    id="lastname" 
                                    {...register("lastname", { required: "Last name is required" })} 
                                    placeholder="Durden" 
                                    type="text"
                                />
                                {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
                            </LabelInputContainer>
                        </div>
                    </>
                );
            case 1:
                return (
                    <>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input 
                                id="email" 
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })} 
                                placeholder="projectmayhem@fc.com" 
                                type="email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input 
                                id="password" 
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    },
                                    onChange: (e) => setPasswordStrength(checkPasswordStrength(e.target.value))
                                })} 
                                placeholder="••••••••" 
                                type="password"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${passwordStrength}%` }}></div>
                            </div>
                        </LabelInputContainer>
                    </>
                );
            case 2:
                return (
                    <>
                        <LabelInputContainer className="mb-8">
                            <Label htmlFor="country">Country</Label>
                            <Combobox value={selectedCountry} onChange={(value) => setSelectedCountry(value || "")}>
                                <Combobox.Input 
                                    className="w-full bg-gray-50 dark:bg-zinc-900 rounded-md h-10 px-4"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
                                    displayValue={(country: string) => country}
                                />
                                <Combobox.Options className="absolute w-full bg-gray-50 dark:bg-zinc-900 rounded-md mt-1 shadow-lg z-10">
                                    {filteredCountries.map((country) => (
                                        <Combobox.Option key={country} value={country} className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-800">
                                            {country}
                                        </Combobox.Option>
                                    ))}
                                </Combobox.Options>
                            </Combobox>
                        </LabelInputContainer>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-lg w-full mx-auto md:rounded-2xl shadow-input">
            <div className="mb-8">
                <ol className="flex items-center w-full">
                    {steps.map((step, index) => (
                        <li key={index} className={`flex w-full items-center ${index < currentStep ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}>
                            <span className={`flex items-center justify-center w-8 h-8 ${index <= currentStep ? 'bg-blue-100 dark:bg-blue-800' : 'bg-gray-100 dark:bg-gray-700'} rounded-full lg:h-10 lg:w-10 shrink-0`}>
                                {index < currentStep ? (
                                    <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                ) : (
                                    index + 1
                                )}
                            </span>
                            <span className="ml-2 text-sm">{step}</span>
                            {index < steps.length - 1 && <div className="w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>}
                        </li>
                    ))}
                </ol>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence>
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                    >
                        {renderStep()}
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-between mt-8">
                    {currentStep > 0 && (
                        <button 
                            onClick={() => setCurrentStep(currentStep - 1)} 
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                            type="button"
                        >
                            Previous
                        </button>
                    )}
                    {currentStep < steps.length - 1 ? (
                        <button 
                            onClick={() => setCurrentStep(currentStep + 1)} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                            type="button"
                        >
                            Next
                        </button>
                    ) : (
                        <button 
                            type="submit" 
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
                <button
                    className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="button"
                >
                    <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        GitHub
                    </span>
                    <BottomGradient />
                </button>
                <button
                    className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="button"
                >
                    <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Google
                    </span>
                    <BottomGradient />
                </button>
            </div>
            <div className="text-neutral-500 dark:text-neutral-400 flex space-x-1 text-sm justify-center items-center mt-4">
                <p>Already a User?</p>
                <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
            </div>
        </div>
    );
}

const BottomGradient = (): JSX.Element => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

interface LabelInputContainerProps {
    children: React.ReactNode;
    className?: string;
}

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};