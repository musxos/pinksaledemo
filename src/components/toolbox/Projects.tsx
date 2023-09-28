import React from 'react';
import Image from 'next/image';
import { IProject } from '@/lib/project';
import currencyFormat from '@/helpers/currencyFormat';
import Link from 'next/link';
import ProjectItem from '@/components/toolbox/ProjectItem';

interface IPropTypes {
 projects: IProject[];
 isVote?: boolean;
}

function Projects({ projects, isVote = false }: IPropTypes) {
 return (
  <div className="flex gap-6 flex-col px-10 xl:px-[280px] 3xl:px-[480px] z-0">
   {projects.map((project, index) => (
    <ProjectItem project={project} isVote={isVote} key={index} />
   ))}
  </div>
 );
}

export default Projects;
