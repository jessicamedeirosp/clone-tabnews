import database from 'infra/database.js'

async function status(request, response) {
  const result = await database.query('SELECT 1 + 1 as sum');
  console.log('n result => ', result.rows)
  response.status(200).json({message: "oi"})
}

export default status