import FormLogin from "@/components/login/FormLogin";
import { Providers } from "../providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account"
}

export default function LoginPage() {
  return (
    <div className="my-6 px-3 *:py-6 xl:px-0">
      <div className="flex h-screen">
        <div className="flex basis-1/2 items-center px-20">
          <div className="w-full">
            <div className="mb-12">
              <h2>Welcome Back</h2>
              <p>Let&apos;s start your shopping</p>
            </div>
            <Providers>
              <FormLogin />
            </Providers>
          </div>
        </div>
        <div
          className="h-full basis-1/2 bg-cover bg-top"
          style={{ backgroundImage: `url('/images/login_img.jpg')` }}
        />
      </div>
    </div>
  );
}
