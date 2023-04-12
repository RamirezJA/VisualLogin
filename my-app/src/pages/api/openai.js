export default async (req, res) => {
  //console.log(req.body.prompt)

  if (req.body.prompt !== undefined) {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
      body: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${req.body.prompt}"}]}`,
    }

    console.log(req.body.prompt)
    const response = await fetch(
      "https://openai80.p.rapidapi.com/chat/completions",
      options
    )
      .then((response) => response.json())
      //.then((response) => console.log(response.choices[0].message.content))
      .then((response) =>
        res.status(200).json({ text: `${response.choices[0].message.content}` })
      )

      .catch((err) => console.error(err))
    res.end()
  } else {
    res.status(400).json({ text: "No prompt provided." })
  }
}
