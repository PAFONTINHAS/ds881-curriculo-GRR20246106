export interface Project{

    title:string;
    description:string;
    stacks: Stack[];
    status: 'LIVE' | 'LAB' 
    githubRepo?: string;
    githubVisibility: 'PRIVATE' | 'PUBLIC';
    websiteLink?: string;
}

interface Stack{
    tool: string;
}