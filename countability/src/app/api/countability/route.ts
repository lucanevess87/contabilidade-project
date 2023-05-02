const countability = [
  {
    value: 1200,
    uf: 'Pernambuco',
    id: 1,
  },
  {
    value: 1600,
    uf: 'Rio de Janeiro',
    id: 2,
  }
]

export async function GET(request: Request) {
  return new Response(JSON.stringify(countability))
}
