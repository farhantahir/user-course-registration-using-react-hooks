export const USER_COURSE_OPTIONS = [
  {
    value: 1,
    label: "Technical Report Writing"
  },
  {
    value: 2,
    label: "English Literature"
  },
  { value: 3, label: "Computer Sciences" }
];

export const TECH_REPORT_SUBJECT_OPTIONS = [
  { label: "Short Reports", value: "short-reports" },
  { label: "Annual Reports", value: "annual-reports" },
  { label: "Presentations", value: "presentations" }
];

export const ENG_LIT_SUBJECT_OPTIONS = [
  {
    label: "Poetry",
    value: "poetry"
  },
  {
    label: "Short Stories",
    value: "short-stories"
  },
  {
    label: "Drama",
    value: "drama"
  }
];

export const COMP_SCI_SUBJECT_OPTIONS = [
  { label: "Web Development", value: "web-development" },
    {
      label: "Desktop Software Development",
      value: "desktop-software-development"
    },
    { label: "Research and Analysis", value: "research-analysis" }
];

export const SUBJECT_COURSE_OPTIONS_MAPPING = {
  1: TECH_REPORT_SUBJECT_OPTIONS,
  2: ENG_LIT_SUBJECT_OPTIONS,
  3: COMP_SCI_SUBJECT_OPTIONS
};
