import { EXPERIENCES } from "../constants"
const Experience = ({ show }) => {

    return (
        <div className="border-b border-neutral-800 pb-4">
            <h1 className="my-20 text-center text-4xl">Experience</h1>
            <div >
                {EXPERIENCES.map((exp, index) => (
                    <div className="mb-10 flex flex-wrap lg:justify-center" key={index}>
                        <div className="w-full lg:w-1/4 ">
                            {exp.type === show && (
                                <p className="mb-2 text-sm">{exp.year}</p>
                            )}
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                        {exp.type === show && (
                            <>
                            <h6 className="mb-2 font-semibold">
                                {exp.role} -{" "}
                                <span className="text-sm text-purple-100">
                                    {exp.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{exp.description}</p>
                            {exp.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-800">
                                    {tech}
                                </span>
                            ))}
                            </>
                        )}
                            
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Experience