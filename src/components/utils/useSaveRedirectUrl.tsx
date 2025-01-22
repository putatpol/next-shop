"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const useSaveRedirectUrl = (logined: boolean) => {
    // ใช้ usepathname >> userouter +++
  const pathname = usePathname();

  useEffect(() => {
    if (!logined) {
      sessionStorage.setItem("redirectUrl", pathname);
    }
  }, [pathname, logined]);
};

