function App() {
  // String
  const name = "Saikrishna";

  // Number
  const age = 21;

  // Boolean
  const isStudent = true;

  // Array
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  // Object
  const user = {
    username: "Sai",
    city: "Warangal",
    isVerified: true,
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      {/* STRING */}
      <h2>String: {name}</h2>

      {/* NUMBER */}
      <p>Number: {age}</p>

      {/* BOOLEAN */}
      <p>Boolean: {isStudent ? "Student" : "Not a Student"}</p>

      {/* ARRAY */}
      <h3>Array (Skills):</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* OBJECT */}
      <h3>Object (User Info):</h3>
      <p>Name: {user.username}</p>
      <p>City: {user.city}</p>
      <p>Status: {user.isVerified ? "Verified" : "Not Verified"}</p>

      <hr />

      {/* BONUS: Combine All */}
      <h2>Combined JSX Example</h2>
      <p>
        Hello {name}, you are {age} years old, living in {user.city}.
      </p>
      <p>
        Skills count: {skills.length}
      </p>
      <p>
        Profile: {user.isVerified ? "Verified User" : "Guest"}
      </p>
    </div>
  );
}

export default App;
