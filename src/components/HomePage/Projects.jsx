"use client"
import { projectsData } from "@/lib/projectsData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectCard from "../ProjectCard/ProjectCard";
const Projects = () => {

    const uxData = projectsData?.filter(project => project?.category === "UI/UX")
    const WebsiteDesignData = projectsData?.filter(project => project?.category === "Website Design")
    const GraphicDesignData = projectsData?.filter(project => project?.category === "Graphic Design")
    const AppDesignData = projectsData?.filter(project => project?.category === "App Design")
    return (
        <div id="projects" className="mb-10">
            <div className="max-w-xl text-center space-y-5 mx-auto">
            <h1 className="text-4xl font-bold">My Projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            </div>
            <div className="my-10">

            <Tabs>
                <TabList className="flex flex-wrap gap-5 justify-center">
                <Tab>All</Tab>
                <Tab>UI/UX</Tab>
                <Tab>Web Design</Tab>
                <Tab>App Design</Tab>
                <Tab>Graphic Design</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        projectsData?.map((project , index) => <ProjectCard project={project} key={index}></ProjectCard> )
                    }
                    </div>
                    
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        uxData?.map((project , index) => <ProjectCard project={project} key={index}></ProjectCard> )
                    }
                    </div>
                    
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        WebsiteDesignData?.map((project , index) => <ProjectCard project={project} key={index}></ProjectCard> )
                    }
                    </div>
                    
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        AppDesignData?.map((project , index) => <ProjectCard project={project} key={index}></ProjectCard> )
                    }
                    </div>
                    
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        GraphicDesignData?.map((project , index) => <ProjectCard project={project} key={index}></ProjectCard> )
                    }
                    </div>
                    
                </TabPanel>
                
            </Tabs>
            </div>
            
        </div>
    );
};

export default Projects;