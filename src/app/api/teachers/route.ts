import data from '../teachers.json'

export async function GET() {
  return Response.json(data)
}
