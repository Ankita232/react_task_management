import React from 'react'

export default function TaskManagement() {
      const tasks = [
    { id: 1, title: "Task Title Here", project: "Project Name", status: "In Progress", assignee: "User Name" },
    { id: 2, title: "Task Title Here", project: "Project Name", status: "In Progress", assignee: "User Name" },
    { id: 3, title: "Task Title Here", project: "Project Name", status: "In Progress", assignee: "User Name" },
  ];

  return (
        <div className="app">
      <h1>Task Management System</h1>

      
      <div className="topbar">
        <div className="logo">🏠 Task Management System</div>
        <button className="logout-btn">Logout</button>
      </div>

      <div className="layout">
    
        <div className="sidebar">
          <p>🏠 Dashboard</p>
          <p>📁 Projects</p>
          <p>✅ Tasks</p>
          <p>📊 Reports</p>
        </div>

        <div className="content">
         
          <div className="cards">
            <div className="card">
              <h3>Total Projects</h3>
              <p>5</p>
            </div>
            <div className="card">
              <h3>Total Tasks</h3>
              <p>23</p>
            </div>
            <div className="card">
              <h3>Completed Tasks</h3>
              <p>12</p>
            </div>
            <div className="card">
              <h3>Pending Tasks</h3>
              <p>11</p>
            </div>
          </div>

         
          <h2>Tasks</h2>

          <div className="task-bar">
            <input type="text" placeholder="Search..." />
            <button>New Task</button>
          </div>

        
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Project</th>
                <th>Status</th>
                <th>Assignee</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.project}</td>
                  <td>
                    <span className="status">{item.status}</span>
                  </td>
                  <td>{item.assignee}</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        
          <div className="pagination">
            <button>{"<< Previous"}</button>
            <button>{"Next >>"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

