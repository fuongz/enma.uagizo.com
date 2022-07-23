import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, useEffect, useState } from 'react'
import { MovieScheduleItem } from '../cinema/MovieScheduleItem'

interface ModalProps {
  state: boolean
  data: ScheduleDate
}

export const ModalComponent: FC<ModalProps> = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [bundle, setBundle] = useState<ScheduleDateBundle>()

  const { state, data } = props

  useEffect(() => {
    if (state === true) {
      setIsOpen(true)
    }
  }, [state])

  useEffect(() => {
    setBundle(data?.bundles?.find((bundle: ScheduleDateBundle) => bundle.caption === 'sub'))
  }, [data])

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Lịch chiếu
                </Dialog.Title>
                <div className="mt-2">
                  <>
                    <p className="mt-4 text-sm text-zinc-300 tracking-tight font-semibold">{data.showDate}</p>
                    <p className="text-xs mt-2 text-zinc-400 tracking-tight">
                      <span className="bg-zinc-800 rounded-sm px-1.5 py-0.5">{bundle?.caption === 'voice' ? 'Thuyết minh' : 'Phụ đề'}</span>
                      <span className="bg-indigo-800 rounded-sm px-1.5 py-0.5 ml-1">{bundle?.version}</span>
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                      {bundle && bundle?.sessions?.map((session: ScheduleDateBundleSession) => <MovieScheduleItem key={session.id} session={session} />)}
                    </div>
                  </>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
