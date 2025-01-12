/* eslint-disable no-extra-boolean-cast */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/reducers/authSlice";
import { useRouter } from "../../hooks/use-router";
import { useEffect } from "react";

// Validation schema
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();

  const { user, isLoading, isAuthenticated, accessToken } = useSelector(
    (state) => state.auth
  );

  const router = useRouter();

  useEffect(() => {
    if (!!accessToken && isAuthenticated && user?.is_staff === true) {
      router.replace("/");
    }
  }, [accessToken, isAuthenticated, router, user?.is_staff]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="page-wrapper full-page">
      <div className="page-content d-flex align-items-center justify-content-center">
        <div className="row w-100 mx-0 auth-page">
          <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
            <div className="card">
              <div className="row">
                <div className="col-md-5 pe-md-0">
                  <div className="auth-side-wrapper"></div>
                </div>
                <div className="col-md-7 ps-md-0">
                  <div className="auth-form-wrapper px-4 py-5">
                    <a href="#" className="nobleui-logo d-block mb-2">
                      MYSTIC<span> HIVE</span>
                    </a>
                    <h5 className="text-secondary fw-normal mb-4">
                      Welcome back! Log in to your account.
                    </h5>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="forms-sample"
                    >
                      <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          id="userEmail"
                          placeholder="Email"
                          {...register("email")}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="userPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className={`form-control ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          id="userPassword"
                          autoComplete="current-password"
                          placeholder="Password"
                          {...register("password")}
                        />
                        {errors.password && (
                          <div className="invalid-feedback">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="authCheck"
                          {...register("rememberMe")}
                        />
                        <label className="form-check-label" htmlFor="authCheck">
                          Remember me
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary my-3 me-2 mb-md-0 text-white w-100"
                        disabled={isSubmitting || isLoading}
                      >
                        {(isSubmitting || isLoading) && (
                          <span
                            className="spinner-border spinner-border-sm mx-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        )}

                        {isSubmitting || isLoading ? "Logging In" : "Login"}
                      </button>
                      {/* <a
                        href="register.html"
                        className="d-block mt-3 text-secondary"
                      >
                        Forgot Password?
                      </a> */}
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
