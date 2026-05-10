export interface Project {
  id: number
  tag: string
  title: string
  desc: string
  image: string
  url: string
}

export const projects: Project[] = [
  {
    id: 1,
    tag: "Public Sector Technology",
    title: "Citizen App",
    desc: "Developed critical modules for the Citizen app ecosystem, specifically focusing on the implementation of business permits and property rates. A decentralized governance portal facilitating transparent civic engagement.",
    image: "/images/citizen-app.jpg",
    url: "https://citizen.gov.gh/",
  },
  {
    id: 2,
    tag: "Fintech Solution",
    title: "myCreditScore",
    desc: "Led architectural design and development of the lender registration system. Translating complex financial metrics into a silent, authoritative dashboard designed to empower users with information transparency.",
    image: "/images/mycreditscore.jpg",
    url: "https://mycreditscore.com.gh/",
  },
  {
    id: 3,
    tag: "Corporate Identity",
    title: "NLCBC",
    desc: "Designed and developed the official digital presence for the NewLife Community Baptist Church. A digital home for institutional knowledge leveraging editorial precision and rigid grid structures.",
    image: "/images/nlcbc.jpg",
    url: "https://www.nlcbcgh.com/",
  },
]
