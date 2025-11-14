import ChatInterface from '@/components/chat-interface'

export default async function ProtectedPage() {
  // Read environment variables for default connection
  const envConfig = {
    connectionString: process.env.DB_URL || '',
    openaiApiKey: process.env.OPENAI_API_KEY || '',
  }

  return <ChatInterface chat={undefined} envConfig={envConfig} />
}
