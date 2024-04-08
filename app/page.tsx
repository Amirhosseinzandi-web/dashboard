import MyApp from "@/components/MyApp";
import { UserButton, auth } from "@clerk/nextjs";




const page = async () => {
  
  return (
    <>
      <MyApp />
    </>
  );
}

export default page;