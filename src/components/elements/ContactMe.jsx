"use client";
import React, {useState} from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message
    }
    console.log(templateParams)
    emailjs
      .send(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE, process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE, templateParams,process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    toast("Thanks! I&#39;ll reach out to you soon.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  };
  return (
    (<div
      className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-8">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Get In Touch
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
      Interested in working together or learning more about me? Please fill out the form below, and I&#39;ll get back to you as soon as possible!
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name Here" type="text" name="user_name" value={name} onChange={(e)=> setName(e.target.value)} />
          </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Your Email Here" type="email" name="user_email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input id="message" placeholder="Your Message Here" type="text" className="h-32" as="textarea" name="message" value={message} onChange={(e)=> setMessage(e.target.value)}/>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Submit &rarr;
          <BottomGradient />
        </button>

        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
      <ToastContainer />
    </div>)
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};
