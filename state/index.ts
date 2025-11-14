import { Message } from 'ai'
import { create } from 'zustand'

type AppState = {
  chat:
    | {
        id: string
        name: string
        messages: Message[]
      }
    | null
    | undefined
  setChat: (chat: AppState['chat']) => void
}

export const useAppState = create<AppState>((set) => ({
  chat: undefined,
  setChat: (chat) => set({ chat }),
}))
