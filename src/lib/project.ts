export interface IProject {
 id: number;
 logo: string;
 title: string;
 desc: string;
 totalRaise: number;
 price: number;
 chainLogo: string;
 type: string;
 burnedToken: number;
}

export const demoProjects: IProject[] = [
 {
  id: 1,
  logo: '/project-logo.svg',
  title: 'Project #1',
  desc: '2141A3X4',
  totalRaise: 3970,
  price: 0.05,
  chainLogo: '/chain-logo.svg',
  type: 'DeFi',
  burnedToken: 4,
 },
 {
  id: 2,
  logo: '/project-logo.svg',
  title: 'Project #1',
  desc: '2141A3X4',
  totalRaise: 3970,
  price: 0.05,
  chainLogo: '/chain-logo.svg',
  type: 'DeFi',
  burnedToken: 4,
 },
 {
  id: 3,
  logo: '/project-logo.svg',
  title: 'Project #1',
  desc: '2141A3X4',
  totalRaise: 3970,
  price: 0.05,
  chainLogo: '/chain-logo.svg',
  type: 'DeFi',
  burnedToken: 4,
 },
 {
  id: 4,
  logo: '/project-logo.svg',
  title: 'Project #1',
  desc: '2141A3X4',
  totalRaise: 3970,
  price: 0.05,
  chainLogo: '/chain-logo.svg',
  type: 'DeFi',
  burnedToken: 4,
 },
];
