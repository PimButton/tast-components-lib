// Components==============
import React from "react";
import "./Layout.scss";
// =========================

type Props = {
  authVisual: React.ReactNode;
  title: string | React.ReactNode;
  inputs: React.ReactNode;
  buttons: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  forgotPasswordFunc?: () => void;
};

export function Layout({
  authVisual,
  title,
  inputs,
  buttons,
  handleSubmit,
  forgotPasswordFunc,
}: Props) {
  return (
    <>
      <style type="text/css">
        @import url('https://use.typekit.net/mjl2cdr.css');
      </style>
      <div className="layout">
        <div className="left">{authVisual}</div>
        <div className="right ">
          <div className="content">
            <div className="title">
              {typeof title === "string" ? <h1>{title}</h1> : title}
            </div>
            <form onSubmit={handleSubmit}>
              <div
                className={`inputs ${
                  forgotPasswordFunc ? "with-forgot-password" : ""
                }`}
              >
                {inputs}{" "}
                {!!forgotPasswordFunc && (
                  <div className="forgot-password" onClick={forgotPasswordFunc}>
                    <p>Wachtwoord vergeten?</p>
                  </div>
                )}
              </div>
              <div className="buttons">{buttons}</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
