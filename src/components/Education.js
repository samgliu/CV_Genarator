import React from 'react';
import uniqid from 'uniqid';

const Education = (props) => {
    const { edus, status } = props;

    function renderNormal(edu) {
        return (
            <li key={edu.id}>
                {edu.text.time}&nbsp;&nbsp;
                {edu.text.schoolname}&nbsp;&nbsp;
                {edu.text.major}
                <button
                    type="button"
                    onClick={() => {
                        props.onEduEditClick(edu.id);
                    }}
                >
                    ✎
                </button>
                <button
                    type="button"
                    onClick={() => {
                        props.onEduDelClick(edu.id);
                    }}
                >
                    ✖
                </button>
            </li>
        );
    }

    function renderForm(edu) {
        let theid = edu.id;
        let time = edu.text.time;
        let school = edu.text.schoolname;
        let major = edu.text.major;
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
                School:
                <input
                    className="midinputbox"
                    type="text"
                    defaultValue={school}
                    onChange={(event) => {
                        school = event.target.value;
                    }}
                />
                Major:
                <input
                    className="midinputbox"
                    type="text"
                    defaultValue={major}
                    onChange={(event) => {
                        major = event.target.value;
                    }}
                />
                <button
                    type="button"
                    onClick={() => {
                        props.saveEduEdition(theid, time, school, major);
                    }}
                >
                    ✔
                </button>
            </span>
        );
    }

    function renderSection(edus) {
        return edus.map((edu) => {
            if (!edu.editing) {
                return renderNormal(edu);
            } else {
                return renderForm(edu);
            }
        });
    }

    function renderNormalHeader() {
        return (
            <h3>
                Education&nbsp;
                <button
                    type="button"
                    onClick={() => {
                        props.dodgeAddingStatus('education');
                    }}
                >
                    ✚
                </button>
            </h3>
        );
    }

    function renderAddingHeader() {
        let time;
        let school;
        let major;
        let theid = uniqid();
        return (
            <div>
                <h3>Education</h3>
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
                    School:
                    <input
                        className="midinputbox"
                        type="text"
                        defaultValue={school}
                        onChange={(event) => {
                            school = event.target.value;
                        }}
                    />
                    Major:
                    <input
                        className="midinputbox"
                        type="text"
                        defaultValue={major}
                        onChange={(event) => {
                            major = event.target.value;
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            if (school !== undefined) {
                                props.onEduAddClick(theid, time, school, major);
                            } else {
                                props.dodgeAddingStatus('education');
                            }
                        }}
                    >
                        ✔
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            props.dodgeAddingStatus('education');
                        }}
                    >
                        ✖
                    </button>
                </span>
            </div>
        );
    }

    function renderHeaderSection(status) {
        if (!status.education) {
            return renderNormalHeader();
        } else {
            return renderAddingHeader();
        }
    }

    return (
        <div>
            {renderHeaderSection(status)}
            {renderSection(edus)}
        </div>
    );
};

export default Education;
