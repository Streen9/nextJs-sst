"use client";
import { useState } from "react";
import Button from "@/app/components/Button";
import Alert from "@/app/components/Alert";
import Fade from "@/app/components/Fade";
import useAlert from "@/app/hooks/useAlert";

export default function About() {
  const { showAlert, showAlertFunction } = useAlert();
  
  return (
    <>
      <Fade showAlert={showAlert}>
        <Alert alertType="Success" alertText="Done" />
      </Fade>
      <Button
        buttonName={"Click Me"}
        buttonStyles={"text-black bg-white border border-black-700 content-center hover:bg-orange-500"}
        onClick={showAlertFunction}
      />
    </>
  );
}
