import PatientForm from "@/components/shared/patientForm";
import RegisterForm from "@/components/shared/registerForm";
import RegisterTabs from "@/components/shared/registerTabs";
import CardUI from "@/components/ui/card";
import { SearchParamProps } from "@/types/userType";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Link from "next/link";




export default function Page({params: {id}}: SearchParamProps) {
  return (
    <div className="grid grid-cols-2 h-[100vh] ">
      <section className="container my-10">
        <section className=" space-y-4">
          <h1 className="header">Choose your role 🔎</h1>
          <p className="text-dark-700">Let AI now what you really need</p>
        </section>
        <CardUI>
          <PatientForm />
        </CardUI>

        <div className="text-14-regular flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 Decentrathon
          </p>
          <Link href="/?admin=true" className="text-green-500">
            Contact
          </Link>
        </div>
      </section>
      <main className="min-h-[100vh]">
        <Spline scene="https://prod.spline.design/T-fFpmSzcgq7mpNk/scene.splinecode" />
      </main>
    </div>
  );
}
