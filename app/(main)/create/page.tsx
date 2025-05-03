
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import CreateListingForm from "@/components/createlistingform";
const CreateListingPage = async () => {
  const session = await auth()
  if (!session?.user) redirect("/signin")

    console.log(session)

  return <CreateListingForm />


};

export default CreateListingPage;
