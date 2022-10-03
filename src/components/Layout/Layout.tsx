// Components==============
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const [absolute, setAbsolute] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      const scrollHeight = scrollRef.current?.clientHeight || 0;
      const contentHeight = contentRef.current?.clientHeight || 0;
      const descriptionHeight = descriptionRef.current?.clientHeight || 0;
      const margin = 175;

      if (scrollHeight - contentHeight - descriptionHeight - margin < 0)
        return setAbsolute(false);
      setAbsolute(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <style type="text/css">
        @import url('https://use.typekit.net/mjl2cdr.css');
      </style>
      <div className="layout">
        <div className="left">{authVisual}</div>
        <div className="right " ref={scrollRef}>
          <div
            className="content"
            ref={contentRef}
            style={{ transform: absolute ? "translateY(-2rem)" : "" }}
          >
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
          <p
            className="tast-cloud-description"
            ref={descriptionRef}
            style={{
              position: absolute ? "absolute" : "initial",
              marginTop: absolute ? 0 : "3rem",
            }}
          >
            {lang === "nl"
              ? "De Tast.Cloud is een cloudservice waarmee je met één account laagdrempelig, veilig en gebruiksvriendelijk kunt werken met de digitale omgevingen van Groow, Klik, Unblok en Groow Business."
              : "The Tast.Cloud is a clouds service with which you can easily, safely and user-friendly work with the digital environments of Groow, Klik, Unblok and Groow Business with one account."}
          </p>
        </div>
      </div>
    </>
  );
}
