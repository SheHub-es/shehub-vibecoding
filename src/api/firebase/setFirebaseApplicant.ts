import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./initFirebase";

export interface ApplicantData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  mentor: boolean;
  timestamp: unknown;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  language: string;
}

export async function setFirebaseApplicant(
  email: string,
  data: ApplicantData
): Promise<string> {
  const ref = doc(firestore, "applicants", email);
  await setDoc(ref, data, { merge: true });
  return "success";
}
