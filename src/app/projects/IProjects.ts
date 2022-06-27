export interface IProjects{
  name: string
  link: string
  image: string
  description?: string
  github?: string
  tech: {
    html? : boolean
    scss? : boolean
    js? : boolean
    ts? : boolean
    angular?: boolean
    typo3?: boolean
  }
}
