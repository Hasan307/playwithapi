
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const data = cookieStore.getAll().map((cookie) => (
    <div key={cookie.name} className="text-center text-[20px]">
      <p >Name:<span className='text-blue-600'>{cookie.name}</span> </p>
      <p>Value: <span className='text-blue-600'>{cookie.value}</span></p>
    </div>
  ));
  return data;
}