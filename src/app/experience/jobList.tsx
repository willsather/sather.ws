import List from "@mui/material/List";
import jobs from "@/src/app/experience/jobs";

export default function JobList() {
  return (
    <div className="ml-4 md:ml-8">
      <List>
        {jobs.map((job) => (
          <div className="my-6 md:my-12" key={job.company}>
            <h3 className="text-2xl md:text-4xl">{job.company}.</h3>
            <h4>{job.role}.</h4>
            <p className="text-gray-500">{job.description}.</p>
          </div>
        ))}
      </List>
    </div>
  );
}
