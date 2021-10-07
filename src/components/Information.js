import React from "react";

const Information = (props) => {
    const { info } = props;
    function EditInfo() {
        console.log("EditInfo");
    }
    return (
        <div>
            <h3>
                Information
                <button
                    type="button"
                    onClick={() => {
                        EditInfo();
                    }}
                >
                    &#9998;
                </button>
            </h3>{" "}
            <br />
            Name: {info.firstname} {info.lastname} <br />
            Phone: {info.phone}
            <br />
            Email: {info.email}
            <br />
        </div>
    );
};

export default Information;
