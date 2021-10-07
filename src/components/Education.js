import React from "react";

const Education = (props) => {
    function addEd() {
        console.log("addEd");
    }
    return (
        <div>
            <h3>
                Education
                <button
                    type="button"
                    onClick={() => {
                        addEd();
                    }}
                >
                    +
                </button>
            </h3>
            <br />
            <ul>
                {props.education.map((edu) => {
                    return (
                        <li key={edu.id}>
                            {edu.text.time}&nbsp;&nbsp;
                            {edu.text.schoolname}&nbsp;&nbsp;
                            {edu.text.major}
                            <button
                                type="button"
                                onClick={() => {
                                    props.onEduDelClick(edu.id);
                                }}
                            >
                                -
                            </button>
                        </li>
                    );
                })}
            </ul>
            <br />
            <br />
        </div>
    );
};

export default Education;
