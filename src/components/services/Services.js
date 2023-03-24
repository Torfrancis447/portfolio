import React from "react"
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
    return (
        <section id="services">
            <h5>What I offer</h5>
            <h2> Services</h2>
            <div class="container service-container">
                <article class="service">
                    <div class="service-head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul class="service-list">
                        <li>
                            <BiCheck class="service-list-icon"/>
                            <p> put next project Ideas </p>
                        </li>
                        <li>
                            <BiCheck class="service-list-icon"/>
                            <p> put next project Ideas </p>
                        </li>
                        <li>
                            <BiCheck class="service-list-icon"/>
                            <p> put next project Ideas </p>
                        </li>
                        <li>
                            <BiCheck class="service-list-icon"/>
                            <p> put next project Ideas </p>
                        </li>
                        <li>
                            <BiCheck class="service-list-icon"/>
                            <p> put next project Ideas </p>
                        </li>
                        {/* additional list */}
                        <article class="service">
                    <div class="service-head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul class="service-list">
                        <li>
                            <BiCheck class="service-list-icon"/>
                            <p> put next project Ideas </p>
                        </li>
                        <li>
                            <BiCheck class="service-list-icon"/>
                            <p> put next project Ideas </p>
                        </li>
                        <li>
                            <BiCheck class="service-list-icon"/>
                            <p> put next project Ideas </p>
                        </li>
                        <li>
                            <BiCheck class="service-list-icon"/>
                            <p> put next project Ideas </p>
                        </li>
                        <li>
                            <BiCheck class="service-list-icon"/>
                            <p> put next project Ideas </p>
                        </li>
                    </ul>
                </article>
                    </ul>
                </article>
            </div>
        </section>
    )
};

export default Services