import Table from "../components/Table";

const data = [
  {
    name: "Abdulaziz Abdulaziz",
    course: "Water Resources and Environmental Engineering",
  },
  { name: "Albert Einstein", course: "Physics" },
  { name: "John Doe", course: "Estate Managment" },
  { name: "Sigismund Freud", course: "Neurology" },
  { name: "Leonhard Euler", course: "Mathematics" },
  { name: "Ben Carson", course: "Neurosurgery" },
];

export default {
  title: "Table Story",
  component: Table,
};

export function SampleTable() {
  return <Table data={null} />;
}

export function ShowStudentData() {
  return <Table data={data} />;
}
