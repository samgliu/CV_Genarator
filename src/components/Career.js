import React from "react";

const Career = (props) => {
    function addCa() {
        console.log("addCa");
    }
    return (
        <div>
            <h3>
                Career
                <button
                    type="button"
                    onClick={() => {
                        addCa();
                    }}
                >
                    +
                </button>
            </h3>
            <br />
            <ul>
                {props.career.map((ca) => {
                    return (
                        <li key={ca.id}>
                            {ca.text.time}&nbsp; &nbsp;Company:&nbsp;
                            {ca.text.companyname}
                            &nbsp; &nbsp;Position:&nbsp;{ca.text.position}
                            <button
                                type="button"
                                onClick={() => {
                                    props.onCareerDelClick(ca.id);
                                }}
                            >
                                -
                            </button>
                            <br />
                            {ca.text.description}
                        </li>
                    );
                })}
            </ul>
            <br />
            <br />
        </div>
    );
};

export default Career;
