import React, { Component } from "react";
import Information from "./components/Information";
import Summary from "./components/Summary";
import Career from "./components/Career";
import Education from "./components/Education";
import Skill from "./components/Skill";
import "./styles/index.css";
import uniqid from "uniqid";
import Line from "./components/Line";
import { View } from "react-native";

class App extends Component {
    constructor() {
        super();

        this.state = {
            addingStatus: {
                information: false,
                summary: false,
                career: false,
                education: false,
                skills: false,
            },
            information: {
                firstname: "Jone",
                lastname: "Doe",
                phone: "123-456-7890",
                email: "email@test.com",
            },

            summary: {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
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
                    editing: false,
                },
                {
                    id: uniqid(),
                    text: {
                        time: "2019-2020",
                        companyname: "Other Company Name",
                        position: "Other Software Engineer",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    },
                    editing: false,
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
                    editing: false,
                },
                {
                    id: uniqid(),
                    text: {
                        time: "2020-2020",
                        schoolname: "Reality School",
                        major: "Living",
                    },
                    editing: false,
                },
            ],
            skills: [
                { text: "Coding", id: uniqid(), editing: false },
                { text: "Reading", id: uniqid(), editing: false },
            ],
        };
    }

    saveInfo(fn, ln, phone, email) {
        let newIn = this.state.information;
        newIn.firstname = fn;
        newIn.lastname = ln;
        newIn.phone = phone;
        newIn.email = email;
        this.setState({
            information: newIn,
        });
        this.dodgeAddingStatus("information");
    }

    saveSummary(input) {
        let newSu = this.state.summary;
        newSu.text = input;
        this.setState({
            summary: newSu,
        });
        this.dodgeAddingStatus("summary");
    }

    onCareerDelClick(theid) {
        let newCa = this.state.career.filter((obj) => obj.id !== theid);
        this.setState({
            career: newCa,
        });
    }

    onSkillAddClick(theid, input) {
        let newSkills = this.state.skills;
        newSkills.push({
            text: input,
            id: theid,
            editing: false,
        });
        this.setState({
            skills: newSkills,
        });
    }

    onEduAddClick(theid, time, school, major) {
        let newEdus = this.state.education;
        newEdus.push({
            id: theid,
            text: {
                time: time,
                schoolname: school,
                major: major,
            },
            editing: false,
        });
        this.setState({
            education: newEdus,
        });
    }

    onCarAddClick(theid, time, cname, pos, des) {
        let newCars = this.state.career;
        newCars.push({
            id: theid,
            text: {
                time: time,
                companyname: cname,
                position: pos,
                description: des,
            },
            editing: false,
        });
        this.setState({
            education: newCars,
        });
    }

    onSkillEditClick(theid) {
        this.dodgeSkillEdition(theid);
    }

    onEduEditClick(theid) {
        this.dodgeEduEdition(theid);
    }

    onCarEditClick(theid) {
        this.dodgeCarEdition(theid);
    }

    dodgeCarEdition(theid) {
        let newCars = this.state.career;
        newCars.forEach((car) => {
            if (car.id === theid) {
                if (car.editing) {
                    car.editing = false;
                } else {
                    car.editing = true;
                }
            }
        });
        this.setState({
            education: newCars,
        });
    }

    dodgeEduEdition(theid) {
        let newEdus = this.state.education;
        newEdus.forEach((edu) => {
            if (edu.id === theid) {
                if (edu.editing) {
                    edu.editing = false;
                } else {
                    edu.editing = true;
                }
            }
        });
        this.setState({
            education: newEdus,
        });
    }

    saveSkillEdition(theid, val) {
        let newSkills = this.state.skills;
        newSkills.forEach((skill) => {
            if (skill.id === theid) {
                skill.text = val;
            }
        });
        this.setState({
            skills: newSkills,
        });
        this.dodgeSkillEdition(theid);
    }

    saveCarEdition(theid, time, cname, pos, des) {
        let newCars = this.state.career;
        newCars.forEach((car) => {
            if (car.id === theid) {
                car.id = theid;
                car.text = {
                    time: time,
                    companyname: cname,
                    position: pos,
                    description: des,
                };
                car.editing = false;
            }
        });
        this.setState({
            education: newCars,
        });
        this.dodgeSkillEdition(theid);
    }
    saveEduEdition(theid, time, school, major) {
        let newEdus = this.state.education;
        newEdus.forEach((edu) => {
            if (edu.id === theid) {
                edu.id = theid;
                edu.text = {
                    time: time,
                    schoolname: school,
                    major: major,
                };
                edu.editing = false;
            }
        });
        this.setState({
            education: newEdus,
        });
        this.dodgeSkillEdition(theid);
    }

    dodgeSkillEdition(theid) {
        let newSkills = this.state.skills;
        newSkills.forEach((skill) => {
            if (skill.id === theid) {
                if (skill.editing) {
                    skill.editing = false;
                } else {
                    skill.editing = true;
                }
            }
        });
        this.setState({
            skills: newSkills,
        });
    }

    dodgeAddingStatus(thefield) {
        let newAddingStatus = this.state.addingStatus;
        if (this.state.addingStatus[thefield]) {
            newAddingStatus[thefield] = false;
        } else {
            newAddingStatus[thefield] = true;
        }
        this.setState({
            addingStatus: newAddingStatus,
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
                <Line />
                <Information
                    info={this.state.information}
                    status={this.state.addingStatus}
                    dodgeAddingStatus={(i) => this.dodgeAddingStatus(i)}
                    saveInfo={(i, j, k, l) => this.saveInfo(i, j, k, l)}
                />
                <Line />
                <Summary
                    summary={this.state.summary}
                    status={this.state.addingStatus}
                    dodgeAddingStatus={(i) => this.dodgeAddingStatus(i)}
                    saveSummary={(i) => this.saveSummary(i)}
                />
                <Line />
                <Career
                    cars={this.state.career}
                    status={this.state.addingStatus}
                    onCarAddClick={(i, t, c, p, d) =>
                        this.onCarAddClick(i, t, c, p, d)
                    }
                    onCarEditClick={(i) => this.onCarEditClick(i)}
                    onCarDelClick={(i) => this.onCareerDelClick(i)}
                    saveCarEdition={(i, t, c, p, d) =>
                        this.saveCarEdition(i, t, c, p, d)
                    }
                    dodgeAddingStatus={(i) => this.dodgeAddingStatus(i)}
                />
                <Line />
                <Education
                    edus={this.state.education}
                    status={this.state.addingStatus}
                    onEduAddClick={(i, t, s, m) =>
                        this.onEduAddClick(i, t, s, m)
                    }
                    onEduEditClick={(i) => this.onEduEditClick(i)}
                    onEduDelClick={(i) => this.onEduDelClick(i)}
                    saveEduEdition={(i, t, s, m) =>
                        this.saveEduEdition(i, t, s, m)
                    }
                    dodgeAddingStatus={(i) => this.dodgeAddingStatus(i)}
                />
                <Line />
                <Skill
                    skills={this.state.skills}
                    status={this.state.addingStatus}
                    onSkillAddClick={(i, v) => this.onSkillAddClick(i, v)}
                    onSkillEditClick={(i) => this.onSkillEditClick(i)}
                    onSkillDelClick={(i) => this.onSkillDelClick(i)}
                    saveSkillEdition={(i, v) => this.saveSkillEdition(i, v)}
                    dodgeAddingSkill={(i) => this.dodgeAddingStatus(i)}
                />
            </div>
        );
    }
}

export default App;
