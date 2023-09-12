import exp from "constants";

export interface SalaryComponent {
    title: string;
    levels: SalaryComponentLevel[];
}

export interface SalaryComponentLevel {
    level: number;
    title: string;
    criteria: string[];
}

export const hoursComponent: SalaryComponent = {
    title: 'Hours',
    levels: [],
}

export const practicalExperienceComponent: SalaryComponent = {
    title: 'Practical experience',
    levels: [
        {
            level: 0,
            title: 'No experience',
            criteria: [
                'No project experience',
                'Orientation value: 0 years of experience'
            ]
        },
        {
            level: 1,
            title: 'Project experience',
            criteria: [
                'First projects implemented on own, e.g. university projects or private projects',
                'Solid experience in one technology',
                'Orientation value: 1 year of experience'
            ]
        },
        {
            level: 2,
            title: 'Team experience',
            criteria: [
                'Several own projects implemented, some of them in a team',
                'Solid experience in several technologies or expert in one technology',
                'Orientation: 2 years of experience or 1 year at SelectCode'
            ]
        },
        {
            level: 3,
            title: 'Fullstack Dev',
            criteria: [
                'Expert in multiple technologies',
                'Can easily learn unfamiliar topics & technologies',
                'Has understanding / experience in project management & customer communication',
                'Can design simple system architectures',
                'Can debug & fix cross-component bugs',
                'Can be deployed as a fullstack dev in our projects',
                'Orientation value: 4 years of experience or 3 years at SelectCode'
            ]
        },
        {
            level: 4,
            title: 'Architect / Project Manager',
            criteria: [
                'Advanced knowledge such as communication & interrelationships of services',
                'Can make strategic decisions for projects - both technically and commercially',
                'Can lead a team',
                'Can work as an architect / project manager on our projects',
                'Orientation value: 6 years of experience or 5 years at SelectCode'
            ]
        },
        {
            level: 5,
            title: 'Tech Lead',
            criteria: [
                'Able to design complete enterprise architectures and implement components'
            ]
        }
    ]
};

export const knowledgeComponent: SalaryComponent = {
    title: 'Knowledge',
    levels: [
        {
            level: 0,
            title: 'No knowledge',
            criteria: []
        },
        {
            level: 1,
            title: 'Initial Knowledge',
            criteria: [
                'Computer science baccalaureate or first introductory lectures',
                'Orientation value: Beginning of studies'
            ]
        },
        {
            level: 2,
            title: 'Basic knowledge',
            criteria: [
                'Knows basic concepts & ways of working, e.g.agile working / scrum, roles in the team, merge requests',
                'Has basic knowledge of topics in software engineering, e.g. algorithms & data structures, operating systems, databases',
                'Orientation value: Currently in Bachelor'
            ]
        },
        {
            level: 3,
            title: 'Advanced knowledge',
            criteria: [
                'Knows advanced concepts & processes in software engineering, e.g. networking, IT security, software quality',
                'Is an expert in a tech area (e.g., backend, web front-end, app, infrastructure, machine learning, computer vision)',
                'Orientation value: completed bachelor\'s degree, currently in master\'s program'
            ]
        },
        {
            level: 4,
            title: 'Expert knowledge',
            criteria: [
                'Deeper knowledge in areas important to SelectCode: MVP development, product development, cloud infrastructure, code quality, team structures.',
                'Is an expert in multiple tech areas (e.g., backend, web front-end, app, infrastructure, machine learning, computer vision)',
                'Actively educates himself/herself with blog articles / books / events and shares knowledge within the team',
                'Ability to explain complex technical concepts',
                'Orientation value: completed master\'s degree'
            ],
        },
        {
            level: 5,
            title: 'Expert & big picture view',
            criteria: [
                'Has an overview of the IT industry',
                'Knows about trends in the IT industry and among competitors'
            ]
        },
    ]
};

export const responsibilityComponent: SalaryComponent = {
    title: 'Responsibility',
    levels: [
        {
            level: 0,
            title: 'No responsibility',
            criteria: [
                'Works in a team without project responsibility'
            ]
        },
        {
            level: 1,
            title: 'Partial project manager',
            criteria: [
                'Responsible for technical component in a project (e.g. is the tech lead of the backend of a project)',
                'Does code reviews',
                'OR: Deputy S Project Manager',
            ]
        },
        {
            level: 2,
            title: 'S Project manager / Division head without team',
            criteria: [
                'S Project Manager: Responsible for small customer project with up to 15k annual revenue',
                'Deputy M Project Manager',
                'OR: Responsible for an internal division in the company without team'
            ]
        },
        {
            level: 3,
            title: 'M Project Manager / Division head with Team',
            criteria: [
                'M Project Manager: Responsible for medium sized customer project with up to 100k annual revenue',
                'Deputy L Project Manager',
                'OR: Responsible for an internal division in the company with a team'
            ]
        },
        {
            level: 4,
            title: 'L Project Manager',
            criteria: [
                'L Project Manager: Responsible for large customer project with up to 500k annual revenue'
            ]
        },
        {
            level: 5,
            title: 'Managing Director',
            criteria: [
                'Responsible for the entire company with up to 1 million annual turnover'
            ]
        }
    ]
};