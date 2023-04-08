export default async (req, res) => {
  if (req.body.prompt !== undefined) {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "234a6cbe3emshe13fc43e8c18567p1dc548jsn1792f2f2506b",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
      body: '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":`${req.body.prompt}`}]}',
    }
    const response = await fetch(
      "https://openai80.p.rapidapi.com/chat/completions",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response.choices[0].message.content))
      .catch((err) => console.error(err))
    res.end()
  } else {
    res.status(400).json({ text: "No prompt provided." })
  }
}
