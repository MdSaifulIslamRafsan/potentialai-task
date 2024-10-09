import Image from "next/image";


const ProjectCard = ({project}) => {
    return (
        <div>
            <Image width="500" height="400" src={project?.img} alt={project?.title} />
            <p className="text-[#FD6F00] mt-3">{project?.category}</p>
            <h5 className="font-bold">{project?.title}</h5>

        </div>
    );
};

export default ProjectCard;