import React from "react";

const Information = (props) => {
    const { status, info } = props;

    function renderNormal() {
        return (
            <div>
                <h3>
                    Information
                    <button
                        type="button"
                        onClick={() => {
                            props.dodgeAddingStatus("information");
                        }}
                    >
                        ✎
                    </button>
                </h3>
                Name: {info.firstname} {info.lastname} <br />
                Phone: {info.phone}
                <br />
                Email: {info.email}
            </div>
        );
    }

    function renderForm(info) {
        let fn = info.firstname;
        let ln = info.lastname;
        let phone = info.phone;
        let email = info.email;
        return (
            <div>
                <h3>
                    Information
                    <button
                        type="button"
                        onClick={() => {
                            props.saveInfo(fn, ln, phone, email);
                        }}
                    >
                        ✔
                    </button>
                </h3>
                Name:&nbsp;
                <input
                    className="skillinpubox"
                    type="text"
                    defaultValue={fn}
                    onChange={(event) => {
                        fn = event.target.value;
                    }}
                />
                <input
                    className="skillinpubox"
                    type="text"
                    defaultValue={ln}
                    onChange={(event) => {
                        ln = event.target.value;
                    }}
                />
                <br />
                Phone:
                <input
                    className="midinputbox"
                    type="text"
                    defaultValue={phone}
                    onChange={(event) => {
                        phone = event.target.value;
                    }}
                />
                <br />
                Email:&nbsp;&nbsp;
                <input
                    className="midinputbox"
                    type="text"
                    defaultValue={email}
                    onChange={(event) => {
                        email = event.target.value;
                    }}
                />
            </div>
        );
    }

    function renderSection(info) {
        if (!status.information) {
            return renderNormal(info);
        } else {
            return renderForm(info);
        }
    }

    return <div>{renderSection(info)}</div>;
};

export default Information;
