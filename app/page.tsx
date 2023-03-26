import { Configuration, OpenAIApi } from 'openai'
import styles from './page.module.css'

async function getMessage() {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'How is going on?' }],
    })
    return completion.data.choices[0]?.message?.content
  } catch (error) {
    console.log(error)
    return 'something went wrong'
  }
}

export default async function Home() {
  const message = await getMessage()

  return (
    <main className={styles.main}>
      <h1>{message}</h1>
    </main>
  )
}
