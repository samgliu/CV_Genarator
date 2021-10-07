import React from "react";

const Summary = (props) => {
    function EditSummary() {
        console.log("EditSummary");
    }
    return (
        <div>
            <h3>
                Summary
                <button
                    type="button"
                    onClick={() => {
                        EditSummary();
                    }}
                >
                    &#9998;
                </button>
            </h3>{" "}
            <br />
            {props.summary} <br />
            <br />
        </div>
    );
};

export default Summary;
