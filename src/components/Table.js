import "./componentStyles.css";

const Table = ({ data }) => {
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          <RenderTableData data={data} />
        ) : (
          <tr>
            <td>No Student Data Avaialble</td>
            <td>No Class Data Avaialble</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const RenderTableData = ({ data }) => {
  return (
    <>
      {data.map((student, index) => (
        <tr key={index}>
          <td>{student.name}</td>
          <td>{student.course}</td>
        </tr>
      ))}
    </>
  );
};

export default Table;
