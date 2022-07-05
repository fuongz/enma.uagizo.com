interface MovieScheduleItemProps {
  session: ScheduleDateBundleSession
}

export const MovieScheduleItem = (props: MovieScheduleItemProps) => {
  const { session }: MovieScheduleItemProps = props

  return (
    <span className="relative rounded text-sm hover:text-zinc-100 hover:border-zinc-400 cursor-pointer px-3 py-2 border border-zinc-700 text-zinc-400 text-center hover:transition transtion">
      {session?.showTime}
    </span>
  )
}
