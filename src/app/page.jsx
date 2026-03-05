import Banner from "@/Components/Home/Banner";
import { dbconnect } from "@/lib/dbconnect";

export default async function Home() {
  // const result = await dbconnect();
  // console.log(result);
  return (
    <div>
      <Banner />
    </div>
  );
}
