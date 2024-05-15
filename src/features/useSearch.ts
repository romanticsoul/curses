import { create } from 'zustand'

export enum tags {
  all = 'Все курсы',
  programming = 'Программирование',
  design = 'Дизайн',
  development = 'Разработка',
  marketing = 'Маркетинг',
  business = 'Бизнес',
  finance = 'Финансы',
}

interface IUseSearch {
  value: string
  tag: string
  setTag: (value: string) => void
  setValue: (value: string) => void
}

export const useSearch = create<IUseSearch>((set) => ({
  value: '',
  tag: tags.all,
  setTag: (value: string) => set({ tag: value }),
  setValue: (value: string) => set({ value }),
}))
