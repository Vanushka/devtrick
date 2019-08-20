import * as actionTypes from '../actions/actionTypes';
import { projects } from '../../projects';
const initialState = {
  projects: projects,
  currentProject: null,
  error: false,
};

const setProjects = (state, action) => {
  return {
    ...state,
    projects: action.projects,
  };
};

const setCurrentProject = (state, action) => {
  return {
    ...state,
    currentProject: state.projects.filter(
      project => project.id === action.currentProjectId,
    )[0],
  };
};

// prettier-ignore
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROJECTS:           return setProjects(state, action);
    case actionTypes.SET_CURRENT_PROJECT:    return setCurrentProject(state, action);
    case actionTypes.FETCH_PROJECTS_FAILED:  return { ...state, error: true };
    default: return state;
  }
};

export default reducer;
