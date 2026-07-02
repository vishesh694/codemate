import SignInFormClient from "@/modules/auth/components/sign-in-form-client";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <Image
        src="/login.svg"
        alt="Login-Image"
        width={235}
        height={235}
        className="mb-6 object-contain"
        priority
      />

      <SignInFormClient />
    </>
  );
};

export default Page;