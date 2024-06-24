"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./contactSection.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await axios
      .post(process.env.NEXT_PUBLIC_API_URL as string, data)
      .then(({ data }: any) => {
        data?.status
          ? toast.success(data?.message)
          : toast.error(data?.message);
      })
      .catch((errors) => {
        toast.error(errors?.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.formSection}>
          <h4>Any questions?</h4>
          <h3>Let’s talk today!</h3>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
              <input
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>Name is required</span>}
            </div>
            <div>
              <input
                placeholder="Email"
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                type="email"
              />
              {errors.email && <span>Email is required</span>}
            </div>
            <div>
              <textarea
                placeholder="message"
                rows={5}
                {...register("message", { required: true })}
              />

              {errors.message && <span>Message is required</span>}
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
