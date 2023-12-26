import { useRouter } from "next/router";
import { getUniqueId, useKeepAliveActivated, withKeepAlive } from "./KeepAlive";

function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>this is setting page</span>
      {new Array(20).fill(0).map((item, index)=> {
        return (
          <div key={index} className='w-full mb-4 h-[200px] bg-[red]' onClick={() => {
            router.push(`/`);
          }}>{index + 1}</div>
        )
      })}
    </main>
  )
}

export default withKeepAlive(Home)
