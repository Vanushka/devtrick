import * as actionTypes from './actionTypes';

export const setProjects = projects => {
  return {
    type: actionTypes.SET_PROJECTS,
    projects: projects,
  };
};

export const setCurrentProject = projectId => {
  return {
    type: actionTypes.SET_CURRENT_PROJECT,
    currentProjectId: projectId,
  };
};

export const fetchProjectsFailed = () => {
  return {
    type: actionTypes.FETCH_PROJECTS_FAILED,
  };
};
