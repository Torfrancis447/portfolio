import React from "react"
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
const Experience = () => {
    return (
        <section id="experience">
        <h5> What Skills I Have</h5> 
        <h2> My experience </h2>
        <div class="container experience-container">
            <div className="experience-frontend">
                <h3> Frontend Development</h3>
                <div class="experience-content">
                    <article class="experience-details">
                        <BsPatchCheckFill />
                        <h4> HTML </h4>
                        <small class="text-light"> Experienced </small>
                    </article>
                    <article class="experience-details">
                        <BsPatchCheckFill />
                        <h4> CSS </h4>
                        <small class="text-light"> Experienced </small>
                    </article>
                    <article class="experience-details">
                        <BsPatchCheckFill />
                        <h4>Bootstrap </h4>
                        <small class="text-light"> Experienced </small>
                    </article>
                    <article class="experience-details">
                        <BsPatchCheckFill />
                        <h4> Material UI </h4>
                        <small class="text-light"> Experienced </small>
                    </article>
                    <article class="experience-details">
                        <BsPatchCheckFill />
                        <h4> React </h4>
                        <small class="text-light"> Experienced </small>
                    </article>                    
                </div>
            </div>

            <div class="experience-backend">
            <article class="experience-details">
                        <BsPatchCheckFill />
                        <h4> Ruby </h4>
                        <small class="text-light"> Experienced </small>
                    </article>
                    <article class="experience-details">
                        <BsPatchCheckFill />
                        <h4> Ruby on Rails</h4>
                        <small class="text-light"> Experienced </small>
                    </article>
                    <article class="experience-details">
                        <BsPatchCheckFill />
                        <h4> PostgreSQL</h4>
                        <small class="text-light"> Experienced </small>
                    </article>
                    <article class="experience-details">
                        <BsPatchCheckFill />
                        <div>
                         <h4> Sqlite3 </h4>
                         <small class="text-light"> Experienced </small>
                        </div>
                    </article>
                    <article class="experience-details">
                        <BsPatchCheckFill />
                        <div>
                         <h4> APIs </h4>
                         <small class="text-light"> Experienced </small>
                        </div>
                    </article>
            </div>
        </div>
        </section>
    )
};

export default Experience