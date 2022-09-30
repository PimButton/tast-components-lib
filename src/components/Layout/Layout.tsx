// Components==============
import React from "react";
import "./Layout.scss";
// =========================

type Props = {
  authVisual: React.ReactNode;
  title: string;
  inputs: React.ReactNode;
  buttons: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  forgotPasswordFunc?: () => void;
  MakeAccountFunc?: () => void;
  color?: string;
  lang?: "nl" | "en";
};

export function Layout({
  authVisual,
  title,
  inputs,
  buttons,
  handleSubmit,
  forgotPasswordFunc,
  MakeAccountFunc,
  color,
  lang = "nl",
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
              <h1>{title}</h1>
              {!!MakeAccountFunc && (
                <div onClick={MakeAccountFunc}>
                  {lang === "nl" ? (
                    <p style={{ color }}>
                      <span>of</span> maak gratis een account aan
                    </p>
                  ) : (
                    <p style={{ color }}>
                      <span>Or</span> make a free account
                    </p>
                  )}
                </div>
              )}
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
                    {lang === "nl" ? (
                      <p>Wachtwoord vergeten?</p>
                    ) : (
                      <p>Forgot password?</p>
                    )}
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
