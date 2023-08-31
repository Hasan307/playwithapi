
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const data = cookieStore.getAll().map((cookie) => (
    <div key={cookie.name} className="text-center text-[100px]">
      <p >Name:<span className='text-red-500'>{cookie.name}</span> </p>
      <p>Value: <span className='text-red-500'>{cookie.value}</span></p>
    </div>
  ));
  return data;
}