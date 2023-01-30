export async function sendGraphqlQuery(
  endpoint: string,
  query: string,
  headers: Record<string, any> = {},
): Promise<any> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
    body: JSON.stringify({ query }),
  })
  return await res.json()
}
