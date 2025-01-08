"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ButtonBack = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.back()} className="hover:scale-125 duration-300 ease-out">
        <FontAwesomeIcon icon={faArrowLeft} className="size-6"/>
      </button>
    </>
  );
};

export default ButtonBack;
