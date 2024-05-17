import data from '../_JSON/teachers.json'

export async function GET() {
  return Response.json(data)
}
