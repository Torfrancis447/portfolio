import React from "react";
import resume from "/home/tor-f/Development/code/my-projects/portfolio/src/assets/resume-2023.pdf"

const ResumeButton =() => {
    return (
        <div class='resume-btn'>
        <a class="btn" href={resume}> Download Resume</a>
        <a class="btn btn-primary" href=""> Reach Out</a>
        </div>
    )
};

export default ResumeButton