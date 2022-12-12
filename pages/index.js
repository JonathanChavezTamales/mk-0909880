import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import dbConnect from "../lib/dbConnect";
import Project from "../models/Project";

const Index = ({ projects }) => (
  <div className="grid grid-cols-3 gap-6">
    {projects.map((i) => (
      <ProjectCard key={i}></ProjectCard>
    ))}
    <ProjectCard empty></ProjectCard>
  </div>
);

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Project.find({});
  const projects = result.map((doc) => {
    const project = doc.toObject();
    project._id = project._id.toString();
    return project;
  });

  return { props: { projects } };
}

export default Index;
