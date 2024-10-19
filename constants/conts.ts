import IdentificationForm from "@/components/shared/patient/identificationForm";
import MedicalForm from "@/components/shared/patient/medicalForm";
import PersonalForm from "@/components/shared/patient/personalForm";
import PrivacyForm from "@/components/shared/patient/privacyForm";
import { TCheckboxOptions } from "@/components/ui/form/radioInput";

interface TPatientFormTabs  {
    title: string,
    key: string,
    form: React.ComponentType
}
export const patientFormTabs: TPatientFormTabs[] = [
    {title: "Personal", key: "personal", form: PersonalForm},
    {title: "Medical", key: "medical", form: MedicalForm},
    {title: "Identification", key: "identification", form: IdentificationForm},
    {title: "Consent and Privacy", key: "privacy", form: PrivacyForm},
]

export const genderOptions: TCheckboxOptions[] = [
    {title: "male", key: "Male"},
    {title: "female", key: "Female"},
    {title: "other", key: "Other"},
]

export const doctors = [ 'no']

export const IdentificationTypes = [
    "Birth Certificate",
    "Driver's License",
    "Medical Insurance Card/Policy",
    "Military ID Card",
    "National Identity Card",
    "Passport",
    "Resident Alien Card (Green Card)",
    "Social Security Card",
    "State ID Card",
    "Student ID Card",
    "Voter ID Card",
  ];


  export const consents: TCheckboxOptions[] = [
    {key: "treatment", title: "I consent to receive treatment for my health condition."},
    {key: "information", title: "I consent to the use and disclosure of my health information for treatment purposes."},
    {key: "policy", title: "I acknowledge that I have reviewed and agree to the privacy policy"}

  ]