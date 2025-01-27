import React from "react";
import { cookies } from "next/headers";
import { profileDto } from "@/interface/productsApi.dto";
import Image from "next/image";

const fetchProfileDetail = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("authToken")?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_CALL_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.error("Error fetching profile detail", res.status);
  }

  return res.json();
};

const ProfileInfo = async () => {
  const data: profileDto = await fetchProfileDetail();
  console.log("data Image", data.image);
  return (
    <div>
      <div className="flex">
        <h1>
          {data.firstName} {data.lastName}{" "}
        </h1>
        <small>{data.age}</small>
      </div>
      <div className="flex items-center">
        <Image src={data.image} height={100} width={100} alt="Profile Image" />
        <div>
          <button className="text-sm border bg-white rounded-full px-2 py-1 ">
            change image
          </button>
        </div>
      </div>
      <div className="*:mb-2 [&_input]:w-full [&_input]:cursor-not-allowed [&_input]:rounded-lg [&_input]:bg-white [&_input]:p-3 [&_input]:text-gray-500">
        <div>
          <p>Firstname</p>
          <input type="text" value={data.firstName} disabled />
        </div>

        <div>
          <p>Lastname</p>
          <input type="text" value={data.lastName} disabled />
        </div>

        <div>
          <p>Email</p>
          <input type="text" value={data.email} disabled />
        </div>

        <div>
          <p>Phone</p>
          <input type="text" value={data.phone} disabled />
        </div>

        <div>
          <p>Address</p>
          <input
            type="text"
            value={
              data.address.address +
              " " +
              data.address.city +
              " " +
              data.address.state +
              " " +
              data.address.country
            }
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
