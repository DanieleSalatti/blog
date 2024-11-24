interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Coming soon...',
    description: `I'm working on something new. Stay tuned!`,
    imgSrc: '/static/images/google.png',
    href: 'https://danielesalatti.com',
  },
  {
    title: 'v37',
    description: `My small company.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://v37.io',
  },
]

export default projectsData
