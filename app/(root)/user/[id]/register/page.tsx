
import PatientTabs from "@/components/shared/patient/patientTabs";
import { getUser } from "@/lib/actions/patient.actions";
import { SearchParamProps, TCreateUser, User } from "@/types/userType";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default async function Page({ params: { id } }: SearchParamProps) {
  const user = await getUser({ id });
  return (
    <div className="grid grid-cols-2 h-[100vh] ">
      <section className="container my-10">
        <section className="mb-4 space-y-4">
          <h1 className="header">Choose your role 🔎</h1>
          <p className="text-dark-700">Let AI now what you really need</p>
        </section>
        <PatientTabs  user={user as User}/>

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
        <Spline scene="https://prod.spline.design/CSCXv3HurXnSLqq3/scene.splinecode" />
      </main>
    </div>
  );
}
