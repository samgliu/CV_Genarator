import React, { Component } from "react";
import Information from "./components/Information";
import Summary from "./components/Summary";
import Career from "./components/Career";
import Education from "./components/Education";
import Skill from "./components/Skill";
import "./styles/index.css";
import uniqid from "uniqid";

class App extends Component {
    constructor() {
        super();

        this.state = {
            information: {
                firstname: "Jone",
                lastname: "Doe",
                phone: "123-456-7890",
                email: "email@test.com",
            },

            summary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            career: [
                {
                    id: uniqid(),
                    text: {
                        time: "2020-2021",
                        companyname: "Some Company Name",
                        position: "Software Engineer",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    },
                },
            ],
            education: [
                {
                    id: uniqid(),
                    text: {
                        time: "2021-2021",
                        schoolname: "Internet School",
                        major: "Computer Sciense",
                    },
                },
                {
                    id: uniqid(),
                    text: {
                        time: "2020-2020",
                        schoolname: "Reality School",
                        major: "Living",
                    },
                },
            ],
            skills: [
                { text: "Coding", id: uniqid() },
                { text: "Reading", id: uniqid() },
            ],
        };
    }

    onCareerDelClick(theid) {
        let newCa = this.state.career.filter((obj) => obj.id !== theid);
        this.setState({
            career: newCa,
        });
    }

    onSkillDelClick(theid) {
        let newSkills = this.state.skills.filter((obj) => obj.id !== theid);
        this.setState({
            skills: newSkills,
        });
    }

    onEduDelClick(theid) {
        let newEdus = this.state.education.filter((obj) => obj.id !== theid);
        this.setState({
            education: newEdus,
        });
    }

    render() {
        return (
            <div>
                <h1>CV Genarator</h1>
                <Information info={this.state.information} />
                <Summary summary={this.state.summary} />
                <Career
                    career={this.state.career}
                    onCareerDelClick={(i) => this.onCareerDelClick(i)}
                />
                <Education
                    education={this.state.education}
                    onEduDelClick={(i) => this.onEduDelClick(i)}
                />
                <Skill
                    skills={this.state.skills}
                    onSkillAddClick={(i) => this.onSkillAddClick(i)}
                    onSkillDelClick={(i) => this.onSkillDelClick(i)}
                />
            </div>
        );
    }
}

export default App;
