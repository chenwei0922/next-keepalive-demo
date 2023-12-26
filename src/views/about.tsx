
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>this is about page</span>
      {new Array(20).fill(0).map((item, index)=> {
        return (
          <div key={index} className='w-full mb-4 h-[200px] bg-[red]'></div>
        )
      })}
    </main>
  )
}
