import React from 'react'
import ProjectList from '../../ProjectList/ProjectList.js'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

export default function Projects() {
    return (
        <div className='projects-container row'>
            {ProjectList.map((projectItemData)=>{
                return <ProjectItem projectData = {projectItemData}/>
            })}
        </div>
    )
}
