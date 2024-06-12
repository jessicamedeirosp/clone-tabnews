function status(request, response) {
  response.status(200).json({message: "oi"})
}

export default status