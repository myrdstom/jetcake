import React from 'react';

export default function Login(props) {
    return (
        <div>
            <div className="auth__grid">
                <div className="authentication__aside">
                    <div className="authentication__container">
                        <h1>Welcome back</h1>
                        <div className="auth__action">Sign In</div>
                        <br />
                        <form noValidate onSubmit={props.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    name="email"
                                    placeholder="Enter email"
                                    value={props.email}
                                    onChange={props.onChange}
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    name="password"
                                    placeholder="Password"
                                    value={props.password}
                                    onChange={props.onChange}
                                    required
                                />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary btn-block mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
