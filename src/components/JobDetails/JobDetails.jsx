import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    console.log(jobs)
    const job = jobs.find(job=>job.bookId==id)
    return (
        <div>
            <h2>{job.bookName}</h2>
        </div>
    );
};

export default JobDetails;