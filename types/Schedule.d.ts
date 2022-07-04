interface ScheduleDateBundleSession {
  allowChildAdmits: boolean
  allowComplimentaryTickets: boolean
  allowTicketSales: boolean
  areaCategoryCodes: any[]
  cinemaId: string
  cinemaOperatorCode: string
  conceptAttributesNames: any[]
  dayOfWeekKey: string
  dayOfWeekLabel: string
  eventId: string
  formatCode: string
  formatHopk: string
  groupSessionsByAttribute: boolean
  hasDynamicallyPricedTicketsAvailable: boolean
  id: string
  isAllocatedSeating: boolean
  playThroughId: any
  priceGroupCode: string
  salesChannels: string
  scheduledFilmId: string
  screenName: string
  screenNameAlt: string
  screenNumber: number
  seatsAvailable: number
  sessionAttributesNames: any[]
  sessionBusinessDate: string
  sessionDisplayPriority: number
  sessionId: string
  showDate: string
  showTime: string
  soldoutStatus: number
  typeCode: string
}

interface ScheduleDateBundle {
  caption: string
  code: string
  version: string
  sessions: ScheduleDateBundleSession[]
}

interface ScheduleDate {
  dayOfWeekLabel: string
  showDate: string
  bundles: ScheduleDateBundle[]
}

interface Schedule {
  imagePortrait: string
  id: string
  trailer: any
  age: string
  dates: ScheduleDate[]
  description: string
  duration: string
  id: string
  imageLandscape: string
  imagePortrait: string
  movieName: string
  name: string
  point: number
  slug: string
  startdate: string
  enddate: string
  subName: string
  totalVotes: number
}
