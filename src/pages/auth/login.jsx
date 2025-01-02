import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="page-wrapper full-page">
      <div className="page-content d-flex align-items-center justify-content-center">
        <div className="row w-100 mx-0 auth-page">
          <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
            <div className="card">
              <div className="row">
                <div className="col-md-4 pe-md-0">
                  <div className="auth-side-wrapper"></div>
                </div>
                <div className="col-md-8 ps-md-0">
                  <div className="auth-form-wrapper px-4 py-5">
                    <a href="#" className="nobleui-logo d-block mb-2">
                      Noble<span>UI</span>
                    </a>
                    <h5 className="text-secondary fw-normal mb-4">
                      Welcome back! Log in to your account.
                    </h5>
                    <form className="forms-sample">
                      <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="userEmail"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="userPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="userPassword"
                          autoComplete="current-password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="authCheck"
                        />
                        <label className="form-check-label" htmlFor="authCheck">
                          Remember me
                        </label>
                      </div>
                      <div>
                        <Link
                          to="/"
                          className="btn btn-primary my-3 me-2  mb-md-0 text-white w-100"
                        >
                          Login
                        </Link>
                      </div>
                      <a
                        href="register.html"
                        className="d-block mt-3 text-secondary"
                      >
                        Forgot Password ?
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
