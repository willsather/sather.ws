export type Job = {
  company: string;
  role: string;
  description: string;
  tag?: string;
};

const jobs: Job[] = [
  {
    company: "VMware Tanzu Labs",
    role: "Software Engineer",
    description: "java, react, js/ts, springboot, next.js",
  },
  {
    company: "Ivanti",
    role: "Software Engineer Intern",
    description: "c#, typescript, azure, angular",
  },
  {
    company: "Dell Technologies",
    role: "Solutions Architect Intern",
    description: "ism.v4 associate exam, dart, react native, firebase",
  },
  // TODO: move to /projects
  // {
  //   company: "byt8",
  //   role: "Developer & Creator",
  //   description: "firebase, google cloud platform, javascript, swift",
  //   tag: "archived",
  // },
];

export default function JobList() {
  return (
    <div className="ml-4 md:ml-8">
      <ul>
        {jobs.map((job) => (
          <div className="my-8 md:my-12" key={job.company}>
            <div className="flex items-center">
              <h3 className="text-3xl md:text-5xl">{job.company}</h3>

              {job?.tag != null && (
                <div className="ml-4 rounded-lg bg-amber-500 p-1 px-2">
                  <p className="text-xs">{job.tag}</p>
                </div>
              )}
            </div>
            <h4 className="text-xl md:text-2xl">{job.role}</h4>
            <p className="font-mono text-gray-500">{job.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
