export const Login = () => {
  return (
    <div className="container">
      <form action="http://localhost:3000/" className="log-form">
        <h1 className="main_text">Log in</h1>
        <label htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="name"
          name="name"
          id="name"
          placeholder="Name"
        />
        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </form>
    </div>
  );
}