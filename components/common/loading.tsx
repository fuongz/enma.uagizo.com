interface LoadingProps {
  isLoading: boolean
  children: React.ReactNode
}

export const LoadingComponent = (props: LoadingProps) => {
  return (
    <div className="relative">
      {props.isLoading === true ? (
        <div className="items-center flex justify-center absolute top-0 left-0 w-full bg-zinc-900 h-full">
          <div className="inline-flex items-center px-4 py-2 font-medium leading-6 text-sm rounded-md text-white transition ease-in-out duration-150 cursor-not-allowed">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Đang tải...
          </div>
        </div>
      ) : (
        <></>
      )}

      <div>{props.children}</div>
    </div>
  )
}