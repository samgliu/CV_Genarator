import React, { useState } from 'react';
import Information from './components/Information';
import Summary from './components/Summary';
import Career from './components/Career';
import Education from './components/Education';
import Skill from './components/Skill';
import './styles/index.css';
import uniqid from 'uniqid';
import Line from './components/Line';

const App = () => {
    const [state, setState] = useState({
        addingStatus: {
            information: false,
            summary: false,
            career: false,
            education: false,
            skills: false,
        },
        information: {
            firstname: 'John',
            lastname: 'Doe',
            phone: '123-456-7890',
            email: 'email@test.com',
        },

        summary: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        career: [
            {
                id: uniqid(),
                text: {
                    time: '2020-2021',
                    companyname: 'Some Company Name',
                    position: 'Software Engineer',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                editing: false,
            },
            {
                id: uniqid(),
                text: {
                    time: '2019-2020',
                    companyname: 'Other Company Name',
                    position: 'Other Software Engineer',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                editing: false,
            },
        ],
        education: [
            {
                id: uniqid(),
                text: {
                    time: '2021-2021',
                    schoolname: 'Internet School',
                    major: 'Computer Science',
                },
                editing: false,
            },
            {
                id: uniqid(),
                text: {
                    time: '2020-2020',
                    schoolname: 'Reality School',
                    major: 'Living',
                },
                editing: false,
            },
        ],
        skills: [
            { text: 'Coding', id: uniqid(), editing: false },
            { text: 'Reading', id: uniqid(), editing: false },
        ],
    });

    const saveInfo = (fn, ln, phone, email) => {
        let newIn = state.information;
        newIn.firstname = fn;
        newIn.lastname = ln;
        newIn.phone = phone;
        newIn.email = email;
        setState({
            ...state,
            information: newIn,
        });
        dodgeAddingStatus('information');
    };

    const saveSummary = (input) => {
        let newSu = state.summary;
        newSu.text = input;
        setState({
            ...state,
            summary: newSu,
        });
        dodgeAddingStatus('summary');
    };

    const onCareerDelClick = (theid) => {
        let newCa = state.career.filter((obj) => obj.id !== theid);
        setState({
            ...state,
            career: newCa,
        });
    };

    const onSkillAddClick = (theid, input) => {
        let newSkills = state.skills;
        newSkills.push({
            text: input,
            id: theid,
            editing: false,
        });
        setState({
            ...state,
            skills: newSkills,
        });
    };

    const onEduAddClick = (theid, time, school, major) => {
        let newEdus = state.education;
        newEdus.push({
            id: theid,
            text: {
                time: time,
                schoolname: school,
                major: major,
            },
            editing: false,
        });
        setState({
            ...state,
            education: newEdus,
        });
    };

    const onCarAddClick = (theid, time, cname, pos, des) => {
        let newCars = state.career;

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
        setState({
            ...state,
            career: newCars,
        });
    };

    const onSkillEditClick = (theid) => {
        dodgeSkillEdition(theid);
    };

    const onEduEditClick = (theid) => {
        dodgeEduEdition(theid);
    };

    const onCarEditClick = (theid) => {
        dodgeCarEdition(theid);
    };

    const dodgeCarEdition = (theid) => {
        let newCars = state.career;
        newCars.forEach((car) => {
            if (car.id === theid) {
                if (car.editing) {
                    car.editing = false;
                } else {
                    car.editing = true;
                }
            }
        });
        setState({
            ...state,
            career: newCars,
        });
    };

    const dodgeEduEdition = (theid) => {
        let newEdus = state.education;
        newEdus.forEach((edu) => {
            if (edu.id === theid) {
                if (edu.editing) {
                    edu.editing = false;
                } else {
                    edu.editing = true;
                }
            }
        });
        setState({
            ...state,
            education: newEdus,
        });
    };

    const saveSkillEdition = (theid, val) => {
        let newSkills = state.skills;
        newSkills.forEach((skill) => {
            if (skill.id === theid) {
                skill.text = val;
            }
        });
        setState({
            ...state,
            skills: newSkills,
        });
        dodgeSkillEdition(theid);
    };

    const saveCarEdition = (theid, time, cname, pos, des) => {
        let newCars = state.career;
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
        setState({
            ...state,
            career: newCars,
        });
        dodgeSkillEdition(theid);
    };

    const saveEduEdition = (theid, time, school, major) => {
        let newEdus = state.education;
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
        setState({
            ...state,
            education: newEdus,
        });
        dodgeSkillEdition(theid);
    };

    const dodgeSkillEdition = (theid) => {
        let newSkills = state.skills;
        newSkills.forEach((skill) => {
            if (skill.id === theid) {
                if (skill.editing) {
                    skill.editing = false;
                } else {
                    skill.editing = true;
                }
            }
        });
        setState({
            ...state,
            skills: newSkills,
        });
    };

    const dodgeAddingStatus = (thefield) => {
        let newAddingStatus = state.addingStatus;
        if (state.addingStatus[thefield]) {
            newAddingStatus[thefield] = false;
        } else {
            newAddingStatus[thefield] = true;
        }
        setState({
            ...state,
            addingStatus: newAddingStatus,
        });
    };

    const onSkillDelClick = (theid) => {
        let newSkills = state.skills.filter((obj) => obj.id !== theid);
        setState({
            ...state,
            skills: newSkills,
        });
    };

    const onEduDelClick = (theid) => {
        let newEdus = state.education.filter((obj) => obj.id !== theid);
        setState({
            ...state,
            education: newEdus,
        });
    };

    return (
        <div>
            <h1>CV Generator</h1>
            <Line />
            <Information
                info={state.information}
                status={state.addingStatus}
                dodgeAddingStatus={(i) => dodgeAddingStatus(i)}
                saveInfo={(i, j, k, l) => saveInfo(i, j, k, l)}
            />
            <Line />
            <Summary
                summary={state.summary}
                status={state.addingStatus}
                dodgeAddingStatus={(i) => dodgeAddingStatus(i)}
                saveSummary={(i) => saveSummary(i)}
            />
            <Line />
            <Career
                cars={state.career}
                status={state.addingStatus}
                onCarAddClick={(i, t, c, p, d) => onCarAddClick(i, t, c, p, d)}
                onCarEditClick={(i) => onCarEditClick(i)}
                onCarDelClick={(i) => onCareerDelClick(i)}
                saveCarEdition={(i, t, c, p, d) =>
                    saveCarEdition(i, t, c, p, d)
                }
                dodgeAddingStatus={(i) => dodgeAddingStatus(i)}
            />
            <Line />
            <Education
                edus={state.education}
                status={state.addingStatus}
                onEduAddClick={(i, t, s, m) => onEduAddClick(i, t, s, m)}
                onEduEditClick={(i) => onEduEditClick(i)}
                onEduDelClick={(i) => onEduDelClick(i)}
                saveEduEdition={(i, t, s, m) => saveEduEdition(i, t, s, m)}
                dodgeAddingStatus={(i) => dodgeAddingStatus(i)}
            />
            <Line />
            <Skill
                skills={state.skills}
                status={state.addingStatus}
                onSkillAddClick={(i, v) => onSkillAddClick(i, v)}
                onSkillEditClick={(i) => onSkillEditClick(i)}
                onSkillDelClick={(i) => onSkillDelClick(i)}
                saveSkillEdition={(i, v) => saveSkillEdition(i, v)}
                dodgeAddingSkill={(i) => dodgeAddingStatus(i)}
            />
        </div>
    );
};

export default App;
