export type Twf = TwfCommon & Record<string, TwfEvent | TwfRo>

export interface TwfCommon {
  map: TwfMap
  inf: TwfInf
  ini: TwfIni
}

/**
 * Interface to hold twf map info
 */
export interface TwfMap {
  n: string // name
  t: number // idk
  o: string // 盟會線號
  ri: number // resource id (?
  k: string // some key (?
}

/**
 * Interface to hold twf mission Info
 */
export interface TwfInf {
  ml?: number // max life
  maxp: number // max player
  go: string // goal
  cs: number[] // camps allowed 0|1|2
  fa: string // fail
  ab: number // ability
  n: string // name of mission
  sn: string // name of author
  minp: number // minimum player
  su: string // author userId
  dp: string // description
  ri: [] // resource id (?
}

/**
 * Interface to hold spawn point Info
 */
export interface TwfIni {
  ifus: string // initial camera coord string
  iclm: {
    '0': string[] // coord strings
    '1': string[] // coord strings
    '2': string[] // coord strings
  }
}

/**
 * Interface of a twf role
 */
export interface TwfRo {
  k: string // unique key (?)
  n: string // name of that role
  ri: string // resource id
  un: string // user id
}

/**
 * Interface of a twf music
 */
export interface TwfMusic {
  n: string // name
}

/**
 * Interface of a twf event
 */
export interface TwfEvent {
  tag?: string
  act: TwfAct[]
  uo: number // order number
  cks: TwfCheck[]
  repInt?: number // repeat interval
  rep?: number // repeat count
  repDly?: number // repeat delay
  itime?: number // time for first trigger
  delay?: number
  recInt?: number
}

export type TwfAct = Record<string, any> & {
  type: string
}

export type TwfCheck = Record<string, any> & {
  type: string
}

export interface TwrDeco {
  x: number
  sx: number
  y: number
  sy: number
  code: string
  r: number
}

export interface Twr {
  hand: number
  foot: number
  head: number
  decos: TwrDeco[]
}

export interface TwmLayer {
  map: string | {
    [floorName: string]: string[]
  }
}

export interface Twm {
  objs: { [objectName: string]: string[] }
  walls: { [wallName: string]: string[] }
  mapset: {
    c: string
    v: string
  }
  layers: TwmLayer[]
  size: string
}

export interface CgAction {
  type: string
  data: unknown
}

export interface CgCheck {
  type: string
  data: unknown
}

export interface CgTrigger {
  type: string
  data: unknown
}

export interface CgEvent {
  id: string
  disabled: boolean
  folder: string
  startTime: number
  checkInterval: number
  repeats: number
  repeatInterval: number
  actions: CgAction[]
  checks: CgCheck[]
  triggers: CgTrigger[]
}

export interface CgLocation {
  x: string
  y: string
  range?: string
}

export interface CgTwilightWarsConfig {
  title: string
  serverConfig: {
    minPlayers: number
    supportSignin: boolean
    mustLogin: boolean
    allowGuest: boolean
    supportMsgServer: boolean
    gamezoneCode: string
    roomType: 'close' | 'open'
    roomSize: number
  }
  runGame: boolean
  gameStartFadein: string
  lives: number
  debugCamp: string
  releaseCamp: string
  setInitFocus: boolean
  initFocus: CgLocation
  campOptions: {
    campOpSkydow: boolean
    campOpRoyal: boolean
    campOpThird: boolean
  }
  map: string
  maxAbilityLevel: number
  nextGameEnabled: boolean
  disableNextGameOnMissionComplete: boolean
  playDefaultMusic: boolean
  useDefaultItems: boolean
  useDefaultCampLocs: boolean
  skydowLocs: CgLocation[]
  royalLocs: CgLocation[]
  thirdLocs: CgLocation[]
  enabled: boolean
}

export interface CgEvents {
  $schema: string
  config: {
    stage: {
      width: number
      height: number
      backgroundColor: string
      resolutionPolicy: string
      alignHorizontal: string
      alignVertical: string
    }
    preload: {
      resourcesExclude: []
      sources: []
    }
    configs: {
      TwilightWarsConfig: CgTwilightWarsConfig

    }
  }
  events: CgEvent[]
}

export type ActionTranslator = (cgActions: CgAction[], action: TwfAct) => CgAction[]
export type CheckTranslator = (cgChecks: CgCheck[], check: TwfCheck) => CgCheck[]
export type TriggerTranslator = (cgTriggers: CgTrigger[], check: TwfCheck) => CgTrigger[]

export type Translator = CheckTranslator|TriggerTranslator|ActionTranslator
