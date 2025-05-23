'use client'

import React from 'react'
import PageHeader from '@/components/layout/PageHeader'
import ProjectCard from '@/components/sections/ProjectCard'
import { useProjects } from '@/hooks/useApiData'

interface Project {
  title: string;
  description: string;
  link: string;
  deploy?: string;
  technologies: string[];
  image: string;
  category: string;
  order?: number;
}

export default function Projects() {
  const { data: projects, loading, error } = useProjects();

  if (loading) {
    return (
      <section className="pt-24 min-h-screen bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6">
          <PageHeader
            title="Projects"
            description="Here are some of my recent projects. Each one represents a unique challenge and learning opportunity."
          />
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 min-h-screen bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <PageHeader
          title="Projects"
          description="Here are some of my recent projects. Each one represents a unique challenge and learning opportunity."
        />

        <div className="space-y-16">
          {projects && projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {error && (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="text-red-500 text-center">
              <p>Error loading projects: {error}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
