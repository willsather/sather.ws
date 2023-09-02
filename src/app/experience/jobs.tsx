import { Job } from "@/src/types/job";
import { Box, List, Typography } from "@mui/material";
import React from "react";

const JobList = () => {
  const jobs: Job[] = [
    {
      company: "VMware Tanzu Labs",
      role: "Software Engineer",
      description: "java, springboot, js/ts, next.js",
    },
    {
      company: "Ivanti",
      role: "Software Engineer Intern",
      description: "c#, typescript, azure devops, angular",
    },
    {
      company: "Dell Technologies",
      role: "Solutions Architect Intern",
      description: "ismv4 associate exam, dart, flutter, firebase",
    },
    {
      company: "byt8",
      role: "Developer & Creator",
      description: "firebase, google cloud platform, javascript, swift",
    },
  ];

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
};

export default JobList;
