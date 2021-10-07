import React from "react";

const Skill = (props) => {
    const { skills } = props;

    function addSkill() {
        console.log("addSkill button clicked");
    }

    return (
        <div>
            <h3>
                Skill
                <button
                    type="button"
                    onClick={() => {
                        addSkill();
                    }}
                >
                    +
                </button>
            </h3>
            <br />
            {skills.map((skill) => {
                return (
                    <span key={skill.id}>
                        {skill.text}
                        <button
                            type="button"
                            onClick={() => {
                                props.onSkillDelClick(skill.id);
                            }}
                        >
                            -
                        </button>
                        &nbsp;&nbsp;
                    </span>
                );
            })}
            <br />
            <br />
        </div>
    );
};

export default Skill;
