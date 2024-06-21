import Sayfix1 from './images/projects/sayfix/1.png'
import Sayfix2 from './images/projects/sayfix/2.png'
import Seeds1 from './images/projects/seeds/1.PNG'
import Seeds2 from './images/projects/seeds/2.PNG'
import BuyMe1 from './images/projects/buy-me/1.png'
import BuyMe2 from './images/projects/buy-me/2.png'
import ChuakzCa1 from './images/projects/chuakz-ca/1.png'
import ChuakzCa2 from './images/projects/chuakz-ca/2.png'
import FlexBlog1 from './images/projects/flexblog/1.png'
import FlexBlog2 from './images/projects/flexblog/2.png'
import Yummy1 from './images/projects/yummy/1.png'
import Yummy2 from './images/projects/yummy/2.png'

const header = {
  title: 'TirtaF.',
}

const about = {
  name: 'Tirta Farisaldi Ibrahim',
  role: 'a frontend engineer who is still hungry to learn about technology and is developing himself to become a role model for other engineers',
  description:
    'has 2 years of experience in building websites and web applications. I specialize in react js and have professional experience working with embedded script, ads, web performance optimization and clean code architecture.',
  resume: 'https://sapphire-phyllys-85.tiiny.site/',
  social: {
    linkedin: 'https://linkedin.com/in/tirtafarisaldi',
    github: 'https://github.com/tirtafarisaldi',
  },
}

const projects = [
  {
    name: 'Sayfix',
    description:
      'Sayfix is ​​a Netflix clone application that provides subscription-based streaming that allows users to enjoy their favorite shows from various countries. Customers can enjoy watching TV shows and movies without ads on devices connected to the internet.',
    images: [Sayfix1, Sayfix2],
    stack: ['Material UI', 'Javascript', 'React JS'],
    sourceCode: 'https://github.com/tirtafarisaldi/Sayfix',
    livePreview: 'https://github.com/tirtafarisaldi/Sayfix',
  },
  {
    name: 'Seeds',
    description:
      'seeds is an investment platform that allows the millennial generation to discuss and learn about investment ideas, while generating passive income and providing a positive impact on the world by bringing a spirit of community and socializing online in investing',
    images: [Seeds1, Seeds2],
    stack: ['Redux', 'TypeScript', 'React Native'],
    sourceCode: 'https://github.com/tirtafarisaldi/seeds',
    livePreview: 'https://play.google.com/store/apps/details?id=com.seeds.investment&hl=en',
  },
  {
    name: 'Chuakz Ca',
    description:
      'Chuakz Ca provides accurate weather information in several cities, including real-time weather, radar, weather alerts, etc.',
    images: [ChuakzCa1, ChuakzCa2],
    stack: ['GraphQL', 'Javascript', 'Vite'],
    sourceCode: 'https://github.com/tirtafarisaldi/Chuakzz-Ca',
    livePreview: 'https://github.com/tirtafarisaldi/Chuakzz-Ca',
  },
  {
    name: 'Buy Me',
    description:
      'A electronic shopping store platform refers to the technology and infrastructure that powers an online retail operation. It encompasses the software, systems, and services necessary to create, manage, and operate an e-commerce website or application where products or services are sold to customers over the internet.',
    images: [BuyMe1, BuyMe2],
    stack: ['SASS', 'Javascript', 'React JS'],
    sourceCode: 'https://github.com/tirtafarisaldi/Buy-Me',
    livePreview: 'https://github.com/tirtafarisaldi/Buy-Me',
  },
  {
    name: 'Yummy',
    description:
      'Yummy is a digital media subsidiary owned by IDN which contains cooking tutorial content, food, recipes and culinary exploration in Indonesia. Yummy also has premium recipe content that can be purchased at affordable prices',
    images: [Yummy1, Yummy2],
    stack: ['Chakra UI', 'TypeScript', 'Next JS'],
    sourceCode: 'https://www.yummy.co.id',
    livePreview: 'https://www.yummy.co.id',
  },
  {
    name: 'Flex Blog',
    description:
      'Flex Blog is a web application that contains a series of posts or articles that are updated regularly, usually written in an informal or conversational style.',
    images: [FlexBlog1, FlexBlog2],
    stack: ['SASS', 'GraphQL', 'Next JS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React JS',
  'React Native',
  'Webpack',
  'Apollo Client',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Chakra UI',
  'AMP',
  'PWA',
  'Styeled Components',
  'MVVM Architecture',
  'SEO',
  'ADS',
  'GraphQL',
  'React Query'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
