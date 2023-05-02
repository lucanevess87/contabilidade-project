type GetCountabilityItem = {
  id: number;
  value: number;
  uf: string;
}

const getCountability = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/countability")
    const data = res.json()
    return data 
  }catch (err) {
    console.log(err)
  }
}

export default async function Home() {
  const data = await getCountability();
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
     <h1>CONTABILIDADE:</h1>
     {
      data.map((item: GetCountabilityItem) => {
        return(
          <div key={item.id}>
            <p>
              {item.uf}
            </p>
            <p>
              {item.value}
            </p>
          </div>
        )
      })
     }
    </main>
  )
}