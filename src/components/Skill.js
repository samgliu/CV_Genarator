import React from 'react';
import uniqid from 'uniqid';

const Skill = (props) => {
    const { skills, status } = props;

    function renderForm(skill) {
        let input = skill.text;
        return (
            <span key={skill.id}>
                <input
                    className="skillinputbox"
                    type="text"
                    defaultValue={input}
                    onChange={(event) => {
                        input = event.target.value;
                    }}
                />
                <button
                    type="button"
                    onClick={() => {
                        props.saveSkillEdition(skill.id, input);
                    }}
                >
                    ✔
                </button>
            </span>
        );
    }

    function renderNormal(skill) {
        return (
            <span key={skill.id}>
                {skill.text}
                <button
                    type="button"
                    onClick={() => {
                        props.onSkillEditClick(skill.id);
                    }}
                >
                    ✎
                </button>
                <button
                    type="button"
                    onClick={() => {
                        props.onSkillDelClick(skill.id);
                    }}
                >
                    ✖
                </button>
                &nbsp;&nbsp;
            </span>
        );
    }

    function renderSection(skills) {
        return skills.map((skill) => {
            if (!skill.editing) {
                return renderNormal(skill);
            } else {
                return renderForm(skill);
            }
        });
    }

    function renderNormalSkill() {
        return (
            <h3>
                Skill&nbsp;
                <button
                    type="button"
                    onClick={() => {
                        props.dodgeAddingSkill('skills');
                    }}
                >
                    ✚
                </button>
            </h3>
        );
    }

    function renderAddingSkill() {
        let input;
        let theid = uniqid();
        return (
            <h3>
                Skill&nbsp;
                <span key={theid}>
                    <input
                        className="skillinputbox"
                        type="text"
                        defaultValue={input}
                        onChange={(event) => {
                            input = event.target.value;
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            if (input !== undefined) {
                                props.onSkillAddClick(theid, input);
                            } else {
                                props.dodgeAddingSkill('skills');
                            }
                        }}
                    >
                        ✔
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            props.dodgeAddingSkill('skills');
                        }}
                    >
                        ✖
                    </button>
                </span>
            </h3>
        );
    }

    function renderHeaderSection(status) {
        if (!status.skills) {
            return renderNormalSkill();
        } else {
            return renderAddingSkill();
        }
    }

    return (
        <div>
            {renderHeaderSection(status)}
            {renderSection(skills)}
        </div>
    );
};

export default Skill;
