'use client'
import FilterItem from '@/shared/FilterItem'
import React from 'react'

const costs = ['Бесплатно', 'Платно']
const levels = ['Новичкам', 'Специалистам']
const durings = ['до 2 месяцев', 'до полугода', 'до года', 'больше года']
const formats = ['Самообучение', 'С наставником']
const statuses = ['Пройден', 'В процессе', 'Новый', 'В избранном']

const Filter = () => {
  const [cost, setCost] = React.useState<string | undefined>(undefined)
  const [level, setLevel] = React.useState<string | undefined>(undefined)
  const [during, setDuring] = React.useState<string | undefined>(undefined)
  const [format, setFormat] = React.useState<string | undefined>(undefined)
  const [status, setStatus] = React.useState<string | undefined>(undefined)

  console.log(cost)
  return (
    <div className="mx-auto flex flex-col items-start gap-8">
      <h2 className="mx-auto text-[20px] font-medium text-benefit lg:mx-0">
        Фильтры
      </h2>
      <div className="flex flex-row flex-wrap gap-8 lg:flex-col">
        <FilterItem
          value={cost}
          setValue={setCost}
          label="Стоимость"
          variants={costs}
        />
        <FilterItem
          value={level}
          setValue={setLevel}
          label="Уровень"
          variants={levels}
        />
        <FilterItem
          value={during}
          setValue={setDuring}
          label="Продолжительность"
          variants={durings}
        />
        <FilterItem
          value={format}
          setValue={setFormat}
          label="Формат обучения"
          variants={formats}
        />
        <FilterItem
          value={status}
          setValue={setStatus}
          label="Статус"
          variants={statuses}
        />
      </div>
    </div>
  )
}

export default Filter
