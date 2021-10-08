import React from "react";
import uniqid from "uniqid";

const Summary = (props) => {
    const { status, summary } = props;

    function renderNormal() {
        return (
            <div>
                <h3>
                    Summary
                    <button
                        type="button"
                        onClick={() => {
                            props.dodgeAddingStatus("summary");
                        }}
                    >
                        ✎
                    </button>
                </h3>
                {summary.text}
            </div>
        );
    }

    function renderForm(summary) {
        let input = summary.text;
        return (
            <div key={uniqid()}>
                <h3>
                    Summary
                    <button
                        type="button"
                        onClick={() => {
                            props.saveSummary(input);
                        }}
                    >
                        ✔
                    </button>
                </h3>
                <textarea
                    className="summaryinputbox"
                    type="text"
                    rows="5"
                    defaultValue={input}
                    onChange={(event) => {
                        input = event.target.value;
                    }}
                />
            </div>
        );
    }

    function renderSection(summary) {
        if (!status.summary) {
            return renderNormal(summary);
        } else {
            return renderForm(summary);
        }
    }

    return <div>{renderSection(summary)}</div>;
};

export default Summary;
