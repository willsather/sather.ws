import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import jobs from "@/src/app/experience/jobs";

export default function JobList() {
  return (
    <Box>
      <List>
        {jobs.map((job) => (
          <Box key={job.company} ml={{ xs: 2, md: 8 }} mt={{ xs: 2, md: 8 }} mb={{ xs: 4, md: 8 }}>
            <Typography variant="subtitle1">{job.company}.</Typography>
            <Typography variant="subtitle2">{job.role}.</Typography>
            <Typography variant="caption">{job.description}.</Typography>
          </Box>
        ))}
      </List>
    </Box>
  );
}
