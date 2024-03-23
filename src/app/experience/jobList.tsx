import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import jobs from "@/src/app/experience/jobs";

export default function JobList() {
  return (
    <div>
      <List>
        {jobs.map((job) => (
          <div key={job.company} className="ml-2 mt-2 mb-4 md:ml-8 md:mt-8 md:mb-8">
            <Typography variant="subtitle1">{job.company}.</Typography>
            <Typography variant="subtitle2">{job.role}.</Typography>
            <Typography variant="caption">{job.description}.</Typography>
          </div>
        ))}
      </List>
    </div>
  );
}
