import RegisterForm from "@/components/shared/registerForm";
import Image from "next/image";

export default function Home() {

  return (
   <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container my-auto">
          <RegisterForm/>
      </section>
   </div>
  );
}
