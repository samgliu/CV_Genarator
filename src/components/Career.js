import React from "react";
import uniqid from "uniqid";

const Career = (props) => {
    const { cars, status } = props;

    function renderNormal(ca) {
        return (
            <li key={ca.id}>
                {ca.text.time}&nbsp; &nbsp;Company:&nbsp;
                {ca.text.companyname}
                &nbsp; &nbsp;Position:&nbsp;{ca.text.position}
                <button
                    type="button"
                    onClick={() => {
                        props.onCarEditClick(ca.id);
                    }}
                >
                    ✎
                </button>
                <button
                    type="button"
                    onClick={() => {
                        props.onCarDelClick(ca.id);
                    }}
                >
                    ✖
                </button>
                <br />
                {ca.text.description}
            </li>
        );
    }

    function renderForm(car) {
        let theid = car.id;
        let time = car.text.time;
        let cname = car.text.companyname;
        let pos = car.text.position;
        let des = car.text.description;

        return (
            <span key={theid}>
                Time:
                <input
                    className="midinputbox"
                    type="text"
                    defaultValue={time}
                    onChange={(event) => {
                        time = event.target.value;
                    }}
                />
                Company:
                <input
                    className="midinputbox"
                    type="text"
                    defaultValue={cname}
                    onChange={(event) => {
                        cname = event.target.value;
                    }}
                />
                Position:
                <input
                    className="midinputbox"
                    type="text"
                    defaultValue={pos}
                    onChange={(event) => {
                        pos = event.target.value;
                    }}
                />
                <button
                    type="button"
                    onClick={() => {
                        props.saveCarEdition(theid, time, cname, pos, des);
                    }}
                >
                    ✔
                </button>
                <br />
                Description:
                <br />
                <textarea
                    type="text"
                    className="summaryinputbox"
                    rows="5"
                    defaultValue={des}
                    onChange={(event) => {
                        des = event.target.value;
                    }}
                />
            </span>
        );
    }

    function renderSection(cars) {
        return cars.map((car) => {
            if (!car.editing) {
                return renderNormal(car);
            } else {
                return renderForm(car);
            }
        });
    }

    function renderNormalHeader() {
        return (
            <h3>
                Career&nbsp;
                <button
                    type="button"
                    onClick={() => {
                        props.dodgeAddingStatus("career");
                    }}
                >
                    ✚
                </button>
            </h3>
        );
    }

    function renderAddingHeader() {
        let theid = uniqid();
        let time;
        let cname;
        let pos;
        let des;
        return (
            <div>
                <h3>Career</h3>
                <span key={theid}>
                    Time:
                    <input
                        className="midinputbox"
                        type="text"
                        defaultValue={time}
                        onChange={(event) => {
                            time = event.target.value;
                        }}
                    />
                    Company:
                    <input
                        className="midinputbox"
                        type="text"
                        defaultValue={cname}
                        onChange={(event) => {
                            cname = event.target.value;
                        }}
                    />
                    Position:
                    <input
                        className="midinputbox"
                        type="text"
                        defaultValue={pos}
                        onChange={(event) => {
                            pos = event.target.value;
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            if (cname !== undefined) {
                                props.onCarAddClick(
                                    theid,
                                    time,
                                    cname,
                                    pos,
                                    des
                                );
                            } else {
                                props.dodgeAddingStatus("career");
                            }
                        }}
                    >
                        ✔
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            props.dodgeAddingStatus("career");
                        }}
                    >
                        ✖
                    </button>
                    <br />
                    Description:
                    <br />
                    <textarea
                        type="text"
                        className="summaryinputbox"
                        rows="5"
                        defaultValue={des}
                        onChange={(event) => {
                            des = event.target.value;
                        }}
                    />
                </span>
            </div>
        );
    }

    function renderHeaderSection(status) {
        if (!status.career) {
            return renderNormalHeader();
        } else {
            return renderAddingHeader();
        }
    }
    return (
        <div>
            {renderHeaderSection(status)}
            {renderSection(cars)}
        </div>
    );
};

export default Career;
