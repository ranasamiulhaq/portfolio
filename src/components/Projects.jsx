import { PROJECTS } from "../constants"
const Project = ({ show }) => {
    // Filter projects based on the show criteria
    const filteredProjects = PROJECTS.filter(project => project.type === show);

    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Projects</h1>
            <div>
                {filteredProjects.map((project, index) => (
    <div key={index} className="flex flex-col mb-6 text-center lg:text-start lg:flex-row mx-auto justify-center ">
        <div className="w-full lg:w-1/4 mb-6 lg:mb-10 lg:pr-6flex justify-center"> {/* Added flex and justify-center to center the image */}
            <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-4 lg:mb-0 rounded"
            />
        </div>
        <div className="w-full lg:w-2/4 items-center justify-center lg:pr-6 ">
            <div>
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
                ))}
            </div>
        </div>
    );

}
export default Project